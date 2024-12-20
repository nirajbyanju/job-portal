
    const notifications = document.querySelector(".notificationss"),
    buttonss = document.querySelectorAll(".buttonss .btnss");
  
    const toastDetails = {
      timer: 5000,
      success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast.',
      },
      error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is an error toast.',
      },
      warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
      },
      info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
      }
    }
  
    const removeToast = (toast) => {
      toast.children[0].classList.add("hide");
      if(toast.children[0].timeoutId) clearTimeout(toast.children[0].timeoutId);
      setTimeout(() => toast.remove(), 500);
    }
  
    const createToast = (id) => {
      const { icon, text } = toastDetails[id];
      const toast = document.createElement("li");
      toast.className = `toast ${id}`;
      toast.innerHTML = `<div class="column">
                             <i class="fa-solid ${icon}"></i>
                             <span>${text}</span>
                          </div>
                          <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
      notifications.appendChild(toast);
      toast.children[0].timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
    }
  
    buttonss.forEach(btn => {
      btn.addEventListener("click", () => createToast(btn.id));
    });