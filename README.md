# jupyterlab-logout
Extension to add logout button for JupyterLab.

## Prerequisites
Python env + JupyterLab was installed - http://jupyterlab.readthedocs.io/en/stable/.

## Why this project
Classic Jupyter has the Logout button in the top right pannel, but JupyterLab seems no such button now. 

## Build and Installation 
For a development install (requires npm version 4 or later), do the following in the repository directory:
```
npm install
npm run build
jupyter labextension link .
```
To re-distribute the package, you can pack to a tar ball and install with below command.
```
npm pack .
jupyterlab-logout-1.0.0.tgz
jupyter labextension install jupyterlab-logout-1.0.0.tgz
```
