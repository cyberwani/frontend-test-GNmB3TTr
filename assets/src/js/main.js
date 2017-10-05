( function() {
	var authorBio = document.getElementById( 'author-card__bio' );
	var authorBioTrigger = document.getElementById( 'author-card__trigger' );

	authorBioTrigger.addEventListener( 'click', e => {
		e.preventDefault();
		authorBio.classList.toggle( 'author-card__bio--is-open' );
	});
})();
