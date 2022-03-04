test_ALL: test_all test_ONE
test_all: exo2.js
	node exo2.js
test_ONE: exo2___copy.js
	node $<
clean:
	rm -f *.js~ Makefile~
#eslint exo2.js et tsc --noEmit exo2.js pour plus de verifications
#A LA COMPILATION..///
