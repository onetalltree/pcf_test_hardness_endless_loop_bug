import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class bug implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	notifyOutputChanged: () => void;
	constructor() {	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		this.notifyOutputChanged = notifyOutputChanged;
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		this.notifyOutputChanged();	
	}

	public getOutputs(): IOutputs
	{
		console.log(Date.now().toString());

		return {
			sampleProperty : "test"
		}
		;
	}

	public destroy(): void {}
}