const LINK_TO_NODE_DEPENDENCIES = `${__dirname}/cleaner-link`;

const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { spawn } = require('child_process');

let dirs = ['front-src', 'server-src', 'src', 'public'];
let includeExt = ['js', 'html', 'config', 'ts', 'jsx', 'tsx', 'css', 'json', 'txt', 'md'];

// process all the arguments given when starting this module
let argsRaw = process.argv;
let args = {
    verbose: false,
    schoolnet: true,
    skipcheck: false
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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        })
    });
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
            if (args.verbose) console.log(data.toString());
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

const createEnvFile = (obj) => {
    if (args.skipcheck) {
        fs.writeFileSync(`${__dirname}/${obj.short_name}/.env`, 'SKIP_PREFLIGHT_CHECK=true');
    }
}

const deleteFile = (path) => {
    try {
        fs.unlinkSync(path);
    } catch (err) {
        console.log("Error deleting file " + path + ":" + err);
    }
}

let copyFunctionCallback = (source, target, obj) => {
    if (obj.createReactApp == 'cra' && source.includes('package.json')) return;

    if (fs.existsSync(path.dirname(target))) {
        fs.copyFileSync(source, target);
    } else {
        fs.mkdirSync(path.dirname(target));
        fs.copyFileSync(source, target);
    }
}

let inFileReplace = (source, target, obj) => {   
    let extensionTmp = source.split('.');
    let extension = extensionTmp[extensionTmp.length - 1].toLowerCase();

    let cool = false;
    for (let e of includeExt) {
        if (e == extension) {
            cool = true;
            break;
        }
    }

    if (!cool) return;

    if (extension == "json") {
        // Modify the package.json file
        if (extensionTmp[extensionTmp.length - 2].endsWith('package')) {
            let read = fs.readFileSync(source);
            let parsed = JSON.parse(read);
            parsed.homepage = '/' + obj.short_name;
            fs.writeFileSync(source, JSON.stringify(parsed));
            
            if (obj.createReactApp == 'cra')
                return;
        }
    }

    let read = fs.readFileSync(source).toString();

    for (let value in obj) {
        let exp = new RegExp("\{\{" + value + "\}\}", 'g');
        read = read.replace(exp, obj[value]);
    }

    fs.writeFileSync(source, read);
}

const RecursiveSync = (source, target, callback, obj) => {
    let files = [];

    if (fs.lstatSync(source).isDirectory()) {
        let temp = target.split('/');
        let dir = temp[temp.length - 1];

        temp = target.split('\\');
        let dir2 = temp[temp.length - 1];

        let cool = false;
        for (let d of dirs) {
            if (dir == d || dir2 == d) {
                cool = true;
                break;
            }
        }

        if (cool) {
            files = fs.readdirSync(source);
            files.forEach((file) => {
                let curSource = path.join(source, file);
                if (fs.lstatSync(curSource).isDirectory()) {
                    RecursiveSync(curSource, path.join(target, file), callback, obj);
                } else {
                    callback(curSource, path.join(target, file), obj);
                }
            } );
        }
    }
}

const getShortName = async () => {
    let short_name = await question("Short name of the app (development usage): ");

    if (short_name.includes(' ')) {
        console.log("App name can't contain spaces.");
        return getShortName();
    }

    return short_name;
}

const installOrLink = async () => {
    if (!(/^win/.test(process.platform))) {
        // TODO: Explain this when using verbose
        // This script doesn't support symbolic linking on platforms other than Windows.
        return 'cra';
    }

    console.log("There are two ways to install Clean React.");
    console.log("");
    console.log("The first is by using 'create-react-app' which will install all the dependencies in the folder.");
    console.log("And the second is by using a link to a node_modules folder which already contains all the dependencies.");
    console.log("The second option is used if there will be multiple react apps which all have the same dependencies.");
    console.log("This avoids duplication of the same dependencies and cuts down massivly on disk usage.")
    console.log("");
    let createReactApp = await question("Do you want to install with create-react-app or Link the dependencies [CRA/LINK]: ");
    createReactApp = createReactApp.toLowerCase();

    if (createReactApp == 'cra') {
        console.log('\x1b[36m%s\x1b[0m', "This script installs react using create-react-app, ");
        console.log('\x1b[36m%s\x1b[0m', "but also cleans it up and installs Material-UI");
    } else if (createReactApp == 'link') {
        console.log('\x1b[36m%s\x1b[0m', "It won't install any dependencies, it will just link them. ");
    } else {
        return installOrLink();
    }

    return createReactApp;
}

