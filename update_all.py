import os
import glob

# Read index.html to grab the exact nav, mobile-nav, and footer
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

def extract_tag(content, start_tag, end_tag):
    start = content.find(start_tag)
    if start == -1: return ""
    end = content.find(end_tag, start) + len(end_tag)
    if end == -1 + len(end_tag): return ""
    return content[start:end]

header_start = '<header class="site-header" id="site-header">'
header_end = '</header>'
new_header = extract_tag(index_content, header_start, header_end)

footer_start = '<footer class="site-footer">'
footer_end = '</footer>'
new_footer = extract_tag(index_content, footer_start, footer_end)

# Also fix the footer hrefs in new_footer
new_footer = new_footer.replace('/ai-agent-development', '/agentic-ai')
# And in index.html too so we don't miss it
index_content = index_content.replace('/ai-agent-development', '/agentic-ai')
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_content)

html_files = glob.glob('*.html')
for file in html_files:
    if file == 'index.html':
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace header and footer
    old_header = extract_tag(content, header_start, header_end)
    if old_header:
        content = content.replace(old_header, new_header)

    old_footer = extract_tag(content, footer_start, footer_end)
    if old_footer:
        content = content.replace(old_footer, new_footer)

    # Styles replacements
    content = content.replace('badge-white', 'badge-primary')
    content = content.replace('color:#fff', 'color:var(--dark-text)')
    content = content.replace('color:white', 'color:var(--dark-text)')
    content = content.replace('class="card-icon text-white"', 'class="card-icon"')
    content = content.replace('text-white', '')  # Care with generic text-white
    content = content.replace('color:rgba(255,255,255,.7)', 'color:var(--gray-text)')
    content = content.replace('color:rgba(255,255,255,.65)', 'color:var(--gray-text)')
    content = content.replace('color:rgba(255,255,255,.6)', 'color:var(--gray-text)')
    content = content.replace('color:rgba(255,255,255,0.7)', 'color:var(--gray-text)')
    content = content.replace('color:rgba(255,255,255,0.6)', 'color:var(--gray-text)')
    content = content.replace('color:rgba(255,255,255,.8)', 'color:var(--gray-text)')
    content = content.replace('color:rgba(255,255,255,.5)', 'color:var(--gray-text)')
    content = content.replace('feature-list feature-list-white', 'feature-list')

    # Update font links
    old_font = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet">'
    new_font = '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">'
    content = content.replace(old_font, new_font)

    # Replace ai-agent-development
    content = content.replace('ai-agent-development.html', 'agentic-ai.html')
    content = content.replace('/ai-agent-development', '/agentic-ai')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
