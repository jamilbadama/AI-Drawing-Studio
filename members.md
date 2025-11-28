---
layout: page
title: Members
permalink: /members/
---

{% assign members = site.data.members %}

{% if members and members.size > 0 %}
{% for member in members %}
### {{ member.name }} — {{ member.position }}
{{ member.bio | markdownify }}
{% if member.email %}Email: <a href="mailto:{{ member.email }}">{{ member.email }}</a>{% endif %}
{% if member.active != nil %}Active: {% if member.active %}Yes{% else %}No{% endif %}{% endif %}
{% if member.age %}Age: {{ member.age }}{% endif %}
{% if member.rate %}Rate: ${{ member.rate }}/hr{% endif %}
{% if member.joined_on %}Joined: {{ member.joined_on | date: "%B %-d, %Y" }}{% endif %}
{% if member.availability_hours_per_week %}Availability: {{ member.availability_hours_per_week }} hrs/week{% endif %}
{% if member.address %}{% if member.address.city or member.address.country %}Location: {{ member.address.city }}{% if member.address.city and member.address.country %}, {% endif %}{{ member.address.country }}{% endif %}{% endif %}
{% if member.preferences %}{% if member.preferences.theme %}Preferred theme: {{ member.preferences.theme }}{% endif %}{% if member.preferences.newsletter != nil %} • Newsletter: {% if member.preferences.newsletter %}Subscribed{% else %}Not subscribed{% endif %}{% endif %}{% endif %}
{% if member.links and (member.links.github or member.links.website) %}Links:
{% if member.links.github %}- <a href="{{ member.links.github }}">GitHub</a>{% endif %}
{% if member.links.website %}- <a href="{{ member.links.website }}">Website</a>{% endif %}
{% endif %}
{% if member.skills and member.skills.size > 0 %}Skills:
{% for skill in member.skills %}- {{ skill }}{% endfor %}
{% endif %}
{% if member.projects and member.projects.size > 0 %}Projects:
{% for project in member.projects %}- {{ project.name }}{% if project.stars %} (★ {{ project.stars }}){% endif %}{% endfor %}
{% endif %}
{% endfor %}
{% else %}
No members found.
{% endif %}

