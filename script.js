const last_mail =
  document.querySelector(".mails tbody") ?? document.querySelector(".mails");
for (let i = 0; i < 50; i++) {
  last_mail.insertAdjacentHTML(
    "beforeend",
    `
              <tr>
                  <td><input type="checkbox" /></td>
                  <td><img src="./assets/star.png" alt="star icon" /></td>
                  <td class="sender">John Doe</td>
                  <td>
                    <span class="topic">Topic</span>
                    <span class="text"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vero praesentium, accusantium eos aperiam ad, ea numquam ut
                      in consequatur dolorem dolore voluptas nemo. Numquam,
                      adipisci beatae? Sapiente ratione beatae fugiat!</span
                    >
                  </td>
                  <td class="date">28 feb</td>
              </tr>`,
  );
}

const button_hamburger = document.querySelector(
  ".nav-left-left > button:first-child",
);
const nav_left = document.querySelector(".nav-left");

button_hamburger.addEventListener("click", () => {
  nav_left.classList.toggle("hidden");
});

const main_checkbox = document.querySelector(".nav-top-mails > input");
const checkboxes = document.querySelectorAll(".mails input");

main_checkbox.addEventListener("click", () => {
  checkboxes.forEach((checkboxes) => {
    if (main_checkbox.checked == true) {
      checkboxes.checked = true;
    } else {
      checkboxes.checked = false;
    }
  });
});
