import { For, type Accessor } from "solid-js";
import type { Site } from "/types/sitelist";
import { expect } from "/lib/util";

export const SiteConfigPanel = ({ site } : { site: Accessor<Site | null> }) => {
	return <div class="space-y-2 py-4">
		<div class="px-4 flex space-x-2 cross-end">
			<h3 class="font-lg flex-1 text-figure-500 font-bold">{expect(site()).title}</h3>
			<a class="font-sm hover:underline" target="_blank" href={`https://${expect(site()?.hosts[0])}`}>Visit site</a>
		</div>
		<div class="px-4">
			<h4 class="font flex-1 text-figure-500 font-bold">Blocked regions:</h4>
		</div>
		<ul>
			<For each={expect(site()).regions}>
				{region => <li class="flex cross-center px-4 py-1">
					<span class="flex-1 px-2 py-1">{region.title}</span>
					<span class="font-xs text-secondary">Always blocked</span>
				</li>}
			</For>
		</ul>
	</div>
}