const delay = (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, milliseconds);
    })
}

/**
 * Create a symbolic link (NEEDS ADMINISTRATOR PRIVILEGES)
 * @param {String} location Where would this link be created?
 * @param {String} target To what does it point?
 */
const makeLink = async (location, target) => {
    await exe(`powershell \"Start-Process powershell -ArgumentList 'New-Item -Path ${location}/node_modules -ItemType SymbolicLink -Value ${target}/node_modules' -Verb RunAs\"`, {
        shell: true
    });
}

const main = async () => {
    let npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';
    let npx = /^win/.test(process.platform) ? 'npx.cmd' : 'npx';

    let createReactApp = await installOrLink();

    console.log("");
    console.log("We are building full documentation about it on GitHub.");
    console.log("");

    let name = await question("Name of the app (this is the beautiful long name): ");
    let short_name = await getShortName();

    console.log("You can change the theme color later, but it's easier to write it now!");
    let color = await question("Hex theme color (default: #44aed8): ");
    let text_color = await question("Hex text color (default: #ffffff): ");
    let theme_type = await question("Theme type (dark/light) (default: dark): ");

    if (color == "") color = "#44aed8";
    if (text_color == "") text_color = "#ffffff";

    if (theme_type != "dark" && theme_type != "light") {
        theme_type = "dark";
    }

    let description = await question("That's it, we promise... Quick description: ");
    let author = await question("Author: ");

    dirs.push(short_name);

    let obj = {
        name,
        short_name,
        color,
        text_color,
        theme_type,
        description,
        author,
        createReactApp
    }

    if (args.verbose) {
        console.log("Given parameters: ");
        console.log(obj);
    }
    
    console.log('\x1b[36m%s\x1b[0m', "Building your app: " + short_name);

    fs.mkdirSync(__dirname + '/' + short_name);
    let options = { cwd: `./${short_name}/`, shell: true };

    await delay(10);

    if (createReactApp == 'cra') {
        console.log("");
        console.log("-------------------------------");
        console.log('\x1b[36m%s\x1b[0m', "Creating React app...");
        console.log("-------------------------------");
        await exe('npx create-react-app .', options);
        deleteFile("./" + short_name + "/src/" + "logo.svg");
    }

    if (!args.schoolnet) {
        console.log("");
        console.log('\x1b[36m%s\x1b[0m', "-------------------------------");
        console.log('\x1b[36m%s\x1b[0m', "Installing Material UI...");
        console.log('\x1b[36m%s\x1b[0m', "-------------------------------");
        await exe('npm install @material-ui/core', options);

        console.log('\x1b[36m%s\x1b[0m', "Installing Material UI - Icons...");
        await exe('npm install @material-ui/icons', options);
        console.log('\x1b[36m%s\x1b[0m', "Installing Material UI - Lab...");
        await exe('npm install @material-ui/lab', options);
        console.log('\x1b[36m%s\x1b[0m', "Installing Sweetalert 2...");
        await exe('npm install sweetalert', options);
        
        console.log('\x1b[36m%s\x1b[0m', "---------------------------------");
    }

    await question("Press any key to clean the app...");

    RecursiveSync(__dirname + '/cleaner', __dirname + '/' + short_name, copyFunctionCallback, obj);

    RecursiveSync(
                    __dirname + '/' + short_name, 
                    __dirname + '/' + short_name, 
                    inFileReplace, obj
                );

    if (createReactApp == 'link') {
        // Install the main dependencies if they are not installed

        if (!fs.existsSync(`${__dirname}/cleaner-link/node_modules`)) {
            await exe('npm install .', {
                cwd: './cleaner-link/',
                shell: true
            });
        }

        await question("It may require administrative privileges to make the symbolic link. Press any key to continue.");
        let location = `${__dirname}/${short_name}`;
        let target = LINK_TO_NODE_DEPENDENCIES;

        await makeLink(location, target);
        createEnvFile(obj);
    }

    console.log("");
    console.log("");
    console.log("");
    console.log('\x1b[36m%s\x1b[0m', " > cd " + short_name + " and start developing!");
    console.log("");
    console.log("");

    process.exit();
}

main();