def generate_html(title, sections):
    html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="articlegenerator.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <main>
        <h1>{title}</h1>
        {sections}
    </main>
</body>
</html>
    """
    return html_content

title = input("Please enter the article title: ")

section_count = int(input("How many sections would you like to add? "))
sections = ""
for i in range(section_count):
    section_title = input(f"Enter the title for section {i+1}: ")
    section_content = input(f"Enter the content for section {i+1}: ")
    sections += f"<h2>{section_title}</h2><p>{section_content}</p>"

html_content = generate_html(title, sections)

with open("articlegenerator.html", "w") as f:
    f.write(html_content)
