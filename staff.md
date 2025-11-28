---
layout: page
title: staff
---
{% for staff_member in site.staff_members %}
## [{{ staff_member.name }}]({{ staff_member.url | relative_url }}) - {{ staff_member.position }}
{{ staff_member.content | markdownify }}

{% endfor %}
