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
  /** Aurora white-alpha tokens, adapted to ink in the white theme. */
  surfaceOpacity?: 10 | 20;
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

export declare const AuroraRadioButtonStateN395_1536: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonStateN395_1540: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonStateN395_1532: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonStateN183_27: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonStateN6393_46341: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonStateN6393_46365: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonStateN6393_46353: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonStateN6393_46377: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN415_4540: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN183_32: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN6393_46682: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN6393_46724: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN6393_46696: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN6393_46717: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN415_4545: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxStateN415_4550: ComponentType<AuroraArchiveProps>;

export declare const AuroraToggleWithText: ComponentType<AuroraToggleWithTextProps>;

export declare const AuroraToggleWithTextN4414_27531: ComponentType<AuroraToggleWithTextProps>;

export declare const AuroraToggleButtonStateN15732_37430: ComponentType<AuroraArchiveProps>;

export declare const AuroraToggleButtonStateN15732_37432: ComponentType<AuroraArchiveProps>;

export declare const AuroraToggleButtonStateN19374_46412: ComponentType<AuroraArchiveProps>;

export declare const AuroraToggleButtonStateN19374_46410: ComponentType<AuroraArchiveProps>;

export declare const AuroraTextInputStateN3967_28856: ComponentType<AuroraArchiveProps>;

export declare const AuroraTextInputStateN3967_28860: ComponentType<AuroraArchiveProps>;

export declare const AuroraTextInputStateN5182_39058: ComponentType<AuroraArchiveProps>;

export declare const AuroraTextInputStateN5182_39070: ComponentType<AuroraArchiveProps>;

export declare const AuroraTextInputStateN9805_55303: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberFieldStateN3967_28870: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberFieldStateN3967_28872: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberFieldStateN28833_1670: ComponentType<AuroraArchiveProps>;

export declare const AuroraPhoneFieldStateN3967_28877: ComponentType<AuroraArchiveProps>;

export declare const AuroraPhoneFieldStateN3967_28879: ComponentType<AuroraArchiveProps>;

export declare const AuroraEmailStateN3967_28862: ComponentType<AuroraArchiveProps>;

export declare const AuroraEmailStateN3967_28864: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchFieldStateN649_1157: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchFieldStateN17613_43872: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchFieldStateN506_33: ComponentType<AuroraArchiveProps>;

export declare const AuroraOTPFieldStateN5046_35312: ComponentType<AuroraArchiveProps>;

export declare const AuroraOTPFieldStateN5046_35331: ComponentType<AuroraArchiveProps>;

export declare const AuroraOTPFieldStateN5046_35332: ComponentType<AuroraArchiveProps>;

export declare const AuroraPasswordFieldStateN5046_35110: ComponentType<AuroraArchiveProps>;

export declare const AuroraPasswordFieldStateN5046_35371: ComponentType<AuroraArchiveProps>;

export declare const AuroraPasswordFieldStateN5046_35370: ComponentType<AuroraArchiveProps>;

export declare const AuroraPasswordFieldStateN5046_35369: ComponentType<AuroraArchiveProps>;

export declare const AuroraIOSKeypadN1_13518: ComponentType<AuroraArchiveProps>;

export declare const AuroraToastStateN17216_43831: ComponentType<AuroraArchiveProps>;

export declare const AuroraToastStateN17216_43839: ComponentType<AuroraArchiveProps>;

export declare const AuroraToastStateN24741_34791: ComponentType<AuroraArchiveProps>;

export declare const AuroraToastStateN24741_34799: ComponentType<AuroraArchiveProps>;

export declare const AuroraToastDarkYesNoN17216_43847: ComponentType<AuroraArchiveProps>;

export declare const AuroraToastDarkNoYesN17216_43855: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3300: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3320: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3312: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3344: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3328: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3340: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3302: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3318: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3356: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3310: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3338: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3326: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3354: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3342: ComponentType<AuroraArchiveProps>;

export declare const AuroraContinuousProgressBarStateN834_3352: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46938: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46952: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46954: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46956: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46958: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46960: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46962: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46964: ComponentType<AuroraArchiveProps>;

export declare const AuroraSleekProgressBarStateN19796_46966: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimedProgressBarN563_2124: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiscreteProgressBarN1754_26084: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiscreteBarStatesStateN1754_26039: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiscreteBarStatesStateN1754_26037: ComponentType<AuroraArchiveProps>;

export declare const AuroraWhiteDiscreteBarStatesStateN9511_54195: ComponentType<AuroraArchiveProps>;

export declare const AuroraWhiteDiscreteBarStatesStateN9511_54197: ComponentType<AuroraArchiveProps>;

export declare const AuroraPaginationDotsStateN7118_47697: ComponentType<AuroraArchiveProps>;

export declare const AuroraPaginationDotsStateN7118_47695: ComponentType<AuroraArchiveProps>;

export declare const AuroraPaginationDotsStateN7118_47696: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsistencyIndicatorStateN24375_15503: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsistencyIndicatorStateN24375_15630: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsistencyIndicatorStateN24375_15780: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsistencyIndicatorStateN24375_15505: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsistencyIndicatorStateN24375_15655: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsistencyIndicatorStateN24375_15530: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsistencyIndicatorStateN24375_15730: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN3001_27716: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN5182_39163: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN3001_27728: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN5182_39161: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN3001_27715: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN5182_39158: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN3001_27725: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryStateN5182_39156: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN795_592: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN5182_39105: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN175_36: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN5182_39103: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN183_3: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN5182_39096: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN795_583: ComponentType<AuroraArchiveProps>;

export declare const AuroraPrimaryStateN5182_39093: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN183_7: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN5182_39139: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN795_428: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN20750_47475: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN5182_39132: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN183_25: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN5182_39130: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN795_437: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN5182_39127: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN7125_48526: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN7125_48527: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN7125_48524: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecondaryStateN7125_48525: ComponentType<AuroraArchiveProps>;

export declare const AuroraTwinsStateN262_42: ComponentType<AuroraArchiveProps>;

export declare const AuroraTwinsStateN1016_4407: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircularActionButtonStateN14779_38683: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircularActionButtonStateN16484_38833: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircularActionButtonStateN14779_38685: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircularActionButtonStateN16484_38843: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircularActionButtonStateN14779_38695: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircularActionButtonStateN16484_38848: ComponentType<AuroraArchiveProps>;

export declare const AuroraTriplets: ComponentType<AuroraActionGroupProps>;

export declare const AuroraTripletsN10800_55916: ComponentType<AuroraActionGroupProps>;

export declare const AuroraActionStack: ComponentType<AuroraActionGroupProps>;

export declare const AuroraStackedTwinsActionStackN262_43: ComponentType<AuroraActionGroupProps>;

export declare const AuroraActionCardStateN2269_29425: ComponentType<AuroraArchiveProps>;

export declare const AuroraActionCardStateN2269_29439: ComponentType<AuroraArchiveProps>;

export declare const AuroraActionCardStateN12218_30983: ComponentType<AuroraArchiveProps>;

export declare const AuroraActionCardStateN13924_33722: ComponentType<AuroraArchiveProps>;

export declare const AuroraActionCardStateN13964_33588: ComponentType<AuroraArchiveProps>;

export declare const AuroraThumbnailListViewButtonStateN3724_26711: ComponentType<AuroraArchiveProps>;

export declare const AuroraThumbnailListViewButtonStateN4064_26974: ComponentType<AuroraArchiveProps>;

export declare const AuroraCounter: ComponentType<AuroraCounterProps>;

export declare const AuroraCounterN5265_38271: ComponentType<AuroraCounterProps>;

export declare const AuroraFloatingActionButtonStateN7062_47954: ComponentType<AuroraArchiveProps>;

export declare const AuroraFloatingActionButtonStateN183_6: ComponentType<AuroraArchiveProps>;

export declare const AuroraFloatingActionButtonStateN15215_37374: ComponentType<AuroraArchiveProps>;

export declare const AuroraFloatingActionButtonStateN14864_38131: ComponentType<AuroraArchiveProps>;

export declare const AuroraTertiaryTwins: ComponentType<AuroraActionGroupProps>;

export declare const AuroraTertiaryTwinsN11610_25502: ComponentType<AuroraActionGroupProps>;

export declare const AuroraSwipeButtonStateN29020_4182: ComponentType<AuroraArchiveProps>;

export declare const AuroraSwipeButtonStateN29020_4184: ComponentType<AuroraArchiveProps>;

export declare const AuroraSingleSelectChipsStateN713_30: ComponentType<AuroraArchiveProps>;

export declare const AuroraSingleSelectChipsStateN6290_53741: ComponentType<AuroraArchiveProps>;

export declare const AuroraSingleSelectChipsStateN713_32: ComponentType<AuroraArchiveProps>;

export declare const AuroraSingleSelectChipsStateN6290_53735: ComponentType<AuroraArchiveProps>;

export declare const AuroraMultiSelectChipsStateN4064_26859: ComponentType<AuroraArchiveProps>;

export declare const AuroraMultiSelectChipsStateN4064_26860: ComponentType<AuroraArchiveProps>;

export declare const AuroraInLineSingleSelectTabStateN1522_12794: ComponentType<AuroraArchiveProps>;

export declare const AuroraInLineSingleSelectTabStateN1522_12798: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilterTabLabelsStateN3712_26689: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilterTabLabelsStateN3712_26691: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN7125_48065: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN7125_48068: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN7125_48089: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN14642_36675: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN7125_48092: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN14642_36678: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN14642_36643: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropdownStateN14642_36670: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberHooksStateN14368_37871: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberHooksStateN962_4650: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberHooksStateN962_4709: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberHooksStateN962_4696: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberHooksStateN962_4680: ComponentType<AuroraArchiveProps>;

export declare const AuroraNumberHooksStateN15885_37412: ComponentType<AuroraArchiveProps>;

export declare const AuroraSlider: ComponentType<AuroraSliderProps>;

export declare const AuroraRangeSelectorN7899_49440: ComponentType<AuroraSliderProps>;

export declare const AuroraRangeSelector: ComponentType<AuroraSliderProps>;

export declare const AuroraProfileStateN17837_44678: ComponentType<AuroraArchiveProps>;

export declare const AuroraProfileStateN17841_44698: ComponentType<AuroraArchiveProps>;

export declare const AuroraProfileStateN23120_4161: ComponentType<AuroraArchiveProps>;

export declare const AuroraMultipleProfilesStateN24480_13104: ComponentType<AuroraArchiveProps>;

export declare const AuroraMultipleProfilesStateN24480_13105: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatusTagsVariantsStateN748_20: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatusTagsVariantsStateN748_19: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatusTagsVariantsStateN748_18: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatusTagsVariantsStateN20754_47475: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatusTagsVariantsStateN748_17: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN406_1775: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN4814_34251: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN18202_44912: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN1343_8204: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN24329_1180: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN4878_34685: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN14725_37409: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN14005_35031: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN2526_25990: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN9783_55311: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextTagsStateN15010_37297: ComponentType<AuroraArchiveProps>;

export declare const AuroraOneN4566_29937: ComponentType<AuroraArchiveProps>;

export declare const AuroraTwoN4566_29936: ComponentType<AuroraArchiveProps>;

export declare const AuroraThreeN4566_29935: ComponentType<AuroraArchiveProps>;

export declare const AuroraFourN4566_29934: ComponentType<AuroraArchiveProps>;

export declare const AuroraFiveN5011_34621: ComponentType<AuroraArchiveProps>;

export declare const AuroraBadgeStateN5011_34559: ComponentType<AuroraArchiveProps>;

export declare const AuroraBadgeStateN17837_44554: ComponentType<AuroraArchiveProps>;

export declare const AuroraBadgeStateN5011_34563: ComponentType<AuroraArchiveProps>;

export declare const AuroraBadgeStateN17837_44569: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomTrayBGStateN6623_50383: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomTrayBGEarthyAuroraBGN8048_50446: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomTraySmallHomepageN15932_37456: ComponentType<AuroraArchiveProps>;

export declare const AuroraClassicAuroraBGStateN649_1: ComponentType<AuroraArchiveProps>;

export declare const AuroraClassicAuroraBGStateN22777_33786: ComponentType<AuroraArchiveProps>;

export declare const AuroraClassicAuroraBGStateN22777_33719: ComponentType<AuroraArchiveProps>;

export declare const AuroraClassicAuroraBGStateN26217_1380: ComponentType<AuroraArchiveProps>;

export declare const AuroraChatInputStateN15926_37575: ComponentType<AuroraArchiveProps>;

export declare const AuroraChatInputStateN15926_37573: ComponentType<AuroraArchiveProps>;

export declare const AuroraChatBubbleStateN16096_37685: ComponentType<AuroraArchiveProps>;

export declare const AuroraChatBubbleStateN16097_37716: ComponentType<AuroraArchiveProps>;

export declare const AuroraChatInterfaceN18506_45279: ComponentType<AuroraArchiveProps>;

export declare const AuroraCompletedClassN12176_30146: ComponentType<AuroraArchiveProps>;

export declare const AuroraButtonIconsStateN1096_11413: ComponentType<AuroraArchiveProps>;

export declare const AuroraButtonIconsStateN1096_11492: ComponentType<AuroraArchiveProps>;

export declare const AuroraButtonIconsStateN1381_8370: ComponentType<AuroraArchiveProps>;

export declare const AuroraButtonIconsStateN1096_8514: ComponentType<AuroraArchiveProps>;

export declare const AuroraButtonIconsStateN15381_37392: ComponentType<AuroraArchiveProps>;

export declare const AuroraButtonIconsStateN8290_50730: ComponentType<AuroraArchiveProps>;

export declare const AuroraTopNavTabLabelsStateN433_549: ComponentType<AuroraArchiveProps>;

export declare const AuroraTopNavTabLabelsStateN433_563: ComponentType<AuroraArchiveProps>;

export declare const AuroraTopNavTabs: ComponentType<AuroraTabsProps>;

export declare const AuroraTopNavTabsN433_585: ComponentType<AuroraTabsProps>;

export declare const AuroraFilterTabs: ComponentType<AuroraTabsProps>;

export declare const AuroraFilterTabsN3712_26677: ComponentType<AuroraTabsProps>;

export declare const AuroraInlineTabs: ComponentType<AuroraTabsProps>;

export declare const AuroraInLineTabsN1522_12813: ComponentType<AuroraTabsProps>;

export declare const AuroraCalendarN7060_47586: ComponentType<AuroraArchiveProps>;

export declare const AuroraDigitalTimerStateN273_250: ComponentType<AuroraArchiveProps>;

export declare const AuroraDigitalTimerStateN3885_27878: ComponentType<AuroraArchiveProps>;

export declare const AuroraMultiDateJumper: ComponentType<AuroraMultiDateJumperProps>;

export declare const AuroraMultiDateJumperN1794_23135: ComponentType<AuroraMultiDateJumperProps>;

export declare const AuroraDateLabelsStateN7899_51607: ComponentType<AuroraArchiveProps>;

export declare const AuroraDateLabelsStateN12071_30353: ComponentType<AuroraArchiveProps>;

export declare const AuroraDateLabelsStateN1794_23104: ComponentType<AuroraArchiveProps>;

export declare const AuroraSingleDateJumper: ComponentType<AuroraDateControlProps>;

export declare const AuroraSingleDateJumperN1343_8110: ComponentType<AuroraDateControlProps>;

export declare const AuroraDatePickerStateN15518_37443: ComponentType<AuroraArchiveProps>;

export declare const AuroraDatePickerStateN15518_37446: ComponentType<AuroraArchiveProps>;

export declare const AuroraDatePickerStateN15557_37416: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimerWithActionN16543_38390: ComponentType<AuroraArchiveProps>;

export declare const AuroraMedium2ThumbnailListViewStateN5182_40583: ComponentType<AuroraArchiveProps>;

export declare const AuroraMedium2ThumbnailListViewStateN7418_48387: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewStateN759_3959: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewStateN16762_39744: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewStateN13338_33150: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewStateN8926_54778: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewStateN15166_37363: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewStateN11729_25978: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewStateN21034_47708: ComponentType<AuroraArchiveProps>;

export declare const AuroraIconThumbnailListViewStateN15428_37473: ComponentType<AuroraArchiveProps>;

export declare const AuroraIconThumbnailListViewStateN3000_26234: ComponentType<AuroraArchiveProps>;

export declare const AuroraIconThumbnailListViewStateN3000_26178: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnclosedImageThumbnailListViewN9204_55440: ComponentType<AuroraArchiveProps>;

export declare const AuroraTextOnlyThumbnailListViewStateN9204_54960: ComponentType<AuroraArchiveProps>;

export declare const AuroraTextOnlyThumbnailListViewStateN6247_48845: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailListViewStateN834_3398: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailListViewStateN14551_36297: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailListViewStateN13688_33441: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailListViewStateN4462_27890: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailListViewStateN13688_33456: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailListViewStateN12568_29985: ComponentType<AuroraArchiveProps>;

export declare const AuroraBulletListViewStateN3966_27387: ComponentType<AuroraArchiveProps>;

export declare const AuroraBulletListViewStateN13955_33652: ComponentType<AuroraArchiveProps>;

export declare const AuroraProfileStateN9561_67663: ComponentType<AuroraArchiveProps>;

export declare const AuroraProfileStateN17044_46419: ComponentType<AuroraArchiveProps>;

export declare const AuroraProfileStateN14005_36103: ComponentType<AuroraArchiveProps>;

export declare const AuroraTinyThumbnailListviewStateN24418_3621: ComponentType<AuroraArchiveProps>;

export declare const AuroraTinyThumbnailListviewStateN24418_3623: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailActionIconListViewN24741_34641: ComponentType<AuroraArchiveProps>;

export declare const AuroraSectionMessageStateN3712_26674: ComponentType<AuroraArchiveProps>;

export declare const AuroraSectionMessageStateN5265_38497: ComponentType<AuroraArchiveProps>;

export declare const AuroraSectionMessageStateN7126_49769: ComponentType<AuroraArchiveProps>;

export declare const AuroraFloatingRating: ComponentType<AuroraFloatingRatingProps>;

export declare const AuroraFloatingRatingN19801_47173: ComponentType<AuroraFloatingRatingProps>;

export declare const AuroraRatingStateN19799_47118: ComponentType<AuroraArchiveProps>;

export declare const AuroraRatingStateN20779_47991: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomNavBarStateN12212_30841: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomNavBarStateN12240_30258: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomNavBarStateN12271_30157: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomNavBarStateN17428_43834: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomNavBarStateN19306_46341: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomNavBarStateN23078_2322: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomNavBarStateN260_34: ComponentType<AuroraArchiveProps>;

export declare const AuroraBottomSheetActionTrayN23037_15069: ComponentType<AuroraArchiveProps>;

export declare const AuroraFeedbackConfirmationN15939_37942: ComponentType<AuroraArchiveProps>;

export declare const AuroraWidgetHeaderStateN6353_39823: ComponentType<AuroraArchiveProps>;

export declare const AuroraWidgetHeaderStateN12205_30011: ComponentType<AuroraArchiveProps>;

export declare const AuroraWidgetHeaderStateN13298_33214: ComponentType<AuroraArchiveProps>;

export declare const AuroraWidgetHeaderStateN13298_33249: ComponentType<AuroraArchiveProps>;

export declare const AuroraWidgetHeaderStateN18521_45279: ComponentType<AuroraArchiveProps>;

export declare const AuroraWidgetDetailStateN20779_48205: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimerCardN273_271: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlanCardN982_3792: ComponentType<AuroraArchiveProps>;

export declare const AuroraWideCatalogCardN4342_28365: ComponentType<AuroraArchiveProps>;

export declare const AuroraPassCardN273_141: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpgradePlanN626_3791: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpcomingCardStateN771_3042: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpcomingCardStateN798_513: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpcomingCardStateN771_3132: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpcomingCardStateN798_500: ComponentType<AuroraArchiveProps>;

export declare const AuroraBigPosterCardStateN5007_35225: ComponentType<AuroraArchiveProps>;

export declare const AuroraBigPosterCardStateN5007_35224: ComponentType<AuroraArchiveProps>;

export declare const AuroraBigPosterCardStateN19966_47070: ComponentType<AuroraArchiveProps>;

export declare const AuroraWideEnclosedCatalogCardStateN5007_35239: ComponentType<AuroraArchiveProps>;

export declare const AuroraWideEnclosedCatalogCardStateN17062_44432: ComponentType<AuroraArchiveProps>;

export declare const AuroraWideEnclosedCatalogCardStateN5007_35271: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCardStateN5007_35278: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCardStateN5007_35279: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCardStateN5007_35281: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCardStateN5175_58492: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCardStateN6956_47184: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCardStateN20056_47339: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCardStateN16546_38396: ComponentType<AuroraArchiveProps>;

export declare const AuroraBigImageCardStateN5166_37769: ComponentType<AuroraArchiveProps>;

export declare const AuroraBigImageCardStateN5166_37770: ComponentType<AuroraArchiveProps>;

export declare const AuroraBigImageCardStateN5175_62947: ComponentType<AuroraArchiveProps>;

export declare const AuroraBigImageCardStateN5166_37812: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailCardStateN5175_61311: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailCardStateN7725_49708: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailCardStateN16784_39444: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailCardStateN20775_47629: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailCardStateN20775_47608: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailCardStateN20775_47689: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailCardStateN20775_47660: ComponentType<AuroraArchiveProps>;

export declare const AuroraCounterCardStateN5265_38409: ComponentType<AuroraArchiveProps>;

export declare const AuroraCounterCardStateN5265_38424: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailCardStateN5175_61357: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailCardStateN5659_38240: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailCardStateN7429_49306: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailCardStateN17043_39780: ComponentType<AuroraArchiveProps>;

