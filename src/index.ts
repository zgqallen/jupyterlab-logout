import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';
import { Widget } from '@phosphor/widgets';
import { PageConfig } from '@jupyterlab/coreutils';
import '../style/index.css';

/**
 * Activate the logout button in the main menu.
 */
export function activateLogout(app: JupyterLab): void{
	let rightAreaOfTopPanel = new Widget()
	rightAreaOfTopPanel.id = 'jp-topPanel-rightArea';
	
	//add logout button
	let logoutBtn = document.createElement('button');
	logoutBtn.id = "logout";
	logoutBtn.className = "btn";
	logoutBtn.innerHTML = "Logout";
	logoutBtn.addEventListener('click', function () {
		window.location.assign(PageConfig.getBaseUrl() + "logout");
	});
	
	rightAreaOfTopPanel.node.appendChild(logoutBtn);
	app.shell.addToTopArea(rightAreaOfTopPanel);
}

/**
 * The jupyterlab logout extension.
 */
const Logout: JupyterLabPlugin<void> = {
    activate: activateLogout,
    id: '@jupyterlab/logout',
    requires: [],
    autoStart: true
}
export default Logout;
