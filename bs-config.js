
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "injectChanges": false,
	"files": [ './**/.{html,htm,css.js}' ],
	"watchOptions": { ignored: 'node_modules' },
	"server": {
		"baseDir": './'
	},
    "port": (process.env.PORT || 4000)
};