document.addEventListener('DOMContentLoaded', function() {
	var sidebar = document.getElementById('sidebar');
	var mobileMenuBtn = document.getElementById('mobileMenuBtn');
	var logoMenuTrigger = document.getElementById('logoMenuTrigger');
	var overlay = document.getElementById('overlay');
	
	function toggleSidebar() {
		sidebar.classList.toggle('active');
		overlay.classList.toggle('active');
		
		if (sidebar.classList.contains('active')) {
			mobileMenuBtn.textContent = '✕';
		} else {
			mobileMenuBtn.textContent = '☰';
		}
	}

	mobileMenuBtn.addEventListener('click', function(e) {
		e.stopPropagation();
		toggleSidebar();
	});
	
	if (logoMenuTrigger) {
		logoMenuTrigger.addEventListener('click', function() {
			toggleSidebar();
		});
	}
	
	overlay.addEventListener('click', function() {
		toggleSidebar();
	});
	
	var menuItems = document.querySelectorAll('.has-submenu > a');
	
	menuItems.forEach(function(item) {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			var parentLi = this.parentElement;
			var wasActive = parentLi.classList.contains('active');
			
			document.querySelectorAll('.has-submenu').forEach(function(otherItem) {
				if (otherItem !== parentLi) {
					otherItem.classList.remove('active');
				}
			});
			
			parentLi.classList.toggle('active', !wasActive);
		});
	});
	
	document.addEventListener('click', function(e) {
		if (window.innerWidth > 768) {
			if (!e.target.closest('.sidebar') && !e.target.closest('.has-submenu')) {
				document.querySelectorAll('.has-submenu').forEach(function(item) {
					item.classList.remove('active');
				});
			}
		}
	});
	
	window.addEventListener('resize', function() {
		if (window.innerWidth > 768) {
			sidebar.classList.remove('active');
			overlay.classList.remove('active');
			mobileMenuBtn.textContent = '☰';
		}
	});
});