let input = document.querySelector(".txt-input");
let content = document.querySelector(".content");
let clear = document.getElementsByClassName(".clear");

let todos = [];

input.addEventListener("keydown", handleCommand);

function handleCommand(event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    input.value = "";
    content.innerHTML += `$ ${command}<br>`;
    executeCommand(command);
  }
}

function executeCommand(command) {
  switch (command) {
    case "help":
      content.innerHTML +=
        '<p class="dummy-txt">Available commands: <span class="cmd-txt">help</span>, <span class="cmd-txt">addToDo</span>, <span class="cmd-txt">removeToDo</span>, <span class="cmd-txt">listToDo</span>, <span class="cmd-txt">clear</span>, <span class="cmd-txt">aboutMe .</span></p><br>';
      break;
    case "addToDo":
      content.innerHTML += "Enter task: <br>";
      input.removeEventListener("keydown", handleCommand);
      input.addEventListener("keydown", handleAddTask);
      break;
    case "removeToDo":
      content.innerHTML += "Enter a task number to remove: <br>";
      input.removeEventListener("keydown", handleCommand);
      input.addEventListener("keydown", handleRemoveTask);
      break;
    case "listToDo":
      if (todos.length === 0) {
        content.innerHTML += "No tasks<br>";
      } else {
        for (let i = 0; i < todos.length; i++) {
          content.innerHTML += `<span class="listed-task">${i + 1}. ${
            todos[i]
          }</span><br>`;
        }
      }
      break;
    case "clear":
      setTimeout(function () {
        content.innerHTML = '<a id="clear"></a>';
        before = document.getElementById("clear");
      }, 1);
      break;
    case "Kru-Pornchai":
      let aboutMe = document.createElement("div");
      aboutMe.classList.add("about-me");
      aboutMe.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe);
      input.value = "";
      break;

      case "Kru-Tos":
      let aboutMe1 = document.createElement("div");
      aboutMe1.classList.add("about-me1");
      aboutMe1.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe2);
      input.value = "";
      break;

      case "Kru-Chawee":
      let aboutMe2 = document.createElement("div");
      aboutMe2.classList.add("about-me2");
      aboutMe2.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe2);
      input.value = "";
      break;

      case "Kru-Bobbe":
      let aboutMe3 = document.createElement("div");
      aboutMe3.classList.add("about-me3");
      aboutMe3.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe3);
      input.value = "";
      break;

      case "Kru-Tung":
      let aboutMe4 = document.createElement("div");
      aboutMe4.classList.add("about-me4");
      aboutMe4.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe4);
      input.value = "";
      break;

      case "Kru-Tun":
      let aboutMe5 = document.createElement("div");
      aboutMe5.classList.add("about-me5");
      aboutMe5.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe5);
      input.value = "";
      break;

      case "Kru-puy":
      let aboutMe6 = document.createElement("div");
      aboutMe6.classList.add("about-me6");
      aboutMe6.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe6);
      input.value = "";
      break;

      case "Kru-Robru":
      let aboutMe7 = document.createElement("div");
      aboutMe7.classList.add("about-me7");
      aboutMe7.innerHTML = `
            <div class="txtt">
              <p class="welcome-txt">คำอวยพรถึงคุณครูครับ<br><br>
                ขอให้คุณครูสุขภาพแข็งแรงอยุยืนยาวนะครับการเงิน
                <br>
                ด้านการเงินขอให้รวยแล้วรวยอีกมีความสุขกับชีวิตในทุกๆวัน
                <br>
                นะครับอยู่เป็นร่มร่มโพธิ์ร่มไทรให้เด็กห้องหุ่นต่อไป
                <br>
                นะครับ
                <br><br>
                คาถาสุขภาพแข็งแรง
                <br><br>
                สะหาวัสสะ ทัสสะนะสัมปะทายะ ตะยัสสุธัมมา
                <br>
                ชะหิตา ภะวันติ สักกายะทิฏฐิ วิจิกิจฉิตัญจะ
                <br>
                สีลัพพะตัง วาปิ ยะทัตถิ กิญจิ จะตูหะปาเยหิจะ
                <br> 
                วิปปะมุตโต ฉะ จาภิฐานานิ อะภัพโพ กาตุง
                <br>
                อิทัมปิ สังเฆ ระตะนัง ปะณีตัง เอเตนะ สัจเจนะ
                <br> 
                สุวัตถิ โหตุ
              </p>
            </div>
            `;
    

      content.appendChild(aboutMe7);
      input.value = "";
      break;
    
    default:
      content.innerHTML += `Unknown command: ${command}, for a list of commands type help.<br>`;
  }
}


function handleAddTask(event) {
  if (event.key === "Enter") {
    const task = input.value.trim();
    if (task !== "") {
      todos.push(task);
      content.innerHTML += `<span class="added-task">Task added: ${task}</span><br>`;
      input.value = "";
    }
    input.removeEventListener("keydown", handleAddTask);
    input.addEventListener("keydown", handleCommand);
  }
}

function handleRemoveTask(event) {
  if (event.key === "Enter") {
    const index = parseInt(input.value) - 1;
    if (isNaN(index) || index < 0 || index >= todos.length) {
      content.innerHTML += "Invalid task number<br>";
      input.value = "";
    } else {
      const task = todos[index];
      todos.splice(index, 1);
      content.innerHTML += `<span class="removed-task">Task removed: ${task}</span><br>`;
      input.value = "";
    }
    input.removeEventListener("keydown", handleRemoveTask);
    input.addEventListener("keydown", handleCommand);
  }
}
