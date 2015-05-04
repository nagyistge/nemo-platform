function resizing(graph){
	
	// some types of the elements need resizing after they are dropped
	graph.on('add', function(cell, collection, opt) {

		if (!opt.stencil) return;
		if(cell.get('type') === 'link') return;
		
		//Set font-size
		cell.attr('.name-text/font-size', 12);
		
		var type = cell.get('type');
		
		// configuration of resizing
		var sizeMultiplier = { 	
				'basic.Generic': 2,
		}[type];

		if (sizeMultiplier) {
			var originalSize = cell.get('size');
			
			if(cell.get('subType') === "Business Service" || cell.get('subType') === "Application Service" || cell.get('subType') === "Infrastructure Service"  || cell.get('subType') === "Value"){
				cell.set('size', {
					width: originalSize.width * sizeMultiplier,
					height: (originalSize.height * sizeMultiplier)/1.5
				});
			}
			else{
				cell.set('size', {
					width: originalSize.width * sizeMultiplier,
					height: originalSize.height * sizeMultiplier
				});
			}
		}

		sizeMultiplier = 0;
	}, this);
	
};