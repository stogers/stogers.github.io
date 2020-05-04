import unicodedata

f = open("3.js", "w")
fr = open("3/3.txt","r", encoding="windows-1252")
s = fr.read()
unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode('utf8')


chapters = text.split("chapter_delimiter")
s = ""
i = 0

for chapter in chapters:
	label = "frank%s" % i
	s += "\n%s = `%s`" % (label, chapter.strip().replace("\n\n","crazy_delimiter").replace("\n"," ").replace("crazy_delimiter", "\n").replace("“", "\"").replace("”", "\""))
	i += 1
f.write(s)