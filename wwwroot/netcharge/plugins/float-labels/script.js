/** global: FloatLabels */

var floatlabels;
var toggleBtn = document.querySelector( '.fl-toggle' );
var styles = document.getElementsByName( 'style' );

var getStyle = function() {
	for( var i = 0; i < styles.length; ++i ) {
		if( styles[i].checked ) {
			return styles[i].value;
		}
	}
	return 0;
};

var changeStyle = function( form ) {
	form.className = form.className.replace( /fl-style-\d/g, 'fl-style-' + getStyle() );
};

[].forEach.call( styles, function( style ) {
	style.addEventListener( 'change', function( ev ) {
		changeStyle( ev.target.closest( 'form' ));
	});
});

