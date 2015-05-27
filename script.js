
	google.load('visualization', '1.0', {'packages':['corechart']});

	google.setOnLoadCallback(drawChart);

	/*
	 *  Draw Chart Function
	 *  Purpose: Called when Google Chart API finishes loading to draw Skills chart
	 */
	function drawChart() {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Skill');
		data.addColumn('number', 'Rank');
		data.addRows([
			['C/C++', 7],
			['C#', 7],
			['Java', 6],
			['SQL', 5],
			['Javascript', 8],
			['HTML/CSS', 8]
		]);

		var options = {'title':'My Programming Skills',
						'is3D':'true',
						'backgroundColor':'transparent',
						'colors':['#00ff80', '#ff2448', '#247fff', '#916dfe', '#fd6287', '#fed172'],
						'titleTextStyle': { color:'#f7f7f7' },
						'legendTextStyle': { color:'#f7f7f7' },
					};

		var chart = new google.visualization.PieChart(document.getElementById('skill-chart'));
		chart.draw(data, options);
	}

	/*
	 *  Page Anchor Navigation Event
	 *  Purpose: Smoothes scrolling animation
	 */

	$('a[href^="#"]').click(function(e) {
		e.preventDefault();

		var target = this.hash;
		var section = $(target);

		$('html, body').animate({
			scrollTop: section.offset().top
		}, 800);
		});