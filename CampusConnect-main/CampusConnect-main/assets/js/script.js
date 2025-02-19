// Drag-and-Drop Functionality
document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task-card');
    const columns = document.querySelectorAll('.task-list');

    tasks.forEach(task => {
        task.addEventListener('dragstart', () => {
            task.classList.add('dragging');
        });

        task.addEventListener('dragend', () => {
            task.classList.remove('dragging');
        });
    });

    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingTask = document.querySelector('.dragging');
            column.appendChild(draggingTask);
        });
    });

    // Add Task Form Submission
    const taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskTitle = document.getElementById('taskTitle').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskAssignee = document.getElementById('taskAssignee').value;
        const taskDeadline = document.getElementById('taskDeadline').value;

        const newTask = `
            <div class="task-card" draggable="true">
                <h4>${taskTitle}</h4>
                <p>${taskDescription}</p>
                <div class="task-footer">
                    <span class="badge bg-warning">Assigned to: ${taskAssignee}</span>
                    <span class="badge bg-danger">Deadline: ${taskDeadline}</span>
                </div>
            </div>
        `;

        document.getElementById('todo').insertAdjacentHTML('beforeend', newTask);
        $('#addTaskModal').modal('hide');
        taskForm.reset();
    });
});