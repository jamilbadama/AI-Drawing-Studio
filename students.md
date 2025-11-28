---
layout: page
title: Students
permalink: /students/
---

{% assign students = site.data.students %}

{% if students and students.size > 0 %}
## Student Directory

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Student ID</th>
      <th>Email</th>
      <th>Grade</th>
      <th>Major</th>
      <th>Enrollment Date</th>
      <th>GPA</th>
    </tr>
  </thead>
  <tbody>
    {% for student in students %}
    <tr>
      <td>{{ student.name }}</td>
      <td>{{ student.student_id }}</td>
      <td><a href="mailto:{{ student.email }}">{{ student.email }}</a></td>
      <td>{{ student.grade }}</td>
      <td>{{ student.major }}</td>
      <td>{{ student.enrollment_date | date: "%B %-d, %Y" }}</td>
      <td>{{ student.gpa }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

**Total Students:** {{ students.size }}

{% else %}
No students found.
{% endif %}

