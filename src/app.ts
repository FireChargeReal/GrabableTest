/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
// import { MreArgumentError } from '@microsoft/mixed-reality-extension-sdk';
/**
 * The main class of this app. All the logic goes here.
 */

//tt 
export default class HelloWorld {
	private text: MRE.Actor = null;
	private button: MRE.Actor = null;
	private player: MRE.Actor = null;
	private assets: MRE.AssetContainer;
	private buzzerSound: MRE.Sound = undefined;

	constructor(private context: MRE.Context) {
		this.context.onStarted(() => this.started());
	}

	/**
	 * Once the context is "started", initialize the app.
	 */
	private async started() {
		// set up somewhere to store loaded assets (meshes, textures, animations, gltfs, etc.)
		this.assets = new MRE.AssetContainer(this.context);

		const menu = MRE.Actor.Create(this.context, {});

		// Load a glTF model before we use it
		const cubeData = await this.assets.loadGltf('Button.glb', "box");

		// spawn a copy of the glTF model
		this.button = MRE.Actor.CreateFromPrefab(this.context, {
			// using the data we loaded earlier
			firstPrefabFrom: cubeData,
			// Also apply the following generic actor properties.
			actor: {
				name: 'Altspace button',
				// Parent the glTF model to the text actor, so the transform is relative to the text
				parentId: menu.id,
				grabbable: true,
				transform: {
					local: {
						position: { x: 0, y: -1, z: 0 },
						scale: { x: 0.4, y: 0.4, z: 0.4 }
					}
				}
			}
		});



		// Set up cursor interaction. We add the input behavior ButtonBehavior to the button.
		// Button behaviors have two pairs of events: hover start/stop, and click start/stop.
		

	

}
