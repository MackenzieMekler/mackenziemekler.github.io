---
icon: fas fa-code
order: 6
---

### This page is not completed but I hope to have it up and running soon!


{% for post in site.code %}
- [{{ post.title }}]({{ post.url | relative_url }}) 
{% endfor %}
