//promises 

const prs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});


const prs2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected");
  }, 2000);
});


//async

async function asyncFunction() {
  try {
    const result = await prs;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();
