document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Demo class scheduler form submission
    const demoSchedulerForm = document.getElementById('demo-scheduler');

    demoSchedulerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Collecting form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const classOfInterest = document.getElementById('class').value;
        const date = document.getElementById('date').value;

        // Simulate a form submission process
        alert(
            `Thank you, ${name}!\nYour demo class for ${classOfInterest} has been scheduled on ${date}.\nWe will contact you at ${email}.`
        );

        // Clear the form fields after submission
        demoSchedulerForm.reset();
    });
});
