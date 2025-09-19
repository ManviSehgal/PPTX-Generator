 let currentStep = 1;
    const totalSteps = 4;


    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const nextLabel = nextBtn.querySelector(".next-label");

    function showStep(step) {
      // Hide all step content
      document.querySelectorAll(".process-content").forEach(el => el.classList.add("d-none"));
      document.getElementById(`step-${step}`).classList.remove("d-none");

      // Update active step circles: only current step gets 'active'
      document.querySelectorAll(".step").forEach((el, index) => {
        if (index === step - 1) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });

      // Hide/show process-bar-next-btn (navigation buttons)
      var navBar = document.querySelector('.process-bar-next-btn');
      if (navBar) {
        if (step === totalSteps) {
          navBar.style.display = 'none';
        } else {
          navBar.style.display = '';
        }
      }

      // Hide Previous button in Step 1
      if (step === 1) {
        prevBtn.classList.remove("visible");
      } else {
        prevBtn.classList.add("visible");
      }
      // Change Next button text on last step
        nextLabel.innerHTML = step === totalSteps ? "Continue" : "Continue";
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      } else {
        alert("All steps completed!");
      }
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    });

    // Initialize
    showStep(currentStep);

    document.querySelectorAll(".pre-next-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // uploaded pptx

    //   (function(){
    //   const dropzone = document.getElementById('dropzone');
    //   const fileInput = document.getElementById('fileInput');
    //   const actionBtn = document.getElementById('actionBtn');
    //   const fileList = document.getElementById('fileList');

    //   const MAX_BYTES = 50 * 1024 * 1024; // 50 MB
    //   let currentFile = null;

    //   function isPptx(file){
    //     const name = (file && file.name) || '';
    //     const ext = name.split('.').pop().toLowerCase();
    //     return ext === 'pptx' || file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    //   }

    //   function setFile(file){
    //     if(!file) return clearFile();
    //     if(!isPptx(file)){
    //       alert('Please select a .pptx file');
    //       return;
    //     }
    //     if(file.size > MAX_BYTES){
    //       alert('File is too large. Max 50 MB');
    //       return;
    //     }
    //     currentFile = file;
    //     renderFile();
    //     uploadFile();
    //   }

    //   function clearFile(){
    //     currentFile = null;
    //     fileList.classList.add('hidden');
    //     fileList.innerHTML = '';
    //   }

    //   function renderFile(){
    //     fileList.classList.remove('hidden');
    //     const kb = Math.round(currentFile.size / 1024);
    //     fileList.innerHTML = `\n          <div class="file-item">\n            <div class="file-meta">\n              <div>📑</div>\n              <div>\n                <div class="file-name">${escapeHtml(currentFile.name)}</div>\n                <div class="file-size">${kb} KB</div>\n              </div>\n            </div>\n            <div>
    //           <button class="remove" id="removeBtn">Remove</button>
    //         </div>
    //       </div>\n        `;
    //     document.getElementById('removeBtn').addEventListener('click', clearFile);
    //   }

    //   function escapeHtml(str){
    //     return str.replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    //   }

    //   function uploadFile(){
    //     if(!currentFile) return;
    //     const form = new FormData();
    //     form.append('file', currentFile);

    //     actionBtn.disabled = true;
    //     actionBtn.textContent = 'Uploading...';

    //     fetch('/upload', { method: 'POST', body: form })
    //       .then(resp => {
    //         if(!resp.ok) throw new Error('Upload failed: ' + resp.statusText);
    //         return resp.json();
    //       })
    //       .then(result => {
    //         alert('Upload successful');
    //         console.log('server response', result);
    //         clearFile();
    //       })
    //       .catch(err => {
    //         console.error(err);
    //         alert('Upload failed — see console');
    //       })
    //       .finally(() => {
    //         actionBtn.disabled = false;
    //         actionBtn.textContent = 'Choose & Upload';
    //       });
    //   }

    //   // Drag & drop events
    //   ['dragenter','dragover'].forEach(ev => {
    //     dropzone.addEventListener(ev, e => {
    //       e.preventDefault();
    //       e.stopPropagation();
    //       dropzone.classList.add('dragover');
    //     });
    //   });
    //   ['dragleave','drop'].forEach(ev => {
    //     dropzone.addEventListener(ev, e => {
    //       e.preventDefault();
    //       e.stopPropagation();
    //       dropzone.classList.remove('dragover');
    //     });
    //   });

    //   dropzone.addEventListener('drop', e => {
    //     const dt = e.dataTransfer;
    //     if(!dt || !dt.files || dt.files.length === 0) return;
    //     setFile(dt.files[0]);
    //   });

    //   // Click anywhere on dropzone (except button) opens file picker
    //   dropzone.addEventListener('click', e => {
    //     if(e.target.id !== 'actionBtn'){
    //       fileInput.click();
    //     }
    //   });

    //   actionBtn.addEventListener('click', e => {
    //     e.stopPropagation();
    //     fileInput.click();
    //   });

    //   fileInput.addEventListener('change', e => {
    //     const f = e.target.files && e.target.files[0];
    //     if(!f) return;
    //     setFile(f);
    //     fileInput.value = '';
    //   });

    //   // Prevent browser from opening file when dropped outside
    //   window.addEventListener('dragover', e => e.preventDefault());
    //   window.addEventListener('drop', e => e.preventDefault());

    // })();





    // First color picker and its associated text input
    const colorPicker1 = document.getElementById('colorPicker1');
    const colorCode1 = document.getElementById('colorCode1');

    // Event listener for the first color picker
    colorPicker1.addEventListener('input', function () {
      colorCode1.value = colorPicker1.value;  // Sync color code with color picker
    });

    // Event listener for the first text input (hex code)
    colorCode1.addEventListener('input', function () {
      if(/^#[0-9A-F]{6}$/i.test(colorCode1.value)) {
        colorPicker1.value = colorCode1.value;
      }
    });

    // Second color picker and its associated text input
    const colorPicker2 = document.getElementById('colorPicker2');
    const colorCode2 = document.getElementById('colorCode2');

    // Event listener for the second color picker
    colorPicker2.addEventListener('input', function () {
      colorCode2.value = colorPicker2.value;  // Sync color code with color picker
    });

    // Event listener for the second text input (hex code)
    colorCode2.addEventListener('input', function () {
      if(/^#[0-9A-F]{6}$/i.test(colorCode2.value)) {
        colorPicker2.value = colorCode2.value;
      }
    });



