import { createMemo, For, Show } from "solid-js";
import type { Site } from "/types/sitelist";
import { SiteConfigPanel } from "./site-configuration";
import { useOptionsPageState } from "../../state";

const Site = ({ site }: { site: Site }) => {
	const state = useOptionsPageState();

	return <>
		<li class="hoverable" aria-selected={state.selectedSiteId.get() === site.id}>
			<button class="w-full cursor-pointer px-4 py-2 gap-2 flex cross-center text-left" onClick={() => state.selectedSiteId.set(site.id)}>
				<Show when={state.sitesWithInvalidPermissions().includes(site.id)}>
					<span class="">⚠️</span>
				</Show>
				<div class="flex flex-col flex-1">
					<div>{site.title}</div>
					<div class="font-xs text-figure-500">{site.hosts.join(', ')}</div>
				</div>
				<div class="font-xs text-secondary">Always blocked</div>
			</button>
		</li>
	</>
}

export const SiteList = () => {
	const state = useOptionsPageState();

	const selectedSite = createMemo(() => {
		const siteId = state.selectedSiteId.get();
		if (!siteId) return null;
		return state.siteList.get()?.sites.find(s => s.id === siteId) ?? null;
	});

	return  <div class="overlay-container">
		<div class="flex">
			<ul class={`flex viewport-scroller flex-col py-2 ${selectedSite() == null ? 'flex-1' : 'br-1 mw-xs'}`}>
				<For each={state.siteList.get()?.sites}>
					{site => <Site site={site} />}
				</For>
			</ul>
			<Show when={selectedSite() != null}>
				<div class="flex-1">
					<SiteConfigPanel site={selectedSite} />
				</div>
			</Show>
		</div>
	</div>
};

export const SitesTabContent = () => {
	return <SiteList />
}
