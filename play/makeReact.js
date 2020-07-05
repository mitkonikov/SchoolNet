const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { spawn } = require('child_process');

const UNDER_SCHOOLNET = true;

let dirs = ['src', 'server', 'public'];
let includeExt = ['js', 'html', 'config', 'ts', 'jsx', 'tsx', 'css', 'json', 'txt', 'md'];

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

const deleteFile = (path) => {
    try {
        fs.unlinkSync(path);
    } catch (err) {
        console.log("Error deleting file " + path + ":" + err);
    }
}

let copyFunctionCallback = (source, target, obj) => {
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

const delay = (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, milliseconds);
    })
}

const main = async () => {
    let npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';
    let npx = /^win/.test(process.platform) ? 'npx.cmd' : 'npx';

    console.log('\x1b[36m%s\x1b[0m', "This script installs react using create-react-app, ");
    console.log('\x1b[36m%s\x1b[0m', "but also cleans it up and installs Material-UI");

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
        author
    }

    console.log("Given parameters: ");
    console.log(obj);
    
    console.log('\x1b[36m%s\x1b[0m', "Building your app: " + short_name);

    fs.mkdirSync(__dirname + '/' + short_name);
    let options = { cwd: `./${short_name}/`, shell: true };

    await delay(1000);

    console.log("");
    console.log("-------------------------------");
    console.log('\x1b[36m%s\x1b[0m', "Creating React app...");
    console.log("-------------------------------");
    await exe('npx create-react-app .', options);
    deleteFile("./" + short_name + "/src/" + "logo.svg");
    
    if (!UNDER_SCHOOLNET) {
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

    console.log("");
    console.log("");
    console.log("");
    console.log('\x1b[36m%s\x1b[0m', "cd " + short_name + " and start developing!");
}

main();