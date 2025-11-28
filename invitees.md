---
layout: page
title: invitees
---

{% for invitee in site.invitees %}
### [{{ invitee.name }}]({{ invitee.url }}) - {{ invitee.topic }}

{% endfor %}