export declare const AuroraMediumThumbnailCardStateN20778_47948: ComponentType<AuroraArchiveProps>;

export declare const AuroraHabitCardStateN6981_47701: ComponentType<AuroraArchiveProps>;

export declare const AuroraHabitCardStateN7060_47205: ComponentType<AuroraArchiveProps>;

export declare const AuroraHabitCardStateN11609_25626: ComponentType<AuroraArchiveProps>;

export declare const AuroraTallCatalogCardStateN6974_47487: ComponentType<AuroraArchiveProps>;

export declare const AuroraTallCatalogCardStateN7118_47946: ComponentType<AuroraArchiveProps>;

export declare const AuroraTallCatalogCardStateN7857_51353: ComponentType<AuroraArchiveProps>;

export declare const AuroraMembershipCardStateN392_2131: ComponentType<AuroraArchiveProps>;

export declare const AuroraMembershipCardStateN7289_48948: ComponentType<AuroraArchiveProps>;

export declare const AuroraProgressCardStateN1754_31843: ComponentType<AuroraArchiveProps>;

export declare const AuroraProgressCardStateN7493_49820: ComponentType<AuroraArchiveProps>;

export declare const AuroraProgressCardStateN9554_67250: ComponentType<AuroraArchiveProps>;

export declare const AuroraProgressCardStateN9554_67280: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquareSmallImageCardStateN7597_49219: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquareSmallImageCardStateN7597_49223: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquareSmallImageCardStateN5175_96068: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquareEnclosedCatalogCardStateN5007_35274: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquareEnclosedCatalogCardStateN5007_35272: ComponentType<AuroraArchiveProps>;

export declare const AuroraHugeEnclosedCatalogCardStateN19760_46705: ComponentType<AuroraArchiveProps>;

export declare const AuroraHugeEnclosedCatalogCardStateN19845_46844: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnclosedActionCardStateN11759_25867: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnclosedActionCardStateN11759_25880: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnclosedActionCardStateN11759_26055: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnclosedActionCardStateN11759_26155: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsStateN12480_30419: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsStateN12480_30521: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircleSquareThumbnailCardStateN13290_33361: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircleSquareThumbnailCardStateN13302_32934: ComponentType<AuroraArchiveProps>;

export declare const AuroraCircleSquareThumbnailCardStateN18350_45025: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpcomingClassesStateN13305_33013: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpcomingClassesStateN13311_33311: ComponentType<AuroraArchiveProps>;

export declare const AuroraUpcomingClassesStateN20720_47425: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextMenuStateN13310_32965: ComponentType<AuroraArchiveProps>;

export declare const AuroraContextMenuStateN13310_32970: ComponentType<AuroraArchiveProps>;

export declare const AuroraWideNoActionEnclosedCatalogCardStateN5597_38020: ComponentType<AuroraArchiveProps>;

export declare const AuroraWideNoActionEnclosedCatalogCardStateN14031_37239: ComponentType<AuroraArchiveProps>;

export declare const AuroraHugeCatalogCardStateN10729_57029: ComponentType<AuroraArchiveProps>;

export declare const AuroraPackCardDetailN14968_37894: ComponentType<AuroraArchiveProps>;

export declare const AuroraGraphN24741_37121: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsTileStateN16791_39516: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsTileStateN17124_43708: ComponentType<AuroraArchiveProps>;

export declare const AuroraData1N17124_43705: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiscreteProgressCardStateN22695_5671: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiscreteProgressCardStateN22695_5701: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsCardsFullWidthStateN24370_3659: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsCardsFullWidthStateN24370_4926: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsCardsFullWidthStateN24522_12532: ComponentType<AuroraArchiveProps>;

export declare const AuroraStatsCardsFullWidthStateN24370_4964: ComponentType<AuroraArchiveProps>;

export declare const AuroraTallCatalogCardMedium2N18577_46259: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailListViewYesN759_3944: ComponentType<AuroraArchiveProps>;

export declare const AuroraNoIconInfoOnlyListviewModuleN9204_55070: ComponentType<AuroraArchiveProps>;

export declare const AuroraMultiActionModuleN839_161: ComponentType<AuroraArchiveProps>;

export declare const AuroraSingleActionModuleN4288_27845: ComponentType<AuroraArchiveProps>;

export declare const AuroraHugeThumbnailModuleN5223_38088: ComponentType<AuroraArchiveProps>;

export declare const AuroraInfoOnlyModuleN4288_27846: ComponentType<AuroraArchiveProps>;

export declare const AuroraClickableInfoModuleN4288_27848: ComponentType<AuroraArchiveProps>;

export declare const AuroraClickableNoIconInfoModuleN6487_45250: ComponentType<AuroraArchiveProps>;

export declare const AuroraFAQN589_2301: ComponentType<AuroraArchiveProps>;

export declare const AuroraRTBN649_72: ComponentType<AuroraArchiveProps>;

export declare const AuroraQuickLinksN2676_26273: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnclosedListviewStateN7262_48016: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnclosedListviewStateN7325_49858: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailModuleListviewStateN6487_45162: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmallThumbnailModuleListviewStateN20252_51425: ComponentType<AuroraArchiveProps>;

export declare const AuroraListViewActionCardStateN13964_33759: ComponentType<AuroraArchiveProps>;

export declare const AuroraListViewActionCardStateN13996_34770: ComponentType<AuroraArchiveProps>;

export declare const AuroraSKUCardListViewN18360_46149: ComponentType<AuroraArchiveProps>;

export declare const AuroraBulletsListModuleStateN4288_27847: ComponentType<AuroraArchiveProps>;

export declare const AuroraBulletsListModuleStateN13958_33547: ComponentType<AuroraArchiveProps>;

export declare const AuroraListviewActionCardWithTitleN24741_34769: ComponentType<AuroraArchiveProps>;

export declare const AuroraLoggingStatsCardStateN24741_35483: ComponentType<AuroraArchiveProps>;

export declare const AuroraLoggingStatsCardStateN24741_36108: ComponentType<AuroraArchiveProps>;

export declare const AuroraChipSelectorGridStateN1522_13498: ComponentType<AuroraArchiveProps>;

export declare const AuroraChipSelectorGridStateN4313_28517: ComponentType<AuroraArchiveProps>;

export declare const AuroraChipSelectorGridStateN6393_45544: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonsGroupStateN14031_36207: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonsGroupStateN14031_36153: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonsGroupStateN6393_46467: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioButtonsGroupStateN1522_13638: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxesGroupStateN1522_13717: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckboxesGroupStateN6393_46812: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioTilesGroupStateN7126_48633: ComponentType<AuroraArchiveProps>;

export declare const AuroraRadioTilesGroupStateN7597_49314: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN14005_36551: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN18060_44873: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN14010_34457: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN14005_36716: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN14033_35757: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN14033_35868: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN14031_34692: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN14005_36636: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN17044_46321: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostStateN24372_14082: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimelineN18561_46388: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN415_4633: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN415_4631: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN16083_37596: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN433_1: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN433_43: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN557_2196: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN17011_39575: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN4016_27108: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN13296_33022: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN649_1375: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN3997_27349: ComponentType<AuroraArchiveProps>;

export declare const AuroraTitlebarVariantsStateN5166_38108: ComponentType<AuroraArchiveProps>;

export declare const AuroraSchedulePageTitleBarN254_394: ComponentType<AuroraArchiveProps>;

export declare const AuroraCatalogCarouselStateN4277_55682: ComponentType<AuroraArchiveProps>;

export declare const AuroraCatalogCarouselStateN4277_56041: ComponentType<AuroraArchiveProps>;

export declare const AuroraCatalogCarouselStateN1451_8489: ComponentType<AuroraArchiveProps>;

export declare const AuroraCatalogCarouselStateN5175_95453: ComponentType<AuroraArchiveProps>;

export declare const AuroraCatalogCarouselStateN2624_25694: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostersCarouselStateN264_64: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostersCarouselStateN626_2785: ComponentType<AuroraArchiveProps>;

export declare const AuroraPostersCarouselStateN19966_46988: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimerOfferCarouselStateN273_285: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimerOfferCarouselStateN557_2416: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimerOfferCarouselStateN273_170: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCarouselAllFormatsStateN268_233: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCarouselAllFormatsStateN1096_12557: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCarouselAllFormatsStateN6956_47095: ComponentType<AuroraArchiveProps>;

export declare const AuroraCirclesCarouselAllFormatsStateN6956_47221: ComponentType<AuroraArchiveProps>;

export declare const AuroraExpertsCarouselN273_110: ComponentType<AuroraArchiveProps>;

export declare const AuroraImageCarouselStateN5166_37789: ComponentType<AuroraArchiveProps>;

export declare const AuroraImageCarouselStateN5166_37791: ComponentType<AuroraArchiveProps>;

export declare const AuroraImageCarouselStateN5166_37829: ComponentType<AuroraArchiveProps>;

export declare const AuroraCountersCarousel: ComponentType<AuroraCountersCarouselProps>;

export declare const AuroraCountersCarouselN5265_38488: ComponentType<AuroraCountersCarouselProps>;

export declare const AuroraWideCatalogCarouselN7118_47887: ComponentType<AuroraArchiveProps>;

export declare const AuroraTallCatalogCarouselStateN6974_47578: ComponentType<AuroraArchiveProps>;

export declare const AuroraTallCatalogCarouselStateN7425_49204: ComponentType<AuroraArchiveProps>;

export declare const AuroraTallCatalogCarouselStateN7857_51414: ComponentType<AuroraArchiveProps>;

export declare const AuroraOffersCarouselStateN6956_47327: ComponentType<AuroraArchiveProps>;

export declare const AuroraOffersCarouselStateN9204_55486: ComponentType<AuroraArchiveProps>;

export declare const AuroraFitnessStatsCarouselStateN16799_39642: ComponentType<AuroraArchiveProps>;

export declare const AuroraFitnessStatsCarouselStateN17139_43636: ComponentType<AuroraArchiveProps>;

export declare const AuroraThumbnailCardCarouselStateN17043_39800: ComponentType<AuroraArchiveProps>;

export declare const AuroraThumbnailCardCarouselStateN17043_39955: ComponentType<AuroraArchiveProps>;

export declare const AuroraThumbnailCardCarouselStateN17043_40201: ComponentType<AuroraArchiveProps>;

export declare const AuroraPageHeaderStoreStateN7126_48734: ComponentType<AuroraArchiveProps>;

export declare const AuroraPageHeaderPosterAndProgramStateN14864_38025: ComponentType<AuroraArchiveProps>;

export declare const AuroraPageHeaderFormatStateN14864_37836: ComponentType<AuroraArchiveProps>;

export declare const AuroraPageHeaderUserStateN14864_37643: ComponentType<AuroraArchiveProps>;

export declare const AuroraPageHeaderUserStateN17025_39634: ComponentType<AuroraArchiveProps>;

export declare const AuroraPageHeaderLandscape169StateN14864_37528: ComponentType<AuroraArchiveProps>;

export declare const AuroraCenterAndClassDetailHeaderStateN17759_44540: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN9446_54120: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN9446_54157: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN9446_54240: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN9446_54302: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN12624_32049: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN13336_33140: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN13341_33152: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN16629_39448: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN4913_34318: ComponentType<AuroraArchiveProps>;

export declare const AuroraFreeTextStateN1409_13888: ComponentType<AuroraArchiveProps>;

export declare const AuroraConfirmationHeaderStateN9360_54242: ComponentType<AuroraArchiveProps>;

export declare const AuroraConfirmationHeaderStateN13339_33169: ComponentType<AuroraArchiveProps>;

export declare const AuroraConfirmationHeaderStateN9360_54251: ComponentType<AuroraArchiveProps>;

export declare const AuroraConfirmationHeaderStateN9360_54260: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckoutStateN9360_54268: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckoutStateN13908_33381: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckoutStateN9360_54280: ComponentType<AuroraArchiveProps>;

export declare const AuroraQuotesN3285_26647: ComponentType<AuroraArchiveProps>;

export declare const AuroraTestimonialsStateN273_294: ComponentType<AuroraArchiveProps>;

export declare const AuroraTestimonialsStateN4850_34660: ComponentType<AuroraArchiveProps>;

export declare const AuroraTestimonialsStateN13888_33425: ComponentType<AuroraArchiveProps>;

export declare const AuroraTestimonialsStateN20055_46960: ComponentType<AuroraArchiveProps>;

export declare const AuroraGroupInGridN17215_43971: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent3ColumnRectangleGridN589_3969: ComponentType<AuroraArchiveProps>;

export declare const AuroraWorkoutByIntensityN268_295: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent3ColumnCircleGridStateN2527_26450: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent3ColumnCircleGridStateN2527_26486: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent3ColumnSquareGridN5175_96154: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent2ColumnRectangleGridStateN589_4005: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent2ColumnRectangleGridStateN19352_46376: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent2ColumnRectangleGridStateN19966_46948: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent2ColumnRectangleGridStateN19342_46401: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent2ColumnRectangleGridStateN5671_43258: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent2ColumnActivityGridN16803_39830: ComponentType<AuroraArchiveProps>;

export declare const AuroraSKUCardGridStateN16784_39676: ComponentType<AuroraArchiveProps>;

export declare const AuroraSKUCardGridStateN20775_47873: ComponentType<AuroraArchiveProps>;

export declare const AuroraAddressAccordianStateN1550_19937: ComponentType<AuroraArchiveProps>;

export declare const AuroraAddressAccordianStateN1550_19946: ComponentType<AuroraArchiveProps>;

export declare const AuroraWaitlistAccordianStateN17761_44407: ComponentType<AuroraArchiveProps>;

export declare const AuroraWaitlistAccordianStateN17761_44412: ComponentType<AuroraArchiveProps>;

export declare const AuroraInfoAccordianStateN1551_19933: ComponentType<AuroraArchiveProps>;

export declare const AuroraInfoAccordianStateN1551_19942: ComponentType<AuroraArchiveProps>;

export declare const AuroraInfoAccordianStateN1551_19943: ComponentType<AuroraArchiveProps>;

export declare const AuroraInfoAccordianStateN2943_26351: ComponentType<AuroraArchiveProps>;

export declare const AuroraAccordianListViewStateN5623_38642: ComponentType<AuroraAccordionProps>;

export declare const AuroraAccordianListViewStateN5623_38804: ComponentType<AuroraAccordionProps>;

export declare const AuroraAccordianListViewOpen3N12185_49429: ComponentType<AuroraAccordionProps>;

export declare const AuroraKeyboardAddonsN17044_46190: ComponentType<AuroraArchiveProps>;

export declare const AuroraKeyboardsStateN17044_46166: ComponentType<AuroraArchiveProps>;

export declare const AuroraKeyboardsStateN17044_46167: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFigmaCoverStateN13114_32861: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFigmaCoverStateN13112_32843: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFigmaCoverStateN13090_34290: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFigmaCoverStateN13090_34293: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileCohortCoverN13649_33241: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFlowCoverStateN14286_36247: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFlowCoverStateN14286_36239: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFlowCoverStateN13771_33294: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileFlowCoverStateN13791_33352: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileNoteStateN13771_33478: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileNoteStateN13771_33466: ComponentType<AuroraArchiveProps>;

export declare const AuroraFileNoteStateN13771_33464: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilePreviewPrototypeN13791_33367: ComponentType<AuroraArchiveProps>;

export declare const AuroraDSElementStatusStateN14628_36408: ComponentType<AuroraArchiveProps>;

export declare const AuroraDSElementStatusStateN14628_36406: ComponentType<AuroraArchiveProps>;

export declare const AuroraDSElementStatusStateN14628_36373: ComponentType<AuroraArchiveProps>;

export declare const AuroraDSElementStatusStateN14628_36577: ComponentType<AuroraArchiveProps>;

export declare const AuroraDSElementStatusStateN14782_37327: ComponentType<AuroraArchiveProps>;

export declare const AuroraUserIntentN17122_43683: ComponentType<AuroraArchiveProps>;

export declare const AuroraSpacingBlockStateN6348_39565: ComponentType<AuroraArchiveProps>;

export declare const AuroraSpacingBlockStateN6348_39574: ComponentType<AuroraArchiveProps>;

export declare const AuroraEmptyHouseStateN4601_27987: ComponentType<AuroraArchiveProps>;

export declare const AuroraOpenHouseStateN4410_29167: ComponentType<AuroraArchiveProps>;

export declare const AuroraOpenHouseStateN4601_27993: ComponentType<AuroraArchiveProps>;

export declare const AuroraImageN13338_33149: ComponentType<AuroraArchiveProps>;

export declare const AuroraHelpN4410_29189: ComponentType<AuroraArchiveProps>;

export declare const AuroraAlertN4410_29187: ComponentType<AuroraArchiveProps>;

export declare const AuroraInfoStateN4410_29188: ComponentType<AuroraArchiveProps>;

export declare const AuroraInfoStateN16803_39613: ComponentType<AuroraArchiveProps>;

export declare const AuroraAddLocationN4410_29237: ComponentType<AuroraArchiveProps>;

export declare const AuroraLocationStateN4410_29238: ComponentType<AuroraArchiveProps>;

export declare const AuroraLocationStateN19845_46827: ComponentType<AuroraArchiveProps>;

export declare const AuroraLocationStateN4602_28173: ComponentType<AuroraArchiveProps>;

export declare const AuroraLocationDetectedStateN12604_30126: ComponentType<AuroraArchiveProps>;

export declare const AuroraLocationDetectedStateN12606_30130: ComponentType<AuroraArchiveProps>;

export declare const AuroraNavigationN13326_33026: ComponentType<AuroraArchiveProps>;

export declare const AuroraLeanN15693_37707: ComponentType<AuroraArchiveProps>;

export declare const AuroraAthleticN15693_37705: ComponentType<AuroraArchiveProps>;

export declare const AuroraAverageN15693_37706: ComponentType<AuroraArchiveProps>;

export declare const AuroraOverweightN15693_37704: ComponentType<AuroraArchiveProps>;

export declare const AuroraObeseN15693_37703: ComponentType<AuroraArchiveProps>;

export declare const AuroraRatingBADStateN12997_37024: ComponentType<AuroraArchiveProps>;

export declare const AuroraRatingBADStateN12997_37027: ComponentType<AuroraArchiveProps>;

export declare const AuroraRatingBADStateN12997_37043: ComponentType<AuroraArchiveProps>;

export declare const AuroraRatingBADStateN12997_37052: ComponentType<AuroraArchiveProps>;

export declare const AuroraFitbitN24368_992: ComponentType<AuroraArchiveProps>;

export declare const AuroraGoogleFitN24368_993: ComponentType<AuroraArchiveProps>;

export declare const AuroraAppleHealthN24368_991: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilterSliderN4410_29253: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilterStateN4410_29252: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilterStateN16200_55607: ComponentType<AuroraArchiveProps>;

export declare const AuroraCogSettingsN4410_29273: ComponentType<AuroraArchiveProps>;

export declare const AuroraKebabHorizontalN4410_29272: ComponentType<AuroraArchiveProps>;

export declare const AuroraKebabVerticalN4414_33975: ComponentType<AuroraArchiveProps>;

export declare const AuroraNotificationStateN5189_37931: ComponentType<AuroraArchiveProps>;

export declare const AuroraNotificationStateN17837_44556: ComponentType<AuroraArchiveProps>;

export declare const AuroraNotificationStateN5396_37793: ComponentType<AuroraArchiveProps>;

export declare const AuroraCrossN4470_27969: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlusEnclosedAddN4814_34302: ComponentType<AuroraArchiveProps>;

export declare const AuroraCloseEnclosedN4814_34301: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlusAddN4835_34804: ComponentType<AuroraArchiveProps>;

export declare const AuroraMinusDashN5265_38267: ComponentType<AuroraArchiveProps>;

export declare const AuroraRemoveEnclosedMinusN4814_34296: ComponentType<AuroraArchiveProps>;

export declare const AuroraHomeN10259_55216: ComponentType<AuroraArchiveProps>;

export declare const AuroraFitnessN10259_55226: ComponentType<AuroraArchiveProps>;

export declare const AuroraApparelN6248_51954: ComponentType<AuroraArchiveProps>;

export declare const AuroraWellnessN10285_55209: ComponentType<AuroraArchiveProps>;

export declare const AuroraCategoryListStateN12606_30153: ComponentType<AuroraArchiveProps>;

export declare const AuroraCategoryListStateN12606_30151: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoesN13337_33035: ComponentType<AuroraArchiveProps>;

export declare const AuroraMaskN15215_37608: ComponentType<AuroraArchiveProps>;

export declare const AuroraGlovesN15215_37630: ComponentType<AuroraArchiveProps>;

export declare const AuroraMobileN15215_37631: ComponentType<AuroraArchiveProps>;

export declare const AuroraYogaMattN15215_37632: ComponentType<AuroraArchiveProps>;

export declare const AuroraWeightLogN15235_37515: ComponentType<AuroraArchiveProps>;

export declare const AuroraSipperN15221_37734: ComponentType<AuroraArchiveProps>;

export declare const AuroraTableTennisN17257_44135: ComponentType<AuroraArchiveProps>;

export declare const AuroraRacquetN17283_43942: ComponentType<AuroraArchiveProps>;

export declare const AuroraShuttleN17307_43895: ComponentType<AuroraArchiveProps>;

export declare const AuroraSwimWearN17307_43896: ComponentType<AuroraArchiveProps>;

export declare const AuroraTennisBallN17283_43940: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquashBallN17283_43941: ComponentType<AuroraArchiveProps>;

export declare const AuroraTableTennisN17283_43931: ComponentType<AuroraArchiveProps>;

export declare const AuroraTableTennisBatN17283_43932: ComponentType<AuroraArchiveProps>;

export declare const AuroraTableTennisBallN17283_43933: ComponentType<AuroraArchiveProps>;

export declare const AuroraSwimmingCapN17345_43846: ComponentType<AuroraArchiveProps>;

export declare const AuroraTowelN20082_47282: ComponentType<AuroraArchiveProps>;

export declare const AuroraDumbleN20708_47502: ComponentType<AuroraArchiveProps>;

export declare const AuroraWatchN22807_33767: ComponentType<AuroraArchiveProps>;

export declare const AuroraWatch2N22815_33799: ComponentType<AuroraArchiveProps>;

export declare const AuroraMassagerN24953_1661: ComponentType<AuroraArchiveProps>;

export declare const AuroraComponent2WheelerParkingN15230_37726: ComponentType<AuroraArchiveProps>;

export declare const AuroraCarParkingN15230_37729: ComponentType<AuroraArchiveProps>;

export declare const AuroraCCTVN15230_37740: ComponentType<AuroraArchiveProps>;

export declare const AuroraLockerN15230_37727: ComponentType<AuroraArchiveProps>;

export declare const AuroraShowerN15230_37728: ComponentType<AuroraArchiveProps>;

export declare const AuroraNoLockerN15248_37319: ComponentType<AuroraArchiveProps>;

export declare const AuroraNoShowerN15248_37335: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoeRackN15340_37367: ComponentType<AuroraArchiveProps>;

export declare const AuroraTVN15340_37408: ComponentType<AuroraArchiveProps>;

export declare const AuroraCafeN15340_37435: ComponentType<AuroraArchiveProps>;

export declare const AuroraWifiN25560_1015: ComponentType<AuroraArchiveProps>;

export declare const AuroraChangingRoomN17539_44236: ComponentType<AuroraArchiveProps>;

export declare const AuroraSaunaN15343_37462: ComponentType<AuroraArchiveProps>;

export declare const AuroraSteamN20438_47559: ComponentType<AuroraArchiveProps>;

export declare const AuroraWashroomN15348_37578: ComponentType<AuroraArchiveProps>;

export declare const AuroraWashroom2N15348_37579: ComponentType<AuroraArchiveProps>;

export declare const AuroraSanitiserN15348_37591: ComponentType<AuroraArchiveProps>;

export declare const AuroraCourtN17254_44128: ComponentType<AuroraArchiveProps>;

export declare const AuroraTemperaturePoolN17254_44129: ComponentType<AuroraArchiveProps>;

export declare const AuroraSwimmingPoolN17283_43993: ComponentType<AuroraArchiveProps>;

export declare const AuroraFacialRecognitionN17533_43904: ComponentType<AuroraArchiveProps>;

export declare const AuroraDrinkingWaterN17535_43993: ComponentType<AuroraArchiveProps>;

export declare const AuroraSittingAreaN17536_44001: ComponentType<AuroraArchiveProps>;

export declare const AuroraAirConditioningN17536_44065: ComponentType<AuroraArchiveProps>;

export declare const AuroraIceBathN25559_1005: ComponentType<AuroraArchiveProps>;

export declare const AuroraSpaAndMassageN25561_1303: ComponentType<AuroraArchiveProps>;

export declare const AuroraIVTherapyN25563_1309: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchStateN4566_33565: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchStateN6393_44047: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchMenuN12704_30146: ComponentType<AuroraArchiveProps>;

export declare const AuroraShareN4410_29312: ComponentType<AuroraArchiveProps>;

export declare const AuroraShareBoxN4410_29311: ComponentType<AuroraArchiveProps>;

export declare const AuroraExitN15824_37429: ComponentType<AuroraArchiveProps>;

export declare const AuroraTailArrowUpN4410_29375: ComponentType<AuroraArchiveProps>;

export declare const AuroraTailArrowDownN4410_29373: ComponentType<AuroraArchiveProps>;

export declare const AuroraTailArrowSlantN11006_55687: ComponentType<AuroraArchiveProps>;

export declare const AuroraTailArrowLeftN4410_29371: ComponentType<AuroraArchiveProps>;

export declare const AuroraChevronUpN4410_29370: ComponentType<AuroraArchiveProps>;

export declare const AuroraChevronRightN4410_29374: ComponentType<AuroraArchiveProps>;

export declare const AuroraChevronLeftN4410_29369: ComponentType<AuroraArchiveProps>;

export declare const AuroraChevronDownN4410_29368: ComponentType<AuroraArchiveProps>;

export declare const AuroraTailArrowRightN4410_29372: ComponentType<AuroraArchiveProps>;

export declare const AuroraSwapN4410_29408: ComponentType<AuroraArchiveProps>;

export declare const AuroraShortN4814_34287: ComponentType<AuroraArchiveProps>;

export declare const AuroraChangeN4814_34288: ComponentType<AuroraArchiveProps>;

export declare const AuroraErrorN9942_55133: ComponentType<AuroraArchiveProps>;

export declare const AuroraTickCheckStateN4410_29416: ComponentType<AuroraArchiveProps>;

export declare const AuroraTickCheckStateN4620_30543: ComponentType<AuroraArchiveProps>;

export declare const AuroraBoundedTickCheckStateN4473_28142: ComponentType<AuroraArchiveProps>;

export declare const AuroraBoundedTickCheckStateN4620_30542: ComponentType<AuroraArchiveProps>;

export declare const AuroraBoundedTickCheckStateN6448_44501: ComponentType<AuroraArchiveProps>;

export declare const AuroraInstructionOTPN4410_29462: ComponentType<AuroraArchiveProps>;

export declare const AuroraFingerprintN4410_29463: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecurityShieldLockedN4410_29465: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecurityShieldAddN4410_29460: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecurityShieldTickN5592_38019: ComponentType<AuroraArchiveProps>;

export declare const AuroraLockStateN4410_29461: ComponentType<AuroraArchiveProps>;

export declare const AuroraLockStateN20645_47426: ComponentType<AuroraArchiveProps>;

export declare const AuroraLockStateN5865_38590: ComponentType<AuroraArchiveProps>;

export declare const AuroraSecurityShieldLogBigN6451_44568: ComponentType<AuroraArchiveProps>;

export declare const AuroraProfileN5176_37821: ComponentType<AuroraArchiveProps>;

export declare const AuroraFemaleN5176_37822: ComponentType<AuroraArchiveProps>;

export declare const AuroraGroupN15926_37484: ComponentType<AuroraArchiveProps>;

export declare const AuroraAddUserN15926_37485: ComponentType<AuroraArchiveProps>;

export declare const AuroraRequestSendUserN25225_1384: ComponentType<AuroraArchiveProps>;

export declare const AuroraRemoveUserN15926_37486: ComponentType<AuroraArchiveProps>;

export declare const AuroraMaleN5176_37823: ComponentType<AuroraArchiveProps>;

export declare const AuroraDropNudgeN5182_40456: ComponentType<AuroraArchiveProps>;

export declare const AuroraGreenDotLiveN4414_27949: ComponentType<AuroraArchiveProps>;

export declare const AuroraStarStateN6981_47636: ComponentType<AuroraArchiveProps>;

export declare const AuroraStarStateN12604_30099: ComponentType<AuroraArchiveProps>;

export declare const AuroraLikeStateN24332_11672: ComponentType<AuroraArchiveProps>;

export declare const AuroraLikeStateN24332_11674: ComponentType<AuroraArchiveProps>;

export declare const AuroraWorkoutNudgeStateN24536_13093: ComponentType<AuroraArchiveProps>;

export declare const AuroraWorkoutNudgeStateN24536_13134: ComponentType<AuroraArchiveProps>;

export declare const AuroraWorkoutNudgeStateN24536_13132: ComponentType<AuroraArchiveProps>;

export declare const AuroraKarmaStateN25193_983: ComponentType<AuroraArchiveProps>;

export declare const AuroraKarmaStateN25193_985: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnergyN6981_47660: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnergyMeterN10857_55550: ComponentType<AuroraArchiveProps>;

export declare const AuroraVegN5231_37963: ComponentType<AuroraArchiveProps>;

export declare const AuroraNonVegN5623_38934: ComponentType<AuroraArchiveProps>;

export declare const AuroraSnackN6248_51956: ComponentType<AuroraArchiveProps>;

export declare const AuroraFoodServingN12604_30123: ComponentType<AuroraArchiveProps>;

export declare const AuroraFitnessPlanN6393_42482: ComponentType<AuroraArchiveProps>;

export declare const AuroraCustomPlanN6393_42481: ComponentType<AuroraArchiveProps>;

export declare const AuroraQuestionnaireFillStateN6393_44142: ComponentType<AuroraArchiveProps>;

export declare const AuroraQuestionnaireFillStateN6393_44154: ComponentType<AuroraArchiveProps>;

export declare const AuroraTicketN4410_29579: ComponentType<AuroraArchiveProps>;

export declare const AuroraOfferHexagonN4410_29577: ComponentType<AuroraArchiveProps>;

export declare const AuroraSpecialNumberN4410_29574: ComponentType<AuroraArchiveProps>;

export declare const AuroraOfferTicketN4410_29575: ComponentType<AuroraArchiveProps>;

export declare const AuroraGiftN4410_29573: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame1855N4410_29578: ComponentType<AuroraArchiveProps>;

export declare const AuroraTripN4410_29572: ComponentType<AuroraArchiveProps>;

export declare const AuroraOfferTagN4410_29571: ComponentType<AuroraArchiveProps>;

export declare const AuroraPremiumN4414_27943: ComponentType<AuroraArchiveProps>;

export declare const AuroraOfferJaggedStateN4410_29576: ComponentType<AuroraArchiveProps>;

export declare const AuroraOfferJaggedStateN4577_37957: ComponentType<AuroraArchiveProps>;

export declare const AuroraOfferJaggedStateN4601_28045: ComponentType<AuroraArchiveProps>;

export declare const AuroraOfferJaggedStateN4601_28044: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilledOfferTagN5182_40448: ComponentType<AuroraArchiveProps>;

export declare const AuroraMembershipN12414_29960: ComponentType<AuroraArchiveProps>;

export declare const AuroraArchivedN13117_32886: ComponentType<AuroraArchiveProps>;

export declare const AuroraScanN9266_54158: ComponentType<AuroraArchiveProps>;

export declare const AuroraSaveN15875_37431: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlayStateN4414_27942: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlayStateN4602_28164: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlayStateN13588_36701: ComponentType<AuroraArchiveProps>;

export declare const AuroraCopyN4835_34812: ComponentType<AuroraArchiveProps>;

export declare const AuroraCaloriesN5594_38013: ComponentType<AuroraArchiveProps>;

export declare const AuroraCopyPackN4835_34811: ComponentType<AuroraArchiveProps>;

export declare const AuroraAddPackN4835_34801: ComponentType<AuroraArchiveProps>;

export declare const AuroraDownloadN4835_34810: ComponentType<AuroraArchiveProps>;

export declare const AuroraIncreaseN4835_34808: ComponentType<AuroraArchiveProps>;

export declare const AuroraAttachmentN4835_34807: ComponentType<AuroraArchiveProps>;

export declare const AuroraSelectClickN4835_34806: ComponentType<AuroraArchiveProps>;

export declare const AuroraEmptyChatN4835_34805: ComponentType<AuroraArchiveProps>;

export declare const AuroraChatN4835_34809: ComponentType<AuroraArchiveProps>;

export declare const AuroraEditN4835_34800: ComponentType<AuroraArchiveProps>;

export declare const AuroraMailN4835_34799: ComponentType<AuroraArchiveProps>;

export declare const AuroraDeleteN4835_34798: ComponentType<AuroraArchiveProps>;

export declare const AuroraWorkN5054_35143: ComponentType<AuroraArchiveProps>;

export declare const AuroraAchivementsN5054_35144: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnergyMeterStateN5055_35159: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnergyMeterStateN5273_37729: ComponentType<AuroraArchiveProps>;

export declare const AuroraExpandStateN5055_35155: ComponentType<AuroraArchiveProps>;

export declare const AuroraExpandStateN5396_37777: ComponentType<AuroraArchiveProps>;

export declare const AuroraLinkN14033_35753: ComponentType<AuroraArchiveProps>;

export declare const AuroraLikeN15936_37588: ComponentType<AuroraArchiveProps>;

export declare const AuroraLevelN17345_43841: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiceExploreN4414_27950: ComponentType<AuroraArchiveProps>;

export declare const AuroraOutlinedDiceExploreN4835_34802: ComponentType<AuroraArchiveProps>;

export declare const AuroraBookmarkN4835_34803: ComponentType<AuroraArchiveProps>;

export declare const AuroraFavoriteStateN21838_5196: ComponentType<AuroraArchiveProps>;

export declare const AuroraFavoriteStateN4414_32782: ComponentType<AuroraArchiveProps>;

export declare const AuroraWhatsappStateN6393_44073: ComponentType<AuroraArchiveProps>;

export declare const AuroraWhatsappStateN6393_44087: ComponentType<AuroraArchiveProps>;

export declare const AuroraGoogleStateN17444_43888: ComponentType<AuroraArchiveProps>;

export declare const AuroraGoogleStateN17444_43894: ComponentType<AuroraArchiveProps>;

export declare const AuroraGoogleStateN20765_47492: ComponentType<AuroraArchiveProps>;

export declare const AuroraLinkedinStateN17444_43927: ComponentType<AuroraArchiveProps>;

export declare const AuroraLinkedinStateN17444_43929: ComponentType<AuroraArchiveProps>;

export declare const AuroraFacebookStateN17444_43902: ComponentType<AuroraArchiveProps>;

export declare const AuroraFacebookStateN17444_43904: ComponentType<AuroraArchiveProps>;

export declare const AuroraAppleStateN17444_43909: ComponentType<AuroraArchiveProps>;

export declare const AuroraAppleStateN17444_43911: ComponentType<AuroraArchiveProps>;

export declare const AuroraInstagramStateN17039_39682: ComponentType<AuroraArchiveProps>;

export declare const AuroraInstagramStateN17039_39684: ComponentType<AuroraArchiveProps>;

export declare const AuroraTelegramStateN17444_43876: ComponentType<AuroraArchiveProps>;

export declare const AuroraTelegramStateN17444_43880: ComponentType<AuroraArchiveProps>;

export declare const AuroraEMAILStateN21618_25823: ComponentType<AuroraArchiveProps>;

export declare const AuroraEMAILStateN21618_25825: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoppingCartStateN4410_29033: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoppingCartStateN4602_28152: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoppingCartStateN5182_40417: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoppingCartStateN5182_40399: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoppingCartStateN5182_40381: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoppingBagStateN4410_29034: ComponentType<AuroraArchiveProps>;

export declare const AuroraShoppingBagStateN4602_28159: ComponentType<AuroraArchiveProps>;

export declare const AuroraBebas40pxN172_37: ComponentType<AuroraArchiveProps>;

export declare const AuroraBlack38pxN172_36: ComponentType<AuroraArchiveProps>;

export declare const AuroraMedium35pxN172_35: ComponentType<AuroraArchiveProps>;

export declare const AuroraBlack50pxN171_0: ComponentType<AuroraArchiveProps>;

export declare const AuroraExtrabold24pxN172_38: ComponentType<AuroraArchiveProps>;

export declare const AuroraBold30pxN3464_26942: ComponentType<AuroraArchiveProps>;

export declare const AuroraBold20pxN172_39: ComponentType<AuroraArchiveProps>;

export declare const AuroraBold16pxN172_44: ComponentType<AuroraArchiveProps>;

export declare const AuroraMedium18pxN172_43: ComponentType<AuroraArchiveProps>;

export declare const AuroraBold18pxN172_40: ComponentType<AuroraArchiveProps>;

export declare const AuroraMedium16pxN172_45: ComponentType<AuroraArchiveProps>;

export declare const AuroraRegular16pxN172_46: ComponentType<AuroraArchiveProps>;

export declare const AuroraMedium14pxN172_48: ComponentType<AuroraArchiveProps>;

export declare const AuroraRegular14pxN172_47: ComponentType<AuroraArchiveProps>;

export declare const AuroraItalic14pxN172_50: ComponentType<AuroraArchiveProps>;

export declare const AuroraBold12pxN172_51: ComponentType<AuroraArchiveProps>;

export declare const AuroraRegular12pxN172_52: ComponentType<AuroraArchiveProps>;

export declare const AuroraBold14pxN172_49: ComponentType<AuroraArchiveProps>;

export declare const AuroraMedium12pxN172_53: ComponentType<AuroraArchiveProps>;

export declare const AuroraRefreshN4814_34300: ComponentType<AuroraArchiveProps>;

export declare const AuroraRecycleN4814_34298: ComponentType<AuroraArchiveProps>;

export declare const AuroraRefreshPackN4835_34794: ComponentType<AuroraArchiveProps>;

export declare const AuroraRevertN4835_34796: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimeComfirmed2N4814_34293: ComponentType<AuroraArchiveProps>;

export declare const AuroraDisableN4814_34294: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimeHourglassN4835_34797: ComponentType<AuroraArchiveProps>;

export declare const AuroraDayN4835_34795: ComponentType<AuroraArchiveProps>;

export declare const AuroraScheduleN4814_34297: ComponentType<AuroraArchiveProps>;

export declare const AuroraScheduleConfirmN4814_34292: ComponentType<AuroraArchiveProps>;

export declare const AuroraSchdeuleNotConfirmN4814_34291: ComponentType<AuroraArchiveProps>;

export declare const AuroraNightWithStarsN4835_34793: ComponentType<AuroraArchiveProps>;

export declare const AuroraNightN4835_34792: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimeN4814_34295: ComponentType<AuroraArchiveProps>;

export declare const AuroraStopwatchN4835_34791: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimeReverseN4814_34299: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimeForwardN4814_34290: ComponentType<AuroraArchiveProps>;

export declare const AuroraTimeConfirmedN4814_34289: ComponentType<AuroraArchiveProps>;

export declare const AuroraSunsetSunriseN4864_34291: ComponentType<AuroraArchiveProps>;

export declare const AuroraSunriseN4835_34789: ComponentType<AuroraArchiveProps>;

export declare const AuroraSunsetN4835_34790: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilledTimeN5182_40451: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlayN4814_34286: ComponentType<AuroraArchiveProps>;

export declare const AuroraFlipN30654_1015: ComponentType<AuroraArchiveProps>;

export declare const AuroraCallOffN4814_34284: ComponentType<AuroraArchiveProps>;

export declare const AuroraCallOnN4814_34278: ComponentType<AuroraArchiveProps>;

export declare const AuroraVideoOffN4814_34281: ComponentType<AuroraArchiveProps>;

export declare const AuroraVideoOnN4814_34285: ComponentType<AuroraArchiveProps>;

export declare const AuroraVideoN4814_34280: ComponentType<AuroraArchiveProps>;

export declare const AuroraHeadphoneN4814_34283: ComponentType<AuroraArchiveProps>;

export declare const AuroraPauseN4814_34277: ComponentType<AuroraArchiveProps>;

export declare const AuroraStopN27307_783: ComponentType<AuroraArchiveProps>;

export declare const AuroraLiveInteractiveN4814_34207: ComponentType<AuroraArchiveProps>;

export declare const AuroraLiveN4814_34276: ComponentType<AuroraArchiveProps>;

export declare const AuroraCameraSwitchN4814_34282: ComponentType<AuroraArchiveProps>;

export declare const AuroraGalleryN4814_34275: ComponentType<AuroraArchiveProps>;

export declare const AuroraMicOnN4814_34274: ComponentType<AuroraArchiveProps>;

export declare const AuroraMicOffN4814_34273: ComponentType<AuroraArchiveProps>;

export declare const AuroraCameraN4814_34272: ComponentType<AuroraArchiveProps>;

export declare const AuroraMuteVolumeNoiseN4864_34289: ComponentType<AuroraArchiveProps>;

export declare const AuroraLowVolumeN4864_34288: ComponentType<AuroraArchiveProps>;

export declare const AuroraHighVolumeN4864_34287: ComponentType<AuroraArchiveProps>;

export declare const AuroraPauseEnclosedN4864_34290: ComponentType<AuroraArchiveProps>;

export declare const AuroraChromeCastN5151_35132: ComponentType<AuroraArchiveProps>;

export declare const AuroraScheduleCallN7062_48024: ComponentType<AuroraArchiveProps>;

export declare const AuroraGSTN4814_34259: ComponentType<AuroraArchiveProps>;

export declare const AuroraCardN4814_34256: ComponentType<AuroraArchiveProps>;

export declare const AuroraPayLaterN4814_34257: ComponentType<AuroraArchiveProps>;

export declare const AuroraCardNonactiveN4814_34255: ComponentType<AuroraArchiveProps>;

export declare const AuroraWalletN4814_34254: ComponentType<AuroraArchiveProps>;

export declare const AuroraBankN4814_34258: ComponentType<AuroraArchiveProps>;

export declare const AuroraUPIN4814_34253: ComponentType<AuroraArchiveProps>;

export declare const AuroraPaylater2N4814_34252: ComponentType<AuroraArchiveProps>;

export declare const AuroraPaypalN4814_34270: ComponentType<AuroraArchiveProps>;

export declare const AuroraAmazonPayFullTextN4814_34262: ComponentType<AuroraArchiveProps>;

export declare const AuroraAmazonPayN4814_34260: ComponentType<AuroraArchiveProps>;

export declare const AuroraAmazonPayOnlyLogoN4814_34261: ComponentType<AuroraArchiveProps>;

export declare const AuroraPhonepeN4814_34268: ComponentType<AuroraArchiveProps>;

export declare const AuroraPaytmN4814_34267: ComponentType<AuroraArchiveProps>;

export declare const AuroraSodexoN4814_34269: ComponentType<AuroraArchiveProps>;

export declare const AuroraMastercardN4814_34265: ComponentType<AuroraArchiveProps>;

export declare const AuroraVisaN4814_34266: ComponentType<AuroraArchiveProps>;

export declare const AuroraBajajN4814_34264: ComponentType<AuroraArchiveProps>;

export declare const AuroraZestMoneyN4814_34263: ComponentType<AuroraArchiveProps>;

export declare const AuroraEMIN6375_63635: ComponentType<AuroraArchiveProps>;

export declare const AuroraFitcashN19971_47150: ComponentType<AuroraArchiveProps>;

export declare const AuroraGiftCardN20555_47548: ComponentType<AuroraArchiveProps>;

export declare const AuroraChennaiN6418_43211: ComponentType<AuroraArchiveProps>;

export declare const AuroraOTHERN6418_43231: ComponentType<AuroraArchiveProps>;

export declare const AuroraOtherN6418_43229: ComponentType<AuroraArchiveProps>;

export declare const AuroraPuneN6418_43218: ComponentType<AuroraArchiveProps>;

export declare const AuroraJaipurN6418_43217: ComponentType<AuroraArchiveProps>;

export declare const AuroraDubai1N6418_43230: ComponentType<AuroraArchiveProps>;

export declare const AuroraDubai2N6418_43228: ComponentType<AuroraArchiveProps>;

export declare const AuroraMysoreN6418_43227: ComponentType<AuroraArchiveProps>;

export declare const AuroraKochiN6418_43214: ComponentType<AuroraArchiveProps>;

export declare const AuroraKolkata1N6418_43210: ComponentType<AuroraArchiveProps>;

export declare const AuroraKolkata2N6418_43209: ComponentType<AuroraArchiveProps>;

export declare const AuroraChandigarhN6418_43216: ComponentType<AuroraArchiveProps>;

export declare const AuroraAhemdabadN6418_43215: ComponentType<AuroraArchiveProps>;

export declare const AuroraLudhiyanaN6418_43225: ComponentType<AuroraArchiveProps>;

export declare const AuroraKotaN6418_43222: ComponentType<AuroraArchiveProps>;

export declare const AuroraJammuN6418_43221: ComponentType<AuroraArchiveProps>;

export declare const AuroraIndoreN6418_43219: ComponentType<AuroraArchiveProps>;

export declare const AuroraHaryanaN6418_43224: ComponentType<AuroraArchiveProps>;

export declare const AuroraAmritsarN6418_43220: ComponentType<AuroraArchiveProps>;

export declare const AuroraGujaratN6418_43213: ComponentType<AuroraArchiveProps>;

export declare const AuroraGandhinagarN6418_43226: ComponentType<AuroraArchiveProps>;

export declare const AuroraViragN6418_43223: ComponentType<AuroraArchiveProps>;

export declare const AuroraBangaloreStateN6408_44076: ComponentType<AuroraArchiveProps>;

export declare const AuroraBangaloreStateN6551_45204: ComponentType<AuroraArchiveProps>;

export declare const AuroraDelhiNCRStateN6418_43207: ComponentType<AuroraArchiveProps>;

export declare const AuroraDelhiNCRStateN6551_45257: ComponentType<AuroraArchiveProps>;

export declare const AuroraHyderabadStateN6418_43208: ComponentType<AuroraArchiveProps>;

export declare const AuroraHyderabadStateN6551_45275: ComponentType<AuroraArchiveProps>;

export declare const AuroraMumbaiStateN6418_43212: ComponentType<AuroraArchiveProps>;

export declare const AuroraMumbaiStateN6551_45311: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2250N15235_37469: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2249N15235_37464: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2248N15235_37462: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2251N15235_37461: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2269N15235_37470: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2254N15235_37456: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2252N15235_37455: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2247N15235_37465: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2246N15235_37453: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2273N15235_37460: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2274N15235_37472: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2270N15235_37467: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2271N15235_37459: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2255N15235_37451: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2258N15235_37450: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2259N15235_37449: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2260N15235_37448: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2261N15235_37447: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2262N15235_37457: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2263N15235_37454: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2264N15235_37463: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2265N15235_37452: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2266N15235_37446: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2267N15235_37445: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2268N15235_37443: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2253N15235_37442: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2257N15235_37441: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2245N15235_37440: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2256N15235_37439: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2239N15235_37438: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2240N15235_37466: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2238N15235_37444: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2241N15235_37458: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2242N15235_37437: ComponentType<AuroraArchiveProps>;

export declare const AuroraWorkoutN15235_37436: ComponentType<AuroraArchiveProps>;

export declare const AuroraFrame2244N15235_37471: ComponentType<AuroraArchiveProps>;

export declare const AuroraVmanWhiteN10739_56954: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultBlackN10739_56951: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultWhiteN10739_56953: ComponentType<AuroraArchiveProps>;

export declare const AuroraVManCultFitLogoVerticalN10739_56950: ComponentType<AuroraArchiveProps>;

export declare const AuroraVManCultFitLogoOnWhiteN10739_56949: ComponentType<AuroraArchiveProps>;

export declare const AuroraVManCultFitLogoOnDarkN10739_56947: ComponentType<AuroraArchiveProps>;

export declare const AuroraVManCultFitLogoOnWhiteN10739_56948: ComponentType<AuroraArchiveProps>;

export declare const AuroraVmanBlackN10739_56952: ComponentType<AuroraArchiveProps>;

export declare const AuroraTrainingN8703_50914: ComponentType<AuroraArchiveProps>;

export declare const AuroraCoachN8634_50810: ComponentType<AuroraArchiveProps>;

export declare const AuroraLiveScheduleN8526_50930: ComponentType<AuroraArchiveProps>;

export declare const AuroraProgramN8526_50931: ComponentType<AuroraArchiveProps>;

export declare const AuroraMeditationN8526_50932: ComponentType<AuroraArchiveProps>;

export declare const AuroraPauseMembershipN8526_50933: ComponentType<AuroraArchiveProps>;

export declare const AuroraMembershipN8526_50934: ComponentType<AuroraArchiveProps>;

export declare const AuroraResumeMembershipN13740_33295: ComponentType<AuroraArchiveProps>;

export declare const AuroraMarkAttendenceN8526_50929: ComponentType<AuroraArchiveProps>;

export declare const AuroraBookCultClassGroupTrainingN8526_50920: ComponentType<AuroraArchiveProps>;

export declare const AuroraConsultDoctorN8721_50828: ComponentType<AuroraArchiveProps>;

export declare const AuroraLabTestN9420_54093: ComponentType<AuroraArchiveProps>;

export declare const AuroraSportswearN8721_50826: ComponentType<AuroraArchiveProps>;

export declare const AuroraOnlinePTN8731_50835: ComponentType<AuroraArchiveProps>;

export declare const AuroraMealFoodN8721_50830: ComponentType<AuroraArchiveProps>;

export declare const AuroraTherapyN8721_50829: ComponentType<AuroraArchiveProps>;

export declare const AuroraYogaN8721_50833: ComponentType<AuroraArchiveProps>;

export declare const AuroraOrderVitaminsN8731_50834: ComponentType<AuroraArchiveProps>;

export declare const AuroraGymWorkoutN8731_50865: ComponentType<AuroraArchiveProps>;

export declare const AuroraDieticianN8741_50906: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultBikeN8699_50806: ComponentType<AuroraArchiveProps>;

export declare const AuroraMyCultN8526_50925: ComponentType<AuroraArchiveProps>;

export declare const AuroraWaitlistN8526_50926: ComponentType<AuroraArchiveProps>;

export declare const AuroraSmartWorkoutPlanN8526_50921: ComponentType<AuroraArchiveProps>;

export declare const AuroraReferAFriendN8703_50913: ComponentType<AuroraArchiveProps>;

export declare const AuroraJoinLiveN9094_51971: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiagnosticN9420_54122: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiabetesRevesalN9420_54123: ComponentType<AuroraArchiveProps>;

export declare const AuroraViewMomentsN13740_33312: ComponentType<AuroraArchiveProps>;

export declare const AuroraTennisBallN17283_44198: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquashBallN17283_44199: ComponentType<AuroraArchiveProps>;

export declare const AuroraBadmintonN17283_44202: ComponentType<AuroraArchiveProps>;

export declare const AuroraPlaySportsIconN17689_43924: ComponentType<AuroraArchiveProps>;

export declare const AuroraTableTennisN17283_44200: ComponentType<AuroraArchiveProps>;

export declare const AuroraSwimmingPoolN17283_44201: ComponentType<AuroraArchiveProps>;

export declare const AuroraExploreGymN13740_33351: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultBike2N9094_51970: ComponentType<AuroraArchiveProps>;

export declare const AuroraScenicRideN11919_25980: ComponentType<AuroraArchiveProps>;

export declare const AuroraHistoryN11919_25985: ComponentType<AuroraArchiveProps>;

export declare const AuroraProMembershipN13895_33662: ComponentType<AuroraArchiveProps>;

export declare const AuroraFitnessReportN13740_33299: ComponentType<AuroraArchiveProps>;

export declare const AuroraCheckSquadN13740_33373: ComponentType<AuroraArchiveProps>;

export declare const AuroraExploreGymN14869_37355: ComponentType<AuroraArchiveProps>;

export declare const AuroraHUMANN17305_43892: ComponentType<AuroraArchiveProps>;

export declare const AuroraTransformN17305_43893: ComponentType<AuroraArchiveProps>;

export declare const AuroraReferAFriend2N8579_50803: ComponentType<AuroraArchiveProps>;

export declare const AuroraMobilityN17084_43606: ComponentType<AuroraArchiveProps>;

export declare const AuroraFunctionalityN17192_43810: ComponentType<AuroraArchiveProps>;

export declare const AuroraWellBeingN17084_43611: ComponentType<AuroraArchiveProps>;

export declare const AuroraFlexibilityN17084_43614: ComponentType<AuroraArchiveProps>;

export declare const AuroraReduceStressN17084_43621: ComponentType<AuroraArchiveProps>;

export declare const AuroraMentalAgilityN17233_44537: ComponentType<AuroraArchiveProps>;

export declare const AuroraCardioHealthN17233_44631: ComponentType<AuroraArchiveProps>;

export declare const AuroraLossWeightN17235_44740: ComponentType<AuroraArchiveProps>;

export declare const AuroraRecoveryN17235_44789: ComponentType<AuroraArchiveProps>;

export declare const AuroraBoneHealthN17235_44882: ComponentType<AuroraArchiveProps>;

export declare const AuroraReflexesN17306_43894: ComponentType<AuroraArchiveProps>;

export declare const AuroraHandEyeN17241_43920: ComponentType<AuroraArchiveProps>;

export declare const AuroraCoreStrengthN17084_43624: ComponentType<AuroraArchiveProps>;

export declare const AuroraStrengthN17166_43916: ComponentType<AuroraArchiveProps>;

export declare const AuroraStabilityAndBalanceN17084_43632: ComponentType<AuroraArchiveProps>;

export declare const AuroraBoxingN17190_43792: ComponentType<AuroraArchiveProps>;

export declare const AuroraStaminaN17084_43638: ComponentType<AuroraArchiveProps>;

export declare const AuroraMuscleGainN17084_43643: ComponentType<AuroraArchiveProps>;

export declare const AuroraEnduranceN17084_43648: ComponentType<AuroraArchiveProps>;

export declare const AuroraFatBurnN17084_43655: ComponentType<AuroraArchiveProps>;

export declare const AuroraMobilityN22695_4248: ComponentType<AuroraArchiveProps>;

export declare const AuroraCoreN22695_4249: ComponentType<AuroraArchiveProps>;

export declare const AuroraHeartN22695_4250: ComponentType<AuroraArchiveProps>;

export declare const AuroraBCAN22695_4251: ComponentType<AuroraArchiveProps>;

export declare const AuroraStrengthN22695_4252: ComponentType<AuroraArchiveProps>;

export declare const AuroraCoachN10772_56417: ComponentType<AuroraArchiveProps>;

export declare const AuroraProgramN10772_56418: ComponentType<AuroraArchiveProps>;

export declare const AuroraFOODN10772_56420: ComponentType<AuroraArchiveProps>;

export declare const AuroraRecipesN10772_56421: ComponentType<AuroraArchiveProps>;

export declare const AuroraBike1N10772_56422: ComponentType<AuroraArchiveProps>;

export declare const AuroraTherapyN10772_56423: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultbikeN10772_56424: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultClassN10772_56425: ComponentType<AuroraArchiveProps>;

export declare const AuroraApparelN10772_56426: ComponentType<AuroraArchiveProps>;

export declare const AuroraEquipmentN10772_56427: ComponentType<AuroraArchiveProps>;

export declare const AuroraSupplementsN10772_56428: ComponentType<AuroraArchiveProps>;

export declare const AuroraWorkoutAtHomeN12414_29950: ComponentType<AuroraArchiveProps>;

export declare const AuroraDoctorN10772_56429: ComponentType<AuroraArchiveProps>;

export declare const AuroraLabTestN10772_56430: ComponentType<AuroraArchiveProps>;

export declare const AuroraDiabetesReversalN10772_56431: ComponentType<AuroraArchiveProps>;

export declare const AuroraTreadmillN10772_56432: ComponentType<AuroraArchiveProps>;

export declare const AuroraAccessoriesN10772_56433: ComponentType<AuroraArchiveProps>;

export declare const AuroraGymN10772_56434: ComponentType<AuroraArchiveProps>;

export declare const AuroraBlogN10772_56435: ComponentType<AuroraArchiveProps>;

export declare const AuroraCommunityN10772_56436: ComponentType<AuroraArchiveProps>;

export declare const AuroraSkinCareN10772_56437: ComponentType<AuroraArchiveProps>;

export declare const AuroraTrainingN10772_56438: ComponentType<AuroraArchiveProps>;

export declare const AuroraDietician2N11053_25254: ComponentType<AuroraArchiveProps>;

export declare const AuroraDieticianN11053_25271: ComponentType<AuroraArchiveProps>;

export declare const AuroraTransformN17350_43887: ComponentType<AuroraArchiveProps>;

export declare const AuroraTennisBallN19267_46426: ComponentType<AuroraArchiveProps>;

export declare const AuroraSquashBallN19267_46427: ComponentType<AuroraArchiveProps>;

export declare const AuroraBadmintonN19267_46430: ComponentType<AuroraArchiveProps>;

export declare const AuroraBootcampN19734_47753: ComponentType<AuroraArchiveProps>;

export declare const AuroraTableTennisN19267_46428: ComponentType<AuroraArchiveProps>;

export declare const AuroraSwimmingPoolN19267_46429: ComponentType<AuroraArchiveProps>;

export declare const AuroraHapticHighStateN16453_38448: ComponentType<AuroraArchiveProps>;

export declare const AuroraHapticHighStateN16453_38446: ComponentType<AuroraArchiveProps>;

export declare const AuroraHapticHighStateN16453_38460: ComponentType<AuroraArchiveProps>;

export declare const AuroraHapticHighStateN16453_38452: ComponentType<AuroraArchiveProps>;

export declare const AuroraTrialIconsStateN26669_35921: ComponentType<AuroraArchiveProps>;

export declare const AuroraTrialIconsStateN26669_35938: ComponentType<AuroraArchiveProps>;

export declare const AuroraTrialIconsStateN26669_35940: ComponentType<AuroraArchiveProps>;

export declare const AuroraTrialIconsStateN26669_35954: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultAgeStateN30429_1136: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultAgeStateN30429_1138: ComponentType<AuroraArchiveProps>;

export declare const AuroraCoachN6393_44218: ComponentType<AuroraArchiveProps>;

export declare const AuroraGoldBlackCheckoutN1754_24347: ComponentType<AuroraArchiveProps>;

export declare const AuroraLiveCheckoutN1754_24346: ComponentType<AuroraArchiveProps>;

export declare const AuroraTrialTrayN1754_32122: ComponentType<AuroraArchiveProps>;

export declare const AuroraCitySelectionN1883_25458: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchNullN718_2912: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchEmptyN718_2911: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchHitsN718_2910: ComponentType<AuroraArchiveProps>;

export declare const AuroraSearchHitsTabsN718_2909: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultpassBottomTrayN5479_37912: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultpassIOSLiveN1038_4745: ComponentType<AuroraArchiveProps>;

export declare const AuroraPacksN1038_4747: ComponentType<AuroraArchiveProps>;

export declare const AuroraPacksGOLDBottomTrayN1036_4833: ComponentType<AuroraArchiveProps>;

export declare const AuroraPacksLIVEAndroidBottomTrayN6025_38564: ComponentType<AuroraArchiveProps>;

export declare const AuroraClassesFilterN1699_25699: ComponentType<AuroraArchiveProps>;

export declare const AuroraFilterCategoriesN10044_55022: ComponentType<AuroraArchiveProps>;

export declare const AuroraAtCenterClassConfirmationN6164_38637: ComponentType<AuroraArchiveProps>;

export declare const AuroraAtHomeClassConfirmationN6164_38636: ComponentType<AuroraArchiveProps>;

export declare const AuroraCultPassConfirmationN6161_38576: ComponentType<AuroraArchiveProps>;

export declare const AuroraQuestionnaireSheet: ComponentType<AuroraQuestionnaireSheetProps>;

export declare const AuroraBottomTrayFormServiceN1794_23330: ComponentType<AuroraQuestionnaireSheetProps>;

export declare const AuroraAllCategoriesTabN10468_56980: ComponentType<AuroraCategoriesPopupProps>;

export declare const AuroraCategoriesPopup: ComponentType<AuroraCategoriesPopupProps>;

export declare const AuroraRadio: ComponentType<AuroraRadioProps>;

export declare const AuroraCheckbox: ComponentType<AuroraCheckboxProps>;

export declare const AuroraToggle: ComponentType<AuroraToggleProps>;

export declare const AuroraTextInput: ComponentType<AuroraTextInputProps>;

export type AuroraNumberFieldN3967_28869Props = Omit<AuroraArchiveProps, "variant" | "With icon" | "withIcon" | "Focused" | "focused" | "Default" | "default"> & { variant?: { "With icon"?: "No" | "Yes" | true | false; "Focused"?: "No" | "Yes" | true | false; "Default"?: "Yes" | "No" | true | false }; "With icon"?: "No" | "Yes" | true | false; "withIcon"?: "No" | "Yes" | true | false; "Focused"?: "No" | "Yes" | true | false; "focused"?: "No" | "Yes" | true | false; "Default"?: "Yes" | "No" | true | false; "default"?: "Yes" | "No" | true | false };

export declare const AuroraNumberFieldN3967_28869: ComponentType<AuroraNumberFieldN3967_28869Props>;

export declare const AuroraPhoneField: ComponentType<AuroraPhoneFieldProps>;

export declare const AuroraPhoneFieldN3967_28876: ComponentType<AuroraPhoneFieldProps>;

export declare const AuroraEmailField: ComponentType<AuroraEmailFieldProps>;

export declare const AuroraEmailN3967_28861: ComponentType<AuroraEmailFieldProps>;

export declare const AuroraSearchField: ComponentType<AuroraSearchFieldProps>;

export declare const AuroraSearchFieldN649_1156: ComponentType<AuroraSearchFieldProps>;

export type AuroraOTPFieldN5046_35313Props = Omit<AuroraArchiveProps, "variant" | "States" | "states"> & { variant?: { "States"?: "Empty" | "Filled" | "Wrong OTP" }; "States"?: "Empty" | "Filled" | "Wrong OTP"; "states"?: "Empty" | "Filled" | "Wrong OTP" };

export declare const AuroraOTPFieldN5046_35313: ComponentType<AuroraOTPFieldN5046_35313Props>;

export declare const AuroraPasswordField: ComponentType<AuroraPasswordFieldProps>;

export declare const AuroraPasswordFieldN5046_35372: ComponentType<AuroraPasswordFieldProps>;

export type AuroraToastN17216_43830Props = Omit<AuroraArchiveProps, "variant" | "Postive" | "postive" | "Negative" | "negative" | "Theme" | "theme"> & { variant?: { "Postive"?: "No" | "Yes" | true | false; "Negative"?: "Yes" | "No" | true | false; "Theme"?: "Light" | "Dark" }; "Postive"?: "No" | "Yes" | true | false; "postive"?: "No" | "Yes" | true | false; "Negative"?: "Yes" | "No" | true | false; "negative"?: "Yes" | "No" | true | false; "Theme"?: "Light" | "Dark"; "theme"?: "Light" | "Dark" };

export declare const AuroraToastN17216_43830: ComponentType<AuroraToastN17216_43830Props>;

export type AuroraContinuousProgressBarN834_3301Props = Omit<AuroraArchiveProps, "variant" | "Progress" | "progress" | "Status" | "status"> & { variant?: { "Progress"?: "Low" | "Medium" | "High"; "Status"?: "Alert" | "PositiveOrAffirm" | "Negative" | "Neutral" | "None" }; "Progress"?: "Low" | "Medium" | "High"; "progress"?: "Low" | "Medium" | "High"; "Status"?: "Alert" | "PositiveOrAffirm" | "Negative" | "Neutral" | "None"; "status"?: "Alert" | "PositiveOrAffirm" | "Negative" | "Neutral" | "None" };

export declare const AuroraContinuousProgressBarN834_3301: ComponentType<AuroraContinuousProgressBarN834_3301Props>;

export type AuroraSleekProgressBarN19796_46921Props = Omit<AuroraArchiveProps, "variant" | "Color" | "color" | "Full" | "full" | "Half" | "half" | "Start" | "start"> & { variant?: { "Color"?: "⚪️ White" | "🔴 Red" | "🟢 Green"; "Full"?: "No" | "Yes" | true | false; "Half"?: "No" | "Yes" | true | false; "Start"?: "Yes" | "No" | true | false }; "Color"?: "⚪️ White" | "🔴 Red" | "🟢 Green"; "color"?: "⚪️ White" | "🔴 Red" | "🟢 Green"; "Full"?: "No" | "Yes" | true | false; "full"?: "No" | "Yes" | true | false; "Half"?: "No" | "Yes" | true | false; "half"?: "No" | "Yes" | true | false; "Start"?: "Yes" | "No" | true | false; "start"?: "Yes" | "No" | true | false };

export declare const AuroraSleekProgressBarN19796_46921: ComponentType<AuroraSleekProgressBarN19796_46921Props>;

export type AuroraDiscreteBarStatesN1754_26038Props = Omit<AuroraArchiveProps, "variant" | "Selected" | "selected"> & { variant?: { "Selected"?: "No" | "Yes" | true | false }; "Selected"?: "No" | "Yes" | true | false; "selected"?: "No" | "Yes" | true | false };

export declare const AuroraDiscreteBarStatesN1754_26038: ComponentType<AuroraDiscreteBarStatesN1754_26038Props>;

export type AuroraWhiteDiscreteBarStatesN9511_54194Props = Omit<AuroraArchiveProps, "variant" | "Selected" | "selected"> & { variant?: { "Selected"?: "Yes" | "No" | true | false }; "Selected"?: "Yes" | "No" | true | false; "selected"?: "Yes" | "No" | true | false };

export declare const AuroraWhiteDiscreteBarStatesN9511_54194: ComponentType<AuroraWhiteDiscreteBarStatesN9511_54194Props>;

export declare const AuroraPaginationDots: ComponentType<AuroraPaginationDotsProps>;

export declare const AuroraPaginationDotsN7118_47699: ComponentType<AuroraPaginationDotsProps>;

export type AuroraConsistencyIndicatorN24375_15504Props = Omit<AuroraArchiveProps, "variant" | "Workout Count" | "workoutCount"> & { variant?: { "Workout Count"?: "2" | "3" | "4" | "0" | "1" | "5" | "6+" }; "Workout Count"?: "2" | "3" | "4" | "0" | "1" | "5" | "6+"; "workoutCount"?: "2" | "3" | "4" | "0" | "1" | "5" | "6+" };

export declare const AuroraConsistencyIndicatorN24375_15504: ComponentType<AuroraConsistencyIndicatorN24375_15504Props>;

export declare const AuroraTertiaryButton: ComponentType<AuroraTertiaryButtonProps>;

export declare const AuroraPrimaryButton: ComponentType<AuroraPrimaryButtonProps>;

export declare const AuroraSecondaryButton: ComponentType<AuroraSecondaryButtonProps>;

export declare const AuroraTwins: ComponentType<AuroraTwinsProps>;

export declare const AuroraTwinsN1016_4406: ComponentType<AuroraTwinsProps>;

export declare const AuroraCircularButton: ComponentType<AuroraCircularButtonProps>;

export declare const AuroraCircularActionButtonN14779_38684: ComponentType<AuroraCircularButtonProps>;

export type AuroraActionCardN1940_26724Props = Omit<AuroraArchiveProps, "variant" | "Subtext" | "subtext" | "Kicker" | "kicker" | "Basic" | "basic" | "Expanded with Radio Button" | "expandedWithRadioButton" | "Tag" | "tag"> & { variant?: { "Subtext"?: "No" | "Yes" | true | false; "Kicker"?: "No" | "Yes" | true | false; "Basic"?: "Yes" | "No" | true | false; "Expanded with Radio Button"?: "No" | "Yes" | true | false; "Tag"?: "No" | "Yes" | true | false }; "Subtext"?: "No" | "Yes" | true | false; "subtext"?: "No" | "Yes" | true | false; "Kicker"?: "No" | "Yes" | true | false; "kicker"?: "No" | "Yes" | true | false; "Basic"?: "Yes" | "No" | true | false; "basic"?: "Yes" | "No" | true | false; "Expanded with Radio Button"?: "No" | "Yes" | true | false; "expandedWithRadioButton"?: "No" | "Yes" | true | false; "Tag"?: "No" | "Yes" | true | false; "tag"?: "No" | "Yes" | true | false };

export declare const AuroraActionCardN1940_26724: ComponentType<AuroraActionCardN1940_26724Props>;

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

export type AuroraNumberHooksN962_4721Props = Omit<AuroraArchiveProps, "variant" | "Month Value" | "monthValue"> & { variant?: { "Month Value"?: "12 Months" | "6 Months" | "3 Months" | "3+3 Months" | "X Month" | "7 Days" }; "Month Value"?: "12 Months" | "6 Months" | "3 Months" | "3+3 Months" | "X Month" | "7 Days"; "monthValue"?: "12 Months" | "6 Months" | "3 Months" | "3+3 Months" | "X Month" | "7 Days" };

export declare const AuroraNumberHooksN962_4721: ComponentType<AuroraNumberHooksN962_4721Props>;

export type AuroraProfileN17837_44716Props = Omit<AuroraArchiveProps, "variant" | "Group" | "group" | "Single" | "single" | "Double" | "double"> & { variant?: { "Group"?: "No" | "Yes" | true | false; "Single"?: "Yes" | "No" | true | false; "Double"?: "No" | "Yes" | true | false }; "Group"?: "No" | "Yes" | true | false; "group"?: "No" | "Yes" | true | false; "Single"?: "Yes" | "No" | true | false; "single"?: "Yes" | "No" | true | false; "Double"?: "No" | "Yes" | true | false; "double"?: "No" | "Yes" | true | false };

export declare const AuroraProfileN17837_44716: ComponentType<AuroraProfileN17837_44716Props>;

export type AuroraMultipleProfilesN24480_13101Props = Omit<AuroraArchiveProps, "variant" | "Collapsed" | "collapsed"> & { variant?: { "Collapsed"?: "Yes" | "No" | true | false }; "Collapsed"?: "Yes" | "No" | true | false; "collapsed"?: "Yes" | "No" | true | false };

export declare const AuroraMultipleProfilesN24480_13101: ComponentType<AuroraMultipleProfilesN24480_13101Props>;

export type AuroraStatusTagsVariantsN406_1545Props = Omit<AuroraArchiveProps, "variant" | "Expiring" | "expiring" | "Positive" | "positive" | "Negative" | "negative" | "Noteworthy" | "noteworthy" | "Neutral" | "neutral"> & { variant?: { "Expiring"?: "No" | "Yes" | true | false; "Positive"?: "No" | "Yes" | true | false; "Negative"?: "No" | "Yes" | true | false; "Noteworthy"?: "Yes" | "No" | true | false; "Neutral"?: "No" | "Yes" | true | false }; "Expiring"?: "No" | "Yes" | true | false; "expiring"?: "No" | "Yes" | true | false; "Positive"?: "No" | "Yes" | true | false; "positive"?: "No" | "Yes" | true | false; "Negative"?: "No" | "Yes" | true | false; "negative"?: "No" | "Yes" | true | false; "Noteworthy"?: "Yes" | "No" | true | false; "noteworthy"?: "Yes" | "No" | true | false; "Neutral"?: "No" | "Yes" | true | false; "neutral"?: "No" | "Yes" | true | false };

export declare const AuroraStatusTagsVariantsN406_1545: ComponentType<AuroraStatusTagsVariantsN406_1545Props>;

export type AuroraContextTagsN1549_20186Props = Omit<AuroraArchiveProps, "variant" | "Types" | "types"> & { variant?: { "Types"?: "Users Live" | "Premium" | "Waitlist" | "Coming Soon" | "Regular" | "Color" | "Mini Tag" | "Regular Non Selected" | "New" | "Interactive" | "Mini Premium silver" }; "Types"?: "Users Live" | "Premium" | "Waitlist" | "Coming Soon" | "Regular" | "Color" | "Mini Tag" | "Regular Non Selected" | "New" | "Interactive" | "Mini Premium silver"; "types"?: "Users Live" | "Premium" | "Waitlist" | "Coming Soon" | "Regular" | "Color" | "Mini Tag" | "Regular Non Selected" | "New" | "Interactive" | "Mini Premium silver" };

export declare const AuroraContextTagsN1549_20186: ComponentType<AuroraContextTagsN1549_20186Props>;

export type AuroraBadgeN5011_34560Props = Omit<AuroraArchiveProps, "variant" | "In Status Tag" | "inStatusTag" | "Waitlist" | "waitlist" | "Active" | "active" | "Filled" | "filled"> & { variant?: { "In Status Tag"?: "No" | "Yes" | true | false; "Waitlist"?: "Yes" | "No" | true | false; "Active"?: "No" | "Yes" | true | false; "Filled"?: "No" | "Yes" | true | false }; "In Status Tag"?: "No" | "Yes" | true | false; "inStatusTag"?: "No" | "Yes" | true | false; "Waitlist"?: "Yes" | "No" | true | false; "waitlist"?: "Yes" | "No" | true | false; "Active"?: "No" | "Yes" | true | false; "active"?: "No" | "Yes" | true | false; "Filled"?: "No" | "Yes" | true | false; "filled"?: "No" | "Yes" | true | false };

export declare const AuroraBadgeN5011_34560: ComponentType<AuroraBadgeN5011_34560Props>;

export type AuroraBottomTrayBGN15196_37707Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" }; "Property 1"?: "Default"; "property1"?: "Default" };

export declare const AuroraBottomTrayBGN15196_37707: ComponentType<AuroraBottomTrayBGN15196_37707Props>;

export type AuroraClassicAuroraBGN22777_33718Props = Omit<AuroraArchiveProps, "variant" | "Earthy" | "earthy" | "Old" | "old" | "Pilate" | "pilate" | "New" | "new"> & { variant?: { "Earthy"?: "No" | "Yes" | "N" | true | false; "Old"?: "Yes" | "No" | true | false; "Pilate"?: "No" | "Yes" | true | false; "New"?: "No" | "Yes" | true | false }; "Earthy"?: "No" | "Yes" | "N" | true | false; "earthy"?: "No" | "Yes" | "N" | true | false; "Old"?: "Yes" | "No" | true | false; "old"?: "Yes" | "No" | true | false; "Pilate"?: "No" | "Yes" | true | false; "pilate"?: "No" | "Yes" | true | false; "New"?: "No" | "Yes" | true | false; "new"?: "No" | "Yes" | true | false };

export declare const AuroraClassicAuroraBGN22777_33718: ComponentType<AuroraClassicAuroraBGN22777_33718Props>;

export declare const AuroraChatInput: ComponentType<AuroraChatInputProps>;

export declare const AuroraChatInputN15926_37574: ComponentType<AuroraChatInputProps>;

export type AuroraChatBubbleN16097_37715Props = Omit<AuroraArchiveProps, "variant" | "Sending" | "sending" | "Receiving" | "receiving"> & { variant?: { "Sending"?: "No" | "Yes" | true | false; "Receiving"?: "Yes" | "No" | true | false }; "Sending"?: "No" | "Yes" | true | false; "sending"?: "No" | "Yes" | true | false; "Receiving"?: "Yes" | "No" | true | false; "receiving"?: "Yes" | "No" | true | false };

export declare const AuroraChatBubbleN16097_37715: ComponentType<AuroraChatBubbleN16097_37715Props>;

export type AuroraButtonIconsN1096_11412Props = Omit<AuroraArchiveProps, "variant" | "Name" | "name"> & { variant?: { "Name"?: "Dice" | "Live Class" | "Play" | "Premium" | "Lock" | "Arrow" }; "Name"?: "Dice" | "Live Class" | "Play" | "Premium" | "Lock" | "Arrow"; "name"?: "Dice" | "Live Class" | "Play" | "Premium" | "Lock" | "Arrow" };

export declare const AuroraButtonIconsN1096_11412: ComponentType<AuroraButtonIconsN1096_11412Props>;

export declare const AuroraTopNavTabLabel: ComponentType<AuroraTabProps>;

export declare const AuroraTopNavTabLabelsN433_557: ComponentType<AuroraTabProps>;

export type AuroraDigitalTimerN3885_27872Props = Omit<AuroraArchiveProps, "variant" | "Size" | "size"> & { variant?: { "Size"?: "Big" | "Small" }; "Size"?: "Big" | "Small"; "size"?: "Big" | "Small" };

export declare const AuroraDigitalTimerN3885_27872: ComponentType<AuroraDigitalTimerN3885_27872Props>;

export declare const AuroraDateLabels: ComponentType<AuroraDateLabelsProps>;

export declare const AuroraDateLabelsN1794_22929: ComponentType<AuroraDateLabelsProps>;

export declare const AuroraDatePicker: ComponentType<AuroraDatePickerProps>;

export declare const AuroraDatePickerN15518_37445: ComponentType<AuroraDatePickerProps>;

export type AuroraMedium2ThumbnailListViewN759_3928Props = Omit<AuroraArchiveProps, "variant" | "3 Text Lines" | "3TextLines"> & { variant?: { "3 Text Lines"?: "Yes" | "No" | true | false }; "3 Text Lines"?: "Yes" | "No" | true | false; "3TextLines"?: "Yes" | "No" | true | false };

export declare const AuroraMedium2ThumbnailListViewN759_3928: ComponentType<AuroraMedium2ThumbnailListViewN759_3928Props>;

export type AuroraSmallThumbnailListViewN3966_27360Props = Omit<AuroraArchiveProps, "variant" | "Small Profile Image" | "smallProfileImage" | "Actions" | "actions" | "Kicker" | "kicker" | "Multi Kicker" | "multiKicker"> & { variant?: { "Small Profile Image"?: "No" | "Yes" | true | false; "Actions"?: "Icons" | "Text" | "CTA"; "Kicker"?: "No" | "Yes" | true | false; "Multi Kicker"?: "No" | "Yes" | true | false }; "Small Profile Image"?: "No" | "Yes" | true | false; "smallProfileImage"?: "No" | "Yes" | true | false; "Actions"?: "Icons" | "Text" | "CTA"; "actions"?: "Icons" | "Text" | "CTA"; "Kicker"?: "No" | "Yes" | true | false; "kicker"?: "No" | "Yes" | true | false; "Multi Kicker"?: "No" | "Yes" | true | false; "multiKicker"?: "No" | "Yes" | true | false };

export declare const AuroraSmallThumbnailListViewN3966_27360: ComponentType<AuroraSmallThumbnailListViewN3966_27360Props>;

export type AuroraIconThumbnailListViewN3966_27375Props = Omit<AuroraArchiveProps, "variant" | "Static" | "static" | "Title" | "title" | "Clickable" | "clickable"> & { variant?: { "Static"?: "Yes" | "No" | true | false; "Title"?: "No" | "yes" | true | false; "Clickable"?: "No" | "Yes" | true | false }; "Static"?: "Yes" | "No" | true | false; "static"?: "Yes" | "No" | true | false; "Title"?: "No" | "yes" | true | false; "title"?: "No" | "yes" | true | false; "Clickable"?: "No" | "Yes" | true | false; "clickable"?: "No" | "Yes" | true | false };

export declare const AuroraIconThumbnailListViewN3966_27375: ComponentType<AuroraIconThumbnailListViewN3966_27375Props>;

export type AuroraTextOnlyThumbnailListViewN9786_55317Props = Omit<AuroraArchiveProps, "variant" | "Subtext" | "subtext"> & { variant?: { "Subtext"?: "No" | "Yes" | true | false }; "Subtext"?: "No" | "Yes" | true | false; "subtext"?: "No" | "Yes" | true | false };

export declare const AuroraTextOnlyThumbnailListViewN9786_55317: ComponentType<AuroraTextOnlyThumbnailListViewN9786_55317Props>;

export type AuroraMediumThumbnailListViewN9786_55332Props = Omit<AuroraArchiveProps, "variant" | "Line" | "line" | "Align" | "align" | "Action" | "action"> & { variant?: { "Line"?: "2 line" | "3 line"; "Align"?: "Right" | "Left"; "Action"?: "Multiple" | "Single" }; "Line"?: "2 line" | "3 line"; "line"?: "2 line" | "3 line"; "Align"?: "Right" | "Left"; "align"?: "Right" | "Left"; "Action"?: "Multiple" | "Single"; "action"?: "Multiple" | "Single" };

export declare const AuroraMediumThumbnailListViewN9786_55332: ComponentType<AuroraMediumThumbnailListViewN9786_55332Props>;

export type AuroraBulletListViewN13989_33592Props = Omit<AuroraArchiveProps, "variant" | "Normal" | "normal" | "With Action" | "withAction"> & { variant?: { "Normal"?: "Yes" | "No" | true | false; "With Action"?: "No" | "Yes" | true | false }; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false; "With Action"?: "No" | "Yes" | true | false; "withAction"?: "No" | "Yes" | true | false };

export declare const AuroraBulletListViewN13989_33592: ComponentType<AuroraBulletListViewN13989_33592Props>;

export type AuroraProfileN14005_35030Props = Omit<AuroraArchiveProps, "variant" | "In group" | "inGroup" | "From Group" | "fromGroup" | "Normal" | "normal"> & { variant?: { "In group"?: "No" | "Yes" | true | false; "From Group"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false }; "In group"?: "No" | "Yes" | true | false; "inGroup"?: "No" | "Yes" | true | false; "From Group"?: "No" | "Yes" | true | false; "fromGroup"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false };

export declare const AuroraProfileN14005_35030: ComponentType<AuroraProfileN14005_35030Props>;

export type AuroraTinyThumbnailListviewN24418_3622Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" | "Variant2" }; "Property 1"?: "Default" | "Variant2"; "property1"?: "Default" | "Variant2" };

export declare const AuroraTinyThumbnailListviewN24418_3622: ComponentType<AuroraTinyThumbnailListviewN24418_3622Props>;

export type AuroraSectionMessageN3724_26814Props = Omit<AuroraArchiveProps, "variant" | "Pro Tip" | "proTip" | "Actions" | "actions"> & { variant?: { "Pro Tip"?: "No" | "Yes" | true | false; "Actions"?: "No" | "Yes" | true | false }; "Pro Tip"?: "No" | "Yes" | true | false; "proTip"?: "No" | "Yes" | true | false; "Actions"?: "No" | "Yes" | true | false; "actions"?: "No" | "Yes" | true | false };

export declare const AuroraSectionMessageN3724_26814: ComponentType<AuroraSectionMessageN3724_26814Props>;

export declare const AuroraRating: ComponentType<AuroraRatingProps>;

export declare const AuroraRatingN20779_47990: ComponentType<AuroraRatingProps>;

export type AuroraBottomNavBarN3597_26803Props = Omit<AuroraArchiveProps, "variant" | "Store" | "store" | "Wellness" | "wellness" | "Home" | "home" | "Fitness" | "fitness" | "No search" | "noSearch" | "iOS"> & { variant?: { "Store"?: "No" | "Yes" | true | false; "Wellness"?: "No" | "Yes" | true | false; "Home"?: "No" | "Yes" | true | false; "Fitness"?: "Yes" | "No" | true | false; "No search"?: "No" | "Yes" | true | false; "iOS"?: "No" | "Yes" | true | false }; "Store"?: "No" | "Yes" | true | false; "store"?: "No" | "Yes" | true | false; "Wellness"?: "No" | "Yes" | true | false; "wellness"?: "No" | "Yes" | true | false; "Home"?: "No" | "Yes" | true | false; "home"?: "No" | "Yes" | true | false; "Fitness"?: "Yes" | "No" | true | false; "fitness"?: "Yes" | "No" | true | false; "No search"?: "No" | "Yes" | true | false; "noSearch"?: "No" | "Yes" | true | false; "iOS"?: "No" | "Yes" | true | false };

export declare const AuroraBottomNavBarN3597_26803: ComponentType<AuroraBottomNavBarN3597_26803Props>;

export type AuroraWidgetHeaderN12205_30010Props = Omit<AuroraArchiveProps, "variant" | "Center Align Title" | "centerAlignTitle" | "Title+ tab + Action + Subtext" | "titleTabActionSubtext" | "Title + Progress Bar + Action" | "titleProgressBarAction" | "Big Text + CTA" | "bigTextCTA" | "Left align Title" | "leftAlignTitle"> & { variant?: { "Center Align Title"?: "No" | "Yes" | true | false; "Title+ tab + Action + Subtext"?: "Yes" | "No" | true | false; "Title + Progress Bar + Action"?: "No" | "Yes" | true | false; "Big Text + CTA"?: "No" | "Yes" | true | false; "Left align Title"?: "No" | "Yes" | true | false }; "Center Align Title"?: "No" | "Yes" | true | false; "centerAlignTitle"?: "No" | "Yes" | true | false; "Title+ tab + Action + Subtext"?: "Yes" | "No" | true | false; "titleTabActionSubtext"?: "Yes" | "No" | true | false; "Title + Progress Bar + Action"?: "No" | "Yes" | true | false; "titleProgressBarAction"?: "No" | "Yes" | true | false; "Big Text + CTA"?: "No" | "Yes" | true | false; "bigTextCTA"?: "No" | "Yes" | true | false; "Left align Title"?: "No" | "Yes" | true | false; "leftAlignTitle"?: "No" | "Yes" | true | false };

export declare const AuroraWidgetHeaderN12205_30010: ComponentType<AuroraWidgetHeaderN12205_30010Props>;

export type AuroraWidgetDetailN20779_48175Props = Omit<AuroraArchiveProps, "variant" | "Gym detail paga header" | "gymDetailPagaHeader"> & { variant?: { "Gym detail paga header"?: "Yes" | true }; "Gym detail paga header"?: "Yes" | true; "gymDetailPagaHeader"?: "Yes" | true };

export declare const AuroraWidgetDetailN20779_48175: ComponentType<AuroraWidgetDetailN20779_48175Props>;

export type AuroraUpcomingCardN771_3131Props = Omit<AuroraArchiveProps, "variant" | "With Wide Image" | "withWideImage" | "With Button" | "withButton"> & { variant?: { "With Wide Image"?: "No" | "Yes" | true | false; "With Button"?: "No" | "Yes" | true | false }; "With Wide Image"?: "No" | "Yes" | true | false; "withWideImage"?: "No" | "Yes" | true | false; "With Button"?: "No" | "Yes" | true | false; "withButton"?: "No" | "Yes" | true | false };

export declare const AuroraUpcomingCardN771_3131: ComponentType<AuroraUpcomingCardN771_3131Props>;

export type AuroraBigPosterCardN5007_35226Props = Omit<AuroraArchiveProps, "variant" | "Type" | "type"> & { variant?: { "Type"?: "Medium" | "large" | "Type4" }; "Type"?: "Medium" | "large" | "Type4"; "type"?: "Medium" | "large" | "Type4" };

export declare const AuroraBigPosterCardN5007_35226: ComponentType<AuroraBigPosterCardN5007_35226Props>;

export type AuroraWideEnclosedCatalogCardN5007_35246Props = Omit<AuroraArchiveProps, "variant" | "Multi CTA" | "multiCTA" | "Single CTA" | "singleCTA" | "Overlay text" | "overlayText"> & { variant?: { "Multi CTA"?: "Yes" | "No" | true | false; "Single CTA"?: "No" | "Yes" | true | false; "Overlay text"?: "No" | "Yes" | true | false }; "Multi CTA"?: "Yes" | "No" | true | false; "multiCTA"?: "Yes" | "No" | true | false; "Single CTA"?: "No" | "Yes" | true | false; "singleCTA"?: "No" | "Yes" | true | false; "Overlay text"?: "No" | "Yes" | true | false; "overlayText"?: "No" | "Yes" | true | false };

export declare const AuroraWideEnclosedCatalogCardN5007_35246: ComponentType<AuroraWideEnclosedCatalogCardN5007_35246Props>;

export type AuroraCirclesCardN5007_35282Props = Omit<AuroraArchiveProps, "variant" | "100×100" | "100100" | "74×74" | "7474" | "Title" | "title" | "50x50" | "40x40" | "92×92" | "9292"> & { variant?: { "100×100"?: "Yes" | "No" | true | false; "74×74"?: "No" | "Yes" | true | false; "Title"?: "Yes" | "No" | true | false; "50x50"?: "No" | "YES" | true | false; "40x40"?: "No" | "Yes" | true | false; "92×92"?: "No" | "Yes" | true | false }; "100×100"?: "Yes" | "No" | true | false; "100100"?: "Yes" | "No" | true | false; "74×74"?: "No" | "Yes" | true | false; "7474"?: "No" | "Yes" | true | false; "Title"?: "Yes" | "No" | true | false; "title"?: "Yes" | "No" | true | false; "50x50"?: "No" | "YES" | true | false; "40x40"?: "No" | "Yes" | true | false; "92×92"?: "No" | "Yes" | true | false; "9292"?: "No" | "Yes" | true | false };

export declare const AuroraCirclesCardN5007_35282: ComponentType<AuroraCirclesCardN5007_35282Props>;

export type AuroraBigImageCardN5166_37771Props = Omit<AuroraArchiveProps, "variant" | "335×335" | "335335" | "335×438" | "335438" | "191×325" | "191325" | "335×190" | "335190"> & { variant?: { "335×335"?: "No" | "Yes" | true | false; "335×438"?: "No" | "Yes" | true | false; "191×325"?: "No" | "Yes" | true | false; "335×190"?: "Yes" | "No" | true | false }; "335×335"?: "No" | "Yes" | true | false; "335335"?: "No" | "Yes" | true | false; "335×438"?: "No" | "Yes" | true | false; "335438"?: "No" | "Yes" | true | false; "191×325"?: "No" | "Yes" | true | false; "191325"?: "No" | "Yes" | true | false; "335×190"?: "Yes" | "No" | true | false; "335190"?: "Yes" | "No" | true | false };

export declare const AuroraBigImageCardN5166_37771: ComponentType<AuroraBigImageCardN5166_37771Props>;

export type AuroraSmallThumbnailCardN5175_96062Props = Omit<AuroraArchiveProps, "variant" | "Plan Purchase" | "planPurchase" | "Bubble Type" | "bubbleType" | "Bubble" | "bubble" | "Image-Only" | "imageOnly" | "Icon-Only" | "iconOnly"> & { variant?: { "Plan Purchase"?: "No" | "Yes" | true | false; "Bubble Type"?: "none" | "V1 Selected" | "V1 Defaut" | "V2 Selected" | "V2 Default"; "Bubble"?: "No" | "Yes" | true | false; "Image-Only"?: "Yes" | "No" | true | false; "Icon-Only"?: "No" | "Yes" | true | false }; "Plan Purchase"?: "No" | "Yes" | true | false; "planPurchase"?: "No" | "Yes" | true | false; "Bubble Type"?: "none" | "V1 Selected" | "V1 Defaut" | "V2 Selected" | "V2 Default"; "bubbleType"?: "none" | "V1 Selected" | "V1 Defaut" | "V2 Selected" | "V2 Default"; "Bubble"?: "No" | "Yes" | true | false; "bubble"?: "No" | "Yes" | true | false; "Image-Only"?: "Yes" | "No" | true | false; "imageOnly"?: "Yes" | "No" | true | false; "Icon-Only"?: "No" | "Yes" | true | false; "iconOnly"?: "No" | "Yes" | true | false };

export declare const AuroraSmallThumbnailCardN5175_96062: ComponentType<AuroraSmallThumbnailCardN5175_96062Props>;

export declare const AuroraCounterCard: ComponentType<AuroraCounterCardProps>;

export declare const AuroraCounterCardN5265_38410: ComponentType<AuroraCounterCardProps>;

export type AuroraMediumThumbnailCardN5671_39184Props = Omit<AuroraArchiveProps, "variant" | "Contact card" | "contactCard" | "SKU Card" | "sKUCard" | "Image-Only" | "imageOnly" | "Brand Image" | "brandImage"> & { variant?: { "Contact card"?: "No" | "Yes" | true | false; "SKU Card"?: "No" | "Yes" | true | false; "Image-Only"?: "Yes" | "No" | true | false; "Brand Image"?: "No" | "Yes" | true | false }; "Contact card"?: "No" | "Yes" | true | false; "contactCard"?: "No" | "Yes" | true | false; "SKU Card"?: "No" | "Yes" | true | false; "sKUCard"?: "No" | "Yes" | true | false; "Image-Only"?: "Yes" | "No" | true | false; "imageOnly"?: "Yes" | "No" | true | false; "Brand Image"?: "No" | "Yes" | true | false; "brandImage"?: "No" | "Yes" | true | false };

export declare const AuroraMediumThumbnailCardN5671_39184: ComponentType<AuroraMediumThumbnailCardN5671_39184Props>;

export type AuroraHabitCardN7060_47172Props = Omit<AuroraArchiveProps, "variant" | "Logging" | "logging" | "with Video" | "withVideo"> & { variant?: { "Logging"?: "Yes" | "No" | true | false; "with Video"?: "No" | "Yes" | true | false }; "Logging"?: "Yes" | "No" | true | false; "logging"?: "Yes" | "No" | true | false; "with Video"?: "No" | "Yes" | true | false; "withVideo"?: "No" | "Yes" | true | false };

export declare const AuroraHabitCardN7060_47172: ComponentType<AuroraHabitCardN7060_47172Props>;

export type AuroraTallCatalogCardN7118_47924Props = Omit<AuroraArchiveProps, "variant" | "Size" | "size"> & { variant?: { "Size"?: "Medium" | "Small" | "Big" }; "Size"?: "Medium" | "Small" | "Big"; "size"?: "Medium" | "Small" | "Big" };

export declare const AuroraTallCatalogCardN7118_47924: ComponentType<AuroraTallCatalogCardN7118_47924Props>;

export type AuroraMembershipCardN7289_48884Props = Omit<AuroraArchiveProps, "variant" | "with CTA" | "withCTA"> & { variant?: { "with CTA"?: "No" | "Yes" | true | false }; "with CTA"?: "No" | "Yes" | true | false; "withCTA"?: "No" | "Yes" | true | false };

export declare const AuroraMembershipCardN7289_48884: ComponentType<AuroraMembershipCardN7289_48884Props>;

export type AuroraProgressCardN7493_49790Props = Omit<AuroraArchiveProps, "variant" | "3rd Text Line" | "3rdTextLine" | "Expired" | "expired" | "Renewed" | "renewed"> & { variant?: { "3rd Text Line"?: "No" | "Yes" | true | false; "Expired"?: "No" | "Yes" | true | false; "Renewed"?: "No" | "Yes" | true | false }; "3rd Text Line"?: "No" | "Yes" | true | false; "3rdTextLine"?: "No" | "Yes" | true | false; "Expired"?: "No" | "Yes" | true | false; "expired"?: "No" | "Yes" | true | false; "Renewed"?: "No" | "Yes" | true | false; "renewed"?: "No" | "Yes" | true | false };

export declare const AuroraProgressCardN7493_49790: ComponentType<AuroraProgressCardN7493_49790Props>;

export type AuroraSquareSmallImageCardN7597_49220Props = Omit<AuroraArchiveProps, "variant" | "Selected" | "selected" | "Shape" | "shape"> & { variant?: { "Selected"?: "No" | "Yes" | true | false; "Shape"?: "Square" | "Tall Rectangle" }; "Selected"?: "No" | "Yes" | true | false; "selected"?: "No" | "Yes" | true | false; "Shape"?: "Square" | "Tall Rectangle"; "shape"?: "Square" | "Tall Rectangle" };

export declare const AuroraSquareSmallImageCardN7597_49220: ComponentType<AuroraSquareSmallImageCardN7597_49220Props>;

export type AuroraSquareEnclosedCatalogCardN10706_56595Props = Omit<AuroraArchiveProps, "variant" | "Property 3" | "property3" | "Property 1" | "property1" | "Property 2" | "property2"> & { variant?: { "Property 3"?: "No" | false; "Property 1"?: "Yes" | true; "Property 2"?: "Yes" | "No" | true | false }; "Property 3"?: "No" | false; "property3"?: "No" | false; "Property 1"?: "Yes" | true; "property1"?: "Yes" | true; "Property 2"?: "Yes" | "No" | true | false; "property2"?: "Yes" | "No" | true | false };

export declare const AuroraSquareEnclosedCatalogCardN10706_56595: ComponentType<AuroraSquareEnclosedCatalogCardN10706_56595Props>;

export type AuroraHugeEnclosedCatalogCardN19760_46694Props = Omit<AuroraArchiveProps, "variant" | "elite" | "Play Select" | "playSelect"> & { variant?: { "elite"?: "Yes" | "No" | true | false; "Play Select"?: "No" | "Yes" | true | false }; "elite"?: "Yes" | "No" | true | false; "Play Select"?: "No" | "Yes" | true | false; "playSelect"?: "No" | "Yes" | true | false };

export declare const AuroraHugeEnclosedCatalogCardN19760_46694: ComponentType<AuroraHugeEnclosedCatalogCardN19760_46694Props>;

export type AuroraEnclosedActionCardN11759_25879Props = Omit<AuroraArchiveProps, "variant" | "Empty State" | "emptyState" | "With Twin Actions" | "withTwinActions" | "Multi-Slot" | "multiSlot"> & { variant?: { "Empty State"?: "No" | "yes" | true | false; "With Twin Actions"?: "Yes" | "No" | true | false; "Multi-Slot"?: "Yes" | "No" | true | false }; "Empty State"?: "No" | "yes" | true | false; "emptyState"?: "No" | "yes" | true | false; "With Twin Actions"?: "Yes" | "No" | true | false; "withTwinActions"?: "Yes" | "No" | true | false; "Multi-Slot"?: "Yes" | "No" | true | false; "multiSlot"?: "Yes" | "No" | true | false };

export declare const AuroraEnclosedActionCardN11759_25879: ComponentType<AuroraEnclosedActionCardN11759_25879Props>;

export type AuroraStatsN12480_30420Props = Omit<AuroraArchiveProps, "variant" | "Stats Count" | "statsCount"> & { variant?: { "Stats Count"?: "4" | "2" }; "Stats Count"?: "4" | "2"; "statsCount"?: "4" | "2" };

export declare const AuroraStatsN12480_30420: ComponentType<AuroraStatsN12480_30420Props>;

export type AuroraCircleSquareThumbnailCardN13302_32933Props = Omit<AuroraArchiveProps, "variant" | "Price" | "price" | "Type" | "type"> & { variant?: { "Price"?: "No" | "Yes" | true | false; "Type"?: "1" | "2" }; "Price"?: "No" | "Yes" | true | false; "price"?: "No" | "Yes" | true | false; "Type"?: "1" | "2"; "type"?: "1" | "2" };

export declare const AuroraCircleSquareThumbnailCardN13302_32933: ComponentType<AuroraCircleSquareThumbnailCardN13302_32933Props>;

export type AuroraUpcomingClassesN13305_33016Props = Omit<AuroraArchiveProps, "variant" | "Waitlist" | "waitlist" | "Image" | "image"> & { variant?: { "Waitlist"?: "Yes" | "No" | true | false; "Image"?: "No" | "Yes" | true | false }; "Waitlist"?: "Yes" | "No" | true | false; "waitlist"?: "Yes" | "No" | true | false; "Image"?: "No" | "Yes" | true | false; "image"?: "No" | "Yes" | true | false };

export declare const AuroraUpcomingClassesN13305_33016: ComponentType<AuroraUpcomingClassesN13305_33016Props>;

export type AuroraContextMenuN13310_32964Props = Omit<AuroraArchiveProps, "variant" | "Type" | "type"> & { variant?: { "Type"?: "Single List" | "Multiple List" }; "Type"?: "Single List" | "Multiple List"; "type"?: "Single List" | "Multiple List" };

export declare const AuroraContextMenuN13310_32964: ComponentType<AuroraContextMenuN13310_32964Props>;

export type AuroraWideNoActionEnclosedCatalogCardN14031_37238Props = Omit<AuroraArchiveProps, "variant" | "Catalog Blog" | "catalogBlog" | "Catalog Card" | "catalogCard"> & { variant?: { "Catalog Blog"?: "No" | "Yes" | true | false; "Catalog Card"?: "Yes" | "No" | true | false }; "Catalog Blog"?: "No" | "Yes" | true | false; "catalogBlog"?: "No" | "Yes" | true | false; "Catalog Card"?: "Yes" | "No" | true | false; "catalogCard"?: "Yes" | "No" | true | false };

export declare const AuroraWideNoActionEnclosedCatalogCardN14031_37238: ComponentType<AuroraWideNoActionEnclosedCatalogCardN14031_37238Props>;

export type AuroraHugeCatalogCardN14628_36603Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" }; "Property 1"?: "Default"; "property1"?: "Default" };

export declare const AuroraHugeCatalogCardN14628_36603: ComponentType<AuroraHugeCatalogCardN14628_36603Props>;

export type AuroraStatsTileN17124_43687Props = Omit<AuroraArchiveProps, "variant" | "Portrait" | "portrait" | "Landscape" | "landscape"> & { variant?: { "Portrait"?: "Yes" | "No" | true | false; "Landscape"?: "No" | "Yes" | true | false }; "Portrait"?: "Yes" | "No" | true | false; "portrait"?: "Yes" | "No" | true | false; "Landscape"?: "No" | "Yes" | true | false; "landscape"?: "No" | "Yes" | true | false };

export declare const AuroraStatsTileN17124_43687: ComponentType<AuroraStatsTileN17124_43687Props>;

export type AuroraDiscreteProgressCardN22695_5672Props = Omit<AuroraArchiveProps, "variant" | "Accordion State" | "accordionState"> & { variant?: { "Accordion State"?: "Closed" | "Open" }; "Accordion State"?: "Closed" | "Open"; "accordionState"?: "Closed" | "Open" };

export declare const AuroraDiscreteProgressCardN22695_5672: ComponentType<AuroraDiscreteProgressCardN22695_5672Props>;

export type AuroraStatsCardsFullWidthN24370_4925Props = Omit<AuroraArchiveProps, "variant" | "Type" | "type"> & { variant?: { "Type"?: "Numbers-first" | "Image Nudge" | "With Badge" | "Text-only" }; "Type"?: "Numbers-first" | "Image Nudge" | "With Badge" | "Text-only"; "type"?: "Numbers-first" | "Image Nudge" | "With Badge" | "Text-only" };

export declare const AuroraStatsCardsFullWidthN24370_4925: ComponentType<AuroraStatsCardsFullWidthN24370_4925Props>;

export type AuroraEnclosedListviewN7325_49914Props = Omit<AuroraArchiveProps, "variant" | "With Actions" | "withActions"> & { variant?: { "With Actions"?: "No" | "Yes" | true | false }; "With Actions"?: "No" | "Yes" | true | false; "withActions"?: "No" | "Yes" | true | false };

export declare const AuroraEnclosedListviewN7325_49914: ComponentType<AuroraEnclosedListviewN7325_49914Props>;

export type AuroraSmallThumbnailModuleListviewN10828_56488Props = Omit<AuroraArchiveProps, "variant" | "Enclosed" | "enclosed"> & { variant?: { "Enclosed"?: "No" | "Yes" | true | false }; "Enclosed"?: "No" | "Yes" | true | false; "enclosed"?: "No" | "Yes" | true | false };

export declare const AuroraSmallThumbnailModuleListviewN10828_56488: ComponentType<AuroraSmallThumbnailModuleListviewN10828_56488Props>;

export type AuroraListViewActionCardN13964_33758Props = Omit<AuroraArchiveProps, "variant" | "Expanded" | "expanded" | "Normal" | "normal"> & { variant?: { "Expanded"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false }; "Expanded"?: "No" | "Yes" | true | false; "expanded"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false };

export declare const AuroraListViewActionCardN13964_33758: ComponentType<AuroraListViewActionCardN13964_33758Props>;

export type AuroraBulletsListModuleN13958_33546Props = Omit<AuroraArchiveProps, "variant" | "List" | "list" | "Grid" | "grid"> & { variant?: { "List"?: "Yes" | "No" | true | false; "Grid"?: "No" | "Yes" | true | false }; "List"?: "Yes" | "No" | true | false; "list"?: "Yes" | "No" | true | false; "Grid"?: "No" | "Yes" | true | false; "grid"?: "No" | "Yes" | true | false };

export declare const AuroraBulletsListModuleN13958_33546: ComponentType<AuroraBulletsListModuleN13958_33546Props>;

export type AuroraLoggingStatsCardN24741_35509Props = Omit<AuroraArchiveProps, "variant" | "Locked" | "locked"> & { variant?: { "Locked"?: "No" | "Yes" | true | false }; "Locked"?: "No" | "Yes" | true | false; "locked"?: "No" | "Yes" | true | false };

export declare const AuroraLoggingStatsCardN24741_35509: ComponentType<AuroraLoggingStatsCardN24741_35509Props>;

export declare const AuroraChipSelectorGrid: ComponentType<AuroraChipSelectorGridProps>;

export declare const AuroraChipSelectorGridN4313_28441: ComponentType<AuroraChipSelectorGridProps>;

export declare const AuroraRadioGroup: ComponentType<AuroraRadioGroupProps>;

export declare const AuroraRadioButtonsGroupN6393_46468: ComponentType<AuroraRadioGroupProps>;

export declare const AuroraCheckboxGroup: ComponentType<AuroraCheckboxGroupProps>;

export declare const AuroraCheckboxesGroupN6393_46813: ComponentType<AuroraCheckboxGroupProps>;

export declare const AuroraRadioTiles: ComponentType<AuroraRadioTilesProps>;

export declare const AuroraRadioTilesGroupN7597_49271: ComponentType<AuroraRadioTilesProps>;

export type AuroraPostN14005_36471Props = Omit<AuroraArchiveProps, "variant" | "Video" | "video" | "Comment" | "comment" | "Carousal Image" | "carousalImage" | "Stats" | "stats" | "Moments" | "moments" | "PDF" | "pDF" | "Poll" | "poll" | "Text+Image" | "textImage" | "Text" | "text" | "Link" | "link"> & { variant?: { "Video"?: "No" | "Yes" | true | false; "Comment"?: "No" | "Yes" | true | false; "Carousal Image"?: "No" | "Yes" | true | false; "Stats"?: "No" | "Yes" | true | false; "Moments"?: "No" | "Yes" | true | false; "PDF"?: "No" | "Yes" | true | false; "Poll"?: "No" | "Yes" | true | false; "Text+Image"?: "Yes" | "No" | true | false; "Text"?: "No" | "Yes" | true | false; "Link"?: "No" | "Yes" | true | false }; "Video"?: "No" | "Yes" | true | false; "video"?: "No" | "Yes" | true | false; "Comment"?: "No" | "Yes" | true | false; "comment"?: "No" | "Yes" | true | false; "Carousal Image"?: "No" | "Yes" | true | false; "carousalImage"?: "No" | "Yes" | true | false; "Stats"?: "No" | "Yes" | true | false; "stats"?: "No" | "Yes" | true | false; "Moments"?: "No" | "Yes" | true | false; "moments"?: "No" | "Yes" | true | false; "PDF"?: "No" | "Yes" | true | false; "pDF"?: "No" | "Yes" | true | false; "Poll"?: "No" | "Yes" | true | false; "poll"?: "No" | "Yes" | true | false; "Text+Image"?: "Yes" | "No" | true | false; "textImage"?: "Yes" | "No" | true | false; "Text"?: "No" | "Yes" | true | false; "text"?: "No" | "Yes" | true | false; "Link"?: "No" | "Yes" | true | false; "link"?: "No" | "Yes" | true | false };

export declare const AuroraPostN14005_36471: ComponentType<AuroraPostN14005_36471Props>;

export type AuroraTitlebarVariantsN415_4632Props = Omit<AuroraArchiveProps, "variant" | "Type" | "type"> & { variant?: { "Type"?: "Classic / Icon Actions" | "Classic / Text Action" | "Titlebar with cross" | "Search Bar" | "Extended Classic / Tabs" | "Extended Search Bar" | "Address" | "Date Switcher" | "Searchbar with Title" | "Address + Subtitle" | "Classic / Profile" | "Profile + Tabs" }; "Type"?: "Classic / Icon Actions" | "Classic / Text Action" | "Titlebar with cross" | "Search Bar" | "Extended Classic / Tabs" | "Extended Search Bar" | "Address" | "Date Switcher" | "Searchbar with Title" | "Address + Subtitle" | "Classic / Profile" | "Profile + Tabs"; "type"?: "Classic / Icon Actions" | "Classic / Text Action" | "Titlebar with cross" | "Search Bar" | "Extended Classic / Tabs" | "Extended Search Bar" | "Address" | "Date Switcher" | "Searchbar with Title" | "Address + Subtitle" | "Classic / Profile" | "Profile + Tabs" };

export declare const AuroraTitlebarVariantsN415_4632: ComponentType<AuroraTitlebarVariantsN415_4632Props>;

export type AuroraCatalogCarouselN1451_8494Props = Omit<AuroraArchiveProps, "variant" | "Big Image" | "bigImage" | "Small Image" | "smallImage" | "Gym" | "gym" | "Multi-Actions" | "multiActions"> & { variant?: { "Big Image"?: "Yes" | "No" | true | false; "Small Image"?: "No" | "Yes" | true | false; "Gym"?: "Yes" | "No" | true | false; "Multi-Actions"?: "No" | "Yes" | true | false }; "Big Image"?: "Yes" | "No" | true | false; "bigImage"?: "Yes" | "No" | true | false; "Small Image"?: "No" | "Yes" | true | false; "smallImage"?: "No" | "Yes" | true | false; "Gym"?: "Yes" | "No" | true | false; "gym"?: "Yes" | "No" | true | false; "Multi-Actions"?: "No" | "Yes" | true | false; "multiActions"?: "No" | "Yes" | true | false };

export declare const AuroraCatalogCarouselN1451_8494: ComponentType<AuroraCatalogCarouselN1451_8494Props>;

export type AuroraPostersCarouselN626_2784Props = Omit<AuroraArchiveProps, "variant" | "Large" | "large" | "Small" | "small" | "Medium" | "medium"> & { variant?: { "Large"?: "Yes" | "No" | true | false; "Small"?: "No" | "Yes" | true | false; "Medium"?: "No" | "Yes" | true | false }; "Large"?: "Yes" | "No" | true | false; "large"?: "Yes" | "No" | true | false; "Small"?: "No" | "Yes" | true | false; "small"?: "No" | "Yes" | true | false; "Medium"?: "No" | "Yes" | true | false; "medium"?: "No" | "Yes" | true | false };

export declare const AuroraPostersCarouselN626_2784: ComponentType<AuroraPostersCarouselN626_2784Props>;

export type AuroraTimerOfferCarouselN557_2351Props = Omit<AuroraArchiveProps, "variant" | "Size" | "size"> & { variant?: { "Size"?: "Mini No Image Timer" | "Timer With Image" | "No Image Timer" }; "Size"?: "Mini No Image Timer" | "Timer With Image" | "No Image Timer"; "size"?: "Mini No Image Timer" | "Timer With Image" | "No Image Timer" };

export declare const AuroraTimerOfferCarouselN557_2351: ComponentType<AuroraTimerOfferCarouselN557_2351Props>;

export type AuroraCirclesCarouselAllFormatsN1096_12467Props = Omit<AuroraArchiveProps, "variant" | "Use Bebas Neue" | "useBebasNeue" | "Peek" | "peek"> & { variant?: { "Use Bebas Neue"?: "Yes" | "No" | true | false; "Peek"?: "2.5" | "3.5" | "4.5" }; "Use Bebas Neue"?: "Yes" | "No" | true | false; "useBebasNeue"?: "Yes" | "No" | true | false; "Peek"?: "2.5" | "3.5" | "4.5"; "peek"?: "2.5" | "3.5" | "4.5" };

export declare const AuroraCirclesCarouselAllFormatsN1096_12467: ComponentType<AuroraCirclesCarouselAllFormatsN1096_12467Props>;

export type AuroraImageCarouselN5166_37790Props = Omit<AuroraArchiveProps, "variant" | "Size" | "size"> & { variant?: { "Size"?: "Wide" | "Square" | "Tall" }; "Size"?: "Wide" | "Square" | "Tall"; "size"?: "Wide" | "Square" | "Tall" };

export declare const AuroraImageCarouselN5166_37790: ComponentType<AuroraImageCarouselN5166_37790Props>;

export type AuroraTallCatalogCarouselN7425_48666Props = Omit<AuroraArchiveProps, "variant" | "Image Size" | "imageSize"> & { variant?: { "Image Size"?: "Medium" | "Small" | "Big" }; "Image Size"?: "Medium" | "Small" | "Big"; "imageSize"?: "Medium" | "Small" | "Big" };

export declare const AuroraTallCatalogCarouselN7425_48666: ComponentType<AuroraTallCatalogCarouselN7425_48666Props>;

export type AuroraOffersCarouselN9204_55456Props = Omit<AuroraArchiveProps, "variant" | "Icon" | "icon"> & { variant?: { "Icon"?: "Yes" | "No" | true | false }; "Icon"?: "Yes" | "No" | true | false; "icon"?: "Yes" | "No" | true | false };

export declare const AuroraOffersCarouselN9204_55456: ComponentType<AuroraOffersCarouselN9204_55456Props>;

export type AuroraFitnessStatsCarouselN16799_39634Props = Omit<AuroraArchiveProps, "variant" | "Portrait" | "portrait" | "Landscape" | "landscape"> & { variant?: { "Portrait"?: "Yes" | "No" | true | false; "Landscape"?: "No" | "Yes" | true | false }; "Portrait"?: "Yes" | "No" | true | false; "portrait"?: "Yes" | "No" | true | false; "Landscape"?: "No" | "Yes" | true | false; "landscape"?: "No" | "Yes" | true | false };

export declare const AuroraFitnessStatsCarouselN16799_39634: ComponentType<AuroraFitnessStatsCarouselN16799_39634Props>;

export type AuroraThumbnailCardCarouselN17043_39799Props = Omit<AuroraArchiveProps, "variant" | "SKU" | "sKU" | "Big" | "big" | "Bubble" | "bubble" | "Small" | "small"> & { variant?: { "SKU"?: "No" | "Yes" | true | false; "Big"?: "Yes" | "No" | true | false; "Bubble"?: "No" | false; "Small"?: "No" | "Yes" | true | false }; "SKU"?: "No" | "Yes" | true | false; "sKU"?: "No" | "Yes" | true | false; "Big"?: "Yes" | "No" | true | false; "big"?: "Yes" | "No" | true | false; "Bubble"?: "No" | false; "bubble"?: "No" | false; "Small"?: "No" | "Yes" | true | false; "small"?: "No" | "Yes" | true | false };

export declare const AuroraThumbnailCardCarouselN17043_39799: ComponentType<AuroraThumbnailCardCarouselN17043_39799Props>;

export type AuroraPageHeaderStoreN1343_8042Props = Omit<AuroraArchiveProps, "variant" | "Property" | "property"> & { variant?: { "Property"?: "Store product" }; "Property"?: "Store product"; "property"?: "Store product" };

export declare const AuroraPageHeaderStoreN1343_8042: ComponentType<AuroraPageHeaderStoreN1343_8042Props>;

export type AuroraPageHeaderPosterAndProgramN14864_37975Props = Omit<AuroraArchiveProps, "variant" | "Property" | "property"> & { variant?: { "Property"?: "Poster detail" }; "Property"?: "Poster detail"; "property"?: "Poster detail" };

export declare const AuroraPageHeaderPosterAndProgramN14864_37975: ComponentType<AuroraPageHeaderPosterAndProgramN14864_37975Props>;

export type AuroraPageHeaderFormatN14864_37835Props = Omit<AuroraArchiveProps, "variant" | "Property" | "property"> & { variant?: { "Property"?: "Format" }; "Property"?: "Format"; "property"?: "Format" };

export declare const AuroraPageHeaderFormatN14864_37835: ComponentType<AuroraPageHeaderFormatN14864_37835Props>;

export type AuroraPageHeaderUserN14864_37571Props = Omit<AuroraArchiveProps, "variant" | "User community" | "userCommunity" | "Trainer • Therapist" | "trainerTherapist"> & { variant?: { "User community"?: "No" | "Yes" | true | false; "Trainer • Therapist"?: "Yes" | "No" | true | false }; "User community"?: "No" | "Yes" | true | false; "userCommunity"?: "No" | "Yes" | true | false; "Trainer • Therapist"?: "Yes" | "No" | true | false; "trainerTherapist"?: "Yes" | "No" | true | false };

export declare const AuroraPageHeaderUserN14864_37571: ComponentType<AuroraPageHeaderUserN14864_37571Props>;

export type AuroraPageHeaderLandscape169N14864_37431Props = Omit<AuroraArchiveProps, "variant" | "Property" | "property"> & { variant?: { "Property"?: "landscape" }; "Property"?: "landscape"; "property"?: "landscape" };

export declare const AuroraPageHeaderLandscape169N14864_37431: ComponentType<AuroraPageHeaderLandscape169N14864_37431Props>;

export type AuroraCenterAndClassDetailHeaderN17759_44539Props = Omit<AuroraArchiveProps, "variant" | "Property" | "property"> & { variant?: { "Property"?: "landscape" }; "Property"?: "landscape"; "property"?: "landscape" };

export declare const AuroraCenterAndClassDetailHeaderN17759_44539: ComponentType<AuroraCenterAndClassDetailHeaderN17759_44539Props>;

export type AuroraFreeTextN4913_34317Props = Omit<AuroraArchiveProps, "variant" | "Live" | "live" | "Audio-Only" | "audioOnly" | "Stats" | "stats" | "Timer" | "timer" | "Habit Text" | "habitText" | "620px Height" | "620pxHeight" | "550px Height" | "550pxHeight" | "Testimonial" | "testimonial" | "QR code" | "qRCode" | "Class confirmation" | "classConfirmation"> & { variant?: { "Live"?: "No" | "Yes" | true | false; "Audio-Only"?: "No" | "Yes" | true | false; "Stats"?: "No" | "Yes" | true | false; "Timer"?: "No" | "Yes" | true | false; "Habit Text"?: "No" | "Yes" | true | false; "620px Height"?: "No" | "Yes" | true | false; "550px Height"?: "Yes" | "No" | true | false; "Testimonial"?: "No" | "Yes" | true | false; "QR code"?: "No" | "Yes" | true | false; "Class confirmation"?: "No" | "Yes" | true | false }; "Live"?: "No" | "Yes" | true | false; "live"?: "No" | "Yes" | true | false; "Audio-Only"?: "No" | "Yes" | true | false; "audioOnly"?: "No" | "Yes" | true | false; "Stats"?: "No" | "Yes" | true | false; "stats"?: "No" | "Yes" | true | false; "Timer"?: "No" | "Yes" | true | false; "timer"?: "No" | "Yes" | true | false; "Habit Text"?: "No" | "Yes" | true | false; "habitText"?: "No" | "Yes" | true | false; "620px Height"?: "No" | "Yes" | true | false; "620pxHeight"?: "No" | "Yes" | true | false; "550px Height"?: "Yes" | "No" | true | false; "550pxHeight"?: "Yes" | "No" | true | false; "Testimonial"?: "No" | "Yes" | true | false; "testimonial"?: "No" | "Yes" | true | false; "QR code"?: "No" | "Yes" | true | false; "qRCode"?: "No" | "Yes" | true | false; "Class confirmation"?: "No" | "Yes" | true | false; "classConfirmation"?: "No" | "Yes" | true | false };

export declare const AuroraFreeTextN4913_34317: ComponentType<AuroraFreeTextN4913_34317Props>;

export type AuroraConfirmationHeaderN9360_54241Props = Omit<AuroraArchiveProps, "variant" | "Accordian" | "accordian" | "Waitlist" | "waitlist" | "Subtitle Swap" | "subtitleSwap"> & { variant?: { "Accordian"?: "Yes" | "No" | true | false; "Waitlist"?: "Yes" | "No" | true | false; "Subtitle Swap"?: "No" | "Yes" | true | false }; "Accordian"?: "Yes" | "No" | true | false; "accordian"?: "Yes" | "No" | true | false; "Waitlist"?: "Yes" | "No" | true | false; "waitlist"?: "Yes" | "No" | true | false; "Subtitle Swap"?: "No" | "Yes" | true | false; "subtitleSwap"?: "No" | "Yes" | true | false };

export declare const AuroraConfirmationHeaderN9360_54241: ComponentType<AuroraConfirmationHeaderN9360_54241Props>;

export type AuroraCheckoutN9360_54267Props = Omit<AuroraArchiveProps, "variant" | "Pack Detail With Header" | "packDetailWithHeader" | "Pack Detail With image" | "packDetailWithImage" | "Class Confirmation" | "classConfirmation"> & { variant?: { "Pack Detail With Header"?: "No" | "Yes" | true | false; "Pack Detail With image"?: "No" | "Yes" | true | false; "Class Confirmation"?: "Yes" | "No" | true | false }; "Pack Detail With Header"?: "No" | "Yes" | true | false; "packDetailWithHeader"?: "No" | "Yes" | true | false; "Pack Detail With image"?: "No" | "Yes" | true | false; "packDetailWithImage"?: "No" | "Yes" | true | false; "Class Confirmation"?: "Yes" | "No" | true | false; "classConfirmation"?: "Yes" | "No" | true | false };

export declare const AuroraCheckoutN9360_54267: ComponentType<AuroraCheckoutN9360_54267Props>;

export type AuroraTestimonialsN4850_34643Props = Omit<AuroraArchiveProps, "variant" | "CTA" | "cTA" | "Enclosed" | "enclosed" | "Normal" | "normal" | "Scrollable" | "scrollable"> & { variant?: { "CTA"?: "No" | "Yes" | true | false; "Enclosed"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "Scrollable"?: "No" | "Yes" | true | false }; "CTA"?: "No" | "Yes" | true | false; "cTA"?: "No" | "Yes" | true | false; "Enclosed"?: "No" | "Yes" | true | false; "enclosed"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false; "Scrollable"?: "No" | "Yes" | true | false; "scrollable"?: "No" | "Yes" | true | false };

export declare const AuroraTestimonialsN4850_34643: ComponentType<AuroraTestimonialsN4850_34643Props>;

export type AuroraComponent3ColumnCircleGridN5175_58416Props = Omit<AuroraArchiveProps, "variant" | "2-lines Text" | "2LinesText"> & { variant?: { "2-lines Text"?: "No" | "Yes" | true | false }; "2-lines Text"?: "No" | "Yes" | true | false; "2LinesText"?: "No" | "Yes" | true | false };

export declare const AuroraComponent3ColumnCircleGridN5175_58416: ComponentType<AuroraComponent3ColumnCircleGridN5175_58416Props>;

export type AuroraComponent2ColumnRectangleGridN5671_43232Props = Omit<AuroraArchiveProps, "variant" | "IV Grid" | "iVGrid" | "I Image grid" | "iImageGrid" | "SKU grid" | "sKUGrid" | "III Image grid" | "iIIImageGrid" | "II Image grid" | "iIImageGrid" | "poster grid" | "posterGrid"> & { variant?: { "IV Grid"?: "No" | "Yes" | true | false; "I Image grid"?: "No" | "Yes" | true | false; "SKU grid"?: "No" | "Yes" | true | false; "III Image grid"?: "No" | "Yes" | true | false; "II Image grid"?: "No" | "Yes" | true | false; "poster grid"?: "Yes" | "No" | true | false }; "IV Grid"?: "No" | "Yes" | true | false; "iVGrid"?: "No" | "Yes" | true | false; "I Image grid"?: "No" | "Yes" | true | false; "iImageGrid"?: "No" | "Yes" | true | false; "SKU grid"?: "No" | "Yes" | true | false; "sKUGrid"?: "No" | "Yes" | true | false; "III Image grid"?: "No" | "Yes" | true | false; "iIIImageGrid"?: "No" | "Yes" | true | false; "II Image grid"?: "No" | "Yes" | true | false; "iIImageGrid"?: "No" | "Yes" | true | false; "poster grid"?: "Yes" | "No" | true | false; "posterGrid"?: "Yes" | "No" | true | false };

export declare const AuroraComponent2ColumnRectangleGridN5671_43232: ComponentType<AuroraComponent2ColumnRectangleGridN5671_43232Props>;

export type AuroraSKUCardGridN20775_47872Props = Omit<AuroraArchiveProps, "variant" | "Bubble" | "bubble" | "Normal" | "normal"> & { variant?: { "Bubble"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false }; "Bubble"?: "No" | "Yes" | true | false; "bubble"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false };

export declare const AuroraSKUCardGridN20775_47872: ComponentType<AuroraSKUCardGridN20775_47872Props>;

export type AuroraAddressAccordianN1550_19938Props = Omit<AuroraArchiveProps, "variant" | "Accordian" | "accordian"> & { variant?: { "Accordian"?: "No" | "Yes" | true | false }; "Accordian"?: "No" | "Yes" | true | false; "accordian"?: "No" | "Yes" | true | false };

export declare const AuroraAddressAccordianN1550_19938: ComponentType<AuroraAddressAccordianN1550_19938Props>;

export type AuroraWaitlistAccordianN17761_44406Props = Omit<AuroraArchiveProps, "variant" | "Accordian" | "accordian"> & { variant?: { "Accordian"?: "No" | "Yes" | true | false }; "Accordian"?: "No" | "Yes" | true | false; "accordian"?: "No" | "Yes" | true | false };

export declare const AuroraWaitlistAccordianN17761_44406: ComponentType<AuroraWaitlistAccordianN17761_44406Props>;

export type AuroraInfoAccordianN1551_19934Props = Omit<AuroraArchiveProps, "variant" | "Expand" | "expand" | "Prose Only" | "proseOnly" | "Offer" | "offer"> & { variant?: { "Expand"?: "No" | "Yes" | true | false; "Prose Only"?: "No" | "Yes" | true | false; "Offer"?: "No" | "Yes" | true | false }; "Expand"?: "No" | "Yes" | true | false; "expand"?: "No" | "Yes" | true | false; "Prose Only"?: "No" | "Yes" | true | false; "proseOnly"?: "No" | "Yes" | true | false; "Offer"?: "No" | "Yes" | true | false; "offer"?: "No" | "Yes" | true | false };

export declare const AuroraInfoAccordianN1551_19934: ComponentType<AuroraInfoAccordianN1551_19934Props>;

export declare const AuroraAccordianListViewN5623_38667: ComponentType<AuroraAccordionProps>;

export declare const AuroraAccordion: ComponentType<AuroraAccordionProps>;

export type AuroraKeyboardsN17044_46168Props = Omit<AuroraArchiveProps, "variant" | "Numeric" | "numeric" | "ABC" | "aBC"> & { variant?: { "Numeric"?: "No" | "Yes" | true | false; "ABC"?: "Yes" | "No" | true | false }; "Numeric"?: "No" | "Yes" | true | false; "numeric"?: "No" | "Yes" | true | false; "ABC"?: "Yes" | "No" | true | false; "aBC"?: "Yes" | "No" | true | false };

export declare const AuroraKeyboardsN17044_46168: ComponentType<AuroraKeyboardsN17044_46168Props>;

export type AuroraFileFigmaCoverN13090_34292Props = Omit<AuroraArchiveProps, "variant" | "Archived" | "archived" | "Dev handoff" | "devHandoff" | "Normal" | "normal" | "Deprioritized" | "deprioritized"> & { variant?: { "Archived"?: "No" | "Yes" | true | false; "Dev handoff"?: "Yes" | "No" | true | false; "Normal"?: "No" | "Yes" | true | false; "Deprioritized"?: "No" | "Yes" | true | false }; "Archived"?: "No" | "Yes" | true | false; "archived"?: "No" | "Yes" | true | false; "Dev handoff"?: "Yes" | "No" | true | false; "devHandoff"?: "Yes" | "No" | true | false; "Normal"?: "No" | "Yes" | true | false; "normal"?: "No" | "Yes" | true | false; "Deprioritized"?: "No" | "Yes" | true | false; "deprioritized"?: "No" | "Yes" | true | false };

export declare const AuroraFileFigmaCoverN13090_34292: ComponentType<AuroraFileFigmaCoverN13090_34292Props>;

export type AuroraFileFlowCoverN13771_33295Props = Omit<AuroraArchiveProps, "variant" | "🔵 Done" | "done" | "🟢 Approved" | "approved" | "🟡 WIP" | "wIP" | "⚪️ No need" | "noNeed"> & { variant?: { "🔵 Done"?: "Yes" | "No" | true | false; "🟢 Approved"?: "No" | "Yes" | true | false; "🟡 WIP"?: "No" | "Yes" | true | false; "⚪️ No need"?: "No" | "Yes" | true | false }; "🔵 Done"?: "Yes" | "No" | true | false; "done"?: "Yes" | "No" | true | false; "🟢 Approved"?: "No" | "Yes" | true | false; "approved"?: "No" | "Yes" | true | false; "🟡 WIP"?: "No" | "Yes" | true | false; "wIP"?: "No" | "Yes" | true | false; "⚪️ No need"?: "No" | "Yes" | true | false; "noNeed"?: "No" | "Yes" | true | false };

