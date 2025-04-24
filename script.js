function openModal(imageSrc, title, description) {
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("certificateModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

//tooltip text one by one visible animation
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".service-arrow").forEach((arrow) => {
//       arrow.addEventListener("click", function (event) {
//         event.stopPropagation(); // Prevent click from bubbling up
//         let tooltip = this.previousElementSibling;
        
//         // Hide other tooltips before opening the new one
//         document.querySelectorAll(".tooltip-container").forEach((t) => {
//           if (t !== tooltip) {
//             t.style.opacity = "0";
//             setTimeout(() => (t.style.display = "none"), 300);
//           }
//         });
  
//         // Toggle tooltip visibility
//         if (tooltip.style.display === "block") {
//           tooltip.style.opacity = "0";
//           setTimeout(() => (tooltip.style.display = "none"), 300);
//         } else {
//           tooltip.style.display = "block";
//           setTimeout(() => {
//             tooltip.style.opacity = "1";
//             let items = tooltip.querySelectorAll("li");
//             items.forEach((item, index) => {
//               setTimeout(() => {
//                 item.style.opacity = "1";
//                 item.style.transform = "translateY(0)";
//               }, index * 300);
//             });
//           }, 50);
//         }
//       });
//     });
  
//     // Close tooltip when clicking outside
//     document.addEventListener("click", function () {
//       document.querySelectorAll(".tooltip-container").forEach((tooltip) => {
//         tooltip.style.opacity = "0";
//         setTimeout(() => (tooltip.style.display = "none"), 300);
//       });
//     });
//   });



  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".service-arrow").forEach((arrow) => {
      arrow.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click bubbling
        let tooltip = this.previousElementSibling;
        let card = this.closest(".service-card");
  
        // Hide other tooltips before opening the new one
        document.querySelectorAll(".tooltip-container").forEach((t) => {
          if (t !== tooltip) {
            t.style.opacity = "0";
            setTimeout(() => (t.style.display = "none"), 300);
          }
        });
  
        // Toggle tooltip visibility
        if (tooltip.style.display === "block") {
          tooltip.style.opacity = "0";
          setTimeout(() => (tooltip.style.display = "none"), 300);
        } else {
          // Display tooltip
          tooltip.style.display = "block";
          setTimeout(() => (tooltip.style.opacity = "1"), 50);
  
          // Position tooltip based on available space
          let cardRect = card.getBoundingClientRect();
          let tooltipRect = tooltip.getBoundingClientRect();
          let windowWidth = window.innerWidth;
          let spaceRight = windowWidth - cardRect.right;
          let spaceLeft = cardRect.left;
          let spaceTop = cardRect.top;
          let spaceBottom = window.innerHeight - cardRect.bottom;
  
        //   if (spaceRight > tooltipRect.width) {
        //     // Place tooltip on the right
        //     tooltip.style.left = "100%";
        //     tooltip.style.top = "50%";
        //     tooltip.style.transform = "translateY(-50%)";
        //     tooltip.style.right = "auto";
        //   } else if (spaceLeft > tooltipRect.width) {
        //     // Place tooltip on the left
        //     tooltip.style.left = "-110%";
        //     tooltip.style.top = "50%";
        //     tooltip.style.transform = "translateY(-50%)";
        //   } else if (spaceBottom > tooltipRect.height) {
        //     // Place tooltip below
        //     tooltip.style.left = "50%";
        //     tooltip.style.top = "110%";
        //     tooltip.style.transform = "translateX(-50%)";
        //   } else {
        //     // Default: Place tooltip above
        //     tooltip.style.left = "50%";
        //     tooltip.style.top = "-110%";
        //     tooltip.style.transform = "translateX(-50%)";
        //   }
  
          // Animate list items one by one
          let items = tooltip.querySelectorAll("li");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, index * 300);
          });
        }
      });
    });
  
    // Close tooltip when clicking outside
    document.addEventListener("click", function () {
      document.querySelectorAll(".tooltip-container").forEach((tooltip) => {
        tooltip.style.opacity = "0";
        setTimeout(() => (tooltip.style.display = "none"), 300);
      });
    });
  
    // Close tooltip when clicking the close button
    document.querySelectorAll(".btn-close-tooltip").forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.stopPropagation();
        let tooltip = this.closest(".tooltip-container");
        tooltip.style.opacity = "0";
        setTimeout(() => (tooltip.style.display = "none"), 300);
      });
    });
  });
  
  

  /*projects*/
  function openProject(title, url) {
    document.getElementById("projectModalTitle").innerText = title;
    document.getElementById("projectFrame").src = url;
    changeFrameSize('xs'); // Default to Medium size
}

function changeFrameSize(size) {
    let iframe = document.getElementById("projectFrame");
    const sizes = {
        xs: "375px", // Extra Small (Phones)s
        sm: "576px", // Small (Phones)
        md: "768px", // Medium (Tablets)
        lg: "992px", // Large (Laptops)
        xl: "1200px" // Extra Large (Desktops)
    };

    iframe.style.width = sizes[size];

    // Highlight active tab
    let tabs = document.querySelectorAll("#deviceTabs .nav-link");
    tabs.forEach(tab => tab.classList.remove("active"));
    document.querySelector(`#deviceTabs .nav-link[onclick="changeFrameSize('${size}')"]`).classList.add("active");
}
  




