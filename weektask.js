const container = document.querySelector(".container");
let counter = 11;
let count;
let task = 1;

window.addEventListener("load", async () => {
    let query = document.location.search;
    let params = new URLSearchParams(query);

    let userId = params.get("userId");
    if (!userId) {
        console.error("User ID not provided in the query string.");
        return;
    }

    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos?userId=" + userId
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        if (data.length > 0) {
            count = data[data.length - 1].id;
        }
        data.forEach((user, index) => {
            createuser(user, index);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

const newRow1 = document.createElement("tr");
const tid1 = document.createElement("td");
tid1.className = "body";
tid1.innerHTML = "USER IDS";
const tid2 = document.createElement("td");
tid2.className = "body";
tid2.innerHTML = " IDS";
const ttitle = document.createElement("td");
ttitle.className = "body";
ttitle.innerHTML = "Title";
const tcomplete = document.createElement("td");
tcomplete.className = "body";
tcomplete.innerHTML = "Completion History";
const toption = document.createElement("td");
toption.className = "body";
toption.innerHTML = "Options";
newRow1.appendChild(tid1);
newRow1.appendChild(tid2);
newRow1.appendChild(ttitle);
newRow1.appendChild(tcomplete);
newRow1.appendChild(toption);
container.appendChild(newRow1);

function createuser(user, index) {
    const { userId, id, title, completed } = user;
    const userDiv = document.createElement("tr");

    userDiv.className = "user";
    if (index % 2 === 0) {
        userDiv.style.backgroundColor = "lightgray";
    } else {
        userDiv.style.backgroundColor = "white";
    }

    const usId = document.createElement("td");
    usId.innerHTML = userId;
    const Div = document.createElement("td");
    Div.innerHTML = id;
    const tt = document.createElement("td");
    tt.innerHTML = title;

    const complete = document.createElement("td");
    complete.innerHTML = completed;

    const btn = document.createElement("td");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.innerHTML = "add";
    btn2.innerHTML = "delete";
    btn.className = "new";
    btn1.addEventListener("click", () => {
        createuser({
            userId,
            id: ++count,
            title: "Something new",
            completed: false,
        });
        // Also ek trick batata hu
    });
    btn2.addEventListener("click", () => {
        container.removeChild(userDiv);
    });

    userDiv.appendChild(usId);
    userDiv.appendChild(Div);
    userDiv.appendChild(tt);
    userDiv.appendChild(complete);
    userDiv.appendChild(btn);
    btn.appendChild(btn1);
    btn.appendChild(btn2);
    container.appendChild(userDiv);
}
