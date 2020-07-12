// Setup everything before developing SchoolNet

// 1. npm install
// 2. Setup links

const REACT_APPS = ['./znam', './zbor', './pilot'];

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const CLEANER_FOLDERS = ['cleaner', 'cleaner-link'];
const REACT_FRAME = path.join(__dirname, './reactframe');

// process all the arguments given when starting this module
let argsRaw = process.argv;
let args = {
    verbose: false,
    npmskip: false
};

for (let i = 0; i < argsRaw.length; ++i) {
    if (argsRaw[i].startsWith('-')) {
        let value = argsRaw[i+1];
        if (argsRaw[i+1] == 'true') value = true;
        else if (argsRaw[i+1] == 'false') value = false;

        args[argsRaw[i].toLowerCase().replace('-', '')] = value;
        i++;
    }
}

if (args.verbose) {
    console.log("React Frame is at: ", REACT_FRAME);
}

/**
 * Execute a command while printing the output of it
 * @param {String} command The command to execute
 * @param {Object} args Node JS Spawn object Arguments
 */
const exe = (command, args) => {
    return new Promise((resolve, reject) => {
        let process = spawn(command, args);

        process.stdout.on("data", data => {
            console.log(data.toString());
        });

        process.on("error", (err) => {
            console.log("Execution error: " + err);
            resolve();
        });

        process.on("close", () => {
            resolve();
        });
    });
}

const makeLinksReact = () => {
    // make links in the play directory
    let play = __dirname + '/play';
    let files = fs.readdirSync(play);
    for (let file of files) {
        if (args.verbose)
            console.log("Looking in: ", file);
        
        let exclude = false;
        for (let exc of CLEANER_FOLDERS) {
            if (file == exc) {
                exclude = true;
                break;
            }
        }

        if (exclude) continue;

        let fileInDirectory = path.join(play, file);
        if (fs.lstatSync(fileInDirectory).isDirectory()) {
            makeLink(fileInDirectory, REACT_FRAME);
            buildApp(fileInDirectory, file);
        }
    }

    // make links for the react apps
    for (let app of REACT_APPS) {
        let appPath = path.join(__dirname, app);
        makeLink(appPath, REACT_FRAME);
    }
}

/**
 * Create a symbolic link (NEEDS ADMINISTRATOR PRIVILEGES)
 * @param {String} location Where would this link be created?
 * @param {String} target To what does it point?
 */
const makeLink = (location, target) => {
    location = location.replace(/\\/g, '/');
    target = target.replace(/\\/g, '/');

    if (args.verbose) {
        console.log("Location: " + location);
        console.log("Target: " + target);
    }
    
    linkCommands += `New-Item -Path ${location}/node_modules -ItemType SymbolicLink -Value ${target}/node_modules \; `;
    fs.writeFileSync(path.join(location, './.env'), "SKIP_PREFLIGHT_CHECK=true");
}

let linkCommands = ''; // This is used to stack up multiple commands in one powershell line
const runLinkCommands = async () => {
    await exe(`powershell \"Start-Process powershell -ArgumentList '${linkCommands}' -Verb RunAs\"`, {
        shell: true
    });
}

const buildApp = (location, appName) => {
    console.log("Compiling typescript for " + appName);
    await exe('tsc', {
        cwd: location,
        shell: true
    });
}

const main = async () => {
    const options = {
        shell: true
    };

    console.log("Installing NPM packages...");
    console.log("This may not show anything in the console, but it's actually installing...");
    
    if (!args.npmskip) {
        await exe("npm install .", options);
        await exe("npm install .", { ...options, cwd: './reactframe'});
        await exe("npm install typescript -g");
    }

    fs.writeFileSync(path.join(__dirname, './reactframe/.env'), "SKIP_PREFLIGHT_CHECK=true");

    console.log("Making Symbolic links to the React Frame dependencies...");
    makeLinksReact();
    await runLinkCommands();
    console.log("All lights green!");

    process.exit();
}

main();