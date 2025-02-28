
function updateTotal() {
    let total = 0;
    let categoryTotals = {};
    
    document.querySelectorAll('.option:checked').forEach(checkbox => {
        let price = parseFloat(checkbox.closest('tr').querySelector('.price').textContent);
        total += price;
        let category = checkbox.closest('tbody').querySelector('.category').textContent.trim();
        categoryTotals[category] = (categoryTotals[category] || 0) + price;
    });
    
    document.getElementById('totalPrice').textContent = total;
    document.querySelectorAll('.category-price').forEach(td => {
        let category = td.getAttribute('data-category');
        td.textContent = categoryTotals[category] || 0;
    });
}
document.querySelectorAll('.option').forEach(checkbox => checkbox.addEventListener('change', updateTotal));

function toggleCategory(categoryRow) {
    let nextRow = categoryRow.nextElementSibling;
    while (nextRow && nextRow.classList.contains('subcategory')) {
        nextRow.style.display = nextRow.style.display === 'none' ? 'table-row' : 'none';
        nextRow = nextRow.nextElementSibling;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Project Hover Effect
    const projects = document.querySelectorAll(".project");
    const projectsContainer = document.getElementById("projects");
    
    // Individual project hover effect
    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            projects.forEach(p => p.style.flex = "1");
            project.style.flex = "3";
        });
    });
    
    // Mouse leave from the entire projects container
    projectsContainer.addEventListener("mouseleave", () => {
        projects.forEach(p => p.style.flex = "1"); // Reset all projects to equal width
    });
    
    // Send Button Functionality
    document.getElementById("send").addEventListener("click", () => {
        const selectedServices = [];
        document.querySelectorAll("#cost-estimate input[type='checkbox']:checked").forEach(checkbox => {
            selectedServices.push(checkbox.parentElement.previousElementSibling.textContent.trim());
        });
        
        const additionalInfo = document.getElementById("additional-info").value;
        const email = document.getElementById("email").value;
        
        if (!email) {
            alert("Please enter your email address.");
            return;
        }
        
        const message = `Selected Services: ${selectedServices.join(", ")}\nAdditional Info: ${additionalInfo}`;
        
        // Simulating sending email (replace with real email functionality if needed)
        alert(`Email Sent to: ${email}\n${message}`);
    });
    
    // Navigation to Questionnaire
    document.getElementById("next").addEventListener("click", () => {
        window.location.href = "questionnaire.html";
    });
});
    // Send Button Functionality
    document.getElementById("send").addEventListener("click", () => {
        const selectedServices = [];
        document.querySelectorAll("#cost-estimate input[type='checkbox']:checked").forEach(checkbox => {
            selectedServices.push(checkbox.parentElement.previousElementSibling.textContent.trim());
        });
        
        const additionalInfo = document.getElementById("additional-info").value;
        const email = document.getElementById("email").value;
        
        if (!email) {
            alert("Please enter your email address.");
            return;
        }
        
        const message = `Selected Services: ${selectedServices.join(", ")}\nAdditional Info: ${additionalInfo}`;
        
        // Simulating sending email (replace with real email functionality if needed)
        alert(`Email Sent to: ${email}\n${message}`);
    });
    
    // Navigation to Questionnaire
    document.getElementById("next").addEventListener("click", () => {
        window.location.href = "questionnaire.html";
    });
});

// Add to your script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});