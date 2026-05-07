let selectedName = "";

function generateNames() {

  let name = document.getElementById("nameInput").value;

  // 🔥 Empty check
  if (name === "") {
    alert("Pehle name toh likho 🖊️");
    return;
  }

  let styles = [

    // 🔥 Normal Stylish
    `🔥 ${name} 🔥`,
    `꧁☬ ${name} ☬꧂`,
    `⚡ ${name} ⚡`,
    `💎 ${name} 💎`,
    `👑 ${name} 👑`,
    `★彡 ${name} 彡★`,
    `☠ ${name} ☠`,
    `🌸 ${name} 🌸`,
    `『${name}』`,
    `♡ ${name} ♡`,
    `😈 ${name} 😈`,
    `💫 ${name} 💫`,
    `🎭 ${name} 🎭`,
    `🦋 ${name} 🦋`,
    `✨ ${name} ✨`,
    `☯ ${name} ☯`,
    `♛ ${name} ♛`,
    `⚔ ${name} ⚔`,
    `☁ ${name} ☁`,
    `🎧 ${name} 🎧`,
    
    //👌Best Stylish Designs
    `🔥 ${name} Gaming 🔥`,
    `👑 Official ${name} 👑`,
    `⚡ ${name} YT ⚡`,
    `💀 ${name} FF 💀`,
    `🌸 Cute ${name} 🌸`,

    // 🔥 Bold / Fancy Fonts
    `𝗠𝗿 ${name} 𝗞𝗶𝗻𝗴`,
    `𝐌𝐫 ${name} 𝐁𝐨𝐬𝐬`,
    `𝙈𝙧 ${name} 𝙎𝙩𝙖𝙧`,
    `𝕸𝖗 ${name} 𝕭𝖑𝖆𝖈𝖐`,
    `𝓜𝓻 ${name} 𝓚𝓲𝓷𝓰`,
    `𝘔𝘳 ${name} 𝘍𝘪𝘳𝘦`,
    `𝐌𝐫 ${name} 𝐃𝐚𝐫𝐤`,
    `𝑴𝒓 ${name} 𝑩𝒐𝒍𝒅`,
    `𝓜𝓻 ${name} 𝓕𝓪𝓷𝓬𝔂`,
    `𝙈𝙧 ${name} 𝙍𝙤𝙮𝙖𝙡`,

    // 🔥 Creative Designs
    `◥꧁ ${name} ꧂◤`,
    `༒ ${name} ༒`,
    `☬ ${name} ☬`,
    `꧁ ${name} ꧂`,
    `ミ★ ${name} ★彡`,
    `๖ۣۜ ${name}`,
    `✿ ${name} ✿`,
    `♔ ${name} ♔`,
    `➳ ${name} ➳`,
    `◤ ${name} ◥`
  
    ];

  let result = document.getElementById("result");

  result.innerHTML = "";

  for (let i = 0; i < 3; i++) {

    let random = Math.floor(Math.random() * styles.length);

    let stylishName = styles[random];

    result.innerHTML += `
      <div class="name-box"
        onclick="selectName(this, '${stylishName}')">

        ${stylishName}

      </div>
    `;
  }
}

// 🔥 Select name
function selectName(element, name) {

  let boxes = document.querySelectorAll(".name-box");

  boxes.forEach(function(box) {
    box.style.backgroundColor = "";
  });

  element.style.backgroundColor = "gray";

  selectedName = name;
}

// 🔥 Copy selected
function copySelected() {

  if (selectedName === "") {
    alert("Pehle stylish name select karo 🙂");
    return;
  }

  navigator.clipboard.writeText(selectedName);

  alert("Copied: " + selectedName);
}