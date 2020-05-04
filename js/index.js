var Index = function() {

	var my = {
        html: {
            // Element to display all unit numbers
            unitLinks: null,
        }
    }

	function init() {
        // Get all necessary HTML elements
        for (var elementID in my.html) {
            my.html[elementID] = document.getElementById(elementID)
        }
		displayBookLinks()
	}

	// Display the book links
    function displayBookLinks()
    {
    	var bookIds = Object.keys(Units.main)
    	var linksDiv = my.html.unitLinks
		console.log("book ids: ", bookIds)
		for (b in bookIds) {
			var bookId = bookIds[b]
			var title = Units.main[bookId].title
			var href = bookHref(bookId)
			var divElement = boxedLink(title, href, bookId)
			linksDiv.appendChild(divElement)
		}
    }

    function bookHref(m)
    {
        return '#' + m
    }

    function boxedLink(label, href, bookId)
    {
        var divElement = document.createElement('div')
        divElement.className = "gridDiv"
        var imgElement = document.createElement('img')
        imgElement.src = "resources/images/" + bookId + ".jpg"
        var anchorElement = document.createElement('a')
        anchorElement.className = "grid-item"
        anchorElement.href = "type_book.html" + href
        // Util.addChildren(anchorElement)

        
        var titleElement = document.createElement('span')
        Util.addChildren(titleElement, label)
        titleElement.className = "bookTitle"
        divElement.appendChild(titleElement)
        divElement.appendChild(imgElement)
        anchorElement.appendChild(divElement)

        return anchorElement
    }

	// Tutor object
    return {
        init: init
    }

}()