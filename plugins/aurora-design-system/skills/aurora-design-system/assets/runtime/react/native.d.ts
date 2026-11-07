// Source-derived public props. Runtime variant/visual validation remains separate.

import type { ButtonHTMLAttributes, ChangeEvent, ComponentType, CSSProperties, ForwardRefExoticComponent, HTMLAttributes, InputHTMLAttributes, ReactElement, ReactNode, RefAttributes, ChangeEventHandler, MouseEvent, SelectHTMLAttributes, SyntheticEvent, TextareaHTMLAttributes } from 'react';

export type Matrix = { m00: number; m01: number; m02: number; m10: number; m11: number; m12: number };

export type Color = { r: number; g: number; b: number; a?: number };

export type Paint = {
  type: string; visible?: boolean; opacity?: number; color?: Color; blendMode?: string;
  stops?: { color: Color; position: number }[]; transform?: Matrix;
  gradientGeometry?: any; imagePath?: string; imageHash?: string; imageScaleMode?: string;
  originalImageWidth?: number; originalImageHeight?: number; scale?: number;
};

export type GeometryPath = { svgPath: string; windingRule?: string; paints?: Paint[]; styleID?: number };

export type NativeNode = {
  id: string; sourceId: string; type: string; name?: string; visible?: boolean; opacity?: number;
  size?: { x: number; y: number }; transform?: Matrix; children?: NativeNode[];
  fillPaints?: Paint[]; strokePaints?: Paint[]; strokeWeight?: number; strokeAlign?: string;
  strokeCap?: string; strokeJoin?: string; dashPattern?: number[];
  cornerRadius?: number; rectangleCornerRadii?: number[]; effects?: any[]; blendMode?: string;
  resolvedPaths?: { normalizedSize?: { x: number; y: number }; fill?: GeometryPath[]; stroke?: GeometryPath[] };
  fontName?: { family?: string; style?: string }; fontSize?: number; fontWeight?: number;
  lineHeight?: { value: number; units: string }; letterSpacing?: { value: number; units: string };
  textData?: { characters?: string; characterStyleIDs?: number[]; styleOverrideTable?: any[] };
  textBaselines?: any[]; textGlyphs?: any[]; derivedTextData?: any;
  textCase?: string; textDecoration?: string; textAlignHorizontal?: string;
  mask?: boolean; isMask?: boolean; maskType?: string; frameMaskDisabled?: boolean;
  count?: number; pointCount?: number; starInnerScale?: number;
  [field: string]: any;
};

export type NodeOverride = { text?: string; hidden?: boolean; style?: CSSProperties; fillPaints?: Paint[]; strokePaints?: Paint[]; children?: ReactNode; props?: Record<string, unknown> };

export type AuroraArchiveProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  as?: string; children?: ReactNode; disabled?: boolean; type?: 'button' | 'submit' | 'reset';
  /** Cover-fit the original source viewport when used as decorative page art. */
  svgPreserveAspectRatio?: string;
  scale?: number; title?: string; textRendering?: 'native' | 'glyphs';
  /** Full expanded instance path takes precedence over the original source ID. */
  nodeOverrides?: Record<string, NodeOverride>; textOverrides?: Record<string, string>;
  /** Only overrides a root which is itself a TEXT node. */
  text?: string;
  assetUrl?: (path: string) => string;
};

type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Exact Figma Big variant. Icon=true renders the original Aurora asset. */
  big?: boolean;
  icon?: boolean;
  label?: ReactNode;
};

export type AuroraPrimaryButtonProps = ActionProps;

export type AuroraSecondaryButtonProps = ActionProps & { booked?: boolean; inWaitlist?: boolean; negative?: boolean; waitlisted?: boolean; waitlistFull?: boolean };

export type AuroraTertiaryButtonProps = ActionProps;

type SelectionProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'children'> & {
  label: ReactNode;
  subtext?: ReactNode;
  /** Alias for Figma's Selected property; checked takes precedence. */
  selected?: boolean;
};

export type AuroraRadioProps = SelectionProps;

export type AuroraCheckboxProps = SelectionProps;

export type AuroraToggleProps = Omit<SelectionProps, 'subtext' | 'selected'> & { small?: boolean; active?: boolean };

type NativeField = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'children' | 'size'>;

export type AuroraTextInputProps = NativeField & {
  label: string;
  appearance?: 'Filled' | 'Line';
  multiline?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Optional product validation message, announced and associated with the field. */
  error?: ReactNode;
};

export type AuroraChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  selected?: boolean;
  defaultSelected?: boolean;
  withIcon?: boolean;
  onSelectedChange?: (selected: boolean) => void;
};

export type AuroraSliderValue = readonly [number, number];

export type AuroraSliderThumb = 'min' | 'max';

export type AuroraSliderProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
  label: string;
  min?: number;
  max?: number;
  step?: number;
  value?: AuroraSliderValue;
  defaultValue?: AuroraSliderValue;
  onValueChange?: (value: [number, number], thumb: AuroraSliderThumb) => void;
  onValueCommit?: (value: [number, number], thumb: AuroraSliderThumb) => void;
  formatValue?: (value: number) => string;
  lowerLabel?: string;
  upperLabel?: string;
  disabled?: boolean;
  name?: string;
};

export interface AuroraCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Fading by default. Legacy reflective values normalize to fading; none is an explicit nested-card exception. */
  stroke?: 'reflective' | 'fading' | 'none';
  /** Keep the source glass surface, or use its explicit opaque fallback. */
  surface?: 'glass' | 'blur' | 'solid';
  /** Popup cards always use a translucent blurred surface (80px by default). */
  popup?: boolean;
  /** Existing Aurora blur tokens:10px,30px,80px. Solid cards disable blur. */
  blur?: 'weak' | 'medium' | 'strong';
  /** @deprecated Card strokes are neutral; legacy accent values normalize to neutral. */
  strokeColor?: 'neutral' | 'pink' | 'blue' | 'yellow';
  /** Explicit pure-white surface alpha in either theme. Omit for the theme's
   * default: dark 10%, white 60%; popup default white 80%. Never dims content. */
  surfaceOpacity?: 10 | 20 | 40 | 60 | 80 | 100;
  /** Fixed policy: fading stroke peak opacity is exactly 20%. */
  strokeOpacity?: 20;
  /** Generic composition padding; full Figma card layouts define their own spacing. */
  padding?: 'default' | 'none';
}

export interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  /** Previous Aurora gradient/cloud composition is the default; all four Figma variants remain available. */
  variant?: 'previous' | 'new' | 'old' | 'earthy' | 'pilate';
  /** Clouds apply to the previous composition; the base gradient always remains. */
  clouds?: boolean;
  /** Opt-in cloud animation for the previous composition; Figma variants remain static. */
  animated?: boolean;
}

export type AuroraChoiceOption = { value:string; label:ReactNode; subtext?:ReactNode; disabled?:boolean; image?:string };

type ChoiceBase = Omit<HTMLAttributes<HTMLFieldSetElement>, 'onChange'|'defaultValue'> & { label?:string; subtext?:ReactNode; options?:readonly AuroraChoiceOption[]; disabled?:boolean; name?:string };

export type AuroraRadioGroupProps = ChoiceBase & { value?:string; defaultValue?:string; onValueChange?:(value:string)=>void; large?:boolean };

export type AuroraCheckboxGroupProps = ChoiceBase & { value?:readonly string[]; defaultValue?:readonly string[]; onValueChange?:(value:string[])=>void };

export type AuroraChipSelectorGridProps = ChoiceBase & { multiSelect?:boolean; questionnaire?:boolean; value?:readonly string[]; defaultValue?:readonly string[]; onValueChange?:(value:string[])=>void };

export type AuroraRadioTilesProps = AuroraRadioGroupProps & { imageOnly?:boolean };

export type AuroraCounterProps = Omit<HTMLAttributes<HTMLDivElement>,'onChange'|'defaultValue'> & { label?:string; value?:number; defaultValue?:number; min?:number; max?:number; step?:number; disabled?:boolean; name?:string; onValueChange?:(value:number)=>void };

export type AuroraCounterCardProps = AuroraCounterProps & { title?:string; price?:string; image?:string; added?:boolean };

export type AuroraCountersCarouselProps = Omit<HTMLAttributes<HTMLDivElement>,'onChange'> & { label?:string; items?:readonly (AuroraCounterCardProps & {id:string})[]; onValueChange?:(id:string,value:number)=>void };

export type AuroraDateControlProps = Omit<HTMLAttributes<HTMLDivElement>,'onChange'|'defaultValue'> & { label?:string; value?:string; defaultValue?:string; min?:string; max?:string; disabled?:boolean; name?:string; onValueChange?:(value:string)=>void };

export type AuroraDateLabelsProps = AuroraDateControlProps & { selected?:boolean; doneStatus?:boolean; onSelect?:(value:string)=>void };

export type AuroraMultiDateJumperProps = AuroraDateControlProps & { dates?:readonly string[]; doneDates?:readonly string[] };

export type AuroraDatePickerProps = AuroraDateControlProps & { includeDay?:boolean; startYear?:number; endYear?:number; prop2Variables?:boolean; prop3Variables?:boolean; prop4Variables?:boolean };

export type AuroraMood = 'Very Sad'|'Sad'|'Good'|'Happy';

export type AuroraFloatingRatingProps = Omit<HTMLAttributes<HTMLDivElement>,'onChange'|'defaultValue'> & { label?:string; value?:AuroraMood; defaultValue?:AuroraMood; disabled?:boolean; name?:string; onValueChange?:(value:AuroraMood)=>void };

export type AuroraMoodRatingProps = Omit<AuroraFloatingRatingProps,'value'|'defaultValue'|'onValueChange'> & { mood?:AuroraMood; selected?:boolean; onSelect?:(mood:AuroraMood)=>void };

export type AuroraRatingDetail = { label:string; value:number };

export type AuroraRatingProps = HTMLAttributes<HTMLDivElement> & { title?:string; rating?:number; reviewCount?:number; details?:readonly AuroraRatingDetail[]; expanded?:boolean; mini?:boolean; onReviewsClick?:()=>void };

type ExtendedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'size' | 'type' | 'value' | 'defaultValue' | 'onChange'> & {
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onValueChange?: (value: string) => void;
  error?: ReactNode;
};

export type AuroraPhoneFieldProps = ExtendedInputProps & { showField?: boolean };

export type AuroraEmailFieldProps = ExtendedInputProps & { showField?: boolean };

export type AuroraPasswordFieldProps = ExtendedInputProps & { hide?: boolean; defaultHidden?: boolean; onVisibilityChange?: (visible: boolean) => void };

export type AuroraSearchFieldProps = ExtendedInputProps & { onSearch?: (query: string) => void; onClear?: () => void; onBack?: () => void; onFilter?: () => void };

export type AuroraChatInputProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange' | 'children' | 'onSubmit'> & {
  label?: string; value?: string; defaultValue?: string; onChange?: ChangeEventHandler<HTMLTextAreaElement>; onValueChange?: (value: string) => void;
  onSend?: (message: string) => void | boolean | Promise<void | boolean>; onSendError?: (error: unknown) => void;
  onAttach?: () => void; attachLabel?: string; avatarSrc?: string; avatarAlt?: string; postLabel?: string;
  submitOnEnter?: boolean; clearOnSend?: boolean; error?: ReactNode;
};

export type AuroraToggleWithTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children' | 'size'> & { label?: string; offLabel?: ReactNode; onLabel?: ReactNode; onCheckedChange?: (checked: boolean) => void };

export type AuroraDropdownOption = { value: string; label: string; disabled?: boolean };

export type AuroraDropdownProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children' | 'value' | 'defaultValue' | 'onChange' | 'size' | 'multiple'> & {
  label?: string; options: readonly AuroraDropdownOption[]; placeholder?: string; allowEmpty?: boolean;
  value?: string; defaultValue?: string; onChange?: ChangeEventHandler<HTMLSelectElement>; onValueChange?: (value: string) => void;
  big?: boolean; roundedCorner?: boolean; error?: ReactNode;
};

export type AuroraAction = {
  label?: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type AuroraActionGroupProps = HTMLAttributes<HTMLDivElement> & {
  actions?: readonly AuroraAction[];
  disabled?: boolean;
  onAction?: (index: number, event: MouseEvent<HTMLButtonElement>) => void;
};

export type AuroraTwinsProps = AuroraActionGroupProps & { big?: boolean };

export type AuroraCircularButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 30 | 40;
  kind?: 'primary' | 'secondary';
};

export type AuroraThumbnailListViewButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  titleText?: ReactNode;
  detail?: ReactNode;
  swapText?: boolean;
};

export type AuroraFloatingActionButtonProps = AuroraActionGroupProps & {
  mode?: 'cta-info' | 'multi-cta-info' | 'cta-secondary' | 'checkbox';
  information?: ReactNode;
  checkboxLabel?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export type AuroraTabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: ReactNode;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
};

export type AuroraTabItem = { value: string; label: ReactNode; disabled?: boolean; controls?: string; id?: string };

export type AuroraTabsProps = Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> & {
  items?: readonly AuroraTabItem[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  activation?: 'automatic' | 'manual';
  onValueChange?: (value: string) => void;
};

export type AuroraPaginationDotsProps = Omit<HTMLAttributes<HTMLElement>, 'defaultValue' | 'onChange'> & {
  pageCount?: number;
  page?: number;
  defaultPage?: number;
  disabled?: boolean;
  onPageChange?: (page: number) => void;
};

export type AuroraSwipeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onProgress' | 'onChange'> & {
  label?: ReactNode;
  completedLabel?: ReactNode;
  completed?: boolean;
  defaultCompleted?: boolean;
  threshold?: number;
  onComplete?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  onProgressChange?: (progress: number) => void;
  onCancel?: () => void;
};

export type AuroraWebSourceProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type AuroraWebPaginationUnitProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  page?: number; direction?: 'previous' | 'next'; selected?: boolean; label?: string; onPageChange?: (page: number) => void;
};

export type AuroraWebAction = { label?: ReactNode; disabled?: boolean; onClick?: (event: MouseEvent<HTMLButtonElement>) => void };

export type AuroraWebTwinsProps = { actions?: readonly AuroraWebAction[]; disabled?: boolean; label?: string; className?: string; onAction?: (index: number, event: MouseEvent<HTMLButtonElement>) => void; appearance?: 'default' | 'primary-hover' | 'secondary-hover' };

export type AuroraWebButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { label?: ReactNode; appearance?: 'default' | 'hover' };

export type AuroraWebFilterLabelProps = ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean; defaultSelected?: boolean; onSelectedChange?: (selected: boolean) => void };

export type AuroraWebSearchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'size' | 'type' | 'children' | 'onChange'> & {
  label?: string; value?: string; defaultValue?: string; onChange?: ChangeEventHandler<HTMLInputElement>; onValueChange?: (value: string) => void; onSearch?: (query: string) => void; onClear?: () => void;
  appearance?: 'default' | 'hover' | 'focused';
};

export type AuroraWebPaginationProps = Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> & {
  pageCount?: number;
  page?: number;
  defaultPage?: number;
  maxVisible?: number;
  disabled?: boolean;
  onPageChange?: (page: number) => void;
};

export type AuroraWebFAQsProps = HTMLAttributes<HTMLElement> & {
  /** The four question slots in the inspected source. No answers or navigation URLs are invented. */
  questions?: readonly ReactNode[];
  disabled?: boolean;
  disabledQuestions?: readonly number[];
  onQuestionSelect?: (index: number, event: MouseEvent<HTMLButtonElement>) => void;
  onSeeAll?: (event: MouseEvent<HTMLButtonElement>) => void;
  onAction?: (action: 'see-all' | `question-${number}`, event: MouseEvent<HTMLButtonElement>) => void;
};

export type AuroraQuestionnaireChoice = { value: string; label: ReactNode; row?: number; disabled?: boolean };

export type AuroraQuestionnaireSheetProps = Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'defaultValue' | 'onChange'> & {
  title?: ReactNode; actionLabel?: ReactNode; onAction?: () => void; onDismiss?: () => void;
  options?: readonly AuroraQuestionnaireChoice[]; value?: string; defaultValue?: string;
  onValueChange?: (value: string) => void; disabled?: boolean; name?: string;
  step?: number; stepCount?: number;
};

export interface AuroraAccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  detail?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  /** Original Figma family axis remains accepted. */
  variant?: { Open?: boolean | 'Yes' | 'No' };
  Open?: boolean | 'Yes' | 'No';
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type AuroraCategorySection = { title: string; items: readonly string[] };

export interface AuroraCategoriesPopupProps extends HTMLAttributes<HTMLDivElement> {
  sections?: readonly AuroraCategorySection[];
  onNavigate?: (section: string, item: string) => void;
  onDismiss?: () => void;
}

export declare function AuroraScope(props: HTMLAttributes<HTMLDivElement> & { children?: ReactNode; theme?: 'dark' | 'white'; background?: 'previous' | 'new' | 'old' | 'earthy' | 'pilate' }): ReactElement;

export declare const AuroraToggleWithText: ComponentType<AuroraToggleWithTextProps>;

export declare const AuroraToggleWithTextN4414_27531: ComponentType<AuroraToggleWithTextProps>;

export declare const AuroraTriplets: ComponentType<AuroraActionGroupProps>;

export declare const AuroraTripletsN10800_55916: ComponentType<AuroraActionGroupProps>;

export declare const AuroraActionStack: ComponentType<AuroraActionGroupProps>;

export declare const AuroraStackedTwinsActionStackN262_43: ComponentType<AuroraActionGroupProps>;

export declare const AuroraCounter: ComponentType<AuroraCounterProps>;

export declare const AuroraCounterN5265_38271: ComponentType<AuroraCounterProps>;

export declare const AuroraTertiaryTwins: ComponentType<AuroraActionGroupProps>;

export declare const AuroraTertiaryTwinsN11610_25502: ComponentType<AuroraActionGroupProps>;

export declare const AuroraSlider: ComponentType<AuroraSliderProps>;

export declare const AuroraRangeSelectorN7899_49440: ComponentType<AuroraSliderProps>;

export declare const AuroraRangeSelector: ComponentType<AuroraSliderProps>;

export declare const AuroraTopNavTabs: ComponentType<AuroraTabsProps>;

export declare const AuroraTopNavTabsN433_585: ComponentType<AuroraTabsProps>;

export declare const AuroraFilterTabs: ComponentType<AuroraTabsProps>;

export declare const AuroraFilterTabsN3712_26677: ComponentType<AuroraTabsProps>;

export declare const AuroraInlineTabs: ComponentType<AuroraTabsProps>;

export declare const AuroraInLineTabsN1522_12813: ComponentType<AuroraTabsProps>;

export declare const AuroraMultiDateJumper: ComponentType<AuroraMultiDateJumperProps>;

export declare const AuroraMultiDateJumperN1794_23135: ComponentType<AuroraMultiDateJumperProps>;

export declare const AuroraSingleDateJumper: ComponentType<AuroraDateControlProps>;

export declare const AuroraSingleDateJumperN1343_8110: ComponentType<AuroraDateControlProps>;

export declare const AuroraFloatingRating: ComponentType<AuroraFloatingRatingProps>;

export declare const AuroraFloatingRatingN19801_47173: ComponentType<AuroraFloatingRatingProps>;

export declare const AuroraCountersCarousel: ComponentType<AuroraCountersCarouselProps>;

export declare const AuroraCountersCarouselN5265_38488: ComponentType<AuroraCountersCarouselProps>;

export declare const AuroraAccordianListViewStateN5623_38642: ComponentType<AuroraAccordionProps>;

export declare const AuroraAccordianListViewStateN5623_38804: ComponentType<AuroraAccordionProps>;

export declare const AuroraAccordianListViewOpen3N12185_49429: ComponentType<AuroraAccordionProps>;

export declare const AuroraQuestionnaireSheet: ComponentType<AuroraQuestionnaireSheetProps>;

export declare const AuroraBottomTrayFormServiceN1794_23330: ComponentType<AuroraQuestionnaireSheetProps>;

export declare const AuroraAllCategoriesTabN10468_56980: ComponentType<AuroraCategoriesPopupProps>;

export declare const AuroraCategoriesPopup: ComponentType<AuroraCategoriesPopupProps>;

export declare const AuroraRadio: ComponentType<AuroraRadioProps>;

export declare const AuroraCheckbox: ComponentType<AuroraCheckboxProps>;

export declare const AuroraToggle: ComponentType<AuroraToggleProps>;

export declare const AuroraTextInput: ComponentType<AuroraTextInputProps>;

export declare const AuroraPhoneField: ComponentType<AuroraPhoneFieldProps>;

export declare const AuroraPhoneFieldN3967_28876: ComponentType<AuroraPhoneFieldProps>;

export declare const AuroraEmailField: ComponentType<AuroraEmailFieldProps>;

export declare const AuroraEmailN3967_28861: ComponentType<AuroraEmailFieldProps>;

export declare const AuroraSearchField: ComponentType<AuroraSearchFieldProps>;

export declare const AuroraSearchFieldN649_1156: ComponentType<AuroraSearchFieldProps>;

export declare const AuroraPasswordField: ComponentType<AuroraPasswordFieldProps>;

export declare const AuroraPasswordFieldN5046_35372: ComponentType<AuroraPasswordFieldProps>;

export declare const AuroraPaginationDots: ComponentType<AuroraPaginationDotsProps>;

export declare const AuroraPaginationDotsN7118_47699: ComponentType<AuroraPaginationDotsProps>;

export declare const AuroraTertiaryButton: ComponentType<AuroraTertiaryButtonProps>;

export declare const AuroraPrimaryButton: ComponentType<AuroraPrimaryButtonProps>;

export declare const AuroraSecondaryButton: ComponentType<AuroraSecondaryButtonProps>;

export declare const AuroraTwins: ComponentType<AuroraTwinsProps>;

export declare const AuroraTwinsN1016_4406: ComponentType<AuroraTwinsProps>;

export declare const AuroraCircularButton: ComponentType<AuroraCircularButtonProps>;

export declare const AuroraCircularActionButtonN14779_38684: ComponentType<AuroraCircularButtonProps>;

export declare const AuroraThumbnailListViewButton: ComponentType<AuroraThumbnailListViewButtonProps>;

export declare const AuroraThumbnailListViewButtonN4064_26973: ComponentType<AuroraThumbnailListViewButtonProps>;

export declare const AuroraFloatingActionButton: ComponentType<AuroraFloatingActionButtonProps>;

export declare const AuroraFloatingActionButtonN7062_47949: ComponentType<AuroraFloatingActionButtonProps>;

export declare const AuroraSwipeButton: ComponentType<AuroraSwipeButtonProps>;

export declare const AuroraSwipeButtonN29020_4183: ComponentType<AuroraSwipeButtonProps>;

export declare const AuroraSingleSelectChip: ComponentType<AuroraChipProps>;

export declare const AuroraMultiSelectChip: ComponentType<AuroraChipProps>;

export declare const AuroraInlineSingleSelectTab: ComponentType<AuroraTabProps>;

export declare const AuroraInLineSingleSelectTabN1522_12795: ComponentType<AuroraTabProps>;

export declare const AuroraFilterTabLabel: ComponentType<AuroraTabProps>;

export declare const AuroraFilterTabLabelsN3712_26688: ComponentType<AuroraTabProps>;

export declare const AuroraDropdown: ComponentType<AuroraDropdownProps>;

export declare const AuroraDropdownN7125_48064: ComponentType<AuroraDropdownProps>;

export declare const AuroraChatInput: ComponentType<AuroraChatInputProps>;

export declare const AuroraChatInputN15926_37574: ComponentType<AuroraChatInputProps>;

export declare const AuroraTopNavTabLabel: ComponentType<AuroraTabProps>;

export declare const AuroraTopNavTabLabelsN433_557: ComponentType<AuroraTabProps>;

export declare const AuroraDateLabels: ComponentType<AuroraDateLabelsProps>;

export declare const AuroraDateLabelsN1794_22929: ComponentType<AuroraDateLabelsProps>;

export declare const AuroraDatePicker: ComponentType<AuroraDatePickerProps>;

export declare const AuroraDatePickerN15518_37445: ComponentType<AuroraDatePickerProps>;

export declare const AuroraRating: ComponentType<AuroraRatingProps>;

export declare const AuroraRatingN20779_47990: ComponentType<AuroraRatingProps>;

export declare const AuroraCounterCard: ComponentType<AuroraCounterCardProps>;

export declare const AuroraCounterCardN5265_38410: ComponentType<AuroraCounterCardProps>;

export declare const AuroraChipSelectorGrid: ComponentType<AuroraChipSelectorGridProps>;

export declare const AuroraChipSelectorGridN4313_28441: ComponentType<AuroraChipSelectorGridProps>;

export declare const AuroraRadioGroup: ComponentType<AuroraRadioGroupProps>;

export declare const AuroraRadioButtonsGroupN6393_46468: ComponentType<AuroraRadioGroupProps>;

export declare const AuroraCheckboxGroup: ComponentType<AuroraCheckboxGroupProps>;

export declare const AuroraCheckboxesGroupN6393_46813: ComponentType<AuroraCheckboxGroupProps>;

export declare const AuroraRadioTiles: ComponentType<AuroraRadioTilesProps>;

export declare const AuroraRadioTilesGroupN7597_49271: ComponentType<AuroraRadioTilesProps>;

export declare const AuroraAccordianListViewN5623_38667: ComponentType<AuroraAccordionProps>;

export declare const AuroraAccordion: ComponentType<AuroraAccordionProps>;

export declare const AuroraMoodRating: ComponentType<AuroraMoodRatingProps>;

export declare const AuroraRatingBADN12997_37026: ComponentType<AuroraMoodRatingProps>;

export declare const AuroraWebPagination: ComponentType<AuroraWebPaginationProps>;

export declare const AuroraWebPaginationDweb: ComponentType<AuroraWebPaginationProps>;

export declare const AuroraWebPaginationWeb: ComponentType<AuroraWebPaginationProps>;

export declare const AuroraWebFAQs: ComponentType<AuroraWebFAQsProps>;

export declare const AuroraWebPaginationUnit: ComponentType<AuroraWebPaginationUnitProps>;

export declare const AuroraWebTwins: ComponentType<AuroraWebTwinsProps>;

export declare const AuroraWebButton: ComponentType<AuroraWebButtonProps>;

export declare const AuroraWebFilterLabel: ComponentType<AuroraWebFilterLabelProps>;

export declare const AuroraWebMobileSearch: ComponentType<AuroraWebSearchProps>;

export declare const AuroraWebSearch: ComponentType<AuroraWebSearchProps>;

export declare const AuroraCard: ForwardRefExoticComponent<AuroraCardProps & RefAttributes<HTMLDivElement>>;

export declare const AuroraBackground: ForwardRefExoticComponent<AuroraBackgroundProps & RefAttributes<HTMLDivElement>>;
