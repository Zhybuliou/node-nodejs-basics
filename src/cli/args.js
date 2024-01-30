const parseArgs = () => {
    const args = process.argv.slice(2)
    args.forEach((elem, index) => {
        if(elem.includes('--')){
            console.log(`${elem.slice(2)} is ${args[index + 1]}`)
        }
    });
};

parseArgs();
