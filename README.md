Lab Exercise 1: User Journey Document
CS110P Introduction to HCI & UI/UX Design

Project Details
Project Name: CampusConnect: A Student Collaboration Platform
Start Date: TBA
End Date: TBA
Short Description
CampusConnect is a web-based platform that allows students to collaborate, share resources, and communicate efficiently within their university. It provides real-time messaging, project management tools, and event scheduling to improve teamwork among students.
Nature of the Project: A web system designed for student collaboration and communication.
Primary Beneficiaries: University students and faculty members.
How This Project Helps:
Enables students to create study groups and project teams.
Provides a shared space for file sharing, task management, and discussion.
Offers an event scheduler for organizing deadlines and meetings.

Meet the Team
Ahram Augustine Santos
Chence Iven Refrea
Jemuel Herrera
Joshua Dolar
Kurt Gavin Gabayan
Yort Alenn Estremos

Meet the End User
Name: Louis Malveda
Age: 20
Location: Laguna, Philippines
Occupation/Activity of Interest: College student in Computer Science
What Keeps Them Happy:
Completing tasks efficiently.
Collaborating with friends on group projects.
Having a structured schedule.
What Concerns Them:
Poor communication leading to missed deadlines.
Difficulty in managing project tasks.
Lack of a centralized platform for collaboration.
Other Details:
Uses Discord and Google Drive for file sharing but struggles with managing multiple platforms.
Prefers a simple, easy-to-use interface.

User Needs
As a student, I need a group chat feature so I can communicate with my team.
As a student, I need a task management tool so I can track project progress.
As a student, I need a file-sharing feature so I can upload and access shared documents.
As a student, I need an event scheduler so I can manage deadlines.
As a student, I need a user-friendly interface so I can navigate the system easily.

User Wants
As a student, I want a notification system so I can stay updated on messages and deadlines.
As a student, I want a dark mode option so I can reduce eye strain.
As a student, I want an online whiteboard so I can brainstorm with my team.
As a student, I want message reactions so I can quickly respond to my teammates.
As a student, I want mobile compatibility so I can access the platform on my phone.

User Journey 1: Creating a Study Group
Journey Goals
Start: The user logs into CampusConnect and selects "Create Group."
Input: User enters group name, invites members, and sets up preferences.
End: Group is successfully created, and members receive notifications.
Output: A collaborative space where students can chat, share files, and manage tasks.
Value: Improves communication and collaboration for group projects.
User Story 1.1: Creating a Group Chat
User Story Statement:
"As a student, I need a group chat feature so I can communicate with my team."
Technical Description:
Implement a real-time chat system using WebSockets.
Allow users to create, name, and invite members to a chat group.
Functional Requirements:
Chatroom creation with a unique name.
Member invitation system.
Real-time messaging and file sharing.

User Journey 2: Task Management
Journey Goals
Start: The user accesses the "Task Manager" in the group chat.
Input: User assigns tasks, sets deadlines, and adds descriptions.
End: Tasks are displayed in a structured list with progress tracking.
Output: A visual task board that helps users track progress.
Value: Keeps projects organized and ensures accountability.
User Story 2.1: Assigning a Task
User Story Statement:
"As a student, I need a task management tool so I can track project progress."
Technical Description:
Use drag-and-drop Kanban boards for task tracking.
Tasks can have statuses (To Do, In Progress, Completed).
Functional Requirements:
Ability to assign tasks to specific team members.
Deadline reminders and progress tracking.

User Journey 3: Sharing Files
Journey Goals
Start: User accesses the "Files" tab in a group chat.
Input: User uploads a document or image.
End: File appears in the group chat with a download link.
Output: A shared file repository accessible to all group members.
Value: Makes sharing study materials and project files easier.
User Story 3.1: Uploading a File
User Story Statement:
"As a student, I need a file-sharing feature so I can upload and access shared documents."
Technical Description:
Implement cloud storage using Firebase or AWS S3.
Users can upload, download, and organize files into folders.
Functional Requirements:
File upload with progress indicator.
Folder management system.
File preview and download options.


Final Thoughts
This CampusConnect platform provides students with a centralized and efficient way to manage group projects, deadlines, and communication. With features like real-time chat, file sharing, and task management, it streamlines collaboration and improves productivity.
