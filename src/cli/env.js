const parseEnv = () => {
    const keys = Object.keys(process.env).filter((el) => el.includes('RSS_'))
    keys.forEach((el) => console.log(`${el}=${process.env[el]}`))
};

parseEnv();
