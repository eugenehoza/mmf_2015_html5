function removeLastRow()
{
	var table = document.getElementById("table");
	var rows = table.querySelectorAll('tr');
	if(rows.length > 0)
	{
	var lastRow = (rows.item(rows.length-1));
	window.alert("Now we removing row with '" +lastRow.textContent +"'' text!!!");
	lastRow.parentNode.removeChild(lastRow);
    }
	else
	{
		window.alert("Row count is equal to zero!!!");
	}
}

function removeRowUsingText()
{
	var table = document.getElementById("table");
	var rows = table.querySelectorAll('tr');
	if(rows.length > 0)
	{
	for(var i = 0; i< rows.length; i++)
	{
		if(rows.item(i).textContent.trim() == document.getElementById("rowToRemove").value.trim())
		{
			window.alert("Now we removing LAST row with '" +rows.item(i).textContent +"'' text!!!");
			rows.item(i).parentNode.removeChild(rows.item(i));
			return;
		}
	}
	window.alert("Row with text ='" +document.getElementById("rowToRemove").value.trim() +"' not found");
    }
	else
	{
		window.alert("Row count is equal to zero!!!");
	}
}

function addRow(){
	var table = document.getElementById("table");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = document.getElementById("rowToAdd").value.trim();
	window.alert("Row with text ='" +document.getElementById("rowToAdd").value.trim() +"' has beed added");
}

