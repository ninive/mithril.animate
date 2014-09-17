/* Default transform2d bindings */
(function (m) {
	var basicBindings = ['scale', 'scalex', 'scaley', 'translate', 'translatex', 'translatey', 
		'matrix', 'backgroundColor', 'backgroundPosition', 'borderBottomColor', 
		'borderBottomWidth', 'borderLeftColor', 'borderLeftWidth', 'borderRightColor', 
		'borderRightWidth', 'borderSpacing', 'borderTopColor', 'borderTopWidth', 'bottom', 
		'clip', 'color', 'fontSize', 'fontWeight', 'height', 'left', 'letterSpacing', 
		'lineHeight', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'maxHeight', 
		'maxWidth', 'minHeight', 'minWidth', 'opacity', 'outlineColor', 'outlineWidth', 
		'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'right', 'textIndent', 
		'textShadow', 'top', 'verticalAlign', 'visibility', 'width', 'wordSpacing', 'zIndex'],
		degBindings = ['rotate', 'rotatex', 'rotatey', 'skewx', 'skewy'], i;

	//	Basic bindings where we pass the prop straight through
	for(i = 0; i < basicBindings.length; i += 1) {
		(function(name){
			m.addBinding(name, function(prop){
				var options = {};
				options[name] = prop();
				m.animate(this, options);
			}, true);
		}(basicBindings[i]));
	}
	
	//	Degree based bindings - conditionally postfix with "deg"
	for(i = 0; i < degBindings.length; i += 1) {
		(function(name){
			m.addBinding(name, function(prop){
				var options = {}, value = prop();
				options[name] = isNaN(value)? value: value + "deg";
				m.animate(this, options);
			}, true);
		}(degBindings[i]));
	}

	//	Attributes that require more than one prop
	m.addBinding("skew", function(prop){
		var value = prop();
		m.animate(this, { skew: [value[0] + (isNaN(value[0])? "":"deg"), value[1] + (isNaN(value[1])? "":"deg")] });
	}, true);
}(window.m));