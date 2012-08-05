const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

let  defaultStylesheet, patchStylesheet;

function init(extensionMeta) {
	defaultStylesheet = Main._defaultCssStylesheet;
	patchStylesheet = extensionMeta.path + '/stylesheet.css';
}

function enable() {
	let themeContext = St.ThemeContext.get_for_stage(global.stage);
	let theme = new St.Theme ({ application_stylesheet: patchStylesheet,
			theme_stylesheet: defaultStylesheet });
	try {
		themeContext.set_theme(theme);
	} catch (e) {
		global.logError('Stylesheet parse error: ' + e);
	}

}

function disable() {
	let themeContext = St.ThemeContext.get_for_stage(global.stage);
	let theme = new St.Theme ({ theme_stylesheet: defaultStylesheet });
	try {
		themeContext.set_theme(theme);
	} catch (e) {
		global.logError('Stylesheet parse error: ' + e);
	}
}
