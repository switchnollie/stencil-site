/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { JSX } from "@stencil/core";
import { MarkdownHeading, SiteStructureItem } from "./global/definitions";
export namespace Components {
    interface AnnouncementBar {
    }
    interface AppBurger {
        "toggleLeftSidebar": () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface BlogList {
    }
    interface ContributorList {
        "contributors"?: string[];
    }
    interface CustomClock {
    }
    interface DemoCard {
        "SourceBufferList"?: string;
        "demoUrl"?: string;
        "description"?: string;
        "imgPath"?: string;
        "name"?: string;
        "sourceUrl"?: string;
    }
    interface DocComponent {
        "page"?: string;
    }
    interface DocsDropdown {
        "align": 'left' | 'right' | 'center';
        "close": () => Promise<void>;
        "icon"?: (props: any) => JSX.Element;
        "open": () => Promise<void>;
        "toggle": () => Promise<void>;
    }
    interface DsPage {
    }
    interface FeaturePill {
        "link": string;
    }
    interface GuideCallout {
    }
    interface HighlightCode {
    }
    interface HubspotModal {
        "active": boolean;
    }
    interface InPageNavigation {
        "currentPageUrl": string;
        "pageLinks": MarkdownHeading[];
        "srcUrl": string;
    }
    interface LandingPage {
    }
    interface LifecycleChart {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface NotfoundPage {
    }
    interface PreFooter {
    }
    interface ProGlshader {
        "frag": string;
        "media"?: string;
        "ready": boolean;
        "retina": boolean;
        "uniforms": any;
        "vert": string;
    }
    interface PwasPage {
    }
    interface ResourcesPage {
    }
    interface SearchBar {
        "debounce"?: number;
        "handleInput"?: (ev: any) => void;
        "placeholder"?: string;
        "searchTerm"?: string;
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList": SiteStructureItem[];
    }
    interface SiteTopBar {
    }
}
declare global {
    interface HTMLAnnouncementBarElement extends Components.AnnouncementBar, HTMLStencilElement {
    }
    var HTMLAnnouncementBarElement: {
        prototype: HTMLAnnouncementBarElement;
        new (): HTMLAnnouncementBarElement;
    };
    interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {
    }
    var HTMLAppBurgerElement: {
        prototype: HTMLAppBurgerElement;
        new (): HTMLAppBurgerElement;
    };
    interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {
    }
    var HTMLAppIconElement: {
        prototype: HTMLAppIconElement;
        new (): HTMLAppIconElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBlogComponentElement extends Components.BlogComponent, HTMLStencilElement {
    }
    var HTMLBlogComponentElement: {
        prototype: HTMLBlogComponentElement;
        new (): HTMLBlogComponentElement;
    };
    interface HTMLBlogListElement extends Components.BlogList, HTMLStencilElement {
    }
    var HTMLBlogListElement: {
        prototype: HTMLBlogListElement;
        new (): HTMLBlogListElement;
    };
    interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {
    }
    var HTMLContributorListElement: {
        prototype: HTMLContributorListElement;
        new (): HTMLContributorListElement;
    };
    interface HTMLCustomClockElement extends Components.CustomClock, HTMLStencilElement {
    }
    var HTMLCustomClockElement: {
        prototype: HTMLCustomClockElement;
        new (): HTMLCustomClockElement;
    };
    interface HTMLDemoCardElement extends Components.DemoCard, HTMLStencilElement {
    }
    var HTMLDemoCardElement: {
        prototype: HTMLDemoCardElement;
        new (): HTMLDemoCardElement;
    };
    interface HTMLDocComponentElement extends Components.DocComponent, HTMLStencilElement {
    }
    var HTMLDocComponentElement: {
        prototype: HTMLDocComponentElement;
        new (): HTMLDocComponentElement;
    };
    interface HTMLDocsDropdownElement extends Components.DocsDropdown, HTMLStencilElement {
    }
    var HTMLDocsDropdownElement: {
        prototype: HTMLDocsDropdownElement;
        new (): HTMLDocsDropdownElement;
    };
    interface HTMLDsPageElement extends Components.DsPage, HTMLStencilElement {
    }
    var HTMLDsPageElement: {
        prototype: HTMLDsPageElement;
        new (): HTMLDsPageElement;
    };
    interface HTMLFeaturePillElement extends Components.FeaturePill, HTMLStencilElement {
    }
    var HTMLFeaturePillElement: {
        prototype: HTMLFeaturePillElement;
        new (): HTMLFeaturePillElement;
    };
    interface HTMLGuideCalloutElement extends Components.GuideCallout, HTMLStencilElement {
    }
    var HTMLGuideCalloutElement: {
        prototype: HTMLGuideCalloutElement;
        new (): HTMLGuideCalloutElement;
    };
    interface HTMLHighlightCodeElement extends Components.HighlightCode, HTMLStencilElement {
    }
    var HTMLHighlightCodeElement: {
        prototype: HTMLHighlightCodeElement;
        new (): HTMLHighlightCodeElement;
    };
    interface HTMLHubspotModalElement extends Components.HubspotModal, HTMLStencilElement {
    }
    var HTMLHubspotModalElement: {
        prototype: HTMLHubspotModalElement;
        new (): HTMLHubspotModalElement;
    };
    interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {
    }
    var HTMLInPageNavigationElement: {
        prototype: HTMLInPageNavigationElement;
        new (): HTMLInPageNavigationElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLLifecycleChartElement extends Components.LifecycleChart, HTMLStencilElement {
    }
    var HTMLLifecycleChartElement: {
        prototype: HTMLLifecycleChartElement;
        new (): HTMLLifecycleChartElement;
    };
    interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {
    }
    var HTMLLowerContentNavElement: {
        prototype: HTMLLowerContentNavElement;
        new (): HTMLLowerContentNavElement;
    };
    interface HTMLNewsletterSignupElement extends Components.NewsletterSignup, HTMLStencilElement {
    }
    var HTMLNewsletterSignupElement: {
        prototype: HTMLNewsletterSignupElement;
        new (): HTMLNewsletterSignupElement;
    };
    interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {
    }
    var HTMLNotfoundPageElement: {
        prototype: HTMLNotfoundPageElement;
        new (): HTMLNotfoundPageElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLProGlshaderElement extends Components.ProGlshader, HTMLStencilElement {
    }
    var HTMLProGlshaderElement: {
        prototype: HTMLProGlshaderElement;
        new (): HTMLProGlshaderElement;
    };
    interface HTMLPwasPageElement extends Components.PwasPage, HTMLStencilElement {
    }
    var HTMLPwasPageElement: {
        prototype: HTMLPwasPageElement;
        new (): HTMLPwasPageElement;
    };
    interface HTMLResourcesPageElement extends Components.ResourcesPage, HTMLStencilElement {
    }
    var HTMLResourcesPageElement: {
        prototype: HTMLResourcesPageElement;
        new (): HTMLResourcesPageElement;
    };
    interface HTMLSearchBarElement extends Components.SearchBar, HTMLStencilElement {
    }
    var HTMLSearchBarElement: {
        prototype: HTMLSearchBarElement;
        new (): HTMLSearchBarElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLSiteMenuElement extends Components.SiteMenu, HTMLStencilElement {
    }
    var HTMLSiteMenuElement: {
        prototype: HTMLSiteMenuElement;
        new (): HTMLSiteMenuElement;
    };
    interface HTMLSiteTopBarElement extends Components.SiteTopBar, HTMLStencilElement {
    }
    var HTMLSiteTopBarElement: {
        prototype: HTMLSiteTopBarElement;
        new (): HTMLSiteTopBarElement;
    };
    interface HTMLElementTagNameMap {
        "announcement-bar": HTMLAnnouncementBarElement;
        "app-burger": HTMLAppBurgerElement;
        "app-icon": HTMLAppIconElement;
        "app-root": HTMLAppRootElement;
        "blog-component": HTMLBlogComponentElement;
        "blog-list": HTMLBlogListElement;
        "contributor-list": HTMLContributorListElement;
        "custom-clock": HTMLCustomClockElement;
        "demo-card": HTMLDemoCardElement;
        "doc-component": HTMLDocComponentElement;
        "docs-dropdown": HTMLDocsDropdownElement;
        "ds-page": HTMLDsPageElement;
        "feature-pill": HTMLFeaturePillElement;
        "guide-callout": HTMLGuideCalloutElement;
        "highlight-code": HTMLHighlightCodeElement;
        "hubspot-modal": HTMLHubspotModalElement;
        "in-page-navigation": HTMLInPageNavigationElement;
        "landing-page": HTMLLandingPageElement;
        "lifecycle-chart": HTMLLifecycleChartElement;
        "lower-content-nav": HTMLLowerContentNavElement;
        "newsletter-signup": HTMLNewsletterSignupElement;
        "notfound-page": HTMLNotfoundPageElement;
        "pre-footer": HTMLPreFooterElement;
        "pro-glshader": HTMLProGlshaderElement;
        "pwas-page": HTMLPwasPageElement;
        "resources-page": HTMLResourcesPageElement;
        "search-bar": HTMLSearchBarElement;
        "site-header": HTMLSiteHeaderElement;
        "site-menu": HTMLSiteMenuElement;
        "site-top-bar": HTMLSiteTopBarElement;
    }
}
declare namespace LocalJSX {
    interface AnnouncementBar {
    }
    interface AppBurger {
        "toggleLeftSidebar"?: () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface BlogList {
    }
    interface ContributorList {
        "contributors"?: string[];
    }
    interface CustomClock {
    }
    interface DemoCard {
        "SourceBufferList"?: string;
        "demoUrl"?: string;
        "description"?: string;
        "imgPath"?: string;
        "name"?: string;
        "sourceUrl"?: string;
    }
    interface DocComponent {
        "page"?: string;
    }
    interface DocsDropdown {
        "align"?: 'left' | 'right' | 'center';
        "icon"?: (props: any) => JSX.Element;
    }
    interface DsPage {
    }
    interface FeaturePill {
        "link"?: string;
    }
    interface GuideCallout {
        "onToggleModal"?: (event: CustomEvent<any>) => void;
    }
    interface HighlightCode {
    }
    interface HubspotModal {
        "active"?: boolean;
        "onToggleModal"?: (event: CustomEvent<any>) => void;
    }
    interface InPageNavigation {
        "currentPageUrl"?: string;
        "pageLinks"?: MarkdownHeading[];
        "srcUrl"?: string;
    }
    interface LandingPage {
    }
    interface LifecycleChart {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface NotfoundPage {
    }
    interface PreFooter {
    }
    interface ProGlshader {
        "frag"?: string;
        "media"?: string;
        "ready"?: boolean;
        "retina"?: boolean;
        "uniforms"?: any;
        "vert"?: string;
    }
    interface PwasPage {
    }
    interface ResourcesPage {
    }
    interface SearchBar {
        "debounce"?: number;
        "handleInput"?: (ev: any) => void;
        "placeholder"?: string;
        "searchTerm"?: string;
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList"?: SiteStructureItem[];
    }
    interface SiteTopBar {
    }
    interface IntrinsicElements {
        "announcement-bar": AnnouncementBar;
        "app-burger": AppBurger;
        "app-icon": AppIcon;
        "app-root": AppRoot;
        "blog-component": BlogComponent;
        "blog-list": BlogList;
        "contributor-list": ContributorList;
        "custom-clock": CustomClock;
        "demo-card": DemoCard;
        "doc-component": DocComponent;
        "docs-dropdown": DocsDropdown;
        "ds-page": DsPage;
        "feature-pill": FeaturePill;
        "guide-callout": GuideCallout;
        "highlight-code": HighlightCode;
        "hubspot-modal": HubspotModal;
        "in-page-navigation": InPageNavigation;
        "landing-page": LandingPage;
        "lifecycle-chart": LifecycleChart;
        "lower-content-nav": LowerContentNav;
        "newsletter-signup": NewsletterSignup;
        "notfound-page": NotfoundPage;
        "pre-footer": PreFooter;
        "pro-glshader": ProGlshader;
        "pwas-page": PwasPage;
        "resources-page": ResourcesPage;
        "search-bar": SearchBar;
        "site-header": SiteHeader;
        "site-menu": SiteMenu;
        "site-top-bar": SiteTopBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "announcement-bar": LocalJSX.AnnouncementBar & JSXBase.HTMLAttributes<HTMLAnnouncementBarElement>;
            "app-burger": LocalJSX.AppBurger & JSXBase.HTMLAttributes<HTMLAppBurgerElement>;
            "app-icon": LocalJSX.AppIcon & JSXBase.HTMLAttributes<HTMLAppIconElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "blog-component": LocalJSX.BlogComponent & JSXBase.HTMLAttributes<HTMLBlogComponentElement>;
            "blog-list": LocalJSX.BlogList & JSXBase.HTMLAttributes<HTMLBlogListElement>;
            "contributor-list": LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
            "custom-clock": LocalJSX.CustomClock & JSXBase.HTMLAttributes<HTMLCustomClockElement>;
            "demo-card": LocalJSX.DemoCard & JSXBase.HTMLAttributes<HTMLDemoCardElement>;
            "doc-component": LocalJSX.DocComponent & JSXBase.HTMLAttributes<HTMLDocComponentElement>;
            "docs-dropdown": LocalJSX.DocsDropdown & JSXBase.HTMLAttributes<HTMLDocsDropdownElement>;
            "ds-page": LocalJSX.DsPage & JSXBase.HTMLAttributes<HTMLDsPageElement>;
            "feature-pill": LocalJSX.FeaturePill & JSXBase.HTMLAttributes<HTMLFeaturePillElement>;
            "guide-callout": LocalJSX.GuideCallout & JSXBase.HTMLAttributes<HTMLGuideCalloutElement>;
            "highlight-code": LocalJSX.HighlightCode & JSXBase.HTMLAttributes<HTMLHighlightCodeElement>;
            "hubspot-modal": LocalJSX.HubspotModal & JSXBase.HTMLAttributes<HTMLHubspotModalElement>;
            "in-page-navigation": LocalJSX.InPageNavigation & JSXBase.HTMLAttributes<HTMLInPageNavigationElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "lifecycle-chart": LocalJSX.LifecycleChart & JSXBase.HTMLAttributes<HTMLLifecycleChartElement>;
            "lower-content-nav": LocalJSX.LowerContentNav & JSXBase.HTMLAttributes<HTMLLowerContentNavElement>;
            "newsletter-signup": LocalJSX.NewsletterSignup & JSXBase.HTMLAttributes<HTMLNewsletterSignupElement>;
            "notfound-page": LocalJSX.NotfoundPage & JSXBase.HTMLAttributes<HTMLNotfoundPageElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
            "pro-glshader": LocalJSX.ProGlshader & JSXBase.HTMLAttributes<HTMLProGlshaderElement>;
            "pwas-page": LocalJSX.PwasPage & JSXBase.HTMLAttributes<HTMLPwasPageElement>;
            "resources-page": LocalJSX.ResourcesPage & JSXBase.HTMLAttributes<HTMLResourcesPageElement>;
            "search-bar": LocalJSX.SearchBar & JSXBase.HTMLAttributes<HTMLSearchBarElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "site-menu": LocalJSX.SiteMenu & JSXBase.HTMLAttributes<HTMLSiteMenuElement>;
            "site-top-bar": LocalJSX.SiteTopBar & JSXBase.HTMLAttributes<HTMLSiteTopBarElement>;
        }
    }
}