export declare const AuroraFileFlowCoverN13771_33295: ComponentType<AuroraFileFlowCoverN13771_33295Props>;

export type AuroraFileNoteN13771_33465Props = Omit<AuroraArchiveProps, "variant" | "Critical" | "critical" | "Normal" | "normal" | "Interaction Details" | "interactionDetails"> & { variant?: { "Critical"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "Interaction Details"?: "No" | "Yes" | true | false }; "Critical"?: "No" | "Yes" | true | false; "critical"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false; "Interaction Details"?: "No" | "Yes" | true | false; "interactionDetails"?: "No" | "Yes" | true | false };

export declare const AuroraFileNoteN13771_33465: ComponentType<AuroraFileNoteN13771_33465Props>;

export type AuroraDSElementStatusN14628_36405Props = Omit<AuroraArchiveProps, "variant" | "🟠 No coded" | "noCoded" | "⚪️ Not Neede" | "notNeede" | "🟡 No added" | "noAdded" | "Exception" | "exception" | "🟢 Done" | "done"> & { variant?: { "🟠 No coded"?: "No" | "Yes" | true | false; "⚪️ Not Neede"?: "No" | "Yes" | true | false; "🟡 No added"?: "No" | "Yes" | true | false; "Exception"?: "No" | "Yes" | true | false; "🟢 Done"?: "Yes" | "No" | true | false }; "🟠 No coded"?: "No" | "Yes" | true | false; "noCoded"?: "No" | "Yes" | true | false; "⚪️ Not Neede"?: "No" | "Yes" | true | false; "notNeede"?: "No" | "Yes" | true | false; "🟡 No added"?: "No" | "Yes" | true | false; "noAdded"?: "No" | "Yes" | true | false; "Exception"?: "No" | "Yes" | true | false; "exception"?: "No" | "Yes" | true | false; "🟢 Done"?: "Yes" | "No" | true | false; "done"?: "Yes" | "No" | true | false };

export declare const AuroraDSElementStatusN14628_36405: ComponentType<AuroraDSElementStatusN14628_36405Props>;

export type AuroraSpacingBlockN6348_39608Props = Omit<AuroraArchiveProps, "variant" | "Spacing" | "spacing"> & { variant?: { "Spacing"?: "Big" | "Small" }; "Spacing"?: "Big" | "Small"; "spacing"?: "Big" | "Small" };

export declare const AuroraSpacingBlockN6348_39608: ComponentType<AuroraSpacingBlockN6348_39608Props>;

export type AuroraEmptyHouseN4601_27984Props = Omit<AuroraArchiveProps, "variant" | "big"> & { variant?: { "big"?: "yes" | true }; "big"?: "yes" | true };

export declare const AuroraEmptyHouseN4601_27984: ComponentType<AuroraEmptyHouseN4601_27984Props>;

export type AuroraOpenHouseN4601_27988Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "no" | "yes" | true | false }; "Big"?: "no" | "yes" | true | false; "big"?: "no" | "yes" | true | false };

export declare const AuroraOpenHouseN4601_27988: ComponentType<AuroraOpenHouseN4601_27988Props>;

export type AuroraInfoN16803_39584Props = Omit<AuroraArchiveProps, "variant" | "Default" | "default" | "Filled" | "filled"> & { variant?: { "Default"?: "Yes" | "No" | true | false; "Filled"?: "No" | "Yes" | true | false }; "Default"?: "Yes" | "No" | true | false; "default"?: "Yes" | "No" | true | false; "Filled"?: "No" | "Yes" | true | false; "filled"?: "No" | "Yes" | true | false };

export declare const AuroraInfoN16803_39584: ComponentType<AuroraInfoN16803_39584Props>;

export type AuroraLocationN4602_28174Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big" | "Filled" | "filled"> & { variant?: { "Big"?: "No" | "Yes" | true | false; "Filled"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false; "Filled"?: "No" | "Yes" | true | false; "filled"?: "No" | "Yes" | true | false };

export declare const AuroraLocationN4602_28174: ComponentType<AuroraLocationN4602_28174Props>;

export type AuroraLocationDetectedN12606_30129Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraLocationDetectedN12606_30129: ComponentType<AuroraLocationDetectedN12606_30129Props>;

export declare const AuroraMoodRating: ComponentType<AuroraMoodRatingProps>;

export declare const AuroraRatingBADN12997_37026: ComponentType<AuroraMoodRatingProps>;

export type AuroraFilterN16200_55410Props = Omit<AuroraArchiveProps, "variant" | "Selected" | "selected" | "Non Selected" | "nonSelected"> & { variant?: { "Selected"?: "No" | "Yes" | true | false; "Non Selected"?: "Yes" | "No" | true | false }; "Selected"?: "No" | "Yes" | true | false; "selected"?: "No" | "Yes" | true | false; "Non Selected"?: "Yes" | "No" | true | false; "nonSelected"?: "Yes" | "No" | true | false };

export declare const AuroraFilterN16200_55410: ComponentType<AuroraFilterN16200_55410Props>;

export type AuroraNotificationN5396_37792Props = Omit<AuroraArchiveProps, "variant" | "Disable" | "disable" | "With Nudge" | "withNudge" | "Normal" | "normal"> & { variant?: { "Disable"?: "No" | "Yes" | true | false; "With Nudge"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false }; "Disable"?: "No" | "Yes" | true | false; "disable"?: "No" | "Yes" | true | false; "With Nudge"?: "No" | "Yes" | true | false; "withNudge"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false };

export declare const AuroraNotificationN5396_37792: ComponentType<AuroraNotificationN5396_37792Props>;

export type AuroraCategoryListN12606_30152Props = Omit<AuroraArchiveProps, "variant" | "Search" | "search"> & { variant?: { "Search"?: "Yes" | "No" | true | false }; "Search"?: "Yes" | "No" | true | false; "search"?: "Yes" | "No" | true | false };

export declare const AuroraCategoryListN12606_30152: ComponentType<AuroraCategoryListN12606_30152Props>;

export type AuroraSearchN6393_44048Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraSearchN6393_44048: ComponentType<AuroraSearchN6393_44048Props>;

export type AuroraTickCheckN4620_30544Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "no" | "yes" | true | false }; "Big"?: "no" | "yes" | true | false; "big"?: "no" | "yes" | true | false };

export declare const AuroraTickCheckN4620_30544: ComponentType<AuroraTickCheckN4620_30544Props>;

export type AuroraBoundedTickCheckN4620_30548Props = Omit<AuroraArchiveProps, "variant" | "Size" | "size"> & { variant?: { "Size"?: "Small" | "Contained" | "Very Big" }; "Size"?: "Small" | "Contained" | "Very Big"; "size"?: "Small" | "Contained" | "Very Big" };

export declare const AuroraBoundedTickCheckN4620_30548: ComponentType<AuroraBoundedTickCheckN4620_30548Props>;

export type AuroraLockN5865_38589Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big" | "Fill" | "fill"> & { variant?: { "Big"?: "no" | "yes" | true | false; "Fill"?: "no" | "yes" | true | false }; "Big"?: "no" | "yes" | true | false; "big"?: "no" | "yes" | true | false; "Fill"?: "no" | "yes" | true | false; "fill"?: "no" | "yes" | true | false };

export declare const AuroraLockN5865_38589: ComponentType<AuroraLockN5865_38589Props>;

export type AuroraStarN12604_30098Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "filled" | "Outline" }; "Property 1"?: "filled" | "Outline"; "property1"?: "filled" | "Outline" };

export declare const AuroraStarN12604_30098: ComponentType<AuroraStarN12604_30098Props>;

export type AuroraLikeN24332_11671Props = Omit<AuroraArchiveProps, "variant" | "Selected" | "selected"> & { variant?: { "Selected"?: "Yes" | "No" | true | false }; "Selected"?: "Yes" | "No" | true | false; "selected"?: "Yes" | "No" | true | false };

export declare const AuroraLikeN24332_11671: ComponentType<AuroraLikeN24332_11671Props>;

export type AuroraWorkoutNudgeN24536_13133Props = Omit<AuroraArchiveProps, "variant" | "Active" | "active"> & { variant?: { "Active"?: "No" | "Yes" | "Variant2" | true | false }; "Active"?: "No" | "Yes" | "Variant2" | true | false; "active"?: "No" | "Yes" | "Variant2" | true | false };

export declare const AuroraWorkoutNudgeN24536_13133: ComponentType<AuroraWorkoutNudgeN24536_13133Props>;

export type AuroraKarmaN25193_984Props = Omit<AuroraArchiveProps, "variant" | "Normal" | "normal" | "Filled" | "filled"> & { variant?: { "Normal"?: "Yes" | "No" | true | false; "Filled"?: "No" | "Yes" | true | false }; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false; "Filled"?: "No" | "Yes" | true | false; "filled"?: "No" | "Yes" | true | false };

export declare const AuroraKarmaN25193_984: ComponentType<AuroraKarmaN25193_984Props>;

export type AuroraQuestionnaireFillN6393_44143Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraQuestionnaireFillN6393_44143: ComponentType<AuroraQuestionnaireFillN6393_44143Props>;

export type AuroraOfferJaggedN4577_37943Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big" | "Filled" | "filled"> & { variant?: { "Big"?: "No" | "Yes" | true | false; "Filled"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false; "Filled"?: "No" | "Yes" | true | false; "filled"?: "No" | "Yes" | true | false };

export declare const AuroraOfferJaggedN4577_37943: ComponentType<AuroraOfferJaggedN4577_37943Props>;

export type AuroraPlayN4602_28143Props = Omit<AuroraArchiveProps, "variant" | "Large" | "large" | "Big" | "big" | "Small" | "small"> & { variant?: { "Large"?: "no" | false; "Big"?: "no" | "yes" | true | false; "Small"?: "yes" | "no" | true | false }; "Large"?: "no" | false; "large"?: "no" | false; "Big"?: "no" | "yes" | true | false; "big"?: "no" | "yes" | true | false; "Small"?: "yes" | "no" | true | false; "small"?: "yes" | "no" | true | false };

export declare const AuroraPlayN4602_28143: ComponentType<AuroraPlayN4602_28143Props>;

export type AuroraEnergyMeterN5240_37838Props = Omit<AuroraArchiveProps, "variant" | "Energry Meter" | "energryMeter"> & { variant?: { "Energry Meter"?: "Enable" | "Disable" }; "Energry Meter"?: "Enable" | "Disable"; "energryMeter"?: "Enable" | "Disable" };

export declare const AuroraEnergyMeterN5240_37838: ComponentType<AuroraEnergyMeterN5240_37838Props>;

export type AuroraExpandN5396_37776Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Expand" | "Collapse" }; "Property 1"?: "Expand" | "Collapse"; "property1"?: "Expand" | "Collapse" };

export declare const AuroraExpandN5396_37776: ComponentType<AuroraExpandN5396_37776Props>;

export type AuroraFavoriteN21838_2709Props = Omit<AuroraArchiveProps, "variant" | "Normal" | "normal" | "Filled" | "filled"> & { variant?: { "Normal"?: "No" | "Yes" | true | false; "Filled"?: "Yes" | "No" | true | false }; "Normal"?: "No" | "Yes" | true | false; "normal"?: "No" | "Yes" | true | false; "Filled"?: "Yes" | "No" | true | false; "filled"?: "Yes" | "No" | true | false };

export declare const AuroraFavoriteN21838_2709: ComponentType<AuroraFavoriteN21838_2709Props>;

export type AuroraWhatsappN6393_44088Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraWhatsappN6393_44088: ComponentType<AuroraWhatsappN6393_44088Props>;

export type AuroraGoogleN17444_43887Props = Omit<AuroraArchiveProps, "variant" | "Color" | "color" | "Big" | "big"> & { variant?: { "Color"?: "No" | "Yes" | true | false; "Big"?: "No" | "Yes" | true | false }; "Color"?: "No" | "Yes" | true | false; "color"?: "No" | "Yes" | true | false; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraGoogleN17444_43887: ComponentType<AuroraGoogleN17444_43887Props>;

export type AuroraLinkedinN17444_43926Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraLinkedinN17444_43926: ComponentType<AuroraLinkedinN17444_43926Props>;

export type AuroraFacebookN17444_43901Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraFacebookN17444_43901: ComponentType<AuroraFacebookN17444_43901Props>;

export type AuroraAppleN17444_43908Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraAppleN17444_43908: ComponentType<AuroraAppleN17444_43908Props>;

export type AuroraInstagramN17039_39683Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big" | "Normal" | "normal"> & { variant?: { "Big"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false };

export declare const AuroraInstagramN17039_39683: ComponentType<AuroraInstagramN17039_39683Props>;

export type AuroraTelegramN17444_43875Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big" | "Normal" | "normal"> & { variant?: { "Big"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false; "Normal"?: "Yes" | "No" | true | false; "normal"?: "Yes" | "No" | true | false };

export declare const AuroraTelegramN17444_43875: ComponentType<AuroraTelegramN17444_43875Props>;

export type AuroraEMAILN21618_25822Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "No" | "Yes" | true | false }; "Big"?: "No" | "Yes" | true | false; "big"?: "No" | "Yes" | true | false };

export declare const AuroraEMAILN21618_25822: ComponentType<AuroraEMAILN21618_25822Props>;

export type AuroraShoppingCartN4602_28146Props = Omit<AuroraArchiveProps, "variant" | "Big Size" | "bigSize" | "Limited Time" | "limitedTime" | "Offer" | "offer" | "Price Drop" | "priceDrop"> & { variant?: { "Big Size"?: "no" | "yes" | true | false; "Limited Time"?: "no" | "yes" | true | false; "Offer"?: "no" | "yes" | true | false; "Price Drop"?: "no" | "yes" | true | false }; "Big Size"?: "no" | "yes" | true | false; "bigSize"?: "no" | "yes" | true | false; "Limited Time"?: "no" | "yes" | true | false; "limitedTime"?: "no" | "yes" | true | false; "Offer"?: "no" | "yes" | true | false; "offer"?: "no" | "yes" | true | false; "Price Drop"?: "no" | "yes" | true | false; "priceDrop"?: "no" | "yes" | true | false };

export declare const AuroraShoppingCartN4602_28146: ComponentType<AuroraShoppingCartN4602_28146Props>;

export type AuroraShoppingBagN4602_28153Props = Omit<AuroraArchiveProps, "variant" | "Big" | "big"> & { variant?: { "Big"?: "no" | "yes" | true | false }; "Big"?: "no" | "yes" | true | false; "big"?: "no" | "yes" | true | false };

export declare const AuroraShoppingBagN4602_28153: ComponentType<AuroraShoppingBagN4602_28153Props>;

export type AuroraBangaloreN6551_45203Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" | "Selected" }; "Property 1"?: "Default" | "Selected"; "property1"?: "Default" | "Selected" };

export declare const AuroraBangaloreN6551_45203: ComponentType<AuroraBangaloreN6551_45203Props>;

export type AuroraDelhiNCRN6551_45256Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" | "Selected" }; "Property 1"?: "Default" | "Selected"; "property1"?: "Default" | "Selected" };

export declare const AuroraDelhiNCRN6551_45256: ComponentType<AuroraDelhiNCRN6551_45256Props>;

export type AuroraHyderabadN6551_45274Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" | "Selected" }; "Property 1"?: "Default" | "Selected"; "property1"?: "Default" | "Selected" };

export declare const AuroraHyderabadN6551_45274: ComponentType<AuroraHyderabadN6551_45274Props>;

export type AuroraMumbaiN6551_45310Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" | "Selected" }; "Property 1"?: "Default" | "Selected"; "property1"?: "Default" | "Selected" };

export declare const AuroraMumbaiN6551_45310: ComponentType<AuroraMumbaiN6551_45310Props>;

export type AuroraHapticHighN16453_38447Props = Omit<AuroraArchiveProps, "variant" | "Negative Normal" | "negativeNormal" | "Normal High" | "normalHigh" | "Normal" | "normal" | "Negative High" | "negativeHigh"> & { variant?: { "Negative Normal"?: "No" | "Yes" | true | false; "Normal High"?: "Yes" | "No" | true | false; "Normal"?: "No" | "Yes" | true | false; "Negative High"?: "No" | "Yes" | true | false }; "Negative Normal"?: "No" | "Yes" | true | false; "negativeNormal"?: "No" | "Yes" | true | false; "Normal High"?: "Yes" | "No" | true | false; "normalHigh"?: "Yes" | "No" | true | false; "Normal"?: "No" | "Yes" | true | false; "normal"?: "No" | "Yes" | true | false; "Negative High"?: "No" | "Yes" | true | false; "negativeHigh"?: "No" | "Yes" | true | false };

export declare const AuroraHapticHighN16453_38447: ComponentType<AuroraHapticHighN16453_38447Props>;

export type AuroraTrialIconsN26669_35920Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "group sessions" | "gyms nearby" | "play session" | "home workout" }; "Property 1"?: "group sessions" | "gyms nearby" | "play session" | "home workout"; "property1"?: "group sessions" | "gyms nearby" | "play session" | "home workout" };

export declare const AuroraTrialIconsN26669_35920: ComponentType<AuroraTrialIconsN26669_35920Props>;

export type AuroraCultAgeN30429_1137Props = Omit<AuroraArchiveProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" | "Variant2" }; "Property 1"?: "Default" | "Variant2"; "property1"?: "Default" | "Variant2" };

export declare const AuroraCultAgeN30429_1137: ComponentType<AuroraCultAgeN30429_1137Props>;

export declare const AuroraWebBGBlurCardN2_11462: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebArrow2StateN2_11946: ComponentType<AuroraWebSourceProps>;

export declare const AuroraImportedArrow2StateN20777_47767: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebArrow2StateN2_11949: ComponentType<AuroraWebSourceProps>;

export declare const AuroraImportedArrow2StateN20777_47770: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebPaginationNumbersUnitStateN411_3928: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebPaginationNumbersUnitStateN411_3931: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebPaginationNumbersUnitStateN411_3934: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebPaginationNumbersUnitStateN411_3937: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebTwinsStateN2_12139: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebTwinsStateN2_12150: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebTwinsStateN2_12161: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebGroup1244828130StateN2_12173: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebGroup1244828130StateN2_12176: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebFilterTabLabelsStateN417_4640: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebFilterTabLabelsStateN417_4642: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebONGOINGMEMBERSHIPCARDN2_22521: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebMwebSearchStateN2_12341: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebMwebSearchStateN2_12345: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebSEARCHBARStateN2_11924: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebSEARCHBARStateN2_11931: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebSEARCHBARStateN2_11938: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebDwebFooterN2_29723: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebMwebFooterN2_29775: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebPagination: ComponentType<AuroraWebPaginationProps>;

export declare const AuroraWebPaginationDweb: ComponentType<AuroraWebPaginationProps>;

export declare const AuroraWebPaginationWeb: ComponentType<AuroraWebPaginationProps>;

export declare const AuroraWebNavBarStateN2_11953: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebNavBarStateN2_11997: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebNavBarStateN2_12040: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebNavBarStateN2_12080: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebNavBarStates4N2_12119: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWeb1440NavBarN2_12232: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebTabNavN2_12412: ComponentType<AuroraWebSourceProps>;

export declare const AuroraWebFAQs: ComponentType<AuroraWebFAQsProps>;

export type AuroraWebArrow2N2_11945Props = Omit<AuroraWebSourceProps, "variant" | "Property 1" | "property1"> & { variant?: { "Property 1"?: "Default" | "Hover" }; "Property 1"?: "Default" | "Hover"; "property1"?: "Default" | "Hover" };

export declare const AuroraWebArrow2N2_11945: ComponentType<AuroraWebArrow2N2_11945Props>;

export declare const AuroraImportedArrow2N20777_47766: ComponentType<AuroraWebArrow2N2_11945Props>;

export declare const AuroraWebPaginationUnit: ComponentType<AuroraWebPaginationUnitProps>;

export declare const AuroraWebTwins: ComponentType<AuroraWebTwinsProps>;

export declare const AuroraWebButton: ComponentType<AuroraWebButtonProps>;

export declare const AuroraWebFilterLabel: ComponentType<AuroraWebFilterLabelProps>;

export declare const AuroraWebMobileSearch: ComponentType<AuroraWebSearchProps>;

export declare const AuroraWebSearch: ComponentType<AuroraWebSearchProps>;

export type AuroraWebNavBarN2_11952Props = Omit<AuroraWebSourceProps, "variant" | "States" | "states" | "Devices" | "devices"> & { variant?: { "States"?: "Just Logged in" | "Linear gradient" | "Member" | "Not Logged In"; "Devices"?: "DWEB" }; "States"?: "Just Logged in" | "Linear gradient" | "Member" | "Not Logged In"; "states"?: "Just Logged in" | "Linear gradient" | "Member" | "Not Logged In"; "Devices"?: "DWEB"; "devices"?: "DWEB" };

export declare const AuroraWebNavBarN2_11952: ComponentType<AuroraWebNavBarN2_11952Props>;

export declare const AuroraCard: ForwardRefExoticComponent<AuroraCardProps & RefAttributes<HTMLDivElement>>;

export declare const AuroraBackground: ForwardRefExoticComponent<AuroraBackgroundProps & RefAttributes<HTMLDivElement>>;
