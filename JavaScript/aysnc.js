async function val1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("val1");
        },1000);
    });
};

async function val2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`val2 ${str}`);
        },1000);
    });
};

async function test() {
    console.log("calling");
    const res = await val1();
    const res1 = await val2(str);
    console.log(res1);
}























