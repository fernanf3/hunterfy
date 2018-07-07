define(["exports","meta"],function(_exports,meta){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.elementIsScrollLocked=elementIsScrollLocked;_exports.pushScrollLock=pushScrollLock;_exports.removeScrollLock=removeScrollLock;_exports._hasCachedLockedElement=_hasCachedLockedElement;_exports._hasCachedUnlockedElement=_hasCachedUnlockedElement;_exports._composedTreeContains=_composedTreeContains;_exports._scrollInteractionHandler=_scrollInteractionHandler;_exports._lockScrollInteractions=_lockScrollInteractions;_exports._unlockScrollInteractions=_unlockScrollInteractions;_exports._shouldPreventScrolling=_shouldPreventScrolling;_exports._getScrollableNodes=_getScrollableNodes;_exports._getScrollingNode=_getScrollingNode;_exports._getScrollInfo=_getScrollInfo;_exports.mixinBehaviors=mixinBehaviors;_exports.register=register;_exports.dumpRegistrations=dumpRegistrations;_exports.calculateSplices=calculateSplices;_exports.dashToCamelCase=dashToCamelCase;_exports.camelToDashCase=camelToDashCase;_exports.deepTargetFind=deepTargetFind;_exports.addListener=addListener;_exports.removeListener=removeListener;_exports.register$1=register$1;_exports.setTouchAction=setTouchAction;_exports.prevent=prevent;_exports.resetMouseCanceller=resetMouseCanceller;_exports.isPath=isPath;_exports.root=root;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.translate=translate;_exports.matches=matches;_exports.normalize=normalize;_exports.split=split;_exports.get=get;_exports.set=set;_exports.beforeNextRender=beforeNextRender;_exports.afterNextRender=afterNextRender;_exports.flush$2=flush;_exports.resolveUrl=resolveUrl;_exports.resolveCss=resolveCss;_exports.pathFromUrl=pathFromUrl;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromTemplate=stylesFromTemplate;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromModule=cssFromModule;_exports.cssFromTemplate=cssFromTemplate;_exports.cssFromModuleImports=cssFromModuleImports;_exports.templatize=templatize;_exports.modelForElement=modelForElement;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isValid=isValid;_exports.templateIsValid=templateIsValid;_exports.isValidating=isValidating;_exports.templateIsValidating=templateIsValidating;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.elementsAreInvalid=elementsAreInvalid;_exports.updateNativeProperties=updateNativeProperties;_exports.getComputedStyleValue=getComputedStyleValue;_exports.detectMixin=detectMixin;_exports.parse=parse;_exports.stringify=stringify;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.$documentWaitDefault=documentWait;_exports.toCssText=toCssText;_exports.rulesForStyle=rulesForStyle;_exports.isKeyframesSelector=isKeyframesSelector;_exports.forEachRule=forEachRule;_exports.applyCss=applyCss;_exports.createScopeStyle=createScopeStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.applyStyle=applyStyle;_exports.isTargetedBuild=isTargetedBuild;_exports.getCssBuildType=getCssBuildType;_exports.processVariableAndFallback=processVariableAndFallback;_exports.setElementClassRaw=setElementClassRaw;_exports.getIsExtends=getIsExtends;_exports.gatherStyleText=gatherStyleText;_exports.processUnscopedStyle=processUnscopedStyle;_exports.isUnscopedStyle=isUnscopedStyle;_exports.$checkOverflowDefault=checkOverflow;_exports.createDate=createDate;_exports.createUTCDate=createUTCDate;_exports.prepareConfig=prepareConfig;_exports.createLocalOrUTC=createLocalOrUTC;_exports.configFromArray=configFromArray;_exports.configFromObject=configFromObject;_exports.configFromStringAndArray=configFromStringAndArray;_exports.configFromStringAndFormat=configFromStringAndFormat;_exports.configFromISO=configFromISO;_exports.configFromRFC2822=configFromRFC2822;_exports.configFromString=configFromString;_exports.createLocal$1=_exports.createLocal=createLocal;_exports.$parsingFlagsDefault=getParsingFlags;_exports.createUTC$1=_exports.createUTC=createUTC;_exports.isValid$1=isValid$1;_exports.createInvalid$2=_exports.createInvalid=createInvalid;_exports.abs=abs;_exports.add$1=add$2;_exports.subtract=subtract$1;_exports.as=as;_exports.valueOf=valueOf;_exports.bubble=bubble;_exports.daysToMonths=daysToMonths;_exports.monthsToDays=monthsToDays;_exports.clone=clone;_exports.Duration=Duration;_exports.isDuration$1=_exports.isDuration=isDuration;_exports.createDuration$1=_exports.createDuration=createDuration;_exports.getSetRelativeTimeRounding$1=_exports.getSetRelativeTimeRounding=getSetRelativeTimeRounding;_exports.getSetRelativeTimeThreshold$1=_exports.getSetRelativeTimeThreshold=getSetRelativeTimeThreshold;_exports.get$1=get$2;_exports.weeks=weeks;_exports.humanize=humanize;_exports.toISOString=toISOString;_exports.$validDefault=isDurationValid;_exports.isValid$2=isValid$2;_exports.createInvalid$1=createInvalid$1;_exports.addFormatToken=addFormatToken;_exports.formatMoment=formatMoment;_exports.expandFormat=expandFormat;_exports.calendar=calendar;_exports.Locale=Locale;_exports.longDateFormat=longDateFormat;_exports.invalidDate=invalidDate;_exports.listMonths$1=_exports.listMonths=listMonths;_exports.listMonthsShort$1=_exports.listMonthsShort=listMonthsShort;_exports.listWeekdays$1=_exports.listWeekdays=listWeekdays;_exports.listWeekdaysShort$1=_exports.listWeekdaysShort=listWeekdaysShort;_exports.listWeekdaysMin$1=_exports.listWeekdaysMin=listWeekdaysMin;_exports.getSetGlobalLocale$1=_exports.getSetGlobalLocale=getSetGlobalLocale;_exports.defineLocale$1=_exports.defineLocale=defineLocale;_exports.updateLocale$1=_exports.updateLocale=updateLocale;_exports.getLocale$1=_exports.getLocale=getLocale;_exports.listLocales$1=_exports.listLocales=listLocales;_exports.ordinal=ordinal;_exports.preParsePostFormat=preParsePostFormat;_exports.relativeTime=relativeTime;_exports.pastFuture=pastFuture;_exports.set$1=set$2;_exports.mergeConfigs=mergeConfigs;_exports.addSubtract=addSubtract;_exports.getCalendarFormat=getCalendarFormat;_exports.calendar$1=calendar$2;_exports.clone$1=clone$2;_exports.isAfter=isAfter;_exports.isBefore=isBefore;_exports.isBetween=isBetween;_exports.isSame=isSame;_exports.isSameOrAfter=isSameOrAfter;_exports.isSameOrBefore=isSameOrBefore;_exports.copyConfig=copyConfig;_exports.Moment=Moment;_exports.isMoment$1=_exports.isMoment=isMoment;_exports.creationData=creationData;_exports.diff=diff;_exports.toString=toString;_exports.toISOString$1=toISOString$1;_exports.inspect=inspect;_exports.format=format$1;_exports.from=from;_exports.fromNow=fromNow;_exports.makeGetSet=makeGetSet;_exports.get$2=get$1;_exports.set$2=set$1;_exports.stringGet=stringGet;_exports.stringSet=stringSet;_exports.locale=locale;_exports.localeData=localeData;_exports.min$1=_exports.min=min;_exports.max$1=_exports.max=max;_exports.createUnix=createUnix;_exports.createInZone=createInZone;_exports.startOf=startOf;_exports.endOf=endOf;_exports.valueOf$1=valueOf$1;_exports.unix=unix;_exports.toDate=toDate;_exports.toArray=toArray;_exports.toObject=toObject;_exports.toJSON=toJSON;_exports.to=to;_exports.toNow=toNow;_exports.isValid$3=isValid$3;_exports.parsingFlags=parsingFlags$1;_exports.invalidAt=invalidAt;_exports.addRegexToken=addRegexToken;_exports.getParseRegexForToken=getParseRegexForToken;_exports.regexEscape=regexEscape;_exports.addParseToken=addParseToken;_exports.addWeekParseToken=addWeekParseToken;_exports.addTimeToArrayFromToken=addTimeToArrayFromToken;_exports.addUnitAlias=addUnitAlias;_exports.normalizeUnits$1=_exports.normalizeUnits=normalizeUnits;_exports.normalizeObjectUnits=normalizeObjectUnits;_exports.localeWeekdays=localeWeekdays;_exports.localeWeekdaysShort=localeWeekdaysShort;_exports.localeWeekdaysMin=localeWeekdaysMin;_exports.localeWeekdaysParse=localeWeekdaysParse;_exports.getSetDayOfWeek=getSetDayOfWeek;_exports.getSetLocaleDayOfWeek=getSetLocaleDayOfWeek;_exports.getSetISODayOfWeek=getSetISODayOfWeek;_exports.weekdaysRegex=weekdaysRegex;_exports.weekdaysShortRegex=weekdaysShortRegex;_exports.weekdaysMinRegex=weekdaysMinRegex;_exports.getSetDayOfYear=getSetDayOfYear;_exports.localeIsPM=localeIsPM;_exports.localeMeridiem=localeMeridiem;_exports.daysInMonth=daysInMonth;_exports.localeMonths=localeMonths;_exports.localeMonthsShort=localeMonthsShort;_exports.localeMonthsParse=localeMonthsParse;_exports.setMonth=setMonth;_exports.getSetMonth=getSetMonth;_exports.getDaysInMonth=getDaysInMonth;_exports.monthsShortRegex=monthsShortRegex;_exports.monthsRegex=monthsRegex;_exports.cloneWithOffset=cloneWithOffset;_exports.getSetOffset=getSetOffset;_exports.getSetZone=getSetZone;_exports.setOffsetToUTC=setOffsetToUTC;_exports.setOffsetToLocal=setOffsetToLocal;_exports.setOffsetToParsedOffset=setOffsetToParsedOffset;_exports.hasAlignedHourOffset=hasAlignedHourOffset;_exports.isDaylightSavingTime=isDaylightSavingTime;_exports.isDaylightSavingTimeShifted=isDaylightSavingTimeShifted;_exports.isLocal=isLocal;_exports.isUtcOffset=isUtcOffset;_exports.isUtc=isUtc;_exports.addUnitPriority=addUnitPriority;_exports.getPrioritizedUnits=getPrioritizedUnits;_exports.getSetQuarter=getSetQuarter;_exports.getZoneAbbr=getZoneAbbr;_exports.getZoneName=getZoneName;_exports.dayOfYearFromWeeks=dayOfYearFromWeeks;_exports.weekOfYear=weekOfYear;_exports.weeksInYear=weeksInYear;_exports.getSetWeekYear=getSetWeekYear;_exports.getSetISOWeekYear=getSetISOWeekYear;_exports.getISOWeeksInYear=getISOWeeksInYear;_exports.getWeeksInYear=getWeeksInYear;_exports.localeWeek=localeWeek;_exports.localeFirstDayOfWeek=localeFirstDayOfWeek;_exports.localeFirstDayOfYear=localeFirstDayOfYear;_exports.getSetWeek=getSetWeek;_exports.getSetISOWeek=getSetISOWeek;_exports.daysInYear=daysInYear;_exports.isLeapYear=isLeapYear;_exports.getIsLeapYear=getIsLeapYear;_exports.$absCeilDefault=absCeil;_exports.$absFloorDefault=absFloor;_exports.$absRoundDefault=absRound;_exports.$compareArraysDefault=compareArrays;_exports.$defaultsDefault=defaults;_exports.deprecate=deprecate;_exports.deprecateSimple=deprecateSimple;_exports.$extendDefault=extend;_exports.$hasOwnPropDefault=hasOwnProp;_exports.$momentDefault=_exports.hooks=hooks;_exports.setHookCallback=setHookCallback;_exports.$isArrayDefault=isArray;_exports.$isDateDefault=isDate;_exports.$isFunctionDefault=isFunction;_exports.$isNumberDefault=isNumber;_exports.$isObjectEmptyDefault=isObjectEmpty;_exports.$isObjectDefault=isObject;_exports.$isUndefinedDefault=isUndefined;_exports.$mapDefault=map;_exports.$modDefault=mod;_exports.$toIntDefault=toInt;_exports.$zeroFillDefault=zeroFill;_exports.$as=_exports.$addSubtract=_exports.$abs=_exports.$valid=_exports.$utc=_exports.$parsingFlags=_exports.$local=_exports.$fromString=_exports.$fromStringAndFormat=_exports.$fromStringAndArray=_exports.$fromObject=_exports.$fromArray=_exports.$fromAnything=_exports.$dateFromArray=_exports.$checkOverflow=_exports.$unscopedStyleHandler=_exports.$templateMap=_exports.$styleUtil=_exports.$styleSettings=_exports.$documentWait=_exports.$customStyleInterface$1=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$applyShim$1=_exports.$applyShimUtils=_exports.$polymerLegacy=_exports.$polymerElement=_exports.$templatize=_exports.$styleGather=_exports.$settings=_exports.$resolveUrl=_exports.$renderStatus=_exports.$path=_exports.$mixin=_exports.$htmlTag=_exports.$gestures=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$debounce=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$templateStamp=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$mutableData=_exports.$gestureEventListeners=_exports.$elementMixin=_exports.$dirMixin=_exports.$templatizerBehavior=_exports.$polymerDom=_exports.$polymerFn=_exports.$mutableDataBehavior=_exports.$legacyElementMixin=_exports.$class=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$customStyle=_exports.$arraySelector=_exports.$paperSpinnerBehavior=_exports.$paperItemBehavior=_exports.$paperInputBehavior=_exports.$paperInputAddonBehavior=_exports.$paperDialogBehavior=_exports.$paperRippleBehavior=_exports.$paperInkyFocusBehavior=_exports.$paperCheckedElementBehavior=_exports.$paperButtonBehavior=_exports.$neonAnimationRunnerBehavior=_exports.$neonAnimationBehavior=_exports.$neonAnimatableBehavior=_exports.$ironValidatableBehavior=_exports.$ironSelection=_exports.$ironSelectable=_exports.$ironMultiSelectable=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$ironScrollManager=_exports.$ironOverlayManager=_exports.$ironOverlayBehavior=_exports.$ironFocusablesHelper=_exports.$ironMeta=_exports.$ironMenuBehavior=_exports.$ironJsonpLibrary=_exports.$ironFormElementBehavior=_exports.$ironFitBehavior=_exports.$ironCheckedElementBehavior=_exports.$ironControlState=_exports.$ironButtonState=_exports.$ironA11yKeysBehavior=_exports.$ironA11yAnnouncer=_exports.$appRouteConverterBehavior=_exports.$helpers=_exports.$appScrollEffectsBehavior=_exports.$appLayoutBehavior=void 0;_exports.IronControlState=_exports.IronButtonState=_exports.IronButtonStateImpl=_exports.IronA11yKeysBehavior=_exports.IronA11yAnnouncer=_exports.AppRouteConverterBehavior=_exports.scroll=_exports.queryAllRoot=_exports.registerEffect=_exports.scrollTimingFunction=_exports._scrollTimer=_exports._scrollEffects=_exports.AppScrollEffectsBehavior=_exports.AppLayoutBehavior=_exports.$moment$1=_exports.$zeroFill=_exports.$toInt=_exports.$some=_exports.$mod=_exports.$map=_exports.$keys=_exports.$isUndefined=_exports.$isObject=_exports.$isObjectEmpty=_exports.$isNumber=_exports.$isFunction=_exports.$isDate=_exports.$isArray=_exports.$indexOf=_exports.$hooks=_exports.$hasOwnProp=_exports.$extend=_exports.$deprecate=_exports.$defaults=_exports.$compareArrays=_exports.$absRound=_exports.$absFloor=_exports.$absCeil=_exports.$year=_exports.$week=_exports.$weekYear=_exports.$weekCalendarUtils=_exports.$units=_exports.$timezone=_exports.$second=_exports.$quarter=_exports.$priorities=_exports.$offset=_exports.$month=_exports.$minute=_exports.$millisecond=_exports.$hour=_exports.$dayOfYear=_exports.$dayOfWeek=_exports.$dayOfMonth=_exports.$constants=_exports.$aliases=_exports.$token=_exports.$regex=_exports.$valid$2=_exports.$to=_exports.$toType=_exports.$startEndOf=_exports.$prototype$2=_exports.$now=_exports.$moment=_exports.$minMax=_exports.$locale$1=_exports.$getSet=_exports.$from=_exports.$format$1=_exports.$diff=_exports.$creationData=_exports.$constructor$2=_exports.$compare=_exports.$clone$1=_exports.$calendar$1=_exports.$addSubtract$1=_exports.$set=_exports.$relative=_exports.$prePostFormat=_exports.$ordinal=_exports.$locales=_exports.$locale=_exports.$lists=_exports.$invalid=_exports.$formats=_exports.$constructor$1=_exports.$calendar=_exports.$baseConfig=_exports.$format=_exports.$valid$1=_exports.$isoString=_exports.$humanize=_exports.$get=_exports.$duration=_exports.$create=_exports.$constructor=_exports.$clone=_exports.$bubble=void 0;_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useShadow=_exports.isDeep=_exports.dedupingMixin=_exports.htmlLiteral=_exports.html$2=_exports.html$1=_exports.html=_exports.remove=_exports.add=_exports.findOriginalTarget=_exports.recognizers=_exports.gestures=_exports.FlattenedNodesObserver=_exports.Debouncer=_exports.microTask=_exports.idlePeriod=_exports.animationFrame=_exports.timeOut=_exports.TemplateStamp=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.OptionalMutableData=_exports.MutableData=_exports.GestureEventListeners=_exports.updateStyles=_exports.registrations=_exports.instanceCount=_exports.ElementMixin=_exports.DirMixin=_exports.Templatizer=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.flush$1=_exports.flush=_exports.dom=_exports.DomApi=_exports.matchesSelector=_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.MutableDataBehavior=_exports.LegacyElementMixin=_exports.Class=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.CustomStyle=_exports.ArraySelector=_exports.ArraySelectorMixin=_exports.PaperSpinnerBehavior=_exports.PaperItemBehavior=_exports.PaperItemBehaviorImpl=_exports.PaperInputBehavior=_exports.PaperInputBehaviorImpl=_exports.PaperInputHelper=_exports.PaperInputAddonBehavior=_exports.PaperDialogBehavior=_exports.PaperDialogBehaviorImpl=_exports.PaperRippleBehavior=_exports.PaperInkyFocusBehavior=_exports.PaperInkyFocusBehaviorImpl=_exports.PaperCheckedElementBehavior=_exports.PaperCheckedElementBehaviorImpl=_exports.PaperButtonBehavior=_exports.PaperButtonBehaviorImpl=_exports.NeonAnimationRunnerBehavior=_exports.NeonAnimationRunnerBehaviorImpl=_exports.NeonAnimationBehavior=_exports.NeonAnimatableBehavior=_exports.IronValidatableBehavior=_exports.IronValidatableBehaviorMeta=_exports.IronSelection=_exports.IronSelectableBehavior=_exports.IronMultiSelectableBehavior=_exports.IronMultiSelectableBehaviorImpl=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports._boundScrollHandler=_exports._unlockedElementCache=_exports._lockedElementCache=_exports._lockingElements=_exports.currentLockingElement=_exports.IronOverlayManager=_exports.IronOverlayManagerClass=_exports.IronOverlayBehavior=_exports.IronOverlayBehaviorImpl=_exports.IronFocusablesHelper=_exports.IronMeta=_exports.IronMenuBehavior=_exports.IronMenuBehaviorImpl=_exports.IronJsonpLibraryBehavior=_exports.IronFormElementBehavior=_exports.IronFitBehavior=_exports.IronCheckedElementBehavior=_exports.IronCheckedElementBehaviorImpl=void 0;_exports.getSetYear=_exports.defaultLocaleWeek=_exports.getSetSecond=_exports.defaultLocaleMonthsShort=_exports.defaultLocaleMonths=_exports.getSetMinute=_exports.getSetMillisecond=_exports.getSetHour=_exports.defaultLocaleMeridiemParse=_exports.defaultLocaleWeekdaysMin=_exports.defaultLocaleWeekdaysShort=_exports.defaultLocaleWeekdays=_exports.getSetDayOfMonth=_exports.WEEKDAY=_exports.WEEK=_exports.MILLISECOND=_exports.SECOND=_exports.MINUTE=_exports.HOUR=_exports.DATE=_exports.MONTH=_exports.YEAR=_exports.matchWord=_exports.matchTimestamp=_exports.matchShortOffset=_exports.matchOffset=_exports.matchSigned=_exports.matchUnsigned=_exports.match1to6=_exports.match1to4=_exports.match1to3=_exports.match5to6=_exports.match3to4=_exports.match1to2=_exports.match6=_exports.match4=_exports.match3=_exports.match2=_exports.match1=_exports.$prototypeDefault=_exports.momentPrototype=_exports.now$1=_exports.now=_exports.prototypeMax=_exports.prototypeMin=_exports.lang=_exports.subtract$1=_exports.add$2=_exports.defaultRelativeTime=_exports.defaultDayOfMonthOrdinalParse=_exports.defaultOrdinal=_exports.defaultInvalidDate=_exports.defaultLongDateFormat=_exports.defaultCalendar=_exports.baseConfig=_exports.formatTokenFunctions=_exports.formattingTokens=_exports.years=_exports.months=_exports.days=_exports.hours=_exports.minutes=_exports.seconds=_exports.milliseconds=_exports.asYears=_exports.asMonths=_exports.asWeeks=_exports.asDays=_exports.asHours=_exports.asMinutes=_exports.asSeconds=_exports.asMilliseconds=_exports.scopingAttribute=_exports.$templateMapDefault=_exports.nativeCssVariables=_exports.nativeShadow=_exports.CustomStyleInterfaceInterface=_exports.$customStyleInterfaceDefault=_exports.CustomStyleProvider=_exports.types=_exports.StyleNode=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.BRACKETED=_exports.IS_VAR=_exports.MEDIA_MATCH=_exports.ANIMATION_MATCH=_exports.VAR_CONSUMED=_exports.MIXIN_MATCH=_exports.VAR_ASSIGN=_exports.$applyShimDefault=_exports.Base=_exports.PolymerElement=_exports.TemplateInstanceBase=_exports.setPassiveTouchGestures=_exports.passiveTouchGestures=_exports.setSanitizeDOMValue=_exports.sanitizeDOMValue=_exports.setRootPath=_exports.rootPath=void 0;_exports.$someDefault=_exports.$keysDefault=_exports.$indexOfDefault=void 0;meta=babelHelpers.interopRequireWildcard(meta);var _Mathpow=Math.pow,_Mathsqrt=Math.sqrt,_StringfromCharCode=String.fromCharCode,_Mathmax=Math.max,_Mathround=Math.round,_Mathceil=Math.ceil,_Mathmin=Math.min,_Mathabs=Math.abs,_Mathfloor=Math.floor;const nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;let nativeCssVariables_;function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}const nativeCssVariables=nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;_exports.$styleSettings={nativeShadow:nativeShadow,nativeCssVariables:nativeCssVariables};class StyleNode{constructor(){this.start=0;this.end=0;this.previous=null;this.parent=null;this.rules=null;this.parsedCssText="";this.cssText="";this.atRule=!1;this.type=0;this.keyframesName="";this.selector="";this.parsedSelector=""}}_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}function lex(text){let root=new StyleNode;root.start=0;root.end=text.length;let n=root;for(let i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}let p=n,previous=p.rules[p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=p;n.previous=previous;p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}function parseCss(node,text){let t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){let ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");t=t.substring(t.lastIndexOf(";")+1);let s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}let r$=node.rules;if(r$){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}function stringify(node,preserveProperties,text=""){let cssText="";if(node.cssText||node.rules){let r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}function _hasMixinRules(rules){let r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;const OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";_exports.$cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};const VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;const MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;const VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;const ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;const MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;const IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;const BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;const HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;const HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;_exports.$commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};const styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;function processUnscopedStyle(style){const text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);const newStyle=style.cloneNode(!0);document.head.appendChild(newStyle)}}function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}_exports.$unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}let skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){let matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}let r$=node.rules;if(r$&&!skipRules){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}function applyCss(cssText,moniker,target,contextNode){let style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}function createScopeStyle(cssText,moniker){let style=document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}let lastHeadApplyNode=null;function applyStylePlaceHolder(moniker){let placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}function applyStyle(style,target,contextNode){target=target||document.head;let after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{let position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}function getCssBuildType(element){return element.getAttribute("css-build")}function findMatchingParen(text,start){let level=0;for(let i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}function processVariableAndFallback(str,callback){let start=str.indexOf("var(");if(-1===start){return callback(str,"","","")}let end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");if(-1===comma){return callback(prefix,inner.trim(),"",suffix)}let value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}function setElementClassRaw(element,value){if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}function getIsExtends(element){let localName=element.localName,is="",typeExtension="";if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=element.is;typeExtension=element.extends}return{is,typeExtension}}function gatherStyleText(element){const styleTextParts=[],styles=element.querySelectorAll("style");for(let i=0;i<styles.length;i++){const style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}_exports.$styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,getCssBuildType:getCssBuildType,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText};function updateNativeProperties(element,properties){for(let p in properties){if(null===p){element.style.removeProperty(p)}else{element.style.setProperty(p,properties[p])}}}function getComputedStyleValue(element,property){const value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}function detectMixin(cssText){const has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}_exports.$commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:getComputedStyleValue,detectMixin:detectMixin};const APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_";class MixinMap{constructor(){this._map={}}set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}get(name){name=name.trim();return this._map[name]||null}}let invalidCallback=null;class ApplyShim{constructor(){this._currentElement=null;this._measureElement=null;this._map=new MixinMap}detectMixin(cssText){return detectMixin(cssText)}gatherStyles(template){const styleText=gatherStyleText(template.content);if(styleText){const style=document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}const style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}transformStyle(style,elementName=""){let ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}transformCustomStyle(style){let ast=rulesForStyle(style);forEachRule(ast,rule=>{if(":root"===rule.selector){rule.selector="html"}this.transformRule(rule)});style.textContent=toCssText(ast);return ast}transformRules(rules,elementName){this._currentElement=elementName;forEachRule(rules,r=>{this.transformRule(r)});this._currentElement=null}transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText);if(":root"===rule.selector){rule.selector=":host > *"}}transformCssText(cssText){cssText=cssText.replace(VAR_ASSIGN,(matchText,propertyName,valueProperty,valueMixin)=>this._produceCssProperties(matchText,propertyName,valueProperty,valueMixin));return this._consumeCssProperties(cssText)}_getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}_consumeCssProperties(text){let m=null;while(m=MIXIN_MATCH.exec(text)){let matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=this._cssTextToMap(textBeforeApply),replacement=this._atApplyToCssProperties(mixinName,defaults);text=`${textBeforeApply}${replacement}${textAfterApply}`;MIXIN_MATCH.lastIndex=idx+replacement.length}return text}_atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");let vars=[],mixinEntry=this._map.get(mixinName);if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}let p,parts,f;const properties=mixinEntry.properties;for(p in properties){f=fallbacks&&fallbacks[p];parts=[p,": var(",mixinName,MIXIN_VAR_SEP,p];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[p])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}_replaceInitialOrInherit(property,value){let match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){value=this._getInitialValueForProperty(property)}else{value="apply-shim-inherit"}}return value}_cssTextToMap(text){let props=text.split(";"),property,value,out={};for(let i=0,p,sp;i<props.length;i++){p=props[i];if(p){sp=p.split(":");if(1<sp.length){property=sp[0].trim();value=this._replaceInitialOrInherit(property,sp.slice(1).join(":"));out[property]=value}}}return out}_invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(let elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}_produceCssProperties(matchText,propertyName,valueProperty,valueMixin){if(valueProperty){processVariableAndFallback(valueProperty,(prefix,value)=>{if(value&&this._map.get(value)){valueMixin=`@apply ${value};`}})}if(!valueMixin){return matchText}let mixinAsProperties=this._consumeCssProperties(""+valueMixin),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}let out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push(`${propertyName}${MIXIN_VAR_SEP}${p}: ${v}`)}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}if(valueProperty){prefix=`${matchText};${prefix}`}return`${prefix}${out.join("; ")};`}}_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;Object.defineProperty(ApplyShim.prototype,"invalidCallback",{get(){return invalidCallback},set(cb){invalidCallback=cb}});_exports.$applyShim$1={default:ApplyShim};const templateMap={};_exports.$templateMapDefault=templateMap;_exports.$templateMap={default:templateMap};const CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();function invalidate(elementName){let template=templateMap[elementName];if(template){invalidateTemplate(template)}}function invalidateTemplate(template){template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}function isValid(elementName){let template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}function isValidating(elementName){let template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}function startValidating(elementName){let template=templateMap[elementName];startValidatingTemplate(template)}function startValidatingTemplate(template){template[VALIDATING_VERSION]=template[NEXT_VERSION];if(!template._validating){template._validating=!0;promise.then(function(){template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}function elementsAreInvalid(){for(let elementName in templateMap){let template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}_exports.$applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};let readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(resolve=>{resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",()=>{if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}_exports.$documentWait={default:documentWait};let CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;const SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle";let transformFn=null,validateFn=null;class CustomStyleInterface{constructor(){this.customStyles=[];this.enqueued=!1;documentWait(()=>{if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}let style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}processStyles(){const cs=this.customStyles;for(let i=0;i<cs.length;i++){const customStyle=cs[i];if(customStyle[CACHED_STYLE]){continue}const style=this.getStyleForCustomStyle(customStyle);if(style){const styleToTransform=style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}customStyle[CACHED_STYLE]=styleToTransform}}return cs}}_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{get(){return transformFn},set(fn){transformFn=fn}},validateCallback:{get(){return validateFn},set(fn){let needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});let CustomStyleInterfaceInterface;_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;_exports.$customStyleInterface$1={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};const applyShim$1=new ApplyShim;class ApplyShimInterface{constructor(){this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}ensure(){if(this.customStyleInterface){return}this.customStyleInterface=window.ShadyCSS.CustomStyleInterface;if(this.customStyleInterface){this.customStyleInterface.transformCallback=style=>{applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{if(this.customStyleInterface.enqueued){this.flushCustomStyles()}})}}}prepareTemplate(template,elementName){this.ensure();templateMap[elementName]=template;let ast=applyShim$1.transformTemplate(template,elementName);template._styleAst=ast}flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}let styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(let i=0;i<styles.length;i++){let cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);let shadowChildren=element.shadowRoot.children||element.shadowRoot.childNodes;for(let i=0;i<shadowChildren.length;i++){this.styleSubtree(shadowChildren[i])}}else{let children=element.children||element.childNodes;for(let i=0;i<children.length;i++){this.styleSubtree(children[i])}}}styleElement(element){this.ensure();let{is}=getIsExtends(element),template=templateMap[is];if(template&&!templateIsValid(template)){if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}let root=element.shadowRoot;if(root){let style=root.querySelector("style");if(style){style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const applyShimInterface=new ApplyShimInterface;let CustomStyleInterface$$1=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(template,elementName){applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow};if(CustomStyleInterface$$1){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface$$1}}window.ShadyCSS.ApplyShim=applyShim$1;window.JSCompiler_renameProperty=function(prop){return prop};let CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;function resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if(workingURL===void 0){workingURL=!1;try{const u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){return new URL(url,baseURI).href}if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}_exports.$resolveUrl={resolveUrl:resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};const useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;const useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;const useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;_exports.useNativeCustomElements=useNativeCustomElements;let rootPath=void 0||pathFromUrl(document.baseURI||window.location.href);_exports.rootPath=rootPath;const setRootPath=function(path){_exports.rootPath=rootPath=path};_exports.setRootPath=setRootPath;let sanitizeDOMValue;_exports.sanitizeDOMValue=sanitizeDOMValue;const setSanitizeDOMValue=function(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};_exports.setSanitizeDOMValue=setSanitizeDOMValue;let passiveTouchGestures=!1;_exports.passiveTouchGestures=passiveTouchGestures;const setPassiveTouchGestures=function(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};_exports.setPassiveTouchGestures=setPassiveTouchGestures;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures};_exports.$settings=settings;let dedupeId=0;function MixinFunction(){}MixinFunction.prototype.__mixinApplications;MixinFunction.prototype.__mixinSet;const dedupingMixin=function(mixin){let mixinApplications=mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;mixin.__mixinApplications=mixinApplications}let mixinDedupeId=dedupeId++;function dedupingMixin(base){let baseSet=base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}let map=mixinApplications,extended=map.get(base);if(!extended){extended=mixin(base);map.set(base,extended)}let mixinSet=Object.create(extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;extended.__mixinSet=mixinSet;return extended}return dedupingMixin};_exports.dedupingMixin=dedupingMixin;_exports.$mixin={dedupingMixin:dedupingMixin};const SHADY_UNSCOPED_ATTR="shady-unscoped";function importModule(moduleId){const PolymerDomModule=customElements.get("dom-module");if(!PolymerDomModule){return null}return PolymerDomModule.import(moduleId)}function styleForImport(importDoc){let container=importDoc.body?importDoc.body:importDoc;const importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}function stylesFromModules(moduleIds){const modules=moduleIds.trim().split(/\s+/),styles=[];for(let i=0;i<modules.length;i++){styles.push(...stylesFromModule(modules[i]))}return styles}function stylesFromModule(moduleId){const m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){const styles=[..._stylesFromModuleImports(m)],template=m.querySelector("template");if(template){styles.push(...stylesFromTemplate(template,m.assetpath))}m._styles=styles}return m._styles}function stylesFromTemplate(template,baseURI){if(!template._styles){const styles=[],e$=template.content.querySelectorAll("style");for(let i=0;i<e$.length;i++){let e=e$[i],include=e.getAttribute("include");if(include){styles.push(...stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index}))}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI)}styles.push(e)}template._styles=styles}return template._styles}function stylesFromModuleImports(moduleId){let m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}function _stylesFromModuleImports(module){const styles=[],p$=module.querySelectorAll("link[rel=import][type~=css]");for(let i=0,p;i<p$.length;i++){p=p$[i];if(p.import){const importDoc=p.import,unscoped=p.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){const style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}function cssFromModules(moduleIds){let modules=moduleIds.trim().split(/\s+/),cssText="";for(let i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}function cssFromModule(moduleId){let m=importModule(moduleId);if(m&&m._cssText===void 0){let cssText=_cssFromModuleImports(m),t=m.querySelector("template");if(t){cssText+=cssFromTemplate(t,m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}function cssFromTemplate(template,baseURI){let cssText="";const e$=stylesFromTemplate(template,baseURI);for(let i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}function cssFromModuleImports(moduleId){let m=importModule(moduleId);return m?_cssFromModuleImports(m):""}function _cssFromModuleImports(module){let cssText="",styles=_stylesFromModuleImports(module);for(let i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}_exports.$styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};let modules={},lcModules={};function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}class DomModule extends HTMLElement{static get observedAttributes(){return["id"]}static import(id,selector){if(id){let m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}attributeChangedCallback(name,old,value){if(old!==value){this.register()}}get assetpath(){if(!this.__assetpath){const owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}register(id){id=id||this.id;if(id){this.id=id;modules[id]=this;lcModules[id.toLowerCase()]=this;styleOutsideTemplateCheck(this)}}}_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);_exports.$domModule={DomModule:DomModule};function isPath(path){return 0<=path.indexOf(".")}function root(path){let dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}function isAncestor(base,path){return 0===base.indexOf(path+".")}function isDescendant(base,path){return 0===path.indexOf(base+".")}function translate(base,newBase,path){return newBase+path.slice(base.length)}function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}function normalize(path){if(Array.isArray(path)){let parts=[];for(let i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(let j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}function get(root,path,info){let prop=root,parts=split(path);for(let i=0;i<parts.length;i++){if(!prop){return}let part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}function set(root,path,value){let prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){for(let i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}prop[last]=value}else{prop[path]=value}return parts.join(".")}const isDeep=isPath;_exports.isDeep=isDeep;_exports.$path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:get,set:set,isDeep:isDeep};const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,m=>m[1].toUpperCase()))}function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;let microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskNode=document.createTextNode("");new window.MutationObserver(function(){const len=microtaskCallbacks.length;for(let i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(()=>{throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}).observe(microtaskNode,{characterData:!0});const timeOut={after(delay){return{run(fn){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}}},run(fn,delay){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;const animationFrame={run(fn){return window.requestAnimationFrame(fn)},cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;const idlePeriod={run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;const microTask={run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++},cancel(handle){const idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;const PropertiesChanged=dedupingMixin(superClass=>{return class extends superClass{static createProperties(props){const proto=this.prototype;for(let prop in props){if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}static attributeNameForProperty(property){return property.toLowerCase()}static typeForProperty(){}_createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty("__dataHasAccessor")){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}_addPropertyToAttributeMap(property){if(!this.hasOwnProperty("__dataAttributes")){this.__dataAttributes=Object.assign({},this.__dataAttributes)}if(!this.__dataAttributes[property]){const attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}}_definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{get(){return this._getProperty(property)},set:readOnly?function(){}:function(value){this._setProperty(property,value)}})}constructor(){super();this.__dataEnabled=!1;this.__dataReady=!1;this.__dataInvalid=!1;this.__data={};this.__dataPending=null;this.__dataOld=null;this.__dataInstanceProps=null;this.__serializing=!1;this._initializeProperties()}ready(){this.__dataReady=!0;this._flushProperties()}_initializeProperties(){for(let p in this.__dataHasAccessor){if(this.hasOwnProperty(p)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[p]=this[p];delete this[p]}}}_initializeInstanceProperties(props){Object.assign(this,props)}_setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}_getProperty(property){return this.__data[property]}_setPendingProperty(property,value){let old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}_invalidateProperties(){if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microTask.run(()=>{if(this.__dataInvalid){this.__dataInvalid=!1;this._flushProperties()}})}}_enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}_flushProperties(){const props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}}_shouldPropertiesChange(currentProps,changedProps){return!!changedProps}_propertiesChanged(){}_shouldPropertyChange(property,value,old){return old!==value&&(old===old||value===value)}attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(super.attributeChangedCallback){super.attributeChangedCallback(name,old,value,namespace)}}_attributeToProperty(attribute,value,type){if(!this.__serializing){const map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}_propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}_valueToNodeAttribute(node,value,attribute){const str=this._serializeValue(value);if(str===void 0){node.removeAttribute(attribute)}else{node.setAttribute(attribute,str)}}_serializeValue(value){switch(typeof value){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}_deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}});_exports.PropertiesChanged=PropertiesChanged;_exports.$propertiesChanged={PropertiesChanged:PropertiesChanged};let caseMap$2=caseMap$1;const nativeProperties={};let proto=HTMLElement.prototype;while(proto){let props=Object.getOwnPropertyNames(proto);for(let i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}function saveAccessorValue(model,property){if(!nativeProperties[property]){let value=model[property];if(value!==void 0){if(model.__data){model._setPendingProperty(property,value)}else{if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}const PropertyAccessors=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);return class extends base{static createPropertiesForAttributes(){let a$=this.observedAttributes;for(let i=0;i<a$.length;i++){this.prototype._createPropertyAccessor(caseMap$2.dashToCamelCase(a$[i]))}}static attributeNameForProperty(property){return caseMap$2.camelToDashCase(property)}_initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}super._initializeProperties()}_initializeProtoProperties(props){for(let p in props){this._setProperty(p,props[p])}}_ensureAttribute(attribute,value){const el=this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}_serializeValue(value){switch(typeof value){case"object":if(value instanceof Date){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return super._serializeValue(value);}}_deserializeValue(value,type){let outValue;switch(type){case Object:try{outValue=JSON.parse(value)}catch(x){outValue=value}break;case Array:try{outValue=JSON.parse(value)}catch(x){outValue=null;console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`)}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=super._deserializeValue(value,type);break;}return outValue}_definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);super._definePropertyAccessor(property,readOnly)}_hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}_isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}});_exports.PropertyAccessors=PropertyAccessors;_exports.$propertyAccessors={PropertyAccessors:PropertyAccessors};const templateExtensions={"dom-if":!0,"dom-repeat":!0};function wrapTemplateExtension(node){let is=node.getAttribute("is");if(is&&templateExtensions[is]){let t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){let parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);if(parent){for(let n=parent.firstChild,i=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===i++){return n}}}else{return root}}function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(let j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo}}function createNodeEventHandler(context,eventName,methodName){context=context._methodHost||context;let handler=function(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}const TemplateStamp=dedupingMixin(superClass=>{return class extends superClass{static _parseTemplate(template,outerTemplateInfo){if(!template._templateInfo){let templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");this._parseTemplateContent(template,templateInfo,{parent:null})}return template._templateInfo}static _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted,element=node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){templateInfo.hasInsertionPoint=!0}if(element.firstChild){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}return noted}static _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}for(let node=root.firstChild,parentIndex=0,next;node;node=next){if("template"==node.localName){node=wrapTemplateExtension(node)}next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){let n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next}if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}let childInfo={parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1}if(node.parentNode){parentIndex++}}}static _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){let templateInfo=this._parseTemplate(node,outerTemplateInfo),content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return!0}static _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){let noted=!1,attrs=Array.from(node.attributes);for(let i=attrs.length-1,a;a=attrs[i];i--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value});return!0}else if("id"===name){nodeInfo.id=value;return!0}return!1}static _contentForTemplate(template){let templateInfo=template._templateInfo;return templateInfo&&templateInfo.content||template.content}_stampTemplate(template){if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}let templateInfo=this.constructor._parseTemplate(template),nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=document.importNode(content,!0);dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;let nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(let i=0,l=nodeInfo.length,info,node;i<l&&(info=nodeInfo[i]);i++){node=nodes[i]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info)}dom=dom;return dom}_addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;let handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}_addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}_removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}});_exports.TemplateStamp=TemplateStamp;_exports.$templateStamp={TemplateStamp:TemplateStamp};const CaseMap=caseMap$1;let dedupeId$1=0;const TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},capitalAttributeRegex=/[A-Z]/;function ensureOwnEffectMap(model,type){let effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(let p in effects){let protoFx=effects[p],instFx=effects[p]=Array(protoFx.length);for(let i=0;i<protoFx.length;i++){instFx[i]=protoFx[i]}}}return effects}function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){let ran=!1,id=dedupeId$1++;for(let prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=!0}}return ran}return!1}function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){let ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(let i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}function pathMatchesTrigger(path,trigger){if(trigger){let triggerPath=trigger.name;return triggerPath==path||trigger.structured&&isAncestor(triggerPath,path)||trigger.wildcard&&isDescendant(triggerPath,path)}else{return!0}}function runObserverEffect(inst,property,props,oldProps,info){let fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){let fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;for(let prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}let host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}function notifyPath(inst,path,props){let rootProperty=root(path);if(rootProperty!==path){let eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}function dispatchNotifyEvent(inst,eventName,value,path){let detail={value:value,queueProperty:!0};if(path){detail.path=path}inst.dispatchEvent(new CustomEvent(eventName,{detail}))}function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){let rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property]}dispatchNotifyEvent(inst,info.eventName,value,path)}function handleNotification(event,inst,fromProp,toPath,negate){let value,detail=event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.target[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}function runReflectEffect(inst,property,props,oldProps,info){let value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",inst)}inst._propertyToAttribute(property,info.attrName,value)}function runComputedEffects(inst,changedProps,oldProps,hasPaths){let computeEffects=inst[TYPES.COMPUTE];if(computeEffects){let inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}function runComputedEffect(inst,property,props,oldProps,info){let result=runMethodEffect(inst,property,props,oldProps,info),computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result}}function computeLinkedPaths(inst,path,value){let links=inst.__dataLinkedPaths;if(links){let link;for(let a in links){let b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){nodeInfo.bindings=nodeInfo.bindings||[];let binding={kind,target,parts,literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);if(shouldAddListener(binding)){let{event,negate}=binding.parts[0];binding.listenerEvent=event||CaseMap.camelToDashCase(target)+"-changed";binding.listenerNegate=negate}let index=templateInfo.nodeInfoList.length;for(let i=0,part;i<binding.parts.length;i++){part=binding.parts[i];part.compoundIndex=i;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{let dependencies=part.dependencies,info={index,binding,part,evaluator:constructor};for(let j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info,trigger})}}}}function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){let node=nodeList[info.index],binding=info.binding,part=info.part;if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){let value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{let value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);applyBindingValue(inst,node,binding,part,value)}}function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){inst._valueToNodeAttribute(node,value,binding.target)}else{let prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{inst._setUnmanagedPropertyToNode(node,prop,value)}}}function computeBindingValue(node,value,binding,part){if(binding.isCompound){let storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}function setupBindings(inst,templateInfo){let{nodeList,nodeInfoList}=templateInfo;if(nodeInfoList.length){for(let i=0;i<nodeInfoList.length;i++){let info=nodeInfoList[i],node=nodeList[i],bindings=info.bindings;if(bindings){for(let i=0,binding;i<bindings.length;i++){binding=bindings[i];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}node.__dataHost=inst}}}function setupCompoundStorage(node,binding){if(binding.isCompound){let storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length);for(let j=0;j<parts.length;j++){literals[j]=parts[j].literal}let target=binding.target;storage[target]=literals;if(binding.literal&&"property"==binding.kind){node[target]=binding.literal}}}function addNotifyListener(node,inst,binding){if(binding.listenerEvent){let part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==typeof dynamicFn||dynamicFn[sig.methodName]);let info={methodName:sig.methodName,args:sig.args,methodInfo,dynamicFn};for(let i=0,arg;i<sig.args.length&&(arg=sig.args[i]);i++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}}function runMethodEffect(inst,property,props,oldProps,info){let context=inst._methodHost||inst,fn=context[info.methodName];if(fn){let args=marshalArgs(inst.__data,info.args,property,props);return fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}const emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",ARGUMENT="(?:("+IDENT+"|"+("(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")")+"|"+("(?:"+("(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")")+"|"+("(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")")+")")+")\\s*"+")",bindingRegex=new RegExp("(\\[\\[|{{)"+"\\s*"+"(?:(!)\\s*)?"+("("+IDENT+"\\s*"+("(?:"+"\\(\\s*"+"(?:"+("(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")")+"?"+")"+"\\)\\s*"+")")+"?"+")")+"(?:]]|}})","g");function literalFromParts(parts){let s="";for(let i=0,literal;i<parts.length;i++){literal=parts[i].literal;s+=literal||""}return s}function parseMethod(expression){let m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){let methodName=m[1],sig={methodName,static:!0,args:emptyArray};if(m[2].trim()){let args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){let arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}function parseArg(rawArg){let arg=rawArg.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}if(!a.literal){a.rootProperty=root(arg);a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}function marshalArgs(data,args,path,props){let values=[];for(let i=0,l=args.length;i<l;i++){let arg=args[i],name=arg.name,v;if(arg.literal){v=arg.value}else{if(arg.structured){v=get(data,name);if(v===void 0){v=props[name]}}else{v=data[name]}}if(arg.wildcard){let baseChanged=0===name.indexOf(path+"."),matches$$1=0===path.indexOf(name)&&!baseChanged;values[i]={path:matches$$1?path:name,value:matches$$1?props[path]:v,base:v}}else{values[i]=v}}return values}function notifySplices(inst,array,path,splices){let splicesPath=path+".splices";inst.notifyPath(splicesPath,{indexSplices:splices});inst.notifyPath(path+".length",array.length);inst.__data[splicesPath]={indexSplices:null}}function notifySplice(inst,array,path,index,addedCount,removed){notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}function upper(name){return name[0].toUpperCase()+name.substring(1)}const PropertyEffects=dedupingMixin(superClass=>{const propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));class PropertyEffects extends propertyEffectsBase{constructor(){super();this.__isPropertyEffectsClient=!0;this.__dataCounter=0;this.__dataClientsReady;this.__dataPendingClients;this.__dataToNotify;this.__dataLinkedPaths;this.__dataHasPaths;this.__dataCompoundStorage;this.__dataHost;this.__dataTemp;this.__dataClientsInitialized;this.__data;this.__dataPending;this.__dataOld;this.__computeEffects;this.__reflectEffects;this.__notifyEffects;this.__propagateEffects;this.__observeEffects;this.__readOnly;this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return TYPES}_initializeProperties(){super._initializeProperties();hostStack.registerHost(this);this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}_initializeInstanceProperties(props){let readOnly=this[TYPES.READ_ONLY];for(let prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}_addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);let effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}_removePropertyEffect(property,type,effect){let effects=ensureOwnEffectMap(this,type)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}_hasPropertyEffect(property,type){let effects=this[type];return!!(effects&&effects[property])}_hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}_hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}_hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}_hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}_setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){if(!isPathNotification){let old=get(this,path);path=set(this,path,value);if(!path||!super._shouldPropertyChange(path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(path,value,shouldNotify)){computeLinkedPaths(this,path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(path,value,shouldNotify)}else{this[path]=value}}return!1}_setUnmanagedPropertyToNode(node,prop,value){if(value!==node[prop]||"object"==typeof value){node[prop]=value}}_setPendingProperty(property,value,shouldNotify){let isPath$$1=this.__dataHasPaths&&isPath(property),prevProps=isPath$$1?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}if(isPath$$1){this.__dataTemp[property]=value}else{this.__data[property]=value}this.__dataPending[property]=value;if(isPath$$1||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}_setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}_invalidateProperties(){if(this.__dataReady){this._flushProperties()}}_enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}_flushProperties(){this.__dataCounter++;super._flushProperties();this.__dataCounter--}_flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();this.__dataReady=!0}else{this.__enableOrFlushClients()}}__enableOrFlushClients(){let clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(let i=0,client;i<clients.length;i++){client=clients[i];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}_readyClients(){this.__enableOrFlushClients()}setProperties(props,setReadOnly){for(let path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){this._setPendingPropertyOrPath(path,props[path],!0)}}this._invalidateProperties()}ready(){this._flushProperties();if(!this.__dataClientsReady){this._flushClients()}if(this.__dataPending){this._flushProperties()}}_propertiesChanged(currentProps,changedProps,oldProps){let hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;runComputedEffects(this,changedProps,oldProps,hasPaths);let notifyProps=this.__dataToNotify;this.__dataToNotify=null;this._propagatePropertyChanges(changedProps,oldProps,hasPaths);this._flushClients();runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}if(1==this.__dataCounter){this.__dataTemp={}}}_propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}let templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo}}linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}notifySplices(path,splices){let info={path:""},array=get(this,path,info);notifySplices(this,array,info.path,splices)}get(path,root$$1){return get(root$$1||this,path)}set(path,value,root$$1){if(root$$1){set(root$$1,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}push(path,...items){let info={path:""},array=get(this,path,info),len=array.length,ret=array.push(...items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}pop(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}splice(path,start,deleteCount,...items){let info={path:""},array=get(this,path,info);if(0>start){start=array.length-_Mathfloor(-start)}else if(start){start=_Mathfloor(start)}let ret;if(2===arguments.length){ret=array.splice(start)}else{ret=array.splice(start,deleteCount,...items)}if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}shift(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}unshift(path,...items){let info={path:""},array=get(this,path,info),ret=array.unshift(...items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}notifyPath(path,value){let propPath;if(1==arguments.length){let info={path:""};value=get(this,path,info);propPath=info.path}else if(Array.isArray(path)){propPath=normalize(path)}else{propPath=path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}_createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=function(value){this._setProperty(property,value)}}}_createPropertyObserver(property,method,dynamicFn){let info={property,method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(method,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:method}})}}_createMethodObserver(expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}_createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:CaseMap.camelToDashCase(property)+"-changed",property:property}})}_createReflectedProperty(property){let attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}_createComputedProperty(property,expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn)}static addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}static createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}static createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}static createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}static createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}static createReflectedProperty(property){this.prototype._createReflectedProperty(property)}static createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}static bindTemplate(template){return this.prototype._bindTemplate(template)}_bindTemplate(template,instanceBinding){let templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__templateInfo==templateInfo;if(!wasPreBound){for(let prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){templateInfo=Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){let last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo}}return this.__templateInfo=templateInfo}static _addTemplatePropertyEffect(templateInfo,prop,effect){let hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;let effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}_stampTemplate(template){hostStack.beginHosting(this);let dom=super._stampTemplate(template);hostStack.endHosting(this);let templateInfo=this._bindTemplate(template,!0);templateInfo.nodeList=dom.nodeList;if(!templateInfo.wasPreBound){let nodes=templateInfo.childNodes=[];for(let n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;setupBindings(this,templateInfo);if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,!1,templateInfo.nodeList)}return dom}_removeBoundDom(dom){let templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;let nodes=templateInfo.childNodes;for(let i=0,node;i<nodes.length;i++){node=nodes[i];node.parentNode.removeChild(node)}}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted=super._parseTemplateNode(node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){let parts=this._parseBindings(node.textContent,templateInfo);if(parts){node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){let parts=this._parseBindings(value,templateInfo);if(parts){let origName=name,kind="property";if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}let literal=literalFromParts(parts);if(literal&&"attribute"==kind){node.setAttribute(name,literal)}if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}node.removeAttribute(origName);if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{return super._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value)}}static _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){let noted=super._parseTemplateNestedTemplate(node,templateInfo,nodeInfo),hostProps=nodeInfo.templateInfo.hostProps;for(let source in hostProps){addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,[{mode:"{",source,dependencies:[source]}])}return noted}static _parseBindings(text,templateInfo){let parts=[],lastIndex=0,m;while(null!==(m=bindingRegex.exec(text))){if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}let mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}let signature=parseMethod(source),dependencies=[];if(signature){let{args,methodName}=signature;for(let i=0,arg;i<args.length;i++){arg=args[i];if(!arg.literal){dependencies.push(arg)}}let dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{dependencies.push(source)}parts.push({source,mode,negate,customEvent,signature,dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}if(lastIndex&&lastIndex<text.length){let literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}static _evaluateBinding(inst,part,path,props,oldProps,hasPaths){let value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}return PropertyEffects});_exports.PropertyEffects=PropertyEffects;let hostStack={stack:[],registerHost(inst){if(this.stack.length){let host=this.stack[this.stack.length-1];host._enqueueClient(inst)}},beginHosting(inst){this.stack.push(inst)},endHosting(inst){let stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop()}}};_exports.$propertyEffects={PropertyEffects:PropertyEffects};function normalizeProperties(props){const output={};for(let p in props){const o=props[p];output[p]="function"===typeof o?{type:o}:o}return output}const PropertiesMixin=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);function superPropertiesClass(constructor){const superCtor=Object.getPrototypeOf(constructor);return superCtor.prototype instanceof PropertiesMixin?superCtor:null}function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){let props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))&&constructor.properties){props=normalizeProperties(constructor.properties)}constructor.__ownProperties=props}return constructor.__ownProperties}class PropertiesMixin extends base{static get observedAttributes(){const props=this._properties;return props?Object.keys(props).map(p=>this.attributeNameForProperty(p)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const superCtor=superPropertiesClass(this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}static _finalizeClass(){const props=ownProperties(this);if(props){this.createProperties(props)}}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const superCtor=superPropertiesClass(this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(this))}return this.__properties}static typeForProperty(name){const info=this._properties[name];return info&&info.type}_initializeProperties(){this.constructor.finalize();super._initializeProperties()}connectedCallback(){if(super.connectedCallback){super.connectedCallback()}this._enableProperties()}disconnectedCallback(){if(super.disconnectedCallback){super.disconnectedCallback()}}}return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;_exports.$propertiesMixin={PropertiesMixin:PropertiesMixin};const bundledImportMeta={...meta,url:new URL("../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href},ElementMixin=dedupingMixin(base=>{const polymerElementBase=PropertiesMixin(PropertyEffects(base));function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;let props=constructor._properties;for(let p in props){let info=props[p];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[p]=info}}}return constructor.__propertyDefaults}function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?constructor.observers:null}return constructor.__ownObservers}function createPropertyFromConfig(proto,name,info,allProps){if(info.computed){info.readOnly=!0}if(info.computed&&!proto._hasReadOnlyEffect(name)){proto._createComputedProperty(name,info.computed,allProps)}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}proto._addPropertyToAttributeMap(name)}function processElementStyles(klass,template,is,baseURI){const templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild;for(let idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}let templateStyleIndex=0;for(let i=0;i<stylesWithImports.length;i++){let s=stylesWithImports[i],templateStyle=templateStyles[templateStyleIndex];if(templateStyle!==s){s=s.cloneNode(!0);templateStyle.parentNode.insertBefore(s,templateStyle)}else{templateStyleIndex++}s.textContent=klass._processStyleText(s.textContent,baseURI)}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}}class PolymerElement extends polymerElementBase{static _finalizeClass(){super._finalizeClass();if(this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is){register(this.prototype)}const observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}let template=this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else{template=template.cloneNode(!0)}}this.prototype._template=template}static createProperties(props){for(let p in props){createPropertyFromConfig(this.prototype,p,props[p],props)}}static createObservers(observers,dynamicFns){const proto=this.prototype;for(let i=0;i<observers.length;i++){proto._createMethodObserver(observers[i],dynamicFns)}}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){this._template=DomModule&&DomModule.import(this.is,"template")||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{const module=DomModule&&DomModule.import(this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super();this._template;this._importPath;this.rootPath;this.importPath;this.root;this.$}_initializeProperties(){_exports.instanceCount=instanceCount=instanceCount+1;this.constructor.finalize();this.constructor._finalizeTemplate(this.localName);super._initializeProperties();this.rootPath=rootPath;this.importPath=this.constructor.importPath;let p$=propertyDefaults(this.constructor);if(!p$){return}for(let p in p$){let info=p$[p];if(!this.hasOwnProperty(p)){let value="function"==typeof info.value?info.value.call(this):info.value;if(this._hasAccessor(p)){this._setPendingProperty(p,value,!0)}else{this[p]=value}}}}static _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}static _finalizeTemplate(is){const template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;const importPath=this.importPath,baseURI=importPath?resolveUrl(importPath):"";processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(this)}super.connectedCallback()}ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}super.ready()}_readyClients(){if(this._template){this.root=this._attachDom(this.root)}super._readyClients()}_attachDom(dom){if(this.attachShadow){if(dom){if(!this.shadowRoot){this.attachShadow({mode:"open"})}this.shadowRoot.appendChild(dom);return this.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(this,properties)}}resolveUrl(url,base){if(!base&&this.importPath){base=resolveUrl(this.importPath)}return resolveUrl(url,base)}static _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return super._parseTemplateContent(template,templateInfo,nodeInfo)}}return PolymerElement});_exports.ElementMixin=ElementMixin;let instanceCount=0;_exports.instanceCount=instanceCount;const registrations=[];_exports.registrations=registrations;function _regLog(prototype){console.log("["+prototype.is+"]: registered")}function register(prototype){registrations.push(prototype)}function dumpRegistrations(){registrations.forEach(_regLog)}const updateStyles=function(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={ElementMixin:ElementMixin,get instanceCount(){return instanceCount},registrations:registrations,register:register,dumpRegistrations:dumpRegistrations,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;const Debouncer=class Debouncer{constructor(){this._asyncModule=null;this._callback=null;this._timer=null}setConfig(asyncModule,callback){this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(()=>{this._timer=null;this._callback()})}cancel(){if(this.isActive()){this._asyncModule.cancel(this._timer);this._timer=null}}flush(){if(this.isActive()){this.cancel();this._callback()}}isActive(){return null!=this._timer}static debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){debouncer.cancel()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}};_exports.Debouncer=Debouncer;_exports.$debounce={Debouncer:Debouncer};let HAS_NATIVE_TA="string"===typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function isMouseEvent(name){return-1<MOUSE_EVENTS.indexOf(name)}let SUPPORTS_PASSIVE=!1;(function(){try{let opts=Object.defineProperty({},"passive",{get(){SUPPORTS_PASSIVE=!0}});window.addEventListener("test",null,opts);window.removeEventListener("test",null,opts)}catch(e){}})();function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||"touchend"===eventName){return}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:!0}}else{}}let IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),GestureRecognizer=function(){};GestureRecognizer.prototype.reset;GestureRecognizer.prototype.mousedown;GestureRecognizer.prototype.mousemove;GestureRecognizer.prototype.mouseup;GestureRecognizer.prototype.touchstart;GestureRecognizer.prototype.touchmove;GestureRecognizer.prototype.touchend;GestureRecognizer.prototype.click;const clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0};function canBeLabelled(el){return labellable[el.localName]||!1}function matchingLabels(el){let labels=Array.prototype.slice.call(el.labels||[]);if(!labels.length){labels=[];let root=el.getRootNode();if(el.id){let matching=root.querySelectorAll(`label[for = ${el.id}]`);for(let i=0;i<matching.length;i++){labels.push(matching[i])}}}return labels}let mouseCanceller=function(mouseEvent){let sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return}mouseEvent[HANDLED_OBJ]={skip:!0};if("click"===mouseEvent.type){let clickFromLabel=!1,path=mouseEvent.composedPath&&mouseEvent.composedPath();if(path){for(let i=0;i<path.length;i++){if(path[i].nodeType===Node.ELEMENT_NODE){if("label"===path[i].localName){clickedLabels.push(path[i])}else if(canBeLabelled(path[i])){let ownerLabels=matchingLabels(path[i]);for(let j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||-1<clickedLabels.indexOf(ownerLabels[j])}}}if(path[i]===POINTERSTATE.mouse.target){return}}}if(clickFromLabel){return}mouseEvent.preventDefault();mouseEvent.stopPropagation()}};function setupTeardownMouseCanceller(setup){let events=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS;for(let i=0,en;i<events.length;i++){en=events[i];if(setup){clickedLabels.length=0;document.addEventListener(en,mouseCanceller,!0)}else{document.removeEventListener(en,mouseCanceller,!0)}}}function hasLeftMouseButton(ev){let type=ev.type;if(!isMouseEvent(type)){return!1}if("mousemove"===type){let buttons=ev.buttons===void 0?1:ev.buttons;if(ev instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0}return!!(1&buttons)}else{let button=ev.button===void 0?0:ev.button;return 0===button}}function isSyntheticClick(ev){if("click"===ev.type){if(0===ev.detail){return!0}let t=_findOriginalTarget(ev);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE){return!0}let bcr=t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}let POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ev){let ta="auto",path=ev.composedPath&&ev.composedPath();if(path){for(let i=0,n;i<path.length;i++){n=path[i];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}}}return ta}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener("mousemove",movefn);document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn);document.removeEventListener("mouseup",stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null}document.addEventListener("touchend",function(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(!0)}POINTERSTATE.mouse.target=e.composedPath()[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(2500),function(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null})},SUPPORTS_PASSIVE?{passive:!0}:!1);const gestures={};_exports.gestures=gestures;const recognizers=[];_exports.recognizers=recognizers;function deepTargetFind(x,y){let node=document.elementFromPoint(x,y),next=node;while(next&&next.shadowRoot&&!window.ShadyDOM){let oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);if(oldNext===next){break}if(next){node=next}}return node}function _findOriginalTarget(ev){if(ev.composedPath){const targets=ev.composedPath();return 0<targets.length?targets[0]:ev.target}return ev.target}function _handleNative(ev){let handled,type=ev.type,node=ev.currentTarget,gobj=node[GESTURE_KEY];if(!gobj){return}let gs=gobj[type];if(!gs){return}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if("touch"===type.slice(0,5)){ev=ev;let t=ev.changedTouches[0];if("touchstart"===type){if(1===ev.touches.length){POINTERSTATE.touch.id=t.identifier}}if(POINTERSTATE.touch.id!==t.identifier){return}if(!HAS_NATIVE_TA){if("touchstart"===type||"touchmove"===type){_handleTouchAction(ev)}}}}handled=ev[HANDLED_OBJ];if(handled.skip){return}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){if(r.flow&&-1<r.flow.start.indexOf(ev.type)&&r.reset){r.reset()}}}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){handled[r.name]=!0;r[type](ev)}}}function _handleTouchAction(ev){let t=ev.changedTouches[0],type=ev.type;if("touchstart"===type){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=!1}else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided){return}POINTERSTATE.touch.scrollDecided=!0;let ta=firstTouchAction(ev),prevent=!1,dx=_Mathabs(POINTERSTATE.touch.x-t.clientX),dy=_Mathabs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){}else if("none"===ta){prevent=!0}else if("pan-x"===ta){prevent=dy>dx}else if("pan-y"===ta){prevent=dx>dy}if(prevent){ev.preventDefault()}else{prevent("track")}}}function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return!0}return!1}function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return!0}return!1}function _add(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={}}for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep){continue}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0}}if(0===gd._count){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction)}}function _remove(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj){for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(0===gd._count){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}}}}node.removeEventListener(evType,handler)}function register$1(recog){recognizers.push(recog);for(let i=0;i<recog.emits.length;i++){gestures[recog.emits[i]]=recog}}function _findRecognizerByEvent(evName){for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];for(let j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r}}}return null}function setTouchAction(node,value){if(HAS_NATIVE_TA){microTask.run(()=>{node.style.touchAction=value})}node[TOUCH_ACTION]=value}function _fire(target,type,detail){let ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});ev.detail=detail;target.dispatchEvent(ev);if(ev.defaultPrevented){let preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault()}}}function prevent(evName){let recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=!0}}function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush()}}register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this;trackDocument(this.info,function(e){if(!hasLeftMouseButton(e)){self._fire("up",t,e);untrackDocument(self.info)}},function(e){if(hasLeftMouseButton(e)){self._fire("up",t,e)}untrackDocument(self.info)});this._fire("down",t,e)},touchstart:function(e){this._fire("down",_findOriginalTarget(e),e.changedTouches[0],e)},touchend:function(e){this._fire("up",_findOriginalTarget(e),e.changedTouches[0],e)},_fire:function(type,target,event,preventer){_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function(e){return prevent(e)}})}});register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(move){if(this.moves.length>2){this.moves.shift()}this.moves.push(move)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start";this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;untrackDocument(this.info)},hasMovedEnough:function(x,y){if(this.info.prevent){return!1}if(this.info.started){return!0}let dx=_Mathabs(this.info.x-x),dy=_Mathabs(this.info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function(e){let x=e.clientX,y=e.clientY;if(self.hasMovedEnough(x,y)){self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start";if("start"===self.info.state){prevent("tap")}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){self.info.state="end";untrackDocument(self.info)}self._fire(t,e);self.info.started=!0}};trackDocument(this.info,movefn,function(e){if(self.info.started){movefn(e)}untrackDocument(self.info)});this.info.x=e.clientX;this.info.y=e.clientY},touchstart:function(e){let ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY},touchmove:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;if(this.hasMovedEnough(x,y)){if("start"===this.info.state){prevent("tap")}this.info.addMove({x:x,y:y});this._fire(t,ct);this.info.state="track";this.info.started=!0}},touchend:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0];if(this.info.started){this.info.state="end";this.info.addMove({x:ct.clientX,y:ct.clientY});this._fire(t,ct,e)}},_fire:function(target,touch){let secondlast=this.info.moves[this.info.moves.length-2],lastmove=this.info.moves[this.info.moves.length-1],dx=lastmove.x-this.info.x,dy=lastmove.y-this.info.y,ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y}_fire(target,"track",{state:this.info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function(){return deepTargetFind(touch.clientX,touch.clientY)}})}});register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},save:function(e){this.info.x=e.clientX;this.info.y=e.clientY},mousedown:function(e){if(hasLeftMouseButton(e)){this.save(e)}},click:function(e){if(hasLeftMouseButton(e)){this.forward(e)}},touchstart:function(e){this.save(e.changedTouches[0],e)},touchend:function(e){this.forward(e.changedTouches[0],e)},forward:function(e,preventer){let dx=_Mathabs(e.clientX-this.info.x),dy=_Mathabs(e.clientY-this.info.y),t=_findOriginalTarget(preventer||e);if(!t||t.disabled){return}if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){if(!this.info.prevent){_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer})}}}});const findOriginalTarget=_findOriginalTarget;_exports.findOriginalTarget=findOriginalTarget;const add=addListener;_exports.add=add;const remove=removeListener;_exports.remove=remove;var gestures$0={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$0;const gestures$1=gestures$0,GestureEventListeners=dedupingMixin(superClass=>{return class extends superClass{_addEventListenerToNode(node,eventName,handler){if(!gestures$1.addListener(node,eventName,handler)){super._addEventListenerToNode(node,eventName,handler)}}_removeEventListenerFromNode(node,eventName,handler){if(!gestures$1.removeListener(node,eventName,handler)){super._removeEventListenerFromNode(node,eventName,handler)}}}});_exports.GestureEventListeners=GestureEventListeners;_exports.$gestureEventListeners={GestureEventListeners:GestureEventListeners};const HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,DIR_INSTANCES=[];let observer=null,DOCUMENT_DIR="";function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute("dir")}function setRTL(instance){if(!instance.__autoDirOptOut){instance.setAttribute("dir",DOCUMENT_DIR)}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute("dir");for(let i=0;i<DIR_INSTANCES.length;i++){setRTL(DIR_INSTANCES[i])}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection()}}const DirMixin=dedupingMixin(base=>{if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}const elementBase=PropertyAccessors(base);class Dir extends elementBase{static _processStyleText(cssText,baseURI){cssText=super._processStyleText(cssText,baseURI);cssText=this._replaceDirInCssText(cssText);return cssText}static _replaceDirInCssText(text){let replacedText=text;replacedText=replacedText.replace(HOST_DIR,":host([dir=\"$1\"])");replacedText=replacedText.replace(EL_DIR,":host([dir=\"$2\"]) $1");if(text!==replacedText){this.__activateDir=!0}return replacedText}constructor(){super();this.__autoDirOptOut=!1}ready(){super.ready();this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){if(elementBase.prototype.connectedCallback){super.connectedCallback()}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this)}}disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){super.disconnectedCallback()}if(this.constructor.__activateDir){const idx=DIR_INSTANCES.indexOf(this);if(-1<idx){DIR_INSTANCES.splice(idx,1)}}}}Dir.__activateDir=!1;return Dir});_exports.DirMixin=DirMixin;_exports.$dirMixin={DirMixin:DirMixin};let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(let i=0,l=queue.length;i<l;i++){callMethod(queue.shift())}}function callMethod(info){const context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(()=>{throw e})}}function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}_exports.$renderStatus={beforeNextRender:beforeNextRender,afterNextRender:afterNextRender,flush:flush};function resolve(){document.body.removeAttribute("unresolved")}if("interactive"===document.readyState||"complete"===document.readyState){resolve()}else{window.addEventListener("DOMContentLoaded",resolve)}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount}}const EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){let rowCount=oldEnd-oldStart+1,columnCount=currentEnd-currentStart+1,distances=Array(rowCount);for(let i=0;i<rowCount;i++){distances[i]=Array(columnCount);distances[i][0]=i}for(let j=0;j<columnCount;j++)distances[0][j]=j;for(let i=1;i<rowCount;i++){for(let j=1;j<columnCount;j++){if(equals(current[currentStart+j-1],old[oldStart+i-1]))distances[i][j]=distances[i-1][j-1];else{let north=distances[i-1][j]+1,west=distances[i][j-1]+1;distances[i][j]=north<west?north:west}}}return distances}function spliceOperationsFromEditDistances(distances){let i=distances.length-1,j=distances[0].length-1,current=distances[i][j],edits=[];while(0<i||0<j){if(0==i){edits.push(EDIT_ADD);j--;continue}if(0==j){edits.push(EDIT_DELETE);i--;continue}let northWest=distances[i-1][j-1],west=distances[i-1][j],north=distances[i][j-1],min;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE)}else{edits.push(EDIT_UPDATE);current=northWest}i--;j--}else if(min==west){edits.push(EDIT_DELETE);i--;current=west}else{edits.push(EDIT_ADD);j--;current=north}}edits.reverse();return edits}function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){let prefixCount=0,suffixCount=0,splice,minLength=_Mathmin(currentEnd-currentStart,oldEnd-oldStart);if(0==currentStart&&0==oldStart)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(0==currentEnd-currentStart&&0==oldEnd-oldStart)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd)splice.removed.push(old[oldStart++]);return[splice]}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];let ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=void 0;let splices=[],index=currentStart,oldIndex=oldStart;for(let i=0;i<ops.length;i++){switch(ops[i]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=void 0}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice)}return splices}function sharedPrefix(current,old,searchLength){for(let i=0;i<searchLength;i++)if(!equals(current[i],old[i]))return i;return searchLength}function sharedSuffix(current,old,searchLength){let index1=current.length,index2=old.length,count=0;while(count<searchLength&&equals(current[--index1],old[--index2]))count++;return count}function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length)}function equals(currentValue,previousValue){return currentValue===previousValue}_exports.$arraySplice={calculateSplices:calculateSplices};function isSlot(node){return"slot"===node.localName}class FlattenedNodesObserver{static getFlattenedNodes(node){if(isSlot(node)){node=node;return node.assignedNodes({flatten:!0})}else{return Array.from(node.childNodes).map(node=>{if(isSlot(node)){node=node;return node.assignedNodes({flatten:!0})}else{return[node]}}).reduce((a,b)=>a.concat(b),[])}}constructor(target,callback){this._shadyChildrenObserver=null;this._nativeChildrenObserver=null;this._connected=!1;this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}connect(){if(isSlot(this._target)){this._listenSlots([this._target])}else if(this._target.children){this._listenSlots(this._target.children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,mutations=>{this._processMutations(mutations)})}else{this._nativeChildrenObserver=new MutationObserver(mutations=>{this._processMutations(mutations)});this._nativeChildrenObserver.observe(this._target,{childList:!0})}}this._connected=!0}disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target])}else if(this._target.children){this._unlistenSlots(this._target.children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null}}this._connected=!1}_schedule(){if(!this._scheduled){this._scheduled=!0;microTask.run(()=>this.flush())}}_processMutations(mutations){this._processSlotMutations(mutations);this.flush()}_processSlotMutations(mutations){if(mutations){for(let i=0,mutation;i<mutations.length;i++){mutation=mutations[i];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes)}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes)}}}}flush(){if(!this._connected){return!1}if(window.ShadyDOM){ShadyDOM.flush()}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords())}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords())}this._scheduled=!1;let info={target:this._target,addedNodes:[],removedNodes:[]},newNodes=this.constructor.getFlattenedNodes(this._target),splices=calculateSplices(newNodes,this._effectiveNodes);for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n)}}for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=s.index;j<s.index+s.addedCount;j++){info.addedNodes.push(newNodes[j])}}this._effectiveNodes=newNodes;let didFlush=!1;if(info.addedNodes.length||info.removedNodes.length){didFlush=!0;this.callback.call(this._target,info)}return didFlush}_listenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.addEventListener("slotchange",this._boundSchedule)}}}_unlistenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.removeEventListener("slotchange",this._boundSchedule)}}}}_exports.FlattenedNodesObserver=FlattenedNodesObserver;_exports.$flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};let debouncerQueue=[];const enqueueDebouncer=function(debouncer){debouncerQueue.push(debouncer)};_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;function flushDebouncers(){const didFlush=!!debouncerQueue.length;while(debouncerQueue.length){try{debouncerQueue.shift().flush()}catch(e){setTimeout(()=>{throw e})}}return didFlush}const flush$1=function(){let shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush$1=_exports.flush=flush$1;_exports.$flush={enqueueDebouncer:enqueueDebouncer,flush:flush$1};const p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function(node,selector){return normalizedMatchesSelector.call(node,selector)};_exports.matchesSelector=matchesSelector;class DomApi{constructor(node){this.node=node}observeNodes(callback){return new FlattenedNodesObserver(this.node,callback)}unobserveNodes(observerHandle){observerHandle.disconnect()}notifyObserver(){}deepContains(node){if(this.node.contains(node)){return!0}let n=node,doc=node.ownerDocument;while(n&&n!==doc&&n!==this.node){n=n.parentNode||n.host}return n===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let ip$=[],n=this.node.assignedSlot;while(n){ip$.push(n);n=n.assignedSlot}return ip$}importNode(node,deep){let doc=this.node instanceof Document?this.node:this.node.ownerDocument;return doc.importNode(node,deep)}getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(this.node)}queryDistributedElements(selector){let c$=this.getEffectiveChildNodes(),list=[];for(let i=0,l=c$.length,c;i<l&&(c=c$[i]);i++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c)}}return list}get activeElement(){let node=this.node;return node._activeElement!==void 0?node._activeElement:node.activeElement}}_exports.DomApi=DomApi;function forwardMethods(proto,methods){for(let i=0,method;i<methods.length;i++){method=methods[i];proto[method]=function(){return this.node[method].apply(this.node,arguments)}}}function forwardReadOnlyProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){const domApi=this;return domApi.node[name]},configurable:!0})}}function forwardProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){const domApi=this;return domApi.node[name]},set:function(value){this.node[name]=value},configurable:!0})}}forwardMethods(DomApi.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]);forwardReadOnlyProperties(DomApi.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]);forwardProperties(DomApi.prototype,["textContent","innerHTML"]);class EventApi{constructor(event){this.event=event}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}DomApi.prototype.cloneNode;DomApi.prototype.appendChild;DomApi.prototype.insertBefore;DomApi.prototype.removeChild;DomApi.prototype.replaceChild;DomApi.prototype.setAttribute;DomApi.prototype.removeAttribute;DomApi.prototype.querySelector;DomApi.prototype.querySelectorAll;const dom=function(obj){obj=obj||document;if(!obj.__domApi){let helper;if(obj instanceof Event){helper=new EventApi(obj)}else{helper=new DomApi(obj)}obj.__domApi=helper}return obj.__domApi};_exports.dom=dom;_exports.$polymerDom={matchesSelector:matchesSelector,DomApi:DomApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};({...meta,url:new URL("../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",meta.url).href});let styleInterface=window.ShadyCSS;const LegacyElementMixin=dedupingMixin(base=>{const legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base))),DIRECTION_MAP={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class LegacyElement extends legacyElementBase{constructor(){super();this.isAttached;this.__boundListeners;this._debouncers;this._applyListeners()}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback();this.isAttached=!0;this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1;this.detached()}detached(){}attributeChangedCallback(name,old,value,namespace){if(old!==value){super.attributeChangedCallback(name,old,value,namespace);this.attributeChanged(name,old,value)}}attributeChanged(){}_initializeProperties(){let proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty("__hasRegisterFinished")){proto.__hasRegisterFinished=!0;this._registered()}super._initializeProperties();this.root=this;this.created()}_registered(){}ready(){this._ensureAttributes();super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(value){return this._serializeValue(value)}deserialize(value,type){return this._deserializeValue(value,type)}reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value)}serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(node||this,value,attribute)}extend(prototype,api){if(!(prototype&&api)){return prototype||api}let n$=Object.getOwnPropertyNames(api);for(let i=0,n,pd;i<n$.length&&(n=n$[i]);i++){pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd)}}return prototype}mixin(target,source){for(let i in source){target[i]=source[i]}return target}chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype}return object}instanceTemplate(template){let content=this.constructor._contentForTemplate(template),dom$$1=document.importNode(content,!0);return dom$$1}fire(type,detail,options){options=options||{};detail=null===detail||detail===void 0?{}:detail;let event=new Event(type,{bubbles:options.bubbles===void 0?!0:options.bubbles,cancelable:!!options.cancelable,composed:options.composed===void 0?!0:options.composed});event.detail=detail;let node=options.node||this;node.dispatchEvent(event);return event}listen(node,eventName,methodName){node=node||this;let hbl=this.__boundListeners||(this.__boundListeners=new WeakMap),bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl)}let key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this)}}unlisten(node,eventName,methodName){node=node||this;let bl=this.__boundListeners&&this.__boundListeners.get(node),key=eventName+methodName,handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null}}setScrollDirection(direction,node){setTouchAction(node||this,DIRECTION_MAP[direction]||"auto")}$$(slctr){return this.root.querySelector(slctr)}get domHost(){let root$$1=this.getRootNode();return root$$1 instanceof DocumentFragment?root$$1.host:root$$1}distributeContent(){if(window.ShadyDOM&&this.shadowRoot){ShadyDOM.flush()}}getEffectiveChildNodes(){const thisEl=this,domApi=dom(thisEl);return domApi.getEffectiveChildNodes()}queryDistributedElements(selector){const thisEl=this,domApi=dom(thisEl);return domApi.queryDistributedElements(selector)}getEffectiveChildren(){let list=this.getEffectiveChildNodes();return list.filter(function(n){return n.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let cn=this.getEffectiveChildNodes(),tc=[];for(let i=0,c;c=cn[i];i++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent)}}return tc.join("")}queryEffectiveChildren(selector){let e$=this.queryDistributedElements(selector);return e$&&e$[0]}queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector)}getContentChildNodes(slctr){let content=this.root.querySelector(slctr||"slot");return content?dom(content).getDistributedNodes():[]}getContentChildren(slctr){let children=this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE});return children}isLightDescendant(node){const thisNode=this;return thisNode!==node&&thisNode.contains(node)&&thisNode.getRootNode()===node.getRootNode()}isLocalDescendant(node){return this.root===node.getRootNode()}scopeSubtree(){}getComputedStyleValue(property){return styleInterface.getComputedStyleValue(this,property)}debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],0<wait?timeOut.after(wait):microTask,callback.bind(this))}isDebouncerActive(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive())}flushDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush()}}cancelDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel()}}async(callback,waitTime){return 0<waitTime?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this))}cancelAsync(handle){0>handle?microTask.cancel(~handle):timeOut.cancel(handle)}create(tag,props){let elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props)}else{for(let n in props){elt[n]=props[n]}}}return elt}elementMatches(selector,node){return matchesSelector(node||this,selector)}toggleAttribute(name,bool,node){node=node||this;if(1==arguments.length){bool=!node.hasAttribute(name)}if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}toggleClass(name,bool,node){node=node||this;if(1==arguments.length){bool=!node.classList.contains(name)}if(bool){node.classList.add(name)}else{node.classList.remove(name)}}transform(transformText,node){node=node||this;node.style.webkitTransform=transformText;node.style.transform=transformText}translate3d(x,y,z,node){node=node||this;this.transform("translate3d("+x+","+y+","+z+")",node)}arrayDelete(arrayOrPath,item){let index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(0<=index){return arrayOrPath.splice(index,1)}}else{let arr=get(this,arrayOrPath);index=arr.indexOf(item);if(0<=index){return this.splice(arrayOrPath,index,1)}}return null}_logger(level,args){if(Array.isArray(args)&&1===args.length&&Array.isArray(args[0])){args=args[0]}switch(level){case"log":case"warn":case"error":console[level](...args);}}_log(...args){this._logger("log",args)}_warn(...args){this._logger("warn",args)}_error(...args){this._logger("error",args)}_logf(methodName,...args){return["[%s::%s]",this.is,methodName,...args]}}LegacyElement.prototype.is="";return LegacyElement});_exports.LegacyElementMixin=LegacyElementMixin;_exports.$legacyElementMixin={LegacyElementMixin:LegacyElementMixin};let metaProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};function mixinBehaviors(behaviors,klass){if(!behaviors){klass=klass;return klass}klass=LegacyElementMixin(klass);if(!Array.isArray(behaviors)){behaviors=[behaviors]}let superBehaviors=klass.prototype.behaviors;behaviors=flattenBehaviors(behaviors,null,superBehaviors);klass=_mixinBehaviors(behaviors,klass);if(superBehaviors){behaviors=superBehaviors.concat(behaviors)}klass.prototype.behaviors=behaviors;return klass}function _mixinBehaviors(behaviors,klass){for(let i=0,b;i<behaviors.length;i++){b=behaviors[i];if(b){klass=Array.isArray(b)?_mixinBehaviors(b,klass):GenerateClassFromInfo(b,klass)}}return klass}function flattenBehaviors(behaviors,list,exclude){list=list||[];for(let i=behaviors.length-1,b;0<=i;i--){b=behaviors[i];if(b){if(Array.isArray(b)){flattenBehaviors(b,list)}else{if(0>list.indexOf(b)&&(!exclude||0>exclude.indexOf(b))){list.unshift(b)}}}else{console.warn("behavior is null, check for missing or 404 import")}}return list}function GenerateClassFromInfo(info,Base){class PolymerGenerated extends Base{static get properties(){return info.properties}static get observers(){return info.observers}static get template(){return info._template||DomModule&&DomModule.import(this.is,"template")||Base.template||this.prototype._template||null}created(){super.created();if(info.created){info.created.call(this)}}_registered(){super._registered();if(info.beforeRegister){info.beforeRegister.call(Object.getPrototypeOf(this))}if(info.registered){info.registered.call(Object.getPrototypeOf(this))}}_applyListeners(){super._applyListeners();if(info.listeners){for(let l in info.listeners){this._addMethodEventListenerToNode(this,l,info.listeners[l])}}}_ensureAttributes(){if(info.hostAttributes){for(let a in info.hostAttributes){this._ensureAttribute(a,info.hostAttributes[a])}}super._ensureAttributes()}ready(){super.ready();if(info.ready){info.ready.call(this)}}attached(){super.attached();if(info.attached){info.attached.call(this)}}detached(){super.detached();if(info.detached){info.detached.call(this)}}attributeChanged(name,old,value){super.attributeChanged(name,old,value);if(info.attributeChanged){info.attributeChanged.call(this,name,old,value)}}}PolymerGenerated.generatedFrom=info;for(let p in info){if(!(p in metaProps)){let pd=Object.getOwnPropertyDescriptor(info,p);if(pd){Object.defineProperty(PolymerGenerated.prototype,p,pd)}}}return PolymerGenerated}const Class=function(info){if(!info){console.warn(`Polymer's Class function requires \`info\` argument`)}let klass=GenerateClassFromInfo(info,info.behaviors?mixinBehaviors(info.behaviors,HTMLElement):LegacyElementMixin(HTMLElement));klass.is=info.is;return klass};_exports.Class=Class;_exports.$class={mixinBehaviors:mixinBehaviors,Class:Class};const Polymer$1=function(info){let klass;if("function"===typeof info){klass=info}else{klass=Polymer$1.Class(info)}customElements.define(klass.is,klass);return klass};_exports.Polymer$1=_exports.Polymer=Polymer$1;Polymer$1.Class=Class;_exports.$polymerFn={Polymer:Polymer$1};function mutablePropertyChange(inst,property,value,old,mutableData){let isObject;if(mutableData){isObject="object"===typeof value&&null!==value;if(isObject){old=inst.__dataTemp[property]}}let shouldChange=old!==value&&(old===old||value===value);if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}const MutableData=dedupingMixin(superClass=>{return class extends superClass{_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}});_exports.MutableData=MutableData;const OptionalMutableData=dedupingMixin(superClass=>{class OptionalMutableData extends superClass{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}return OptionalMutableData});_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;_exports.$mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};let newInstance=null;function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}const base=PropertyEffects(class{});class TemplateInstanceBase extends base{constructor(props){super();this._configureProperties(props);this.root=this._stampTemplate(this.__dataHost);let children=this.children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=this}if(this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__){this._showHideChildren(!0)}let options=this.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){this._enableProperties()}}_configureProperties(props){let options=this.__templatizeOptions;if(options.forwardHostProp){for(let hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}for(let iprop in props){this._setPendingProperty(iprop,props[iprop])}}forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}_addEventListenerToNode(node,eventName,handler){if(this._methodHost&&this.__templatizeOptions.parentModel){this._methodHost._addEventListenerToNode(node,eventName,e=>{e.model=this;handler(e)})}else{let templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}_showHideChildren(hide){let c=this.children;for(let i=0,n;i<c.length;i++){n=c[i];if(!!hide!=!!n.__hideTemplateChildren__){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");n.parentNode.replaceChild(n.__polymerReplaced__,n)}else{const replace=n.__polymerReplaced__;if(replace){replace.parentNode.replaceChild(n,replace)}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}_setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{super._setUnmanagedPropertyToNode(node,prop,value)}}get parentModel(){let model=this.__parentModel;if(!model){let options;model=this;do{model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}dispatchEvent(){return!0}}_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;TemplateInstanceBase.prototype.__templatizeOptions;TemplateInstanceBase.prototype._methodHost;TemplateInstanceBase.prototype.__templatizeOwner;TemplateInstanceBase.prototype.__hostProps;const MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){let templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}function createTemplatizerClass(template,templateInfo,options){let base=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase,klass=class extends base{};klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}function addPropagateEffects(template,templateInfo,options){let userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){let klass=templateInfo.templatizeTemplateClass;if(!klass){let base=options.mutableData?MutableDataTemplate:DataTemplate;klass=templateInfo.templatizeTemplateClass=class extends base{};let hostProps=templateInfo.hostProps;for(let prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}}upgradeTemplate(template,klass);if(template.__dataProto){Object.assign(template.__data,template.__dataProto)}template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties()}}function createForwardHostPropEffect(hostProp,userForwardHostProp){return function(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){let hostProps=templateInfo.hostProps||{};for(let iprop in options.instanceProps){delete hostProps[iprop];let userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(let hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}function templatize(template,owner,options){options=options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;const ctor=owner?owner.constructor:TemplateInstanceBase;let templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}addPropagateEffects(template,templateInfo,options);let klass=class extends baseClass{};klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=klass;return klass}function modelForElement(template,node){let model;while(node){if(model=node.__templatizeInstance){if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{node=node.parentNode}}return null}_exports.$templatize={templatize:templatize,modelForElement:modelForElement,TemplateInstanceBase:TemplateInstanceBase};const Templatizer={templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=templatize(template,this,{mutableData:!!mutableData,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(model){return new this.ctor(model)},modelForElement(el){return modelForElement(this._templatizerTemplate,el)}};_exports.Templatizer=Templatizer;_exports.$templatizerBehavior={Templatizer:Templatizer};const domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));class DomBind extends domBindBase{static get observedAttributes(){return["mutable-data"]}constructor(){super();this.root=null;this.$=null;this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none";this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children){for(let i=0;i<this.__children.length;i++){this.root.appendChild(this.__children[i])}}}render(){let template;if(!this.__children){template=template||this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{template=this.querySelector("template");if(template){observer.disconnect();this.render()}else{throw new Error("dom-bind requires a <template> child")}});observer.observe(this,{childList:!0});return}this.root=this._stampTemplate(template);this.$=this.root.$;this.__children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n}this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}_exports.DomBind=DomBind;customElements.define("dom-bind",DomBind);_exports.$domBind={DomBind:DomBind};class LiteralString{constructor(string){this.value=string.toString()}toString(){return this.value}}function literalValue(value){if(value instanceof LiteralString){return value.value}else{throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`)}}function htmlValue(value){if(value instanceof HTMLTemplateElement){return value.innerHTML}else if(value instanceof LiteralString){return literalValue(value)}else{throw new Error(`non-template value passed to Polymer's html function: ${value}`)}}const html=function(strings,...values){const template=document.createElement("template");template.innerHTML=values.reduce((acc,v,idx)=>acc+htmlValue(v)+strings[idx+1],strings[0]);return template};_exports.html$2=_exports.html$1=_exports.html=html;const htmlLiteral=function(strings,...values){return new LiteralString(values.reduce((acc,v,idx)=>acc+literalValue(v)+strings[idx+1],strings[0]))};_exports.htmlLiteral=htmlLiteral;_exports.$htmlTag={html:html,htmlLiteral:htmlLiteral};const PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;_exports.$polymerElement={PolymerElement:PolymerElement,html:html};const domRepeatBase=OptionalMutableData(PolymerElement);class DomRepeat extends domRepeatBase{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=[];this.__limit=1/0;this.__pool=[];this.__renderDebouncer=null;this.__itemsIdxToInstIdx={};this.__chunkCount=null;this.__lastChunkTime=null;this.__sortFn=null;this.__filterFn=null;this.__observePaths=null;this.__ctor=null;this.__isDetached=!0;this.template=null}disconnectedCallback(){super.disconnectedCallback();this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++){this.__detachInstance(i)}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.__isDetached){this.__isDetached=!1;let parent=this.parentNode;for(let i=0;i<this.__instances.length;i++){this.__attachInstance(i,parent)}}}__ensureTemplatized(){if(!this.__ctor){let template=this.template=this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-repeat requires a <template> child")}});observer.observe(this,{childList:!0});return!1}let instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=templatize(template,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,forwardHostProp:function(prop,value){let i$=this.__instances;for(let i=0,inst;i<i$.length&&(inst=i$[i]);i++){inst.forwardHostProp(prop,value)}},notifyInstanceProp:function(inst,prop,value){if(matches(this.as,prop)){let idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}let path=translate(this.as,"items."+idx,prop);this.notifyPath(path,value)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){let obj=this.__getMethodHost();return function(){return obj[functionOrMethodName].apply(obj,arguments)}}return functionOrMethodName}__sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}__filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}__computeFrameTime(rate){return _Mathceil(1e3/rate)}__initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now()}}__tryRenderChunk(){if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk)}}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let currChunkTime=performance.now(),ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=_Mathround(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}if(!this.__handleItemPath(change.path,change.value)){this.__initializeChunking();this.__debounceRender(this.__render)}}__handleObservedPaths(path){if(this.__sortFn||this.__filterFn){if(!path){this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){let paths=this.__observePaths;for(let i=0;i<paths.length;i++){if(0===path.indexOf(paths[i])){this.__debounceRender(this.__render,this.delay)}}}}}__debounceRender(fn,delay=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}render(){this.__debounceRender(this.__render);flush$1()}__render(){if(!this.__ensureTemplatized()){return}this.__applyFullRefresh();this.__pool.length=0;this._setRenderedItemCount(this.__instances.length);this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this.__tryRenderChunk()}__applyFullRefresh(){let items=this.items||[],isntIdxToItemsIdx=Array(items.length);for(let i=0;i<items.length;i++){isntIdxToItemsIdx[i]=i}if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter((i,idx,array)=>this.__filterFn(items[i],idx,array))}if(this.__sortFn){isntIdxToItemsIdx.sort((a,b)=>this.__sortFn(items[a],items[b]))}const itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};let instIdx=0;const limit=_Mathmin(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){let inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}for(let i=this.__instances.length-1;i>=instIdx;i--){this.__detachAndRemoveInstance(i)}}__detachInstance(idx){let inst=this.__instances[idx];for(let i=0,el;i<inst.children.length;i++){el=inst.children[i];inst.root.appendChild(el)}return inst}__attachInstance(idx,parent){let inst=this.__instances[idx];parent.insertBefore(inst.root,this)}__detachAndRemoveInstance(idx){let inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst)}this.__instances.splice(idx,1)}__stampInstance(item,instIdx,itemIdx){let model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}__insertInstance(item,instIdx,itemIdx){let inst=this.__pool.pop();if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{inst=this.__stampInstance(item,instIdx,itemIdx)}let beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;this.parentNode.insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}_showHideChildren(hidden){for(let i=0;i<this.__instances.length;i++){this.__instances[i]._showHideChildren(hidden)}}__handleItemPath(path,value){let itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);if(itemsIdx==parseInt(itemsIdx,10)){let itemSubPath=0>dot?"":itemsPath.substring(dot+1);this.__handleObservedPaths(itemSubPath);let instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){let itemPath=this.as+(itemSubPath?"."+itemSubPath:"");inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}itemForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.as]}indexForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.indexAs]}modelForElement(el){return modelForElement(this.template,el)}}_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);_exports.$domRepeat={DomRepeat:DomRepeat};class DomIf extends PolymerElement{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super();this.__renderDebouncer=null;this.__invalidProps=null;this.__instance=null;this._lastIf=!1;this.__ctor=null}__debounceRender(){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,()=>this.__render());enqueueDebouncer(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();if(!this.parentNode||this.parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!this.parentNode.host){this.__teardownInstance()}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.if){this.__debounceRender()}}render(){flush$1()}__render(){if(this.if){if(!this.__ensureInstance()){return}this._showHideChildren()}else if(this.restamp){this.__teardownInstance()}if(!this.restamp&&this.__instance){this._showHideChildren()}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this._lastIf=this.if}}__ensureInstance(){let parentNode=this.parentNode;if(parentNode){if(!this.__ctor){let template=this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-if requires a <template> child")}});observer.observe(this,{childList:!0});return!1}this.__ctor=templatize(template,this,{mutableData:!0,forwardHostProp:function(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value)}else{this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=!0}}}})}if(!this.__instance){this.__instance=new this.__ctor;parentNode.insertBefore(this.__instance.root,this)}else{this.__syncHostProperties();let c$=this.__instance.children;if(c$&&c$.length){let lastChild=this.previousSibling;if(lastChild!==c$[c$.length-1]){for(let i=0,n;i<c$.length&&(n=c$[i]);i++){parentNode.insertBefore(n,this)}}}}}return!0}__syncHostProperties(){let props=this.__invalidProps;if(props){for(let prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop])}this.__invalidProps=null;this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let c$=this.__instance.children;if(c$&&c$.length){let parent=c$[0].parentNode;for(let i=0,n;i<c$.length&&(n=c$[i]);i++){parent.removeChild(n)}}this.__instance=null;this.__invalidProps=null}}_showHideChildren(){let hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden)}}}_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);_exports.$domIf={DomIf:DomIf};let ArraySelectorMixin=dedupingMixin(superClass=>{let elementBase=ElementMixin(superClass);class ArraySelectorMixin extends elementBase{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super();this.__lastItems=null;this.__lastMulti=null;this.__selectedMap=null}__updateSelection(multi,itemsInfo){let path=itemsInfo.path;if("items"==path){let newItems=itemsInfo.base||[],lastItems=this.__lastItems,lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection()}if(lastItems){let splices=calculateSplices(newItems,lastItems);this.__applySplices(splices)}this.__lastItems=newItems;this.__lastMulti=multi}else if("items.splices"==itemsInfo.path){this.__applySplices(itemsInfo.value.indexSplices)}else{let part=path.slice("items.".length),idx=parseInt(part,10);if(0>part.indexOf(".")&&part==idx){this.__deselectChangedIdx(idx)}}}__applySplices(splices){let selected=this.__selectedMap;for(let i=0,s;i<splices.length;i++){s=splices[i];selected.forEach((idx,item)=>{if(idx<s.index){}else if(idx>=s.index+s.removed.length){selected.set(item,idx+s.addedCount-s.removed.length)}else{selected.set(item,-1)}});for(let j=0,idx;j<s.addedCount;j++){idx=s.index+j;if(selected.has(this.items[idx])){selected.set(this.items[idx],idx)}}}this.__updateLinks();let sidx=0;selected.forEach((idx,item)=>{if(0>idx){if(this.multi){this.splice("selected",sidx,1)}else{this.selected=this.selectedItem=null}selected.delete(item)}else{sidx++}})}__updateLinks(){this.__dataLinkedPaths={};if(this.multi){let sidx=0;this.__selectedMap.forEach(idx=>{if(0<=idx){this.linkPaths("items."+idx,"selected."+sidx++)}})}else{this.__selectedMap.forEach(idx=>{this.linkPaths("selected","items."+idx);this.linkPaths("selectedItem","items."+idx)})}}clearSelection(){this.__dataLinkedPaths={};this.__selectedMap=new Map;this.selected=this.multi?[]:null;this.selectedItem=null}isSelected(item){return this.__selectedMap.has(item)}isIndexSelected(idx){return this.isSelected(this.items[idx])}__deselectChangedIdx(idx){let sidx=this.__selectedIndexForItemIndex(idx);if(0<=sidx){let i=0;this.__selectedMap.forEach((idx,item)=>{if(sidx==i++){this.deselect(item)}})}}__selectedIndexForItemIndex(idx){let selected=this.__dataLinkedPaths["items."+idx];if(selected){return parseInt(selected.slice("selected.".length),10)}}deselect(item){let idx=this.__selectedMap.get(item);if(0<=idx){this.__selectedMap.delete(item);let sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx)}this.__updateLinks();if(this.multi){this.splice("selected",sidx,1)}else{this.selected=this.selectedItem=null}}}deselectIndex(idx){this.deselect(this.items[idx])}select(item){this.selectIndex(this.items.indexOf(item))}selectIndex(idx){let item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear()}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push("selected",item)}else{this.selected=this.selectedItem=item}}else if(this.toggle){this.deselectIndex(idx)}}}return ArraySelectorMixin});_exports.ArraySelectorMixin=ArraySelectorMixin;let baseArraySelector=ArraySelectorMixin(PolymerElement);class ArraySelector extends baseArraySelector{static get is(){return"array-selector"}}_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);_exports.$arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};const customStyleInterface$1=new CustomStyleInterface;if(!window.ShadyCSS){window.ShadyCSS={prepareTemplate(){},styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties)},styleElement(){customStyleInterface$1.processStyles()},styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow}}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;const attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;class CustomStyle extends HTMLElement{constructor(){super();this._style=null;CustomStyleInterface$1.addCustomStyle(this)}getStyle(){if(this._style){return this._style}const style=this.querySelector("style");if(!style){return null}this._style=style;const include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent}if(this.ownerDocument!==window.document){window.document.head.appendChild(this)}return this._style}}_exports.CustomStyle=CustomStyle;window.customElements.define("custom-style",CustomStyle);_exports.$customStyle={CustomStyle:CustomStyle};let mutablePropertyChange$1;(()=>{mutablePropertyChange$1=MutableData._mutablePropertyChange})();const MutableDataBehavior={_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,!0)}};_exports.MutableDataBehavior=MutableDataBehavior;const OptionalMutableDataBehavior={properties:{mutableData:Boolean},_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData)}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;_exports.$mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};const Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;_exports.$polymerLegacy={Base:Base,Polymer:Polymer$1,html:html};Polymer$1({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&"("!==query[0]){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable.listen(this,"iron-resize","_onDescendantIronResize")}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this.unlisten(target,"iron-resize","_onDescendantIronResize")}},resizerShouldNotify:function(){return!0},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function(){if(!this.isAttached)return;if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};_exports.IronResizableBehavior=IronResizableBehavior;_exports.$ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};const AppLayoutBehavior=[IronResizableBehavior,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){if(dom(e).path[0]===this){return}this.resetLayout();e.stopPropagation()},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var self=this,cb=this._updateLayoutStates.bind(this);if(async&&animationFrame){this._layoutDebouncer=Debouncer.debounce(this._layoutDebouncer,animationFrame,cb);enqueueDebouncer(this._layoutDebouncer)}else{this.debounce("resetLayout",cb)}this._notifyDescendantResize()},_notifyLayoutChanged:function(){var self=this;requestAnimationFrame(function(){self.fire("app-reset-layout")})},_notifyDescendantResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this)}}];_exports.AppLayoutBehavior=AppLayoutBehavior;_exports.$appLayoutBehavior={AppLayoutBehavior:AppLayoutBehavior};Polymer$1({_template:html`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[AppLayoutBehavior],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return dom(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var drawer=this.drawer;if(drawer){drawer.setAttribute("no-transition","")}},_clickHandler:function(e){var target=dom(e).localTarget;if(target&&target.hasAttribute("drawer-toggle")){var drawer=this.drawer;if(drawer&&!drawer.persistent){drawer.toggle()}}},_updateLayoutStates:function(){var drawer=this.drawer;if(!this.isAttached||!drawer){return}this._drawerPosition=this.narrow?null:drawer.position;if(this._drawerNeedsReset){if(this.narrow){drawer.opened=this.openedWhenNarrow;drawer.persistent=!1}else{drawer.opened=drawer.persistent=!0}if(drawer.hasAttribute("no-transition")){afterNextRender(this,function(){drawer.removeAttribute("no-transition")})}this._drawerNeedsReset=!1}},_narrowChanged:function(){this._drawerNeedsReset=!0;this.resetLayout()},_onQueryMatchesChanged:function(event){this._setNarrow(event.detail.value)},_computeMediaQuery:function(forceNarrow,responsiveWidth){return forceNarrow?"(min-width: 0px)":"(max-width: "+responsiveWidth+")"}});const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style><custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }";document.head.appendChild(style);Polymer$1({_template:html`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: 120px 0;

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){afterNextRender(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener("keydown",this._tabKeydownHandler.bind(this));this.listen(this,"track","_track");this.setScrollDirection("y")});this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":this._setPosition(this._isRTL()?"right":"left");return;case"end":this._setPosition(this._isRTL()?"left":"right");return;}this._setPosition(this.align)},_escKeydownHandler:function(event){if(event.keyCode===27){event.preventDefault();this.close()}},_track:function(event){if(this.persistent||this.disableSwipe){return}event.preventDefault();switch(event.detail.state){case"start":this._trackStart(event);break;case"track":this._trackMove(event);break;case"end":this._trackEnd(event);break;}},_trackStart:function(){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if("left"===this.position){this._translateOffset=rect.left}else{this._translateOffset=rect.right-window.innerWidth}this._trackDetails=[];this._styleTransitionDuration(0);this.style.visibility="visible"},_trackMove:function(event){this._translateDrawer(event.detail.dx+this._translateOffset);this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()})},_trackEnd:function(event){var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isInEndState=isPositionLeft?0<=x||x<=-drawerWidth:0>=x||x>=drawerWidth;if(!isInEndState){var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return}}var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened="right"===this.position}else if(event.detail.dx>halfWidth){this.opened="left"===this.position}if(isInEndState){this.debounce("_resetDrawerState",this._resetDrawerState)}else{this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility=""},_calculateVelocity:function(event,trackDetails){var now=Date.now(),trackDetail,min=0,max=trackDetails.length-1;while(min<=max){var mid=min+max>>1,d=trackDetails[mid];if(d.timeStamp>=now-100){trackDetail=d;max=mid-1}else{min=mid+1}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx,dt=now-trackDetail.timeStamp||1;return dx/dt}return 0},_flingDrawer:function(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);if(_Mathabs(velocity)<this._MIN_FLING_THRESHOLD){return}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isVelocityPositive=0<velocity,dx;if(!isVelocityPositive&&isPositionLeft){dx=-(x+drawerWidth)}else if(isVelocityPositive&&!isPositionLeft){dx=drawerWidth-x}else{dx=-x}if(isVelocityPositive){velocity=_Mathmax(velocity,this._MIN_TRANSITION_VELOCITY);this.opened="left"===this.position}else{velocity=_Mathmin(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened="right"===this.position}var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce("_resetDrawerState",this._resetDrawerState,t)},_styleTransitionDuration:function(duration){this.style.transitionDuration=duration+"ms";this.$.contentContainer.style.transitionDuration=duration+"ms";this.$.scrim.style.transitionDuration=duration+"ms"},_styleTransitionTimingFunction:function(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction},_translateDrawer:function(x){var drawerWidth=this.getWidth();if("left"===this.position){x=_Mathmax(-drawerWidth,_Mathmin(x,0));this.$.scrim.style.opacity=1+x/drawerWidth}else{x=_Mathmax(0,_Mathmin(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth}this.translate3d(x+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="";this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var oldState=this._drawerState;if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction("");this.style.visibility=""}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED}else{this._drawerState=this._DRAWER_STATE.CLOSED}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow="hidden"}else{document.removeEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow=""}if(oldState!==this._DRAWER_STATE.INIT){this.fire("app-drawer-transitioned")}}},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(this.noFocusTrap){return}var focusableElementsSelector=["a[href]:not([tabindex=\"-1\"])","area[href]:not([tabindex=\"-1\"])","input:not([disabled]):not([tabindex=\"-1\"])","select:not([disabled]):not([tabindex=\"-1\"])","textarea:not([disabled]):not([tabindex=\"-1\"])","button:not([disabled]):not([tabindex=\"-1\"])","iframe:not([tabindex=\"-1\"])","[tabindex]:not([tabindex=\"-1\"])","[contentEditable=true]:not([tabindex=\"-1\"])"].join(","),focusableElements=dom(this).querySelectorAll(focusableElementsSelector);if(0<focusableElements.length){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1]}else{this._firstTabStop=null;this._lastTabStop=null}var tabindex=this.getAttribute("tabindex");if(tabindex&&-1<parseInt(tabindex,10)){this.focus()}else if(this._firstTabStop){this._firstTabStop.focus()}},_tabKeydownHandler:function(event){if(this.noFocusTrap){return}if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===9){if(event.shiftKey){if(this._firstTabStop&&dom(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus()}}else{if(this._lastTabStop&&dom(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus()}}}},_openedPersistentChanged:function(opened,persistent){this.toggleClass("visible",opened&&!persistent,this.$.scrim);this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});Polymer$1({_template:html`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        padding-top: 0 !important;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[AppLayoutBehavior],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return dom(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var header=this.header;if(!this.isAttached||!header){return}this.$.wrapper.classList.remove("initializing");header.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var headerHeight=header.offsetHeight;if(!this.hasScrollingRegion){requestAnimationFrame(function(){var rect=this.getBoundingClientRect(),rightOffset=document.documentElement.clientWidth-rect.right;header.style.left=rect.left+"px";header.style.right=rightOffset+"px"}.bind(this))}else{header.style.left="";header.style.right=""}var containerStyle=this.$.contentContainer.style;if(header.fixed&&!header.condenses&&this.hasScrollingRegion){containerStyle.marginTop=headerHeight+"px";containerStyle.paddingTop=""}else{containerStyle.paddingTop=headerHeight+"px";containerStyle.marginTop=""}}});const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(scrollTarget,isAttached){if(this._oldScrollTarget){this._toggleScrollListener(!1,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if("document"===scrollTarget){this.scrollTarget=this._doc}else if("string"===typeof scrollTarget){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if("object"===typeof leftOrOptions){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;_exports.$ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};const _scrollEffects={};_exports._scrollEffects=_scrollEffects;let _scrollTimer=null;_exports._scrollTimer=_scrollTimer;const scrollTimingFunction=function(t,b,c,d){t/=d;return-c*t*(t-2)+b};_exports.scrollTimingFunction=scrollTimingFunction;const registerEffect=function(effectName,effectDef){if(null!=_scrollEffects[effectName]){throw new Error("effect `"+effectName+"` is already registered.")}_scrollEffects[effectName]=effectDef};_exports.registerEffect=registerEffect;const queryAllRoot=function(selector,root){var queue=[root],matches=[];while(0<queue.length){var node=queue.shift();matches.push.apply(matches,node.querySelectorAll(selector));for(var i=0;node.children[i];i++){if(node.children[i].shadowRoot){queue.push(node.children[i].shadowRoot)}}}return matches};_exports.queryAllRoot=queryAllRoot;const scroll=function(options){options=options||{};var docEl=document.documentElement,target=options.target||docEl,hasNativeScrollBehavior="scrollBehavior"in target.style&&target.scroll,scrollTop=options.top||0,scrollLeft=options.left||0,scrollTo=target===docEl?window.scrollTo:function(scrollLeft,scrollTop){target.scrollLeft=scrollLeft;target.scrollTop=scrollTop};if("smooth"===options.behavior){if(hasNativeScrollBehavior){target.scroll(options)}else{var timingFn=scrollTimingFunction,startTime=Date.now(),currentScrollTop=target===docEl?window.pageYOffset:target.scrollTop,currentScrollLeft=target===docEl?window.pageXOffset:target.scrollLeft,duration=300,updateFrame=function updateFrame(){var now=Date.now(),elapsedTime=now-startTime;if(elapsedTime<duration){scrollTo(timingFn(elapsedTime,currentScrollLeft,scrollLeft-currentScrollLeft,duration),timingFn(elapsedTime,currentScrollTop,scrollTop-currentScrollTop,duration));requestAnimationFrame(updateFrame)}else{scrollTo(scrollLeft,scrollTop)}}.bind(this);updateFrame()}}else if("silent"===options.behavior){var headers=queryAllRoot("app-header",document.body);headers.forEach(function(header){header.setAttribute("silent-scroll","")});if(_scrollTimer){window.cancelAnimationFrame(_scrollTimer)}_exports._scrollTimer=_scrollTimer=window.requestAnimationFrame(function(){headers.forEach(function(header){header.removeAttribute("silent-scroll")});_exports._scrollTimer=_scrollTimer=null});scrollTo(scrollLeft,scrollTop)}else{scrollTo(scrollLeft,scrollTop)}};_exports.scroll=scroll;var helpers={_scrollEffects:_scrollEffects,get _scrollTimer(){return _scrollTimer},scrollTimingFunction:scrollTimingFunction,registerEffect:registerEffect,queryAllRoot:queryAllRoot,scroll:scroll};_exports.$helpers=helpers;const AppScrollEffectsBehavior=[IronScrollTargetBehavior,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return _Mathmax(0,this._scrollTop)},detached:function(){this._tearDownEffects()},createEffect:function(effectName,effectConfig){var effectDef=_scrollEffects[effectName];if(!effectDef){throw new ReferenceError(this._getUndefinedMsg(effectName))}var prop=this._boundEffect(effectDef,effectConfig||{});prop.setUp();return prop},_effectsChanged:function(effects,effectsConfig,isAttached){this._tearDownEffects();if(!effects||!isAttached){return}effects.split(" ").forEach(function(effectName){var effectDef;if(""!==effectName){if(effectDef=_scrollEffects[effectName]){this._effects.push(this._boundEffect(effectDef,effectsConfig[effectName]))}else{console.warn(this._getUndefinedMsg(effectName))}}},this);this._setUpEffect()},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(effectDef,effectsConfig){effectsConfig=effectsConfig||{};var startsAt=parseFloat(effectsConfig.startsAt||0),endsAt=parseFloat(effectsConfig.endsAt||1),noop=function(){},runFn=0===startsAt&&1===endsAt?effectDef.run:function(progress,y){effectDef.run.call(this,_Mathmax(0,(progress-startsAt)/(endsAt-startsAt)),y)};return{setUp:effectDef.setUp?effectDef.setUp.bind(this,effectsConfig):noop,run:effectDef.run?runFn.bind(this):noop,tearDown:effectDef.tearDown?effectDef.tearDown.bind(this):noop}},_setUpEffect:function(){if(this.isAttached&&this._effects){this._effectsRunFn=[];this._effects.forEach(function(effectDef){if(!1!==effectDef.setUp()){this._effectsRunFn.push(effectDef.run)}},this)}},_tearDownEffects:function(){if(this._effects){this._effects.forEach(function(effectDef){effectDef.tearDown()})}this._effectsRunFn=[];this._effects=[]},_runEffects:function(p,y){if(this._effectsRunFn){this._effectsRunFn.forEach(function(run){run(p,y)})}},_scrollHandler:function(){if(!this.disabled){var scrollTop=this._clampedScrollTop;this._updateScrollState(scrollTop);if(0<this.threshold){this._setThresholdTriggered(scrollTop>=this.threshold)}}},_getDOMRef:function(id){console.warn("_getDOMRef","`"+id+"` is undefined")},_getUndefinedMsg:function(effectName){return"Scroll effect `"+effectName+"` is undefined. "+"Did you forget to import app-layout/app-scroll-effects/effects/"+effectName+".html ?"}}];_exports.AppScrollEffectsBehavior=AppScrollEffectsBehavior;_exports.$appScrollEffectsBehavior={AppScrollEffectsBehavior:AppScrollEffectsBehavior};Polymer$1({_template:html`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[AppScrollEffectsBehavior,AppLayoutBehavior],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef){return this._stickyElRef}for(var nodes=dom(this.$.slot).getDistributedNodes(),i=0,node;node=nodes[i];i++){if(node.nodeType===Node.ELEMENT_NODE){if(node.hasAttribute("sticky")){this._stickyElRef=node;break}else if(!this._stickyElRef){this._stickyElRef=node}}}return this._stickyElRef},_configChanged:function(){this.resetLayout();this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0===this.offsetWidth&&0===this.offsetHeight){return}var scrollTop=this._clampedScrollTop,firstSetup=0===this._height||0===scrollTop,currentDisabled=this.disabled;this._height=this.offsetHeight;this._stickyElRef=null;this.disabled=!0;if(!firstSetup){this._updateScrollState(0,!0)}if(this._mayMove()){this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0}else{this._dHeight=0}this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0;this._setUpEffect();if(firstSetup){this._updateScrollState(scrollTop,!0)}else{this._updateScrollState(this._lastScrollTop,!0);this._layoutIfDirty()}this.disabled=currentDisabled},_updateScrollState:function(scrollTop,forceUpdate){if(0===this._height){return}var progress=0,top=0,lastTop=this._top,lastScrollTop=this._lastScrollTop,maxHeaderTop=this._maxHeaderTop,dScrollTop=scrollTop-this._lastScrollTop,absDScrollTop=_Mathabs(dScrollTop),isScrollingDown=scrollTop>this._lastScrollTop,now=performance.now();if(this._mayMove()){top=this._clamp(this.reveals?lastTop+dScrollTop:scrollTop,0,maxHeaderTop)}if(scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?_Mathmax(this._dHeight,top):top;this.style.transitionDuration="0ms"}if(this.reveals&&!this.disabled&&100>absDScrollTop){if(300<now-this._initTimestamp||this._wasScrollingDown!==isScrollingDown){this._initScrollTop=scrollTop;this._initTimestamp=now}if(scrollTop>=maxHeaderTop){if(30<_Mathabs(this._initScrollTop-scrollTop)||10<absDScrollTop){if(isScrollingDown&&scrollTop>=maxHeaderTop){top=maxHeaderTop}else if(!isScrollingDown&&scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?this._dHeight:0}var scrollVelocity=dScrollTop/(now-this._lastTimestamp);this.style.transitionDuration=this._clamp((top-lastTop)/scrollVelocity,0,300)+"ms"}else{top=this._top}}}if(0===this._dHeight){progress=0<scrollTop?1:0}else{progress=top/this._dHeight}if(!forceUpdate){this._lastScrollTop=scrollTop;this._top=top;this._wasScrollingDown=isScrollingDown;this._lastTimestamp=now}if(forceUpdate||progress!==this._progress||lastTop!==top||0===scrollTop){this._progress=progress;this._runEffects(progress,top);this._transformHeader(top)}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return 0<this._dHeight&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?0<this._clampedScrollTop:0<=this._clampedScrollTop-this._maxHeaderTop},_transformHeader:function(y){this.translate3d(0,-y+"px",0);if(this._stickyEl){this.translate3d(0,this.condenses&&y>=this._stickyElTop?_Mathmin(y,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)}},_clamp:function(v,min,max){return _Mathmin(max,_Mathmax(min,v))},_ensureBgContainers:function(){if(!this._bgContainer){this._bgContainer=document.createElement("div");this._bgContainer.id="background";this._bgRear=document.createElement("div");this._bgRear.id="backgroundRearLayer";this._bgContainer.appendChild(this._bgRear);this._bgFront=document.createElement("div");this._bgFront.id="backgroundFrontLayer";this._bgContainer.appendChild(this._bgFront);dom(this.root).insertBefore(this._bgContainer,this.$.contentContainer)}},_getDOMRef:function(id){switch(id){case"backgroundFrontLayer":this._ensureBgContainers();return this._bgFront;case"backgroundRearLayer":this._ensureBgContainers();return this._bgRear;case"background":this._ensureBgContainers();return this._bgContainer;case"mainTitle":return dom(this).querySelector("[main-title]");case"condensedTitle":return dom(this).querySelector("[condensed-title]");}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}});registerEffect("blend-background",{setUp:function(){var fx={backgroundFrontLayer:this._getDOMRef("backgroundFrontLayer"),backgroundRearLayer:this._getDOMRef("backgroundRearLayer")};fx.backgroundFrontLayer.style.willChange="opacity";fx.backgroundFrontLayer.style.transform="translateZ(0)";fx.backgroundRearLayer.style.willChange="opacity";fx.backgroundRearLayer.style.transform="translateZ(0)";fx.backgroundRearLayer.style.opacity=0;this._fxBlendBackground=fx},run:function(p){var fx=this._fxBlendBackground;fx.backgroundFrontLayer.style.opacity=1-p;fx.backgroundRearLayer.style.opacity=p},tearDown:function(){delete this._fxBlendBackground}});registerEffect("fade-background",{setUp:function(config){var fx={},duration=config.duration||"0.5s";fx.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer");fx.backgroundRearLayer=this._getDOMRef("backgroundRearLayer");fx.backgroundFrontLayer.style.willChange="opacity";fx.backgroundFrontLayer.style.webkitTransform="translateZ(0)";fx.backgroundFrontLayer.style.transitionProperty="opacity";fx.backgroundFrontLayer.style.transitionDuration=duration;fx.backgroundRearLayer.style.willChange="opacity";fx.backgroundRearLayer.style.webkitTransform="translateZ(0)";fx.backgroundRearLayer.style.transitionProperty="opacity";fx.backgroundRearLayer.style.transitionDuration=duration;this._fxFadeBackground=fx},run:function(p){var fx=this._fxFadeBackground;if(1<=p){fx.backgroundFrontLayer.style.opacity=0;fx.backgroundRearLayer.style.opacity=1}else{fx.backgroundFrontLayer.style.opacity=1;fx.backgroundRearLayer.style.opacity=0}},tearDown:function(){delete this._fxFadeBackground}});registerEffect("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}});function interpolate(progress,points,fn,ctx){fn.apply(ctx,points.map(function(point){return point[0]+(point[1]-point[0])*progress}))}registerEffect("resize-title",{setUp:function(){var title=this._getDOMRef("mainTitle"),condensedTitle=this._getDOMRef("condensedTitle");if(!condensedTitle){console.warn("Scroll effect `resize-title`: undefined `condensed-title`");return!1}if(!title){console.warn("Scroll effect `resize-title`: undefined `main-title`");return!1}condensedTitle.style.willChange="opacity";condensedTitle.style.webkitTransform="translateZ(0)";condensedTitle.style.transform="translateZ(0)";condensedTitle.style.webkitTransformOrigin="left top";condensedTitle.style.transformOrigin="left top";title.style.willChange="opacity";title.style.webkitTransformOrigin="left top";title.style.transformOrigin="left top";title.style.webkitTransform="translateZ(0)";title.style.transform="translateZ(0)";var titleClientRect=title.getBoundingClientRect(),condensedTitleClientRect=condensedTitle.getBoundingClientRect(),fx={};fx.scale=parseInt(window.getComputedStyle(condensedTitle)["font-size"],10)/parseInt(window.getComputedStyle(title)["font-size"],10);fx.titleDX=titleClientRect.left-condensedTitleClientRect.left;fx.titleDY=titleClientRect.top-condensedTitleClientRect.top;fx.condensedTitle=condensedTitle;fx.title=title;this._fxResizeTitle=fx},run:function(p,y){var fx=this._fxResizeTitle;if(!this.condenses){y=0}if(1<=p){fx.title.style.opacity=0;fx.condensedTitle.style.opacity=1}else{fx.title.style.opacity=1;fx.condensedTitle.style.opacity=0}interpolate(_Mathmin(1,p),[[1,fx.scale],[0,-fx.titleDX],[y,y-fx.titleDY]],function(scale,translateX,translateY){this.transform("translate("+translateX+"px, "+translateY+"px) "+"scale3d("+scale+", "+scale+", 1)",fx.title)},this)},tearDown:function(){delete this._fxResizeTitle}});registerEffect("parallax-background",{setUp:function(config){var fx={},scalar=parseFloat(config.scalar);fx.background=this._getDOMRef("background");fx.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer");fx.backgroundRearLayer=this._getDOMRef("backgroundRearLayer");fx.deltaBg=fx.backgroundFrontLayer.offsetHeight-fx.background.offsetHeight;if(0===fx.deltaBg){if(isNaN(scalar)){scalar=.8}fx.deltaBg=(this._dHeight||0)*scalar}else{if(isNaN(scalar)){scalar=1}fx.deltaBg=fx.deltaBg*scalar}this._fxParallaxBackground=fx},run:function(p){var fx=this._fxParallaxBackground;this.transform("translate3d(0px, "+fx.deltaBg*_Mathmin(1,p)+"px, 0px)",fx.backgroundFrontLayer);if(fx.backgroundRearLayer){this.transform("translate3d(0px, "+fx.deltaBg*_Mathmin(1,p)+"px, 0px)",fx.backgroundRearLayer)}},tearDown:function(){delete this._fxParallaxBackground}});registerEffect("material",{setUp:function(){this.effects="waterfall resize-title blend-background parallax-background";return!1}});registerEffect("resize-snapped-title",{setUp:function(config){var title=this._getDOMRef("mainTitle"),condensedTitle=this._getDOMRef("condensedTitle"),duration=config.duration||"0.2s",fx={};if(!condensedTitle){console.warn("Scroll effect `resize-snapped-title`: undefined `condensed-title`");return!1}if(!title){console.warn("Scroll effect `resize-snapped-title`: undefined `main-title`");return!1}title.style.transitionProperty="opacity";title.style.transitionDuration=duration;condensedTitle.style.transitionProperty="opacity";condensedTitle.style.transitionDuration=duration;fx.condensedTitle=condensedTitle;fx.title=title;this._fxResizeSnappedTitle=fx},run:function(p){var fx=this._fxResizeSnappedTitle;if(0<p){fx.title.style.opacity=0;fx.condensedTitle.style.opacity=1}else{fx.title.style.opacity=1;fx.condensedTitle.style.opacity=0}},tearDown:function(){var fx=this._fxResizeSnappedTitle;fx.title.style.transition="";fx.condensedTitle.style.transition="";delete this._fxResizeSnappedTitle}});Polymer$1({_template:html`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});var workingURL$1,urlDoc,urlBase,anchor;function resolveURL(path,base){if(workingURL$1===void 0){workingURL$1=!1;try{var u=new URL("b","http://a");u.pathname="c%20d";workingURL$1="http://a/c%20d"===u.href;workingURL$1=workingURL$1&&"http://www.google.com/?foo%20bar"===new URL("http://www.google.com/?foo bar").href}catch(e){}}if(workingURL$1){return new URL(path,base)}if(!urlDoc){urlDoc=document.implementation.createHTMLDocument("url");urlBase=urlDoc.createElement("base");urlDoc.head.appendChild(urlBase);anchor=urlDoc.createElement("a")}urlBase.href=base;anchor.href=path.replace(/ /g,"%20");return anchor}Polymer$1({is:"iron-location",properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged");this.listen(window,"location-changed","_urlChanged");this.listen(window,"popstate","_urlChanged");this.listen(document.body,"click","_globalOnClick");this._lastChangedAt=window.performance.now()-(this.dwellTime-200);this._initialized=!0;this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged");this.unlisten(window,"location-changed","_urlChanged");this.unlisten(window,"popstate","_urlChanged");this.unlisten(document.body,"click","_globalOnClick");this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0;this._hashChanged();this.path=window.decodeURIComponent(this.__location.pathname);this.query=this.__location.search.substring(1);this._dontUpdateUrl=!1;this._updateUrl()},_getUrl:function(){var partiallyEncodedPath=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),partiallyEncodedQuery="";if(this.query){partiallyEncodedQuery="?"+this.query.replace(/\#/g,"%23");if(this.encodeSpaceAsPlusInQuery){partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+")}}var partiallyEncodedHash="";if(this.hash){partiallyEncodedHash="#"+window.encodeURI(this.hash)}return partiallyEncodedPath+partiallyEncodedQuery+partiallyEncodedHash},_updateUrl:function(){if(this._dontUpdateUrl||!this._initialized){return}if(this.path===window.decodeURIComponent(this.__location.pathname)&&this.query===this.__location.search.substring(1)&&this.hash===window.decodeURIComponent(this.__location.hash.substring(1))){return}var newUrl=this._getUrl(),fullNewUrl=resolveURL(newUrl,this.__location.protocol+"//"+this.__location.host).href,now=window.performance.now(),shouldReplace=this._lastChangedAt+this.dwellTime>now;this._lastChangedAt=now;if(shouldReplace){window.history.replaceState({},"",fullNewUrl)}else{window.history.pushState({},"",fullNewUrl)}this.fire("location-changed",{},{node:window})},_globalOnClick:function(event){if(event.defaultPrevented){return}var href=this._getSameOriginLinkHref(event);if(!href){return}event.preventDefault();if(href===this.__location.href){return}window.history.pushState({},"",href);this.fire("location-changed",{},{node:window})},_getSameOriginLinkHref:function(event){if(0!==event.button){return null}if(event.metaKey||event.ctrlKey){return null}for(var eventPath=dom(event).path,anchor=null,i=0,element;i<eventPath.length;i++){element=eventPath[i];if("A"===element.tagName&&element.href){anchor=element;break}}if(!anchor){return null}if("_blank"===anchor.target){return null}if(("_top"===anchor.target||"_parent"===anchor.target)&&window.top!==window){return null}if(anchor.download){return null}var href=anchor.href,url;if(null!=document.baseURI){url=resolveURL(href,document.baseURI)}else{url=resolveURL(href)}var origin;if(this.__location.origin){origin=this.__location.origin}else{origin=this.__location.protocol+"//"+this.__location.host}var urlOrigin;if(url.origin){urlOrigin=url.origin}else{var urlHost=url.host,urlPort=url.port,urlProtocol=url.protocol;if("https:"===urlProtocol&&"443"===urlPort||"http:"===urlProtocol&&"80"===urlPort){urlHost=url.hostname}urlOrigin=urlProtocol+"//"+urlHost}if(urlOrigin!==origin){return null}var normalizedHref=url.pathname+url.search+url.hash;if("/"!==normalizedHref[0]){normalizedHref="/"+normalizedHref}if(this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(normalizedHref)){return null}var fullNormalizedHref=resolveURL(normalizedHref,this.__location.href).href;return fullNormalizedHref},_makeRegExp:function(urlSpaceRegex){return RegExp(urlSpaceRegex)}});Polymer$1({is:"iron-query-params",properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0;this.paramsObject=this._decodeParams(this.paramsString);this._dontReact=!1},paramsObjectChanged:function(){if(this._dontReact){return}this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27")},_encodeParams:function(params){var encodedParams=[];for(var key in params){var value=params[key];if(""===value){encodedParams.push(encodeURIComponent(key))}else if(value){encodedParams.push(encodeURIComponent(key)+"="+encodeURIComponent(value.toString()))}}return encodedParams.join("&")},_decodeParams:function(paramString){var params={};paramString=(paramString||"").replace(/\+/g,"%20");for(var paramList=paramString.split("&"),i=0,param;i<paramList.length;i++){param=paramList[i].split("=");if(param[0]){params[decodeURIComponent(param[0])]=decodeURIComponent(param[1]||"")}}return params}});const AppRouteConverterBehavior={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams");this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){if(this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams){return}this.route={prefix:"",path:this.path,__queryParams:this.queryParams}},_routeChanged:function(){if(!this.route){return}this.path=this.route.prefix+this.route.path},_routeQueryParamsChanged:function(queryParams){if(!this.route){return}this.queryParams=queryParams}};_exports.AppRouteConverterBehavior=AppRouteConverterBehavior;_exports.$appRouteConverterBehavior={AppRouteConverterBehavior:AppRouteConverterBehavior};Polymer$1({_template:html`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
`,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean},dwellTime:{type:Number}},behaviors:[AppRouteConverterBehavior],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){if(!this._isReady){return}if(this.useHashAsPath){this.__hash=this.path}else{this.__path=this.path}}});Polymer$1({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams");this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(queryParams){if(queryParams&&this.tail){if(this.tail.__queryParams!==queryParams){this.set("tail.__queryParams",queryParams)}if(!this.active||this._queryParamsUpdating){return}var copyOfQueryParams={},anythingChanged=!1;for(var key in queryParams){copyOfQueryParams[key]=queryParams[key];if(anythingChanged||!this.queryParams||queryParams[key]!==this.queryParams[key]){anythingChanged=!0}}for(var key in this.queryParams){if(anythingChanged||!(key in queryParams)){anythingChanged=!0;break}}if(!anythingChanged){return}this._queryParamsUpdating=!0;this.set("queryParams",copyOfQueryParams);this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(queryParams){if(queryParams&&this.route&&this.route.__queryParams!=queryParams){this.set("route.__queryParams",queryParams)}},__queryParamsChanged:function(changes){if(!this.active||this._queryParamsUpdating){return}this.set("route.__"+changes.path,changes.value)},__resetProperties:function(){this._setActive(!1);this._matched=null},__tryToMatch:function(){if(!this.route){return}var path=this.route.path,pattern=this.pattern;if(this.autoActivate&&""===path){path="/"}if(!pattern){return}if(!path){this.__resetProperties();return}for(var remainingPieces=path.split("/"),patternPieces=pattern.split("/"),matched=[],namedMatches={},i=0,patternPiece;i<patternPieces.length;i++){patternPiece=patternPieces[i];if(!patternPiece&&""!==patternPiece){break}var pathPiece=remainingPieces.shift();if(!pathPiece&&""!==pathPiece){this.__resetProperties();return}matched.push(pathPiece);if(":"==patternPiece.charAt(0)){namedMatches[patternPiece.slice(1)]=pathPiece}else if(patternPiece!==pathPiece){this.__resetProperties();return}}this._matched=matched.join("/");var propertyUpdates={};if(!this.active){propertyUpdates.active=!0}var tailPrefix=this.route.prefix+this._matched,tailPath=remainingPieces.join("/");if(0<remainingPieces.length){tailPath="/"+tailPath}if(!this.tail||this.tail.prefix!==tailPrefix||this.tail.path!==tailPath){propertyUpdates.tail={prefix:tailPrefix,path:tailPath,__queryParams:this.route.__queryParams}}propertyUpdates.data=namedMatches;this._dataInUrl={};for(var key in namedMatches){this._dataInUrl[key]=namedMatches[key]}if(this.setProperties){this.setProperties(propertyUpdates,!0)}else{this.__setMulti(propertyUpdates)}},__tailPathChanged:function(path){if(!this.active){return}var tailPath=path,newPath=this._matched;if(tailPath){if("/"!==tailPath.charAt(0)){tailPath="/"+tailPath}newPath+=tailPath}this.set("route.path",newPath)},__updatePathOnDataChange:function(){if(!this.route||!this.active){return}var newPath=this.__getLink({}),oldPath=this.__getLink(this._dataInUrl);if(newPath===oldPath){return}this.set("route.path",newPath)},__getLink:function(overrideValues){var values={tail:null};for(var key in this.data){values[key]=this.data[key]}for(var key in overrideValues){values[key]=overrideValues[key]}var patternPieces=this.pattern.split("/"),interp=patternPieces.map(function(value){if(":"==value[0]){value=values[value.slice(1)]}return value},this);if(values.tail&&values.tail.path){if(0<interp.length&&"/"===values.tail.path.charAt(0)){interp.push(values.tail.path.slice(1))}else{interp.push(values.tail.path)}}return interp.join("/")},__setMulti:function(setObj){for(var property in setObj){this._propertySetter(property,setObj[property])}if(setObj.data!==void 0){this._pathEffector("data",this.data);this._notifyChange("data")}if(setObj.active!==void 0){this._pathEffector("active",this.active);this._notifyChange("active")}if(setObj.tail!==void 0){this._pathEffector("tail",this.tail);this._notifyChange("tail")}}});const IronA11yAnnouncer=Polymer$1({_template:html`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live\$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(text){this._text="";this.async(function(){this._text=text},100)},_onIronAnnounce:function(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});_exports.IronA11yAnnouncer=IronA11yAnnouncer;IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}document.body.appendChild(IronA11yAnnouncer.instance)};_exports.$ironA11yAnnouncer={IronA11yAnnouncer:IronA11yAnnouncer};var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},KEY_CHAR=/[a-z0-9*]/,IDENT_CHAR=/U\+/,ARROW_KEY=/^arrow/,SPACE_KEY=/^space(bar)?/,ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(" "===lKey||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(1==lKey.length){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if("multiply"==lKey){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=_StringfromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(+keyCode){if(65<=keyCode&&90>=keyCode){validKey=_StringfromCharCode(32+keyCode)}else if(112<=keyCode&&123>=keyCode){validKey="f"+(keyCode-112+1)}else if(48<=keyCode&&57>=keyCode){validKey=keyCode-48+""}else if(96<=keyCode&&105>=keyCode){validKey=keyCode-96+""}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(1===keyComboString.length){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":"),keyName=eventParts[0],event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=!0;parsedKeyCombo.hasModifiers=!0}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){for(var keyCombos=parseEventString(eventString),i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return!0}}return!1},_collectKeyBindings:function(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(-1===keyBindings.indexOf(this.keyBindings)){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers,b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName],boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple,keyEventTarget,eventName,boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0],handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:!0});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};_exports.IronA11yKeysBehavior=IronA11yKeysBehavior;_exports.$ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};const IronControlState={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}},__handleEventRetargeting:{type:Boolean,value:function(){return!this.shadowRoot&&!PolymerElement}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0);this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(event){if(PolymerElement){this._setFocused("focus"===event.type);return}if(event.target===this){this._setFocused("focus"===event.type)}else if(this.__handleEventRetargeting){var target=dom(event).localTarget;if(!this.isLightDescendant(target)){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable})}}},_disabledChanged:function(disabled){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(!1);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==void 0){if(null===this._oldTabIndex){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function(){if(this._controlStateChanged){this._controlStateChanged()}}};_exports.IronControlState=IronControlState;_exports.$ironControlState={IronControlState:IronControlState};const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=!1}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(!1)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(){this._setPointerDown(!0);this._setPressed(!0);this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1);this._setPressed(!1)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(!0)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(!1)},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(!1)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};_exports.IronButtonStateImpl=IronButtonStateImpl;const IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;_exports.$ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};const IronMeta=function(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}};_exports.IronMeta=IronMeta;IronMeta[" "]=function(){};IronMeta.types={};IronMeta.prototype={get value(){var type=this.type,key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}},set value(value){var type=this.type,key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(null==value){delete type[key]}else{type[key]=value}}},get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}},byKey:function(key){this.key=key;return this.value}};var metaDatas=IronMeta.types;Polymer$1({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==void 0&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});_exports.$ironMeta={IronMeta:IronMeta};let IronValidatableBehaviorMeta=null;_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta;const IronValidatableBehavior={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta=new IronMeta({type:"validator"})},_invalidChanged:function(){if(this.invalid){this.setAttribute("aria-invalid","true")}else{this.removeAttribute("aria-invalid")}},get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(value){if(value===void 0&&this.value!==void 0)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return!this.invalid},_getValidity:function(value){if(this.hasValidator()){return this._validator.validate(value)}return!0}};_exports.IronValidatableBehavior=IronValidatableBehavior;var ironValidatableBehavior={get IronValidatableBehaviorMeta(){return IronValidatableBehaviorMeta},IronValidatableBehavior:IronValidatableBehavior};_exports.$ironValidatableBehavior=ironValidatableBehavior;const IronFormElementBehavior={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1},_parentForm:{type:Object}},attached:function(){if(!PolymerElement){this.fire("iron-form-element-register")}},detached:function(){if(!PolymerElement&&this._parentForm){this._parentForm.fire("iron-form-element-unregister",{target:this})}}};_exports.IronFormElementBehavior=IronFormElementBehavior;_exports.$ironFormElementBehavior={IronFormElementBehavior:IronFormElementBehavior};const IronCheckedElementBehaviorImpl={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(){return this.disabled||!this.required||this.checked},_requiredChanged:function(){if(this.required){this.setAttribute("aria-required","true")}else{this.removeAttribute("aria-required")}},_checkedChanged:function(){this.active=this.checked;this.fire("iron-change")},_valueChanged:function(){if(this.value===void 0||null===this.value){this.value="on"}}};_exports.IronCheckedElementBehaviorImpl=IronCheckedElementBehaviorImpl;const IronCheckedElementBehavior=[IronFormElementBehavior,IronValidatableBehavior,IronCheckedElementBehaviorImpl];_exports.IronCheckedElementBehavior=IronCheckedElementBehavior;_exports.$ironCheckedElementBehavior={IronCheckedElementBehaviorImpl:IronCheckedElementBehaviorImpl,IronCheckedElementBehavior:IronCheckedElementBehavior};const IronFitBehavior={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var fitWidth;if(this.fitInto===window){fitWidth=this.fitInto.innerWidth}else{fitWidth=this.fitInto.getBoundingClientRect().width}return fitWidth},get _fitHeight(){var fitHeight;if(this.fitInto===window){fitHeight=this.fitInto.innerHeight}else{fitHeight=this.fitInto.getBoundingClientRect().height}return fitHeight},get _fitLeft(){var fitLeft;if(this.fitInto===window){fitLeft=0}else{fitLeft=this.fitInto.getBoundingClientRect().left}return fitLeft},get _fitTop(){var fitTop;if(this.fitInto===window){fitTop=0}else{fitTop=this.fitInto.getBoundingClientRect().top}return fitTop},get _defaultPositionTarget(){var parent=dom(this).parentNode;if(parent&&parent.nodeType===Node.DOCUMENT_FRAGMENT_NODE){parent=parent.host}return parent},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign){return"left"}if("left"===this.horizontalAlign){return"right"}}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function(){if("undefined"===typeof this._isRTL){this._isRTL="rtl"==window.getComputedStyle(this).direction}this.positionTarget=this.positionTarget||this._defaultPositionTarget;if(this.autoFitOnAttach){if("none"===window.getComputedStyle(this).display){setTimeout(function(){this.fit()}.bind(this))}else{window.ShadyDOM&&ShadyDOM.flush();this.fit()}}},detached:function(){if(this.__deferredFit){clearTimeout(this.__deferredFit);this.__deferredFit=null}},fit:function(){this.position();this.constrain();this.center()},_discoverInfo:function(){if(this._fitInfo){return}var target=window.getComputedStyle(this),sizer=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==target.top?"top":"auto"!==target.bottom?"bottom":null,horizontally:"auto"!==target.left?"left":"auto"!==target.right?"right":null},sizedBy:{height:"none"!==sizer.maxHeight,width:"none"!==sizer.maxWidth,minWidth:parseInt(sizer.minWidth,10)||0,minHeight:parseInt(sizer.minHeight,10)||0},margin:{top:parseInt(target.marginTop,10)||0,right:parseInt(target.marginRight,10)||0,bottom:parseInt(target.marginBottom,10)||0,left:parseInt(target.marginLeft,10)||0}}},resetFit:function(){var info=this._fitInfo||{};for(var property in info.sizerInlineStyle){this.sizingTarget.style[property]=info.sizerInlineStyle[property]}for(var property in info.inlineStyle){this.style[property]=info.inlineStyle[property]}this._fitInfo=null},refit:function(){var scrollLeft=this.sizingTarget.scrollLeft,scrollTop=this.sizingTarget.scrollTop;this.resetFit();this.fit();this.sizingTarget.scrollLeft=scrollLeft;this.sizingTarget.scrollTop=scrollTop},position:function(){if(!this.__shouldPosition){return}this._discoverInfo();this.style.position="fixed";this.sizingTarget.style.boxSizing="border-box";this.style.left="0px";this.style.top="0px";var rect=this.getBoundingClientRect(),positionRect=this.__getNormalizedRect(this.positionTarget),fitRect=this.__getNormalizedRect(this.fitInto),margin=this._fitInfo.margin,size={width:rect.width+margin.left+margin.right,height:rect.height+margin.top+margin.bottom},position=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,size,rect,positionRect,fitRect),left=position.left+margin.left,top=position.top+margin.top,right=_Mathmin(fitRect.right-margin.right,left+rect.width),bottom=_Mathmin(fitRect.bottom-margin.bottom,top+rect.height);left=_Mathmax(fitRect.left+margin.left,_Mathmin(left,right-this._fitInfo.sizedBy.minWidth));top=_Mathmax(fitRect.top+margin.top,_Mathmin(top,bottom-this._fitInfo.sizedBy.minHeight));this.sizingTarget.style.maxWidth=_Mathmax(right-left,this._fitInfo.sizedBy.minWidth)+"px";this.sizingTarget.style.maxHeight=_Mathmax(bottom-top,this._fitInfo.sizedBy.minHeight)+"px";this.style.left=left-rect.left+"px";this.style.top=top-rect.top+"px"},constrain:function(){if(this.__shouldPosition){return}this._discoverInfo();var info=this._fitInfo;if(!info.positionedBy.vertically){this.style.position="fixed";this.style.top="0px"}if(!info.positionedBy.horizontally){this.style.position="fixed";this.style.left="0px"}this.sizingTarget.style.boxSizing="border-box";var rect=this.getBoundingClientRect();if(!info.sizedBy.height){this.__sizeDimension(rect,info.positionedBy.vertically,"top","bottom","Height")}if(!info.sizedBy.width){this.__sizeDimension(rect,info.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(rect,positionedBy,start,end,extent){this.__sizeDimension(rect,positionedBy,start,end,extent)},__sizeDimension:function(rect,positionedBy,start,end,extent){var info=this._fitInfo,fitRect=this.__getNormalizedRect(this.fitInto),max="Width"===extent?fitRect.width:fitRect.height,flip=positionedBy===end,offset=flip?max-rect[end]:rect[start],margin=info.margin[flip?start:end],offsetExtent="offset"+extent,sizingOffset=this[offsetExtent]-this.sizingTarget[offsetExtent];this.sizingTarget.style["max"+extent]=max-margin-offset-sizingOffset+"px"},center:function(){if(this.__shouldPosition){return}this._discoverInfo();var positionedBy=this._fitInfo.positionedBy;if(positionedBy.vertically&&positionedBy.horizontally){return}this.style.position="fixed";if(!positionedBy.vertically){this.style.top="0px"}if(!positionedBy.horizontally){this.style.left="0px"}var rect=this.getBoundingClientRect(),fitRect=this.__getNormalizedRect(this.fitInto);if(!positionedBy.vertically){var top=fitRect.top-rect.top+(fitRect.height-rect.height)/2;this.style.top=top+"px"}if(!positionedBy.horizontally){var left=fitRect.left-rect.left+(fitRect.width-rect.width)/2;this.style.left=left+"px"}},__getNormalizedRect:function(target){if(target===document.documentElement||target===window){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}}return target.getBoundingClientRect()},__getOffscreenArea:function(position,size,fitRect){var verticalCrop=_Mathmin(0,position.top)+_Mathmin(0,fitRect.bottom-(position.top+size.height)),horizontalCrop=_Mathmin(0,position.left)+_Mathmin(0,fitRect.right-(position.left+size.width));return _Mathabs(verticalCrop)*size.width+_Mathabs(horizontalCrop)*size.height},__getPosition:function(hAlign,vAlign,size,sizeNoMargins,positionRect,fitRect){var positions=[{verticalAlign:"top",horizontalAlign:"left",top:positionRect.top+this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:positionRect.top+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset}];if(this.noOverlap){for(var i=0,l=positions.length,copy;i<l;i++){copy={};for(var key in positions[i]){copy[key]=positions[i][key]}positions.push(copy)}positions[0].top=positions[1].top+=positionRect.height;positions[2].top=positions[3].top-=positionRect.height;positions[4].left=positions[6].left+=positionRect.width;positions[5].left=positions[7].left-=positionRect.width}vAlign="auto"===vAlign?null:vAlign;hAlign="auto"===hAlign?null:hAlign;if(!hAlign||"center"===hAlign){positions.push({verticalAlign:"top",horizontalAlign:"center",top:positionRect.top+this.verticalOffset+(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset});positions.push({verticalAlign:"bottom",horizontalAlign:"center",top:positionRect.bottom-size.height-this.verticalOffset-(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}if(!vAlign||"middle"===vAlign){positions.push({verticalAlign:"middle",horizontalAlign:"left",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left+this.horizontalOffset+(this.noOverlap?positionRect.width:0)});positions.push({verticalAlign:"middle",horizontalAlign:"right",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset-(this.noOverlap?positionRect.width:0)})}if("middle"===vAlign&&"center"===hAlign){positions.push({verticalAlign:"middle",horizontalAlign:"center",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}for(var position,i=0;i<positions.length;i++){var candidate=positions[i],vAlignOk=candidate.verticalAlign===vAlign,hAlignOk=candidate.horizontalAlign===hAlign;if(!this.dynamicAlign&&!this.noOverlap&&vAlignOk&&hAlignOk){position=candidate;break}var alignOk=(!vAlign||vAlignOk)&&(!hAlign||hAlignOk);if(!this.dynamicAlign&&!alignOk){continue}candidate.offscreenArea=this.__getOffscreenArea(candidate,size,fitRect);if(0===candidate.offscreenArea&&alignOk){position=candidate;break}position=position||candidate;var diff=candidate.offscreenArea-position.offscreenArea;if(0>diff||0===diff&&(vAlignOk||hAlignOk)){position=candidate}}return position}};_exports.IronFitBehavior=IronFitBehavior;_exports.$ironFitBehavior={IronFitBehavior:IronFitBehavior};Polymer$1({_template:html`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});Polymer$1({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===globalElement.getAttribute("dir")}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&"rtl"===window.getComputedStyle(target).direction}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(!0),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});Polymer$1({_template:html`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[IronValidatableBehavior],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){IronA11yAnnouncer.requestAvailability();this._previousValidInput="";this._patternAlreadyChecked=!1},attached:function(){this._observer=dom(this).observeNodes(function(){this._initSlottedInput()}.bind(this))},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer);this._observer=null}},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0];if(this.inputElement&&this.inputElement.value){this.bindValue=this.inputElement.value}this.fire("iron-input-ready")},get _patternRegExp(){var pattern;if(this.allowedPattern){pattern=new RegExp(this.allowedPattern)}else{switch(this.inputElement.type){case"number":pattern=/[0-9.,e-]/;break;}}return pattern},_bindValueChanged:function(bindValue,inputElement){if(!inputElement){return}if(bindValue===void 0){inputElement.value=null}else if(bindValue!==inputElement.value){this.inputElement.value=bindValue}if(this.autoValidate){this.validate()}this.fire("bind-value-changed",{value:bindValue})},_onInput:function(){if(this.allowedPattern&&!this._patternAlreadyChecked){var valid=this._checkPatternValidity();if(!valid){this._announceInvalidCharacter("Invalid string of characters not entered.");this.inputElement.value=this._previousValidInput}}this.bindValue=this._previousValidInput=this.inputElement.value;this._patternAlreadyChecked=!1},_isPrintable:function(event){var anyNonPrintable=8==event.keyCode||9==event.keyCode||13==event.keyCode||27==event.keyCode,mozNonPrintable=19==event.keyCode||20==event.keyCode||45==event.keyCode||46==event.keyCode||144==event.keyCode||145==event.keyCode||32<event.keyCode&&41>event.keyCode||111<event.keyCode&&124>event.keyCode;return!anyNonPrintable&&!(0==event.charCode&&mozNonPrintable)},_onKeypress:function(event){if(!this.allowedPattern&&"number"!==this.inputElement.type){return}var regexp=this._patternRegExp;if(!regexp){return}if(event.metaKey||event.ctrlKey||event.altKey){return}this._patternAlreadyChecked=!0;var thisChar=_StringfromCharCode(event.charCode);if(this._isPrintable(event)&&!regexp.test(thisChar)){event.preventDefault();this._announceInvalidCharacter("Invalid character "+thisChar+" not entered.")}},_checkPatternValidity:function(){var regexp=this._patternRegExp;if(!regexp){return!0}for(var i=0;i<this.inputElement.value.length;i++){if(!regexp.test(this.inputElement.value[i])){return!1}}return!0},validate:function(){if(!this.inputElement){this.invalid=!1;return!0}var valid=this.inputElement.checkValidity();if(valid){if(this.required&&""===this.bindValue){valid=!1}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.bindValue)}}this.invalid=!valid;this.fire("iron-input-validate");return valid},_announceInvalidCharacter:function(message){this.fire("iron-announce",{text:message})},_computeValue:function(bindValue){return bindValue}});const IronJsonpLibraryBehavior={properties:{libraryLoaded:{type:Boolean,value:!1,notify:!0,readOnly:!0},libraryErrorMessage:{type:String,value:null,notify:!0,readOnly:!0}},observers:["_libraryUrlChanged(libraryUrl)"],_libraryUrlChanged:function(){if(this._isReady&&this.libraryUrl)this._loadLibrary()},_libraryLoadCallback:function(err,result){if(err){Base._warn("Library load failed:",err.message);this._setLibraryErrorMessage(err.message)}else{this._setLibraryErrorMessage(null);this._setLibraryLoaded(!0);if(this.notifyEvent)this.fire(this.notifyEvent,result,{composed:!0})}},_loadLibrary:function(){LoaderMap.require(this.libraryUrl,this._libraryLoadCallback.bind(this),this.callbackName)},ready:function(){this._isReady=!0;if(this.libraryUrl)this._loadLibrary()}};_exports.IronJsonpLibraryBehavior=IronJsonpLibraryBehavior;var LoaderMap={apiMap:{},require:function(url,notifyCallback,jsonpCallbackName){var name=this.nameFromUrl(url);if(!this.apiMap[name])this.apiMap[name]=new Loader(name,url,jsonpCallbackName);this.apiMap[name].requestNotify(notifyCallback)},nameFromUrl:function(url){return url.replace(/[\:\/\%\?\&\.\=\-\,]/g,"_")+"_api"}},Loader=function(name,url,callbackName){this.notifiers=[];if(!callbackName){if(0<=url.indexOf(this.callbackMacro)){callbackName=name+"_loaded";url=url.replace(this.callbackMacro,callbackName)}else{this.error=new Error("IronJsonpLibraryBehavior a %%callback%% parameter is required in libraryUrl");return}}this.callbackName=callbackName;window[this.callbackName]=this.success.bind(this);this.addScript(url)};Loader.prototype={callbackMacro:"%%callback%%",loaded:!1,addScript:function(src){var script=document.createElement("script");script.src=src;script.onerror=this.handleError.bind(this);var s=document.querySelector("script")||document.body;s.parentNode.insertBefore(script,s);this.script=script},removeScript:function(){if(this.script.parentNode){this.script.parentNode.removeChild(this.script)}this.script=null},handleError:function(){this.error=new Error("Library failed to load");this.notifyAll();this.cleanup()},success:function(){this.loaded=!0;this.result=Array.prototype.slice.call(arguments);this.notifyAll();this.cleanup()},cleanup:function(){delete window[this.callbackName]},notifyAll:function(){this.notifiers.forEach(function(notifyCallback){notifyCallback(this.error,this.result)}.bind(this));this.notifiers=[]},requestNotify:function(notifyCallback){if(this.loaded||this.error){notifyCallback(this.error,this.result)}else{this.notifiers.push(notifyCallback)}}};Polymer$1({is:"iron-jsonp-library",behaviors:[IronJsonpLibraryBehavior],properties:{libraryUrl:String,callbackName:String,notifyEvent:String}});_exports.$ironJsonpLibrary={IronJsonpLibraryBehavior:IronJsonpLibraryBehavior};var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,HIDDEN_Y="-10000px",SECRET_TABINDEX=-100,IS_V2=null!=flush$1,ANIMATION_FRAME=IS_V2?animationFrame:0,IDLE_TIME=IS_V2?idlePeriod:1,MICRO_TASK=IS_V2?microTask:2;if(!OptionalMutableDataBehavior){Polymer.OptionalMutableDataBehavior={}}Polymer$1({_template:html`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return _Mathmax(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=_Mathmin(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return _Mathceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return _Mathceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return _Mathceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,ANIMATION_FRAME);this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,ANIMATION_FRAME)},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=_Mathmax(0,_Mathmin(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(_Mathabs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=_Mathround(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=_Mathfloor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),MICRO_TASK)}},_getReusables:function(fromTop){var ith,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollTop,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;this._physicalStart;offsetContent=bottom-scrollBottom}while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(0>=virtualStart-idxs.length){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_createPool:function(size){this._ensureTemplatized();var i,inst,physicalItems=Array(size);for(i=0;i<size;i++){inst=this.stamp(null);physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount,nextIncrease=_Mathround(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=_Mathround(.5*this._physicalCount)}if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),MICRO_TASK)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(_Mathround(50/this._templateCost),1,nextIncrease)),IDLE_TIME)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={__key__:!0};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.selectedAs]=!0;instanceProps.tabIndex=!0;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if("undefined"===typeof oldGrid)return;this.notifyResize();flush$1?flush$1():flush$1();newGrid&&this._updateGridMetrics()},_itemsChanged:function(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._collection=null;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,ANIMATION_FRAME)}else if("items.splices"===change.path){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;var itemAddedOrRemoved=change.value.indexSplices.some(function(splice){return 0<splice.addedCount||0<splice.removed.length});if(itemAddedOrRemoved){var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}var affectedIndexRendered=change.value.indexSplices.some(function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd},this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,ANIMATION_FRAME)}}else if("items.length"!==change.path){this._forwardItemPath(change.path,change.value)}},_forwardItemPath:function(path,value){path=path.slice(6);var dot=path.indexOf(".");if(-1===dot){dot=path.length}var isIndexRendered,pidx,inst,offscreenInstance=this.modelForElement(this._offscreenFocusedItem);if(IS_V2){var vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}}else{var key=path.substring(0,dot);if(offscreenInstance&&offscreenInstance.__key__===key){inst=offscreenInstance}else{pidx=this._physicalIndexForKey[key];inst=this.modelForElement(this._physicalItems[pidx]);if(!inst||inst.__key__!==key){return}}}path=path.substring(dot+1);path=this.as+(path?"."+path:"");IS_V2?inst._setPendingPropertyOrPath(path,value,!1,!0):inst.notifyPath(path,value,!0);inst._flushProperties&&inst._flushProperties(!0);if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},_adjustVirtualIndex:function(splices){splices.forEach(function(splice){splice.removed.forEach(this._removeItem,this);if(splice.index<this._virtualStart){var delta=_Mathmax(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(0<=this._focusedVirtualIndex){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}},this)},_removeItem:function(item){this.$.selector.deselect(item);if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_assignModels:function(itemSet){this._iterateItems(function(pidx,vidx){var el=this._physicalItems[pidx],item=this.items&&this.items[vidx];if(null!=item){var inst=this.modelForElement(el);inst.__key__=this._collection?this._collection.getKey(item):null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(!0);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}},itemSet)},_updateMetrics:function(itemSet){flush$1?flush$1():flush$1();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=_Mathround((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=0<this._physicalCount?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=0<this._physicalCount?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?_Mathfloor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth,rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems(function(pidx,vidx){var modulus=vidx%this._itemsPerRow,x=_Mathfloor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=-1*x}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}})}else{this._iterateItems(function(pidx){this.translate3d(0,y+"px",0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx]})}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var deltaHeight=0===this._virtualStart?this._physicalTop:_Mathmin(this._scrollPosition+this._physicalTop,0);if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+_Mathmax(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||_Mathabs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},scrollToIndex:function(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}flush$1?flush$1():flush$1();if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=_Mathfloor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;_Mathabs(this._viewportHeight-this._scrollTargetHeight);this.updateViewportBoundaries();if(this._isVisible){this.toggleScrollListener(!0);this._resetAverage();this._render()}else{this.toggleScrollListener(!1)}},ANIMATION_FRAME)},selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},selectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=!0}this.updateSizeForIndex(index)}if(this.$.selector.selectIndex){this.$.selector.selectIndex(index)}else{this.$.selector.select(this.items[index])}},deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},deselectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=!1;this.updateSizeForIndex(index)}if(this.$.selector.deselectIndex){this.$.selector.deselectIndex(index)}else{this.$.selector.deselect(this.items[index])}},toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},clearSelection:function(){this._iterateItems(function(pidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=!1});this.$.selector.clearSelection()},_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex,target=dom(e).path[0],activeEl=this._getActiveElement(),physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];if("input"===target.localName||"button"===target.localName||"select"===target.localName){return}modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(0<=fidx&&fidx<this._virtualCount){if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(0<this._virtualCount&&0<this._physicalCount){this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?_Mathceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return IS_V2?(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount:this._physicalIndexForKey[this._collection.getKey(this.items[vidx])]},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(0>idx||idx>=this._virtualCount){return}this._restoreFocusedItem();if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)],model=this.modelForElement(physicalItem),focusable;model.tabIndex=SECRET_TABINDEX;if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}if(!focusable){focusable=dom(physicalItem).querySelector("[tabindex=\""+SECRET_TABINDEX+"\"]")}model.tabIndex=0;this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}if(!this._focusBackfillItem){var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}this._assignModels();var fpidx=this._focusedPhysicalIndex,onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem),offScreenInstance=this.modelForElement(this._offscreenFocusedItem);if(onScreenInstance[this.as]===offScreenInstance[this.as]){this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;this._physicalItems[fpidx]=this._offscreenFocusedItem;this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target),focusedModel=this.modelForElement(this._focusedItem),hasOffscreenFocusedItem=null!==this._offscreenFocusedItem,fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();if(focusedModel){focusedModel.tabIndex=-1}targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case 40:e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break;}},_clamp:function(v,min,max){return _Mathmin(max,_Mathmax(min,v))},_debounce:function(name,cb,asyncModule){if(IS_V2){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])}else{enqueueDebouncer(this.debounce(name,cb))}},_forwardProperty:function(inst,name,value){if(IS_V2){inst._setPendingProperty(name,value)}else{inst[name]=value}},_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}},this)},_notifyInstancePropV2:function(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath(translate(this.as,"items."+idx,prop),value)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(0===path.indexOf(this.as+".")){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).notifyPath(path,value,!0)}},this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item)[prop]=value}},this)},_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement}});const IronSelection=function(selectCallback){this.selection=[];this.selectCallback=selectCallback};_exports.IronSelection=IronSelection;IronSelection.prototype={get:function(){return this.multi?this.selection.slice():this.selection[0]},clear:function(excludes){this.selection.slice().forEach(function(item){if(!excludes||0>excludes.indexOf(item)){this.setItemSelected(item,!1)}},this)},isSelected:function(item){return 0<=this.selection.indexOf(item)},setItemSelected:function(item,isSelected){if(null!=item){if(isSelected!==this.isSelected(item)){if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(0<=i){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}},select:function(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),!1);this.setItemSelected(item,!0)}},toggle:function(item){this.setItemSelected(item,!this.isSelected(item))}};_exports.$ironSelection={IronSelection:IronSelection};const IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},indexOf:function(item){return this.items?this.items.indexOf(item):-1},select:function(value){this.selected=value},selectPrevious:function(){var length=this.items.length,index=length-1;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)-1+length)%length}this.selected=this._indexToValue(index)},selectNext:function(){var index=0;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)+1)%this.items.length}this.selected=this._indexToValue(index)},selectIndex:function(index){this.select(this._indexToValue(index))},forceSynchronousItemUpdate:function(){if(this._observer&&"function"===typeof this._observer.flush){this._observer.flush()}else{this._updateItems()}},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function(){var nodes=dom(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}if(this.fallbackSelection&&this.items.length&&this._selection.get()===void 0){this.selected=this.fallbackSelection}},_filterItem:function(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function(value){return null==value?null:this.items[this._valueToIndex(value)]},_valueToIndex:function(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return+value}},_indexToValue:function(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return-1===i?null:i}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=void 0?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(node){return dom(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();this.fire("iron-items-changed",mutation,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){var t=e.target,items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(0<=i){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:!0}).defaultPrevented){this.select(value)}}};_exports.IronSelectableBehavior=IronSelectableBehavior;_exports.$ironSelectable={IronSelectableBehavior:IronSelectableBehavior};const IronMultiSelectableBehaviorImpl={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(value){if(this.multi){this._toggleSelected(value)}else{this.selected=value}},multiChanged:function(multi){this._selection.multi=multi;this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this)}else if(this.selectedItems&&0<this.selectedItems.length){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem))},this).filter(function(unfilteredValue){return null!=unfilteredValue},this)}},_updateSelected:function(){if(this.multi){this._selectMulti(this.selectedValues)}else{this._selectSelected(this.selected)}},_selectMulti:function(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return null!==item&&item!==void 0});this._selection.clear(selectedItems);for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],!0)}if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection)}}},_selectionChange:function(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null)}else{if(null!==s&&s!==void 0){this._setSelectedItems([s]);this._setSelectedItem(s)}else{this._setSelectedItems([]);this._setSelectedItem(null)}}},_toggleSelected:function(value){var i=this.selectedValues.indexOf(value);if(0>i){this.push("selectedValues",value)}else{this.splice("selectedValues",i,1)}},_valuesToItems:function(values){return null==values?null:values.map(function(value){return this._valueToItem(value)},this)}};_exports.IronMultiSelectableBehaviorImpl=IronMultiSelectableBehaviorImpl;const IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];_exports.IronMultiSelectableBehavior=IronMultiSelectableBehavior;_exports.$ironMultiSelectable={IronMultiSelectableBehaviorImpl:IronMultiSelectableBehaviorImpl,IronMultiSelectableBehavior:IronMultiSelectableBehavior};const IronMenuBehaviorImpl={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(value){if(this._defaultFocusAsync){this.cancelAsync(this._defaultFocusAsync);this._defaultFocusAsync=null}var item=this._valueToItem(value);if(item&&item.hasAttribute("disabled"))return;this._setFocusedItem(item);IronMultiSelectableBehaviorImpl.select.apply(this,arguments)},_resetTabindices:function(){var selectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(item){item.setAttribute("tabindex",item===selectedItem?"0":"-1")},this)},_updateMultiselectable:function(multi){if(multi){this.setAttribute("aria-multiselectable","true")}else{this.removeAttribute("aria-multiselectable")}},_focusWithKeyboardEvent:function(event){if(-1!==this._MODIFIER_KEYS.indexOf(event.key))return;this.cancelDebouncer("_clearSearchText");var searchText=this._searchText||"",key=event.key&&1==event.key.length?event.key:_StringfromCharCode(event.keyCode);searchText+=key.toLocaleLowerCase();for(var searchLength=searchText.length,i=0,item;item=this.items[i];i++){if(item.hasAttribute("disabled")){continue}var attr=this.attrForItemTitle||"textContent",title=(item[attr]||item.getAttribute(attr)||"").trim();if(title.length<searchLength){continue}if(title.slice(0,searchLength).toLocaleLowerCase()==searchText){this._setFocusedItem(item);break}}this._searchText=searchText;this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex-i+length)%length];if(!item.hasAttribute("disabled")){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);if(dom(owner).activeElement==item){return}}}},_focusNext:function(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex+i)%length];if(!item.hasAttribute("disabled")){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);if(dom(owner).activeElement==item){return}}}},_applySelection:function(item,isSelected){if(isSelected){item.setAttribute("aria-selected","true")}else{item.removeAttribute("aria-selected")}IronSelectableBehavior._applySelection.apply(this,arguments)},_focusedItemChanged:function(focusedItem,old){old&&old.setAttribute("tabindex","-1");if(focusedItem&&!focusedItem.hasAttribute("disabled")&&!this.disabled){focusedItem.setAttribute("tabindex","0");focusedItem.focus()}},_onIronItemsChanged:function(event){if(event.detail.addedNodes.length){this._resetTabindices()}},_onShiftTabDown:function(){var oldTabIndex=this.getAttribute("tabindex");IronMenuBehaviorImpl._shiftTabPressed=!0;this._setFocusedItem(null);this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);IronMenuBehaviorImpl._shiftTabPressed=!1},1)},_onFocus:function(event){if(IronMenuBehaviorImpl._shiftTabPressed){return}var rootTarget=dom(event).rootTarget;if(rootTarget!==this&&"undefined"!==typeof rootTarget.tabIndex&&!this.isLightDescendant(rootTarget)){return}this._defaultFocusAsync=this.async(function(){var selectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null);if(selectedItem){this._setFocusedItem(selectedItem)}else if(this.items[0]){this._focusNext()}})},_onUpKey:function(event){this._focusPrevious();event.detail.keyboardEvent.preventDefault()},_onDownKey:function(event){this._focusNext();event.detail.keyboardEvent.preventDefault()},_onEscKey:function(){var focusedItem=this.focusedItem;if(focusedItem){focusedItem.blur()}},_onKeydown:function(event){if(!this.keyboardEventMatchesKeys(event,"up down esc")){this._focusWithKeyboardEvent(event)}event.stopPropagation()},_activateHandler:function(event){IronSelectableBehavior._activateHandler.call(this,event);event.stopPropagation()},_disabledChanged:function(disabled){if(disabled){this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0;this.removeAttribute("tabindex")}else if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex",this._previousTabIndex)}}};_exports.IronMenuBehaviorImpl=IronMenuBehaviorImpl;IronMenuBehaviorImpl._shiftTabPressed=!1;const IronMenuBehavior=[IronMultiSelectableBehavior,IronA11yKeysBehavior,IronMenuBehaviorImpl];_exports.IronMenuBehavior=IronMenuBehavior;_exports.$ironMenuBehavior={IronMenuBehaviorImpl:IronMenuBehaviorImpl,IronMenuBehavior:IronMenuBehavior};var p$1=Element.prototype,matches$1=p$1.matches||p$1.matchesSelector||p$1.mozMatchesSelector||p$1.msMatchesSelector||p$1.oMatchesSelector||p$1.webkitMatchesSelector;const IronFocusablesHelper={getTabbableNodes:function(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},isFocusable:function(element){if(matches$1.call(element,"input, select, textarea, button, object")){return matches$1.call(element,":not([disabled])")}return matches$1.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(element){return this.isFocusable(element)&&matches$1.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},_normalizedTabIndex:function(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},_collectTabbableNodes:function(node,result){if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}var element=node,tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}var children;if("content"===element.localName||"slot"===element.localName){children=dom(element).getDistributedNodes()}else{children=dom(element.root||element).children}for(var i=0;i<children.length;i++){needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort},_isVisible:function(element){var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},_sortByTabIndex:function(tabbables){var len=tabbables.length;if(2>len){return tabbables}var pivot=_Mathceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},_mergeSortByTabIndex:function(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},_hasLowerTabOrder:function(a,b){var ati=_Mathmax(a.tabIndex,0),bti=_Mathmax(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.IronFocusablesHelper=IronFocusablesHelper;_exports.$ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};Polymer$1({_template:html`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){if(this.opened&&!this.parentNode){dom(document.body).appendChild(this)}},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){if(!this.opened&&this.parentNode===document.body){dom(this.parentNode).removeChild(this)}},_onTransitionend:function(event){if(event&&event.target===this){this.complete()}},_openedChanged:function(opened){if(opened){this.prepare()}else{var cs=window.getComputedStyle(this);if("0s"===cs.transitionDuration||0==cs.opacity){this.complete()}}if(!this.isAttached){return}if(this.__openedRaf){window.cancelAnimationFrame(this.__openedRaf);this.__openedRaf=null}this.scrollTop=this.scrollTop;this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null;this.toggleClass("opened",this.opened)}.bind(this))}});const IronOverlayManagerClass=function(){this._overlays=[];this._minimumZ=101;this._backdropElement=null;add(document.documentElement,"tap",function(){});document.addEventListener("tap",this._onCaptureClick.bind(this),!0);document.addEventListener("focus",this._onCaptureFocus.bind(this),!0);document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};_exports.IronOverlayManagerClass=IronOverlayManagerClass;IronOverlayManagerClass.prototype={constructor:IronOverlayManagerClass,get backdropElement(){if(!this._backdropElement){this._backdropElement=document.createElement("iron-overlay-backdrop")}return this._backdropElement},get deepActiveElement(){var active=document.activeElement;if(!active||!1===active instanceof Element){active=document.body}while(active.root&&dom(active.root).activeElement){active=dom(active.root).activeElement}return active},_bringOverlayAtIndexToFront:function(i){var overlay=this._overlays[i];if(!overlay){return}var lastI=this._overlays.length-1,currentOverlay=this._overlays[lastI];if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){lastI--}if(i>=lastI){return}var minimumZ=_Mathmax(this.currentOverlayZ(),this._minimumZ);if(this._getZ(overlay)<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}while(i<lastI){this._overlays[i]=this._overlays[i+1];i++}this._overlays[lastI]=overlay},addOrRemoveOverlay:function(overlay){if(overlay.opened){this.addOverlay(overlay)}else{this.removeOverlay(overlay)}},addOverlay:function(overlay){var i=this._overlays.indexOf(overlay);if(0<=i){this._bringOverlayAtIndexToFront(i);this.trackBackdrop();return}var insertionIndex=this._overlays.length,currentOverlay=this._overlays[insertionIndex-1],minimumZ=_Mathmax(this._getZ(currentOverlay),this._minimumZ),newZ=this._getZ(overlay);if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){this._applyOverlayZ(currentOverlay,minimumZ);insertionIndex--;var previousOverlay=this._overlays[insertionIndex-1];minimumZ=_Mathmax(this._getZ(previousOverlay),this._minimumZ)}if(newZ<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}this._overlays.splice(insertionIndex,0,overlay);this.trackBackdrop()},removeOverlay:function(overlay){var i=this._overlays.indexOf(overlay);if(-1===i){return}this._overlays.splice(i,1);this.trackBackdrop()},currentOverlay:function(){var i=this._overlays.length-1;return this._overlays[i]},currentOverlayZ:function(){return this._getZ(this.currentOverlay())},ensureMinimumZ:function(minimumZ){this._minimumZ=_Mathmax(this._minimumZ,minimumZ)},focusOverlay:function(){var current=this.currentOverlay();if(current){current._applyFocus()}},trackBackdrop:function(){var overlay=this._overlayWithBackdrop();if(!overlay&&!this._backdropElement){return}this.backdropElement.style.zIndex=this._getZ(overlay)-1;this.backdropElement.opened=!!overlay;this.backdropElement.prepare()},getBackdrops:function(){for(var backdrops=[],i=0;i<this._overlays.length;i++){if(this._overlays[i].withBackdrop){backdrops.push(this._overlays[i])}}return backdrops},backdropZ:function(){return this._getZ(this._overlayWithBackdrop())-1},_overlayWithBackdrop:function(){for(var i=this._overlays.length-1;0<=i;i--){if(this._overlays[i].withBackdrop){return this._overlays[i]}}},_getZ:function(overlay){var z=this._minimumZ;if(overlay){var z1=+(overlay.style.zIndex||window.getComputedStyle(overlay).zIndex);if(z1===z1){z=z1}}return z},_setZ:function(element,z){element.style.zIndex=z},_applyOverlayZ:function(overlay,aboveZ){this._setZ(overlay,aboveZ+2)},_overlayInPath:function(path){path=path||[];for(var i=0;i<path.length;i++){if(path[i]._manager===this){return path[i]}}},_onCaptureClick:function(event){var i=this._overlays.length-1;if(-1===i)return;var path=dom(event).path,overlay;while((overlay=this._overlays[i])&&this._overlayInPath(path)!==overlay){overlay._onCaptureClick(event);if(overlay.allowClickThrough){i--}else{break}}},_onCaptureFocus:function(event){var overlay=this.currentOverlay();if(overlay){overlay._onCaptureFocus(event)}},_onCaptureKeyDown:function(event){var overlay=this.currentOverlay();if(overlay){if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"esc")){overlay._onCaptureEsc(event)}else if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"tab")){overlay._onCaptureTab(event)}}},_shouldBeBehindOverlay:function(overlay1,overlay2){return!overlay1.alwaysOnTop&&overlay2.alwaysOnTop}};const IronOverlayManager=new IronOverlayManagerClass;_exports.IronOverlayManager=IronOverlayManager;_exports.$ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager};var lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],_boundScrollHandler;_exports._boundScrollHandler=_boundScrollHandler;var currentLockingElement;_exports.currentLockingElement=currentLockingElement;function elementIsScrollLocked(element){var lockingElement=currentLockingElement;if(lockingElement===void 0){return!1}var scrollLocked;if(_hasCachedLockedElement(element)){return!0}if(_hasCachedUnlockedElement(element)){return!1}scrollLocked=!!lockingElement&&lockingElement!==element&&!_composedTreeContains(lockingElement,element);if(scrollLocked){_lockedElementCache.push(element)}else{_unlockedElementCache.push(element)}return scrollLocked}function pushScrollLock(element){if(0<=_lockingElements.indexOf(element)){return}if(0===_lockingElements.length){_lockScrollInteractions()}_lockingElements.push(element);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[]}function removeScrollLock(element){var index=_lockingElements.indexOf(element);if(-1===index){return}_lockingElements.splice(index,1);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[];if(0===_lockingElements.length){_unlockScrollInteractions()}}const _lockingElements=[];_exports._lockingElements=_lockingElements;let _lockedElementCache=null;_exports._lockedElementCache=_lockedElementCache;let _unlockedElementCache=null;_exports._unlockedElementCache=_unlockedElementCache;function _hasCachedLockedElement(element){return-1<_lockedElementCache.indexOf(element)}function _hasCachedUnlockedElement(element){return-1<_unlockedElementCache.indexOf(element)}function _composedTreeContains(element,child){var contentElements,distributedNodes,contentIndex,nodeIndex;if(element.contains(child)){return!0}contentElements=dom(element).querySelectorAll("content,slot");for(contentIndex=0;contentIndex<contentElements.length;++contentIndex){distributedNodes=dom(contentElements[contentIndex]).getDistributedNodes();for(nodeIndex=0;nodeIndex<distributedNodes.length;++nodeIndex){if(distributedNodes[nodeIndex].nodeType!==Node.ELEMENT_NODE)continue;if(_composedTreeContains(distributedNodes[nodeIndex],child)){return!0}}}return!1}function _scrollInteractionHandler(event){if(event.cancelable&&_shouldPreventScrolling(event)){event.preventDefault()}if(event.targetTouches){var touch=event.targetTouches[0];lastTouchPosition.pageX=touch.pageX;lastTouchPosition.pageY=touch.pageY}}function _lockScrollInteractions(){_exports._boundScrollHandler=_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var i=0,l=scrollEvents.length;i<l;i++){document.addEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _unlockScrollInteractions(){for(var i=0,l=scrollEvents.length;i<l;i++){document.removeEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _shouldPreventScrolling(event){var target=dom(event).rootTarget;if("touchmove"!==event.type&&lastRootTarget!==target){lastRootTarget=target;lastScrollableNodes=_getScrollableNodes(dom(event).path)}if(!lastScrollableNodes.length){return!0}if("touchstart"===event.type){return!1}var info=_getScrollInfo(event);return!_getScrollingNode(lastScrollableNodes,info.deltaX,info.deltaY)}function _getScrollableNodes(nodes){for(var scrollables=[],lockingIndex=nodes.indexOf(currentLockingElement),i=0;i<=lockingIndex;i++){if(nodes[i].nodeType!==Node.ELEMENT_NODE){continue}var node=nodes[i],style=node.style;if("scroll"!==style.overflow&&"auto"!==style.overflow){style=window.getComputedStyle(node)}if("scroll"===style.overflow||"auto"===style.overflow){scrollables.push(node)}}return scrollables}function _getScrollingNode(nodes,deltaX,deltaY){if(!deltaX&&!deltaY){return}for(var verticalScroll=_Mathabs(deltaY)>=_Mathabs(deltaX),i=0;i<nodes.length;i++){var node=nodes[i],canScroll=!1;if(verticalScroll){canScroll=0>deltaY?0<node.scrollTop:node.scrollTop<node.scrollHeight-node.clientHeight}else{canScroll=0>deltaX?0<node.scrollLeft:node.scrollLeft<node.scrollWidth-node.clientWidth}if(canScroll){return node}}}function _getScrollInfo(event){var info={deltaX:event.deltaX,deltaY:event.deltaY};if("deltaX"in event){}else if("wheelDeltaX"in event&&"wheelDeltaY"in event){info.deltaX=-event.wheelDeltaX;info.deltaY=-event.wheelDeltaY}else if("wheelDelta"in event){info.deltaX=0;info.deltaY=-event.wheelDelta}else if("axis"in event){info.deltaX=1===event.axis?event.detail:0;info.deltaY=2===event.axis?event.detail:0}else if(event.targetTouches){var touch=event.targetTouches[0];info.deltaX=lastTouchPosition.pageX-touch.pageX;info.deltaY=lastTouchPosition.pageY-touch.pageY}return info}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};_exports.$ironScrollManager=ironScrollManager;const IronOverlayBehaviorImpl={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:IronOverlayManager},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||dom(this).querySelector("[autofocus]")||this},get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1;this.__shouldRemoveTabIndex=!1;this.__firstFocusableNode=this.__lastFocusableNode=null;this.__rafs={};this.__restoreFocusNode=null;this.__scrollTop=this.__scrollLeft=null;this.__onCaptureScroll=this.__onCaptureScroll.bind(this);this.__rootNodes=null;this._ensureSetup()},attached:function(){if(this.opened){this._openedChanged(this.opened)}this._observer=dom(this).observeNodes(this._onNodesChange)},detached:function(){dom(this).unobserveNodes(this._observer);this._observer=null;for(var cb in this.__rafs){if(null!==this.__rafs[cb]){cancelAnimationFrame(this.__rafs[cb])}}this.__rafs={};this._manager.removeOverlay(this);if(this.__isAnimating){if(this.opened){this._finishRenderOpened()}else{this._applyFocus();this._finishRenderClosed()}}},toggle:function(){this._setCanceled(!1);this.opened=!this.opened},open:function(){this._setCanceled(!1);this.opened=!0},close:function(){this._setCanceled(!1);this.opened=!1},cancel:function(event){var cancelEvent=this.fire("iron-overlay-canceled",event,{cancelable:!0});if(cancelEvent.defaultPrevented){return}this._setCanceled(!0);this.opened=!1},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){if(this._overlaySetup){return}this._overlaySetup=!0;this.style.outline="none";this.style.display="none"},_openedChanged:function(opened){if(opened){this.removeAttribute("aria-hidden")}else{this.setAttribute("aria-hidden","true")}if(!this.isAttached){return}this.__isAnimating=!0;this.__deraf("__openedChanged",this.__openedChanged)},_canceledChanged:function(){this.closingReason=this.closingReason||{};this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){if(this.withBackdrop&&!this.hasAttribute("tabindex")){this.setAttribute("tabindex","-1");this.__shouldRemoveTabIndex=!0}else if(this.__shouldRemoveTabIndex){this.removeAttribute("tabindex");this.__shouldRemoveTabIndex=!1}if(this.opened&&this.isAttached){this._manager.trackBackdrop()}},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement;this._preparePositioning();this.refit();this._finishPositioning();if(this.noAutoFocus&&document.activeElement===this._focusNode){this._focusNode.blur();this.__restoreFocusNode.focus()}},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none";this.style.zIndex="";this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none";this.style.transform=this.style.webkitTransform="none";this.style.display=""},_finishPositioning:function(){this.style.display="none";this.scrollTop=this.scrollTop;this.style.transition=this.style.webkitTransition="";this.style.transform=this.style.webkitTransform="";this.style.display="";this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened){if(!this.noAutoFocus){this._focusNode.focus()}}else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var activeElement=this._manager.deepActiveElement;if(activeElement===document.body||dom(this).deepContains(activeElement)){this.__restoreFocusNode.focus()}}this.__restoreFocusNode=null;this._focusNode.blur();this._focusedChild=null}},_onCaptureClick:function(event){if(!this.noCancelOnOutsideClick){this.cancel(event)}},_onCaptureFocus:function(event){if(!this.withBackdrop){return}var path=dom(event).path;if(-1===path.indexOf(this)){event.stopPropagation();this._applyFocus()}else{this._focusedChild=path[0]}},_onCaptureEsc:function(event){if(!this.noCancelOnEscKey){this.cancel(event)}},_onCaptureTab:function(event){if(!this.withBackdrop){return}this.__ensureFirstLastFocusables();var shift=event.shiftKey,nodeToCheck=shift?this.__firstFocusableNode:this.__lastFocusableNode,nodeToSet=shift?this.__lastFocusableNode:this.__firstFocusableNode,shouldWrap=!1;if(nodeToCheck===nodeToSet){shouldWrap=!0}else{var focusedNode=this._manager.deepActiveElement;shouldWrap=focusedNode===nodeToCheck||focusedNode===this}if(shouldWrap){event.preventDefault();this._focusedChild=nodeToSet;this._applyFocus()}},_onIronResize:function(){if(this.opened&&!this.__isAnimating){this.__deraf("refit",this.refit)}},_onNodesChange:function(){if(this.opened&&!this.__isAnimating){this.invalidateTabbables();this.notifyResize()}},__ensureFirstLastFocusables:function(){if(!this.__firstFocusableNode||!this.__lastFocusableNode){var focusableNodes=this._focusableNodes;this.__firstFocusableNode=focusableNodes[0];this.__lastFocusableNode=focusableNodes[focusableNodes.length-1]}},__openedChanged:function(){if(this.opened){this._prepareRenderOpened();this._manager.addOverlay(this);this._applyFocus();this._renderOpened()}else{this._manager.removeOverlay(this);this._applyFocus();this._renderClosed()}},__deraf:function(jobname,callback){var rafs=this.__rafs;if(null!==rafs[jobname]){cancelAnimationFrame(rafs[jobname])}rafs[jobname]=requestAnimationFrame(function(){rafs[jobname]=null;callback.call(this)}.bind(this))},__updateScrollObservers:function(isAttached,opened,scrollAction){if(!isAttached||!opened||!this.__isValidScrollAction(scrollAction)){removeScrollLock(this);this.__removeScrollListeners()}else{if("lock"===scrollAction){this.__saveScrollPosition();pushScrollLock(this)}this.__addScrollListeners()}},__addScrollListeners:function(){if(!this.__rootNodes){this.__rootNodes=[];if(useShadow){var node=this;while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&node.host){this.__rootNodes.push(node)}node=node.host||node.assignedSlot||node.parentNode}}this.__rootNodes.push(document)}this.__rootNodes.forEach(function(el){el.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){if(this.__rootNodes){this.__rootNodes.forEach(function(el){el.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)}if(!this.isAttached){this.__rootNodes=null}},__isValidScrollAction:function(scrollAction){return"lock"===scrollAction||"refit"===scrollAction||"cancel"===scrollAction},__onCaptureScroll:function(event){if(this.__isAnimating){return}if(0<=dom(event).path.indexOf(this)){return}switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(event);break;}},__saveScrollPosition:function(){if(document.scrollingElement){this.__scrollTop=document.scrollingElement.scrollTop;this.__scrollLeft=document.scrollingElement.scrollLeft}else{this.__scrollTop=_Mathmax(document.documentElement.scrollTop,document.body.scrollTop);this.__scrollLeft=_Mathmax(document.documentElement.scrollLeft,document.body.scrollLeft)}},__restoreScrollPosition:function(){if(document.scrollingElement){document.scrollingElement.scrollTop=this.__scrollTop;document.scrollingElement.scrollLeft=this.__scrollLeft}else{document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop;document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft}}};_exports.IronOverlayBehaviorImpl=IronOverlayBehaviorImpl;const IronOverlayBehavior=[IronFitBehavior,IronResizableBehavior,IronOverlayBehaviorImpl];_exports.IronOverlayBehavior=IronOverlayBehavior;_exports.$ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};Polymer$1({_template:html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(){this.async(this.notifyResize)}});Polymer$1({is:"iron-selector",behaviors:[IronMultiSelectableBehavior]});const NeonAnimationBehavior={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){if(!document.body.animate){console.warn("No web animations detected. This element will not"+" function without a web animations polyfill.")}},timingFromConfig:function(config){if(config.timing){for(var property in config.timing){this.animationTiming[property]=config.timing[property]}}return this.animationTiming},setPrefixedProperty:function(node,property,value){for(var map={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},prefixes=map[property],prefix,index=0;prefix=prefixes[index];index++){node.style[prefix]=value}node.style[property]=value},complete:function(){}};_exports.NeonAnimationBehavior=NeonAnimationBehavior;_exports.$neonAnimationBehavior={NeonAnimationBehavior:NeonAnimationBehavior};Polymer$1({is:"fade-in-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(config));return this._effect}});Polymer$1({is:"fade-out-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(config));return this._effect}});const NeonAnimatableBehavior={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{};this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{};this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(config1,config2){for(var property in config2){config1[property]=config2[property]}},_cloneConfig:function(config){var clone={isClone:!0};this._copyProperties(clone,config);return clone},_getAnimationConfigRecursive:function(type,map,allConfigs){if(!this.animationConfig){return}if(this.animationConfig.value&&"function"===typeof this.animationConfig.value){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var thisConfig;if(type){thisConfig=this.animationConfig[type]}else{thisConfig=this.animationConfig}if(!Array.isArray(thisConfig)){thisConfig=[thisConfig]}if(thisConfig){for(var config,index=0;config=thisConfig[index];index++){if(config.animatable){config.animatable._getAnimationConfigRecursive(config.type||type,map,allConfigs)}else{if(config.id){var cachedConfig=map[config.id];if(cachedConfig){if(!cachedConfig.isClone){map[config.id]=this._cloneConfig(cachedConfig);cachedConfig=map[config.id]}this._copyProperties(cachedConfig,config)}else{map[config.id]=config}}else{allConfigs.push(config)}}}}},getAnimationConfig:function(type){var map={},allConfigs=[];this._getAnimationConfigRecursive(type,map,allConfigs);for(var key in map){allConfigs.push(map[key])}return allConfigs}};_exports.NeonAnimatableBehavior=NeonAnimatableBehavior;_exports.$neonAnimatableBehavior={NeonAnimatableBehavior:NeonAnimatableBehavior};Polymer$1({_template:html`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
`,is:"neon-animatable",behaviors:[NeonAnimatableBehavior,IronResizableBehavior]});const NeonAnimationRunnerBehaviorImpl={_configureAnimations:function(configs){var results=[],resultsToPlay=[];if(0<configs.length){for(var config,index=0,neonAnimation;config=configs[index];index++){neonAnimation=document.createElement(config.name);if(neonAnimation.isNeonAnimation){var result=null;if(!neonAnimation.configure){neonAnimation.configure=function(){return null}}result=neonAnimation.configure(config);resultsToPlay.push({result:result,config:config})}else{console.warn(this.is+":",config.name,"not found!")}}}for(var i=0;i<resultsToPlay.length;i++){var result=resultsToPlay[i].result,config=resultsToPlay[i].config;try{if("function"!=typeof result.cancel){result=document.timeline.play(result)}}catch(e){result=null;console.warn("Couldnt play","(",config.name,").",e)}if(result){results.push({neonAnimation:neonAnimation,config:config,animation:result})}}return results},_shouldComplete:function(activeEntries){for(var finished=!0,i=0;i<activeEntries.length;i++){if("finished"!=activeEntries[i].animation.playState){finished=!1;break}}return finished},_complete:function(activeEntries){for(var i=0;i<activeEntries.length;i++){activeEntries[i].neonAnimation.complete(activeEntries[i].config)}for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.cancel()}},playAnimation:function(type,cookie){var configs=this.getAnimationConfig(type);if(!configs){return}this._active=this._active||{};if(this._active[type]){this._complete(this._active[type]);delete this._active[type]}var activeEntries=this._configureAnimations(configs);if(0==activeEntries.length){this.fire("neon-animation-finish",cookie,{bubbles:!1});return}this._active[type]=activeEntries;for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.onfinish=function(){if(this._shouldComplete(activeEntries)){this._complete(activeEntries);delete this._active[type];this.fire("neon-animation-finish",cookie,{bubbles:!1})}}.bind(this)}},cancelAnimation:function(){for(var k in this._active){var entries=this._active[k];for(var j in entries){entries[j].animation.cancel()}}this._active={}}};_exports.NeonAnimationRunnerBehaviorImpl=NeonAnimationRunnerBehaviorImpl;const NeonAnimationRunnerBehavior=[NeonAnimatableBehavior,NeonAnimationRunnerBehaviorImpl];_exports.NeonAnimationRunnerBehavior=NeonAnimationRunnerBehavior;_exports.$neonAnimationRunnerBehavior={NeonAnimationRunnerBehaviorImpl:NeonAnimationRunnerBehaviorImpl,NeonAnimationRunnerBehavior:NeonAnimationRunnerBehavior};Polymer$1({_template:html`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host > ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      :host > ::slotted(:not(.iron-selected):not(.neon-animating))
       {
        display: none !important;
      }

      :host > ::slotted(.neon-animating) {
        pointer-events: none;
      }
    </style>

    <slot id="content"></slot>
`,is:"neon-animated-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior,NeonAnimationRunnerBehavior],properties:{activateEvent:{type:String,value:""},animateInitialSelection:{type:Boolean,value:!1}},listeners:{"iron-select":"_onIronSelect","neon-animation-finish":"_onNeonAnimationFinish"},_onIronSelect:function(event){var selectedPage=event.detail.item;if(0>this.items.indexOf(selectedPage)){return}var oldPage=this._valueToItem(this._prevSelected)||!1;this._prevSelected=this.selected;if(!oldPage&&!this.animateInitialSelection){this._completeSelectedChanged();return}this.animationConfig=[];if(this.entryAnimation){this.animationConfig.push({name:this.entryAnimation,node:selectedPage})}else{if(selectedPage.getAnimationConfig){this.animationConfig.push({animatable:selectedPage,type:"entry"})}}if(oldPage){if(oldPage.classList.contains("neon-animating")){this._squelchNextFinishEvent=!0;this.cancelAnimation();this._completeSelectedChanged();this._squelchNextFinishEvent=!1}if(this.exitAnimation){this.animationConfig.push({name:this.exitAnimation,node:oldPage})}else{if(oldPage.getAnimationConfig){this.animationConfig.push({animatable:oldPage,type:"exit"})}}oldPage.classList.add("neon-animating")}selectedPage.classList.add("neon-animating");if(1<=this.animationConfig.length){if(!this.isAttached){this.async(function(){this.playAnimation(void 0,{fromPage:null,toPage:selectedPage})})}else{this.playAnimation(void 0,{fromPage:oldPage,toPage:selectedPage})}}else{this._completeSelectedChanged(oldPage,selectedPage)}},_completeSelectedChanged:function(oldPage,selectedPage){if(selectedPage){selectedPage.classList.remove("neon-animating")}if(oldPage){oldPage.classList.remove("neon-animating")}if(!selectedPage||!oldPage){for(var nodes=dom(this.$.content).getDistributedNodes(),node,index=0;node=nodes[index];index++){node.classList&&node.classList.remove("neon-animating")}}this.async(this._notifyPageResize)},_onNeonAnimationFinish:function(event){if(this._squelchNextFinishEvent){this._squelchNextFinishEvent=!1;return}this._completeSelectedChanged(event.detail.fromPage,event.detail.toPage)},_notifyPageResize:function(){var selectedPage=this.selectedItem||this._valueToItem(this.selected);this.resizerShouldNotify=function(element){return element==selectedPage};this.notifyResize()}});var Utility={distance:function(x1,y1,x2,y2){var xDelta=x1-x2,yDelta=y1-y2;return _Mathsqrt(xDelta*xDelta+yDelta*yDelta)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=_Mathmax(this.width,this.height)}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(x,y){var topLeft=Utility.distance(x,y,0,0),topRight=Utility.distance(x,y,this.width,0),bottomLeft=Utility.distance(x,y,0,this.height),bottomRight=Utility.distance(x,y,this.width,this.height);return _Mathmax(topLeft,topRight,bottomLeft,bottomRight)}};function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement("div");this.waveContainer=document.createElement("div");this.wave.style.backgroundColor=this.color;this.wave.classList.add("wave");this.waveContainer.classList.add("wave-container");dom(this.waveContainer).appendChild(this.wave);this.resetInteractionState()}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed}return elapsed},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width,height2=this.containerMetrics.height*this.containerMetrics.height,waveRadius=1.1*_Mathmin(_Mathsqrt(width2+height2),Ripple.MAX_RADIUS)+5,duration=1.1-.2*(waveRadius/Ripple.MAX_RADIUS),timeNow=this.mouseInteractionSeconds/duration,size=waveRadius*(1-_Mathpow(80,-timeNow));return _Mathabs(size)},get opacity(){if(!this.mouseUpStart){return this.initialOpacity}return _Mathmax(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity)},get outerOpacity(){var outerOpacity=.3*this.mouseUpElapsedSeconds,waveOpacity=this.opacity;return _Mathmax(0,_Mathmin(outerOpacity,waveOpacity))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=_Mathmin(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=_Mathmin(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return _Mathmin(1,2*(this.radius/this.containerMetrics.size)/1.4142135623730951)},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart)}return this.xStart},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart)}return this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element)},draw:function(){var scale,dx,dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;this.waveContainer.style.webkitTransform="translate("+dx+"px, "+dy+"px)";this.waveContainer.style.transform="translate3d("+dx+"px, "+dy+"px, 0)";this.wave.style.webkitTransform="scale("+scale+","+scale+")";this.wave.style.transform="scale3d("+scale+","+scale+",1)"},downAction:function(event){var xCenter=this.containerMetrics.width/2,yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px";this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px";this.waveContainer.style.width=this.containerMetrics.size+"px";this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(){if(!this.isMouseDown){return}this.mouseUpStart=Utility.now()},remove:function(){dom(this.waveContainer.parentNode).removeChild(this.waveContainer)}};Polymer$1({_template:html`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){if(11==this.parentNode.nodeType){this.keyEventTarget=dom(this).getOwnerRoot().host}else{this.keyEventTarget=this.parentNode}var keyEventTarget=this.keyEventTarget;this.listen(keyEventTarget,"up","uiUpAction");this.listen(keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return!0}}return!1},simulatedRipple:function(){this.downAction(null);this.async(function(){this.upAction()},1)},uiDownAction:function(event){if(!this.noink){this.downAction(event)}},downAction:function(event){if(this.holdDown&&0<this.ripples.length){return}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=!0;this.animate()}},uiUpAction:function(event){if(!this.noink){this.upAction(event)}},upAction:function(event){if(this.holdDown){return}this.ripples.forEach(function(ripple){ripple.upAction(event)});this._animating=!0;this.animate()},onAnimationComplete:function(){this._animating=!1;this.$.background.style.backgroundColor=null;this.fire("transitionend")},addRipple:function(){var ripple=new Ripple(this);dom(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(!0);return ripple},removeRipple:function(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(0>rippleIndex){return}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(!1)}},animate:function(){if(!this._animating){return}var index,ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple)}}if(!this.shouldKeepAnimating&&0===this.ripples.length){this.onAnimationComplete()}else{window.requestAnimationFrame(this._boundAnimate)}},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newVal,oldVal){if(oldVal===void 0){return}if(newVal){this.downAction()}else{this.upAction()}}});const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this),target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};_exports.PaperRippleBehavior=PaperRippleBehavior;_exports.$paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};const PaperButtonBehaviorImpl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},_spaceKeyDownHandler:function(event){IronButtonStateImpl._spaceKeyDownHandler.call(this,event);if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},_spaceKeyUpHandler:function(event){IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}};_exports.PaperButtonBehaviorImpl=PaperButtonBehaviorImpl;const PaperButtonBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperButtonBehaviorImpl];_exports.PaperButtonBehavior=PaperButtonBehavior;_exports.$paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};const PaperInkyFocusBehaviorImpl={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple()}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard}},_createRipple:function(){var ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("center","");ripple.classList.add("circle");return ripple}};_exports.PaperInkyFocusBehaviorImpl=PaperInkyFocusBehaviorImpl;const PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];_exports.PaperInkyFocusBehavior=PaperInkyFocusBehavior;_exports.$paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};const PaperCheckedElementBehaviorImpl={_checkedChanged:function(){IronCheckedElementBehaviorImpl._checkedChanged.call(this);if(this.hasRipple()){if(this.checked){this._ripple.setAttribute("checked","")}else{this._ripple.removeAttribute("checked")}}},_buttonStateChanged:function(){PaperRippleBehavior._buttonStateChanged.call(this);if(this.disabled){return}if(this.isAttached){this.checked=this.active}}};_exports.PaperCheckedElementBehaviorImpl=PaperCheckedElementBehaviorImpl;const PaperCheckedElementBehavior=[PaperInkyFocusBehavior,IronCheckedElementBehavior,PaperCheckedElementBehaviorImpl];_exports.PaperCheckedElementBehavior=PaperCheckedElementBehavior;_exports.$paperCheckedElementBehavior={PaperCheckedElementBehaviorImpl:PaperCheckedElementBehaviorImpl,PaperCheckedElementBehavior:PaperCheckedElementBehavior};const $_documentContainer$1=document.createElement("template");$_documentContainer$1.setAttribute("style","display: none;");$_documentContainer$1.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$1.content);const $_documentContainer$2=document.createElement("template");$_documentContainer$2.setAttribute("style","display: none;");$_documentContainer$2.innerHTML=`<dom-module id="paper-material-styles">
  <template>
    <style>
      :host, html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material), .paper-material {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]), .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]), .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]), .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]), .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]), .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);const $_documentContainer$3=document.createElement("template");$_documentContainer$3.setAttribute("style","display: none;");$_documentContainer$3.innerHTML=`<dom-module id="paper-button">
  <template strip-whitespace="">
    <style include="paper-material-styles">
      /* Need to specify the same specificity as the styles imported from paper-material. */
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;
        box-sizing: border-box;
        min-width: 5.14em;
        margin: 0 0.29em;
        background: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        font: inherit;
        text-transform: uppercase;
        outline-width: 0;
        border-radius: 3px;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        padding: 0.7em 0.57em;

        @apply --paper-font-common-base;
        @apply --paper-button;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([raised].keyboard-focus) {
        font-weight: bold;
        @apply --paper-button-raised-keyboard-focus;
      }

      :host(:not([raised]).keyboard-focus) {
        font-weight: bold;
        @apply --paper-button-flat-keyboard-focus;
      }

      :host([disabled]) {
        background: #eaeaea;
        color: #a8a8a8;
        cursor: auto;
        pointer-events: none;

        @apply --paper-button-disabled;
      }

      :host([animated]) {
        @apply --shadow-transition;
      }

      paper-ripple {
        color: var(--paper-button-ink-color);
      }
    </style>

    <slot></slot>
  </template>

  
</dom-module>`;document.head.appendChild($_documentContainer$3.content);Polymer$1({is:"paper-button",behaviors:[PaperButtonBehavior],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){if(!this.raised){this._setElevation(0)}else{PaperButtonBehaviorImpl._calculateElevation.apply(this)}}});const $_documentContainer$4=document.createElement("template");$_documentContainer$4.setAttribute("style","display: none;");$_documentContainer$4.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>`;document.head.appendChild($_documentContainer$4.content);const $_documentContainer$5=document.createElement("template");$_documentContainer$5.setAttribute("style","display: none;");$_documentContainer$5.innerHTML=`<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.html for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$5.content);const $_documentContainer$6=document.createElement("template");$_documentContainer$6.setAttribute("style","display: none;");$_documentContainer$6.innerHTML=`<dom-module id="paper-checkbox">
  <template strip-whitespace="">
    <style>
      :host {
        display: inline-block;
        white-space: nowrap;
        cursor: pointer;
        --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
        /* -1px is a sentinel for the default and is replaced in \`attached\`. */
        --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
        @apply --paper-font-common-base;
        line-height: 0;
        -webkit-tap-highlight-color: transparent;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:focus) {
        outline: none;
      }

      .hidden {
        display: none;
      }

      #checkboxContainer {
        display: inline-block;
        position: relative;
        width: var(--calculated-paper-checkbox-size);
        height: var(--calculated-paper-checkbox-size);
        min-width: var(--calculated-paper-checkbox-size);
        margin: var(--paper-checkbox-margin, initial);
        vertical-align: var(--paper-checkbox-vertical-align, middle);
        background-color: var(--paper-checkbox-unchecked-background-color, transparent);
      }

      #ink {
        position: absolute;

        /* Center the ripple in the checkbox by negative offsetting it by
         * (inkWidth - rippleWidth) / 2 */
        top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
        left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
        width: var(--calculated-paper-checkbox-ink-size);
        height: var(--calculated-paper-checkbox-ink-size);
        color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
        opacity: 0.6;
        pointer-events: none;
      }

      #ink:dir(rtl) {
        right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
        left: auto;
      }

      #ink[checked] {
        color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
      }

      #checkbox {
        position: relative;
        box-sizing: border-box;
        height: 100%;
        border: solid 2px;
        border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
        border-radius: 2px;
        pointer-events: none;
        -webkit-transition: background-color 140ms, border-color 140ms;
        transition: background-color 140ms, border-color 140ms;
      }

      /* checkbox checked animations */
      #checkbox.checked #checkmark {
        -webkit-animation: checkmark-expand 140ms ease-out forwards;
        animation: checkmark-expand 140ms ease-out forwards;
      }

      @-webkit-keyframes checkmark-expand {
        0% {
          -webkit-transform: scale(0, 0) rotate(45deg);
        }
        100% {
          -webkit-transform: scale(1, 1) rotate(45deg);
        }
      }

      @keyframes checkmark-expand {
        0% {
          transform: scale(0, 0) rotate(45deg);
        }
        100% {
          transform: scale(1, 1) rotate(45deg);
        }
      }

      #checkbox.checked {
        background-color: var(--paper-checkbox-checked-color, var(--primary-color));
        border-color: var(--paper-checkbox-checked-color, var(--primary-color));
      }

      #checkmark {
        position: absolute;
        width: 36%;
        height: 70%;
        border-style: solid;
        border-top: none;
        border-left: none;
        border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
        border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
        border-color: var(--paper-checkbox-checkmark-color, white);
        -webkit-transform-origin: 97% 86%;
        transform-origin: 97% 86%;
        box-sizing: content-box; /* protect against page-level box-sizing */
      }

      #checkmark:dir(rtl) {
        -webkit-transform-origin: 50% 14%;
        transform-origin: 50% 14%;
      }

      /* label */
      #checkboxLabel {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding-left: var(--paper-checkbox-label-spacing, 8px);
        white-space: normal;
        line-height: normal;
        color: var(--paper-checkbox-label-color, var(--primary-text-color));
        @apply --paper-checkbox-label;
      }

      :host([checked]) #checkboxLabel {
        color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
        @apply --paper-checkbox-label-checked;
      }

      #checkboxLabel:dir(rtl) {
        padding-right: var(--paper-checkbox-label-spacing, 8px);
        padding-left: 0;
      }

      #checkboxLabel[hidden] {
        display: none;
      }

      /* disabled state */

      :host([disabled]) #checkbox {
        opacity: 0.5;
        border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
      }

      :host([disabled][checked]) #checkbox {
        background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
        opacity: 0.5;
      }

      :host([disabled]) #checkboxLabel  {
        opacity: 0.65;
      }

      /* invalid state */
      #checkbox.invalid:not(.checked) {
        border-color: var(--paper-checkbox-error-color, var(--error-color));
      }
    </style>

    <div id="checkboxContainer">
      <div id="checkbox" class\$="[[_computeCheckboxClass(checked, invalid)]]">
        <div id="checkmark" class\$="[[_computeCheckmarkClass(checked)]]"></div>
      </div>
    </div>

    <div id="checkboxLabel"><slot></slot></div>
  </template>

  
</dom-module>`;document.head.appendChild($_documentContainer$6.content);Polymer$1({is:"paper-checkbox",behaviors:[PaperCheckedElementBehavior],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){afterNextRender(this,function(){var inkSize=this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim();if("-1px"===inkSize){var checkboxSizeText=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),units="px",unitsMatches=checkboxSizeText.match(/[A-Za-z]+$/);if(null!==unitsMatches){units=unitsMatches[0]}var checkboxSize=parseFloat(checkboxSizeText),defaultInkSize=8/3*checkboxSize;if("px"===units){defaultInkSize=_Mathfloor(defaultInkSize);if(defaultInkSize%2!==checkboxSize%2){defaultInkSize++}}this.updateStyles({"--paper-checkbox-ink-size":defaultInkSize+units})}})},_computeCheckboxClass:function(checked,invalid){var className="";if(checked){className+="checked "}if(invalid){className+="invalid"}return className},_computeCheckmarkClass:function(checked){return checked?"":"hidden"},_createRipple:function(){this._rippleContainer=this.$.checkboxContainer;return PaperInkyFocusBehaviorImpl._createRipple.call(this)}});const PaperDialogBehaviorImpl={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.__readied=!0},_modalChanged:function(modal,readied){if(!readied){return}if(modal){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.noCancelOnOutsideClick=!0;this.noCancelOnEscKey=!0;this.withBackdrop=!0}else{this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick;this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey;this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop}},_updateClosingReasonConfirmed:function(confirmed){this.closingReason=this.closingReason||{};this.closingReason.confirmed=confirmed},_onDialogClick:function(event){for(var path=dom(event).path,i=0,l=path.indexOf(this),target;i<l;i++){target=path[i];if(target.hasAttribute&&(target.hasAttribute("dialog-dismiss")||target.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(target.hasAttribute("dialog-confirm"));this.close();event.stopPropagation();break}}}};_exports.PaperDialogBehaviorImpl=PaperDialogBehaviorImpl;const PaperDialogBehavior=[IronOverlayBehavior,PaperDialogBehaviorImpl];_exports.PaperDialogBehavior=PaperDialogBehavior;_exports.$paperDialogBehavior={PaperDialogBehaviorImpl:PaperDialogBehaviorImpl,PaperDialogBehavior:PaperDialogBehavior};const $_documentContainer$7=document.createElement("template");$_documentContainer$7.setAttribute("style","display: none;");$_documentContainer$7.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;document.head.appendChild($_documentContainer$7.content);const $_documentContainer$8=document.createElement("template");$_documentContainer$8.setAttribute("style","display: none;");$_documentContainer$8.innerHTML=`<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$8.content);Polymer$1({_template:html`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[PaperDialogBehavior,NeonAnimationRunnerBehavior],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation();this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation();this.playAnimation("exit")},_onNeonAnimationFinish:function(){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}});const $_documentContainer$9=document.createElement("template");$_documentContainer$9.setAttribute("style","display: none;");$_documentContainer$9.innerHTML=`<dom-module id="paper-icon-button">
  <template strip-whitespace="">
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]" alt\$="[[alt]]"></iron-icon>
  </template>

  
</dom-module>`;document.head.appendChild($_documentContainer$9.content);Polymer$1({is:"paper-icon-button",hostAttributes:{role:"button",tabindex:"0"},behaviors:[PaperInkyFocusBehavior],properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(newValue,oldValue){var label=this.getAttribute("aria-label");if(!label||oldValue==label){this.setAttribute("aria-label",newValue)}}});const PaperInputAddonBehavior={attached:function(){this.fire("addon-attached")},update:function(){}};_exports.PaperInputAddonBehavior=PaperInputAddonBehavior;_exports.$paperInputAddonBehavior={PaperInputAddonBehavior:PaperInputAddonBehavior};const PaperInputHelper={};_exports.PaperInputHelper=PaperInputHelper;PaperInputHelper.NextLabelID=1;PaperInputHelper.NextAddonID=1;PaperInputHelper.NextInputID=1;const PaperInputBehaviorImpl={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){if(!this.$){this.$={}}if(!this.$.input){this._generateInputId();this.$.input=this.$$("#"+this._inputId)}return this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy();if(!PolymerElement&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)){this.alwaysFloatLabel=!0}},_appendStringWithSpace:function(str,more){if(str){str=str+" "+more}else{str=more}return str},_onAddonAttached:function(event){var target=dom(event).rootTarget;if(target.id){this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,target.id)}else{var id="paper-input-add-on-"+PaperInputHelper.NextAddonID++;target.id=id;this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,id)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(event){IronControlState._focusBlurHandler.call(this,event);if(this.focused&&!this._shiftTabPressed&&this._focusableElement){this._focusableElement.focus()}},_onShiftTabDown:function(){var oldTabIndex=this.getAttribute("tabindex");this._shiftTabPressed=!0;this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){if(this.autoValidate)this.validate()},updateValueAndPreserveCaret:function(newValue){try{var start=this.inputElement.selectionStart;this.value=newValue;this.inputElement.selectionStart=start;this.inputElement.selectionEnd=start}catch(e){this.value=newValue}},_computeAlwaysFloatLabel:function(alwaysFloatLabel,placeholder){return placeholder||alwaysFloatLabel},_updateAriaLabelledBy:function(){var label=dom(this.root).querySelector("label");if(!label){this._ariaLabelledBy="";return}var labelledBy;if(label.id){labelledBy=label.id}else{labelledBy="paper-input-label-"+PaperInputHelper.NextLabelID++;label.id=labelledBy}this._ariaLabelledBy=labelledBy},_generateInputId:function(){if(!this._inputId||""===this._inputId){this._inputId="input-"+PaperInputHelper.NextInputID++}},_onChange:function(event){if(this.shadowRoot){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable})}},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var activeElement=document.activeElement,isActiveElementValid=activeElement instanceof HTMLElement,isSomeElementActive=isActiveElementValid&&activeElement!==document.body&&activeElement!==document.documentElement;if(!isSomeElementActive){this._focusableElement.focus()}}}};_exports.PaperInputBehaviorImpl=PaperInputBehaviorImpl;const PaperInputBehavior=[IronControlState,IronA11yKeysBehavior,PaperInputBehaviorImpl];_exports.PaperInputBehavior=PaperInputBehavior;_exports.$paperInputBehavior={PaperInputHelper:PaperInputHelper,PaperInputBehaviorImpl:PaperInputBehaviorImpl,PaperInputBehavior:PaperInputBehavior};Polymer$1({_template:html`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[PaperInputAddonBehavior],properties:{_charCounterStr:{type:String,value:"0"}},update:function(state){if(!state.inputElement){return}state.value=state.value||"";var counter=state.value.toString().length.toString();if(state.inputElement.hasAttribute("maxlength")){counter+="/"+state.inputElement.getAttribute("maxlength")}this._charCounterStr=counter}});const $_documentContainer$10=document.createElement("template");$_documentContainer$10.setAttribute("style","display: none;");$_documentContainer$10.innerHTML=`<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: bottom;

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$10.content);Polymer$1({_template:html`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class\$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class\$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class\$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return dashToCamelCase(this.attrForValue)},get _inputElement(){return dom(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0;if(!this._addons){this._addons=[]}this.addEventListener("focus",this._boundOnFocus,!0);this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){if(this.attrForValue){this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged)}else{this.addEventListener("input",this._onInput)}if(this._inputElementValue&&""!=this._inputElementValue){this._handleValueAndAutoValidate(this._inputElement)}else{this._handleValue(this._inputElement)}},_onAddonAttached:function(event){if(!this._addons){this._addons=[]}var target=event.target;if(-1===this._addons.indexOf(target)){this._addons.push(target);if(this.isAttached){this._handleValue(this._inputElement)}}},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1);this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(event){this._handleValueAndAutoValidate(event.target)},_onValueChanged:function(event){var input=event.target;if(this.__isFirstValueUpdate){this.__isFirstValueUpdate=!1;if(input.value===void 0||""===input.value){return}}this._handleValueAndAutoValidate(event.target)},_handleValue:function(inputElement){var value=this._inputElementValue;if(value||0===value||"number"===inputElement.type&&!inputElement.checkValidity()){this._inputHasContent=!0}else{this._inputHasContent=!1}this.updateAddons({inputElement:inputElement,value:value,invalid:this.invalid})},_handleValueAndAutoValidate:function(inputElement){if(this.autoValidate&&inputElement){var valid;if(inputElement.validate){valid=inputElement.validate(this._inputElementValue)}else{valid=inputElement.checkValidity()}this.invalid=!valid}this._handleValue(inputElement)},_onIronInputValidate:function(){this.invalid=this._inputElement.invalid},_invalidChanged:function(){if(this._addons){this.updateAddons({invalid:this.invalid})}},updateAddons:function(state){for(var addon,index=0;addon=this._addons[index];index++){addon.update(state)}},_computeInputContentClass:function(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent){var cls="input-content";if(!noLabelFloat){var label=this.querySelector("label");if(alwaysFloatLabel||_inputHasContent){cls+=" label-is-floating";this.$.labelAndInputContainer.style.position="static";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" label-is-highlighted"}}else{if(label){this.$.labelAndInputContainer.style.position="relative"}if(invalid){cls+=" is-invalid"}}}else{if(_inputHasContent){cls+=" label-is-hidden"}if(invalid){cls+=" is-invalid"}}if(focused){cls+=" focused"}return cls},_computeUnderlineClass:function(focused,invalid){var cls="underline";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls},_computeAddOnContentClass:function(focused,invalid){var cls="add-on-content";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls}});Polymer$1({_template:html`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      };
    </style>

    <slot></slot>
`,is:"paper-input-error",behaviors:[PaperInputAddonBehavior],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(state){this._setInvalid(state.invalid)}});const $_documentContainer$11=document.createElement("template");$_documentContainer$11.setAttribute("style","display: none;");$_documentContainer$11.innerHTML=`<dom-module id="paper-input">
  <template>
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate\$="[[autoValidate]]" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden\$="[[!label]]" aria-hidden="true" for\$="[[_inputId]]" slot="label">[[label]]</label>

      <span id="template-placeholder"></span>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  </template>

  <!-- This is a fresh new hell to make this element hybrid. Basically, in 2.0
    we lost is=, so the example same template can't be used with iron-input 1.0 and 2.0.
    Expect some conditional code (especially in the tests).
   -->
  <template id="v0">
    <input is="iron-input" slot="input" class="input-element" id\$="[[_inputId]]" aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" disabled\$="[[disabled]]" title\$="[[title]]" bind-value="{{value}}" invalid="{{invalid}}" prevent-invalid-input="[[preventInvalidInput]]" allowed-pattern="[[allowedPattern]]" validator="[[validator]]" type\$="[[type]]" pattern\$="[[pattern]]" required\$="[[required]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" min\$="[[min]]" max\$="[[max]]" step\$="[[step]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" list\$="[[list]]" size\$="[[size]]" autocapitalize\$="[[autocapitalize]]" autocorrect\$="[[autocorrect]]" on-change="_onChange" tabindex\$="[[tabIndex]]" autosave\$="[[autosave]]" results\$="[[results]]" accept\$="[[accept]]" multiple\$="[[multiple]]">
  </template>

  <template id="v1">
    <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
    <iron-input bind-value="{{value}}" slot="input" class="input-element" id\$="[[_inputId]]" maxlength\$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
      <input aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" disabled\$="[[disabled]]" title\$="[[title]]" type\$="[[type]]" pattern\$="[[pattern]]" required\$="[[required]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" min\$="[[min]]" max\$="[[max]]" step\$="[[step]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" list\$="[[list]]" size\$="[[size]]" autocapitalize\$="[[autocapitalize]]" autocorrect\$="[[autocorrect]]" on-change="_onChange" tabindex\$="[[tabIndex]]" autosave\$="[[autosave]]" results\$="[[results]]" accept\$="[[accept]]" multiple\$="[[multiple]]">
    </iron-input>
  </template>

</dom-module>`;document.head.appendChild($_documentContainer$11.content);Polymer$1({is:"paper-input",behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{value:{type:String}},beforeRegister:function(){var ironInput=document.createElement("iron-input"),version="function"==typeof ironInput._initSlottedInput?"v1":"v0",template=DomModule.import("paper-input","template"),inputTemplate=DomModule.import("paper-input","template#"+version),inputPlaceholder=template.content.querySelector("#template-placeholder");if(inputPlaceholder){inputPlaceholder.parentNode.replaceChild(inputTemplate.content,inputPlaceholder)}},get _focusableElement(){return PolymerElement?this.inputElement._inputElement:this.inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){if(!this.$.nativeInput){this.$.nativeInput=this.$$("input")}if(this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)){this.alwaysFloatLabel=!0}if(!!this.inputElement.bindValue){this.$.container._handleValueAndAutoValidate(this.inputElement)}}});const PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}};_exports.PaperItemBehaviorImpl=PaperItemBehaviorImpl;const PaperItemBehavior=[IronButtonState,IronControlState,PaperItemBehaviorImpl];_exports.PaperItemBehavior=PaperItemBehavior;_exports.$paperItemBehavior={PaperItemBehaviorImpl:PaperItemBehaviorImpl,PaperItemBehavior:PaperItemBehavior};const $_documentContainer$12=document.createElement("template");$_documentContainer$12.setAttribute("style","display: none;");$_documentContainer$12.innerHTML=`<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$12.content);Polymer$1({_template:html`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[PaperItemBehavior]});Polymer$1({_template:html`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[IronMenuBehavior],hostAttributes:{role:"listbox"}});const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if("loading"===alt){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(""===alt);this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=!1;this.__coolingDown=!1}};_exports.PaperSpinnerBehavior=PaperSpinnerBehavior;_exports.$paperSpinnerBehavior={PaperSpinnerBehavior:PaperSpinnerBehavior};const $_documentContainer$13=document.createElement("template");$_documentContainer$13.setAttribute("style","display: none;");$_documentContainer$13.innerHTML=`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        -webkit-animation-name: fill-unfill-rotate;
        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper::after {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left::after {
        left: 0;
        border-right-color: transparent !important;
        -webkit-transform: rotate(129deg);
        transform: rotate(129deg);
      }

      .circle-clipper.right::after {
        left: -100%;
        border-left-color: transparent !important;
        -webkit-transform: rotate(-129deg);
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper::after {
        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left::after {
        -webkit-animation-name: left-spin;
        animation-name: left-spin;
      }

      .active .circle-clipper.right::after {
        -webkit-animation-name: right-spin;
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$13.content);const $_documentContainer$14=document.createElement("template");$_documentContainer$14.setAttribute("style","display: none;");$_documentContainer$14.innerHTML=`<dom-module id="paper-spinner">
  <template strip-whitespace="">
    <style include="paper-spinner-styles"></style>

    <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
      <div class="spinner-layer layer-1">
        <div class="circle-clipper left"></div>
        <div class="circle-clipper right"></div>
      </div>

      <div class="spinner-layer layer-2">
        <div class="circle-clipper left"></div>
        <div class="circle-clipper right"></div>
      </div>

      <div class="spinner-layer layer-3">
        <div class="circle-clipper left"></div>
        <div class="circle-clipper right"></div>
      </div>

      <div class="spinner-layer layer-4">
        <div class="circle-clipper left"></div>
        <div class="circle-clipper right"></div>
      </div>
    </div>
  </template>

  
</dom-module>`;document.head.appendChild($_documentContainer$14.content);Polymer$1({is:"paper-spinner",behaviors:[PaperSpinnerBehavior]});var currentToast=null;Polymer$1({_template:html`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[IronOverlayBehavior],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){Base._warn("`visible` is deprecated, use `opened` instead");return this.opened},get _canAutoClose(){return 0<this.duration&&this.duration!==1/0},created:function(){this._autoClose=null;IronA11yAnnouncer.requestAvailability()},show:function(properties){if("string"==typeof properties){properties={text:properties}}for(var property in properties){if(0===property.indexOf("_")){Base._warn("The property \""+property+"\" is private and was not set.")}else if(property in this){this[property]=properties[property]}else{Base._warn("The property \""+property+"\" is not valid.")}}this.open()},hide:function(){this.close()},__onTransitionEnd:function(e){if(e&&e.target===this&&"opacity"===e.propertyName){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}},_openedChanged:function(){if(null!==this._autoClose){this.cancelAsync(this._autoClose);this._autoClose=null}if(this.opened){if(currentToast&&currentToast!==this){currentToast.close()}currentToast=this;this.fire("iron-announce",{text:this.text});if(this._canAutoClose){this._autoClose=this.async(this.close,this.duration)}}else if(currentToast===this){currentToast=null}IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(fitInto){this.positionTarget=fitInto}});function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b)}_exports.$hasOwnProp={default:hasOwnProp};var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+"s"]=aliases[shorthand]=unit}function normalizeUnits(units){return"string"===typeof units?aliases[units]||aliases[units.toLowerCase()]:void 0}function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop]}}}return normalizedInput}_exports.$aliases={addUnitAlias:addUnitAlias,normalizeUnits:normalizeUnits,normalizeObjectUnits:normalizeObjectUnits};var priorities={};function addUnitPriority(unit,priority){priorities[unit]=priority}function getPrioritizedUnits(unitsObj){var units=[];for(var u in unitsObj){units.push({unit:u,priority:priorities[u]})}units.sort(function(a,b){return a.priority-b.priority});return units}_exports.$priorities={addUnitPriority:addUnitPriority,getPrioritizedUnits:getPrioritizedUnits};var hookCallback;function hooks(){return hookCallback.apply(null,arguments)}function setHookCallback(callback){hookCallback=callback}_exports.$hooks={hooks:hooks,setHookCallback:setHookCallback};function isFunction(input){return input instanceof Function||"[object Function]"===Object.prototype.toString.call(input)}_exports.$isFunction={default:isFunction};function zeroFill(number,targetLength,forceSign){var absNumber=""+_Mathabs(number),zerosToFill=targetLength-absNumber.length;return(0<=number?forceSign?"+":"":"-")+_Mathpow(10,_Mathmax(0,zerosToFill)).toString().substr(1)+absNumber}_exports.$zeroFill={default:zeroFill};var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;_exports.formattingTokens=formattingTokens;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,formatFunctions={},formatTokenFunctions={};_exports.formatTokenFunctions=formatTokenFunctions;function addFormatToken(token,padded,ordinal,callback){var func=callback;if("string"===typeof callback){func=function(){return this[callback]()}}if(token){formatTokenFunctions[token]=func}if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2])}}if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token)}}}function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,"")}return input.replace(/\\/g,"")}function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]]}else{array[i]=removeFormattingTokens(array[i])}}return function(mom){var output="",i;for(i=0;i<length;i++){output+=isFunction(array[i])?array[i].call(mom,format):array[i]}return output}}function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate()}format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m)}function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input}localFormattingTokens.lastIndex=0;while(0<=i&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1}return format}_exports.$format={formattingTokens:formattingTokens,formatTokenFunctions:formatTokenFunctions,addFormatToken:addFormatToken,formatMoment:formatMoment,expandFormat:expandFormat};var match1=/\d/;_exports.match1=match1;var match2=/\d\d/;_exports.match2=match2;var match3=/\d{3}/;_exports.match3=match3;var match4=/\d{4}/;_exports.match4=match4;var match6=/[+-]?\d{6}/;_exports.match6=match6;var match1to2=/\d\d?/;_exports.match1to2=match1to2;var match3to4=/\d\d\d\d?/;_exports.match3to4=match3to4;var match5to6=/\d\d\d\d\d\d?/;_exports.match5to6=match5to6;var match1to3=/\d{1,3}/;_exports.match1to3=match1to3;var match1to4=/\d{1,4}/;_exports.match1to4=match1to4;var match1to6=/[+-]?\d{1,6}/;_exports.match1to6=match1to6;var matchUnsigned=/\d+/;_exports.matchUnsigned=matchUnsigned;var matchSigned=/[+-]?\d+/;_exports.matchSigned=matchSigned;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;_exports.matchOffset=matchOffset;var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;_exports.matchShortOffset=matchShortOffset;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;_exports.matchTimestamp=matchTimestamp;var matchWord=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;_exports.matchWord=matchWord;var regexes={};function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict){return isStrict&&strictRegex?strictRegex:regex}}function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token))}return regexes[token](config._strict,config._locale)}function unescapeFormat(s){return regexEscape(s.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4}))}function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}_exports.$regex={match1:match1,match2:match2,match3:match3,match4:match4,match6:match6,match1to2:match1to2,match3to4:match3to4,match5to6:match5to6,match1to3:match1to3,match1to4:match1to4,match1to6:match1to6,matchUnsigned:matchUnsigned,matchSigned:matchSigned,matchOffset:matchOffset,matchShortOffset:matchShortOffset,matchTimestamp:matchTimestamp,matchWord:matchWord,addRegexToken:addRegexToken,getParseRegexForToken:getParseRegexForToken,regexEscape:regexEscape};function isNumber(input){return"number"===typeof input||"[object Number]"===Object.prototype.toString.call(input)}_exports.$isNumber={default:isNumber};function absFloor(number){if(0>number){return _Mathceil(number)||0}else{return _Mathfloor(number)}}_exports.$absFloor={default:absFloor};function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(0!==coercedNumber&&isFinite(coercedNumber)){value=absFloor(coercedNumber)}return value}_exports.$toInt={default:toInt};var tokens={};function addParseToken(token,callback){var i,func=callback;if("string"===typeof token){token=[token]}if(isNumber(callback)){func=function(input,array){array[callback]=toInt(input)}}for(i=0;i<token.length;i++){tokens[token[i]]=func}}function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token)})}function addTimeToArrayFromToken(token,input,config){if(null!=input&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token)}}_exports.$token={addParseToken:addParseToken,addWeekParseToken:addWeekParseToken,addTimeToArrayFromToken:addTimeToArrayFromToken};var YEAR=0;_exports.YEAR=YEAR;var MONTH=1;_exports.MONTH=MONTH;var DATE=2;_exports.DATE=DATE;var HOUR=3;_exports.HOUR=HOUR;var MINUTE=4;_exports.MINUTE=MINUTE;var SECOND=5;_exports.SECOND=SECOND;var MILLISECOND=6;_exports.MILLISECOND=MILLISECOND;var WEEK=7;_exports.WEEK=WEEK;var WEEKDAY=8;_exports.WEEKDAY=WEEKDAY;_exports.$constants={YEAR:YEAR,MONTH:MONTH,DATE:DATE,HOUR:HOUR,MINUTE:MINUTE,SECOND:SECOND,MILLISECOND:MILLISECOND,WEEK:WEEK,WEEKDAY:WEEKDAY};addFormatToken("Y",0,0,function(){var y=this.year();return 9999>=y?""+y:"+"+y});addFormatToken(0,["YY",2],0,function(){return this.year()%100});addFormatToken(0,["YYYY",4],0,"year");addFormatToken(0,["YYYYY",5],0,"year");addFormatToken(0,["YYYYYY",6,!0],0,"year");addUnitAlias("year","y");addUnitPriority("year",1);addRegexToken("Y",matchSigned);addRegexToken("YY",match1to2,match2);addRegexToken("YYYY",match1to4,match4);addRegexToken("YYYYY",match1to6,match6);addRegexToken("YYYYYY",match1to6,match6);addParseToken(["YYYYY","YYYYYY"],YEAR);addParseToken("YYYY",function(input,array){array[YEAR]=2===input.length?hooks.parseTwoDigitYear(input):toInt(input)});addParseToken("YY",function(input,array){array[YEAR]=hooks.parseTwoDigitYear(input)});addParseToken("Y",function(input,array){array[YEAR]=parseInt(input,10)});function daysInYear(year){return isLeapYear(year)?366:365}function isLeapYear(year){return 0===year%4&&0!==year%100||0===year%400}hooks.parseTwoDigitYear=function(input){return toInt(input)+(68<toInt(input)?1900:2e3)};var getSetYear=makeGetSet("FullYear",!0);_exports.getSetYear=getSetYear;function getIsLeapYear(){return isLeapYear(this.year())}_exports.$year={daysInYear:daysInYear,isLeapYear:isLeapYear,getSetYear:getSetYear,getIsLeapYear:getIsLeapYear};function makeGetSet(unit,keepTime){return function(value){if(null!=value){set$1(this,unit,value);hooks.updateOffset(this,keepTime);return this}else{return get$1(this,unit)}}}function get$1(mom,unit){return mom.isValid()?mom._d["get"+(mom._isUTC?"UTC":"")+unit]():NaN}function set$1(mom,unit,value){if(mom.isValid()&&!isNaN(value)){if("FullYear"===unit&&isLeapYear(mom.year())&&1===mom.month()&&29===mom.date()){mom._d["set"+(mom._isUTC?"UTC":"")+unit](value,mom.month(),daysInMonth(value,mom.month()))}else{mom._d["set"+(mom._isUTC?"UTC":"")+unit](value)}}}function stringGet(units){units=normalizeUnits(units);if(isFunction(this[units])){return this[units]()}return this}function stringSet(units,value){if("object"===typeof units){units=normalizeObjectUnits(units);for(var prioritized=getPrioritizedUnits(units),i=0;i<prioritized.length;i++){this[prioritized[i].unit](units[prioritized[i].unit])}}else{units=normalizeUnits(units);if(isFunction(this[units])){return this[units](value)}}return this}_exports.$getSet={makeGetSet:makeGetSet,get:get$1,set:set$1,stringGet:stringGet,stringSet:stringSet};function isArray(input){return input instanceof Array||"[object Array]"===Object.prototype.toString.call(input)}_exports.$isArray={default:isArray};function mod(n,x){return(n%x+x)%x}_exports.$mod={default:mod};var indexOf;_exports.$indexOfDefault=indexOf;if(Array.prototype.indexOf){_exports.$indexOfDefault=indexOf=Array.prototype.indexOf}else{_exports.$indexOfDefault=indexOf=function(o){var i;for(i=0;i<this.length;++i){if(this[i]===o){return i}}return-1}}var indexOf$1={get default(){return indexOf}};_exports.$indexOf=indexOf$1;function isObject(input){return null!=input&&"[object Object]"===Object.prototype.toString.call(input)}_exports.$isObject={default:isObject};function isObjectEmpty(obj){if(Object.getOwnPropertyNames){return 0===Object.getOwnPropertyNames(obj).length}else{for(var k in obj){if(obj.hasOwnProperty(k)){return!1}}return!0}}_exports.$isObjectEmpty={default:isObjectEmpty};function isUndefined(input){return void 0===input}_exports.$isUndefined={default:isUndefined};function isDate(input){return input instanceof Date||"[object Date]"===Object.prototype.toString.call(input)}_exports.$isDate={default:isDate};function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i))}return res}_exports.$map={default:map};function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i]}}if(hasOwnProp(b,"toString")){a.toString=b.toString}if(hasOwnProp(b,"valueOf")){a.valueOf=b.valueOf}return a}_exports.$extend={default:extend};function defaultParsingFlags(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function getParsingFlags(m){if(null==m._pf){m._pf=defaultParsingFlags()}return m._pf}_exports.$parsingFlags={default:getParsingFlags};var some;_exports.$someDefault=some;if(Array.prototype.some){_exports.$someDefault=some=Array.prototype.some}else{_exports.$someDefault=some=function(fun){for(var t=Object(this),len=t.length>>>0,i=0;i<len;i++){if(i in t&&fun.call(this,t[i],i,t)){return!0}}return!1}}var some$1={get default(){return some}};_exports.$some=some$1;function isValid$1(m){if(null==m._isValid){var flags=getParsingFlags(m),parsedParts=some.call(flags.parsedDateParts,function(i){return null!=i}),isNowValid=!isNaN(m._d.getTime())&&0>flags.overflow&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.weekdayMismatch&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||flags.meridiem&&parsedParts);if(m._strict){isNowValid=isNowValid&&0===flags.charsLeftOver&&0===flags.unusedTokens.length&&flags.bigHour===void 0}if(null==Object.isFrozen||!Object.isFrozen(m)){m._isValid=isNowValid}else{return isNowValid}}return m._isValid}function createInvalid(flags){var m=createUTC(NaN);if(null!=flags){extend(getParsingFlags(m),flags)}else{getParsingFlags(m).userInvalidated=!0}return m}_exports.$valid={isValid:isValid$1,createInvalid:createInvalid};var momentProperties=hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject=from._isAMomentObject}if(!isUndefined(from._i)){to._i=from._i}if(!isUndefined(from._f)){to._f=from._f}if(!isUndefined(from._l)){to._l=from._l}if(!isUndefined(from._strict)){to._strict=from._strict}if(!isUndefined(from._tzm)){to._tzm=from._tzm}if(!isUndefined(from._isUTC)){to._isUTC=from._isUTC}if(!isUndefined(from._offset)){to._offset=from._offset}if(!isUndefined(from._pf)){to._pf=getParsingFlags(from)}if(!isUndefined(from._locale)){to._locale=from._locale}if(0<momentProperties.length){for(i=0;i<momentProperties.length;i++){prop=momentProperties[i];val=from[prop];if(!isUndefined(val)){to[prop]=val}}}return to}var updateInProgress=!1;function Moment(config){copyConfig(this,config);this._d=new Date(null!=config._d?config._d.getTime():NaN);if(!this.isValid()){this._d=new Date(NaN)}if(!1===updateInProgress){updateInProgress=!0;hooks.updateOffset(this);updateInProgress=!1}}function isMoment(obj){return obj instanceof Moment||null!=obj&&null!=obj._isAMomentObject}_exports.$constructor$2={copyConfig:copyConfig,Moment:Moment,isMoment:isMoment};function compareArrays(array1,array2,dontConvert){var len=_Mathmin(array1.length,array2.length),lengthDiff=_Mathabs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if(dontConvert&&array1[i]!==array2[i]||!dontConvert&&toInt(array1[i])!==toInt(array2[i])){diffs++}}return diffs+lengthDiff}_exports.$compareArrays={default:compareArrays};function warn(msg){if(!1===hooks.suppressDeprecationWarnings&&"undefined"!==typeof console&&console.warn){console.warn("Deprecation warning: "+msg)}}function deprecate(msg,fn){var firstTime=!0;return extend(function(){if(null!=hooks.deprecationHandler){hooks.deprecationHandler(null,msg)}if(firstTime){for(var args=[],arg,i=0;i<arguments.length;i++){arg="";if("object"===typeof arguments[i]){arg+="\n["+i+"] ";for(var key in arguments[0]){arg+=key+": "+arguments[0][key]+", "}arg=arg.slice(0,-2)}else{arg=arguments[i]}args.push(arg)}warn(msg+"\nArguments: "+Array.prototype.slice.call(args).join("")+"\n"+new Error().stack);firstTime=!1}return fn.apply(this,arguments)},fn)}var deprecations={};function deprecateSimple(name,msg){if(null!=hooks.deprecationHandler){hooks.deprecationHandler(name,msg)}if(!deprecations[name]){warn(msg);deprecations[name]=!0}}hooks.suppressDeprecationWarnings=!1;hooks.deprecationHandler=null;_exports.$deprecate={deprecate:deprecate,deprecateSimple:deprecateSimple};function set$2(config){var prop,i;for(i in config){prop=config[i];if(isFunction(prop)){this[i]=prop}else{this["_"+i]=prop}}this._config=config;this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function mergeConfigs(parentConfig,childConfig){var res=extend({},parentConfig),prop;for(prop in childConfig){if(hasOwnProp(childConfig,prop)){if(isObject(parentConfig[prop])&&isObject(childConfig[prop])){res[prop]={};extend(res[prop],parentConfig[prop]);extend(res[prop],childConfig[prop])}else if(null!=childConfig[prop]){res[prop]=childConfig[prop]}else{delete res[prop]}}}for(prop in parentConfig){if(hasOwnProp(parentConfig,prop)&&!hasOwnProp(childConfig,prop)&&isObject(parentConfig[prop])){res[prop]=extend({},res[prop])}}return res}_exports.$set={set:set$2,mergeConfigs:mergeConfigs};function Locale(config){if(null!=config){this.set(config)}}_exports.$constructor$1={Locale:Locale};var keys;_exports.$keysDefault=keys;if(Object.keys){_exports.$keysDefault=keys=Object.keys}else{_exports.$keysDefault=keys=function(obj){var i,res=[];for(i in obj){if(hasOwnProp(obj,i)){res.push(i)}}return res}}var keys$1={get default(){return keys}};_exports.$keys=keys$1;var defaultCalendar={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};_exports.defaultCalendar=defaultCalendar;function calendar(key,mom,now){var output=this._calendar[key]||this._calendar.sameElse;return isFunction(output)?output.call(mom,now):output}_exports.$calendar={defaultCalendar:defaultCalendar,calendar:calendar};var defaultLongDateFormat={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};_exports.defaultLongDateFormat=defaultLongDateFormat;function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format}this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1)});return this._longDateFormat[key]}_exports.$formats={defaultLongDateFormat:defaultLongDateFormat,longDateFormat:longDateFormat};var defaultInvalidDate="Invalid date";_exports.defaultInvalidDate=defaultInvalidDate;function invalidDate(){return this._invalidDate}_exports.$invalid={defaultInvalidDate:defaultInvalidDate,invalidDate:invalidDate};var defaultOrdinal="%d";_exports.defaultOrdinal=defaultOrdinal;var defaultDayOfMonthOrdinalParse=/\d{1,2}/;_exports.defaultDayOfMonthOrdinalParse=defaultDayOfMonthOrdinalParse;function ordinal(number){return this._ordinal.replace("%d",number)}_exports.$ordinal={defaultOrdinal:defaultOrdinal,defaultDayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,ordinal:ordinal};var defaultRelativeTime={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};_exports.defaultRelativeTime=defaultRelativeTime;function relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return isFunction(output)?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number)}function pastFuture(diff,output){var format=this._relativeTime[0<diff?"future":"past"];return isFunction(format)?format(output):format.replace(/%s/i,output)}_exports.$relative={defaultRelativeTime:defaultRelativeTime,relativeTime:relativeTime,pastFuture:pastFuture};function createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,!1)}_exports.$local={createLocal:createLocal};function createDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(100>y&&0<=y&&isFinite(date.getFullYear())){date.setFullYear(y)}return date}function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(100>y&&0<=y&&isFinite(date.getUTCFullYear())){date.setUTCFullYear(y)}return date}_exports.$dateFromArray={createDate:createDate,createUTCDate:createUTCDate};function firstWeekOffset(year,dow,doy){var fwd=7+dow-doy,fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;return-fwdlw+fwd-1}function dayOfYearFromWeeks(year,week,weekday,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+(7+weekday-dow)%7+weekOffset,resYear,resDayOfYear;if(0>=dayOfYear){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year)}else{resYear=year;resDayOfYear=dayOfYear}return{year:resYear,dayOfYear:resDayOfYear}}function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=_Mathfloor((mom.dayOfYear()-weekOffset-1)/7)+1,resWeek,resYear;if(1>week){resYear=mom.year()-1;resWeek=week+weeksInYear(resYear,dow,doy)}else if(week>weeksInYear(mom.year(),dow,doy)){resWeek=week-weeksInYear(mom.year(),dow,doy);resYear=mom.year()+1}else{resYear=mom.year();resWeek=week}return{week:resWeek,year:resYear}}function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7}_exports.$weekCalendarUtils={dayOfYearFromWeeks:dayOfYearFromWeeks,weekOfYear:weekOfYear,weeksInYear:weeksInYear};addFormatToken("w",["ww",2],"wo","week");addFormatToken("W",["WW",2],"Wo","isoWeek");addUnitAlias("week","w");addUnitAlias("isoWeek","W");addUnitPriority("week",5);addUnitPriority("isoWeek",5);addRegexToken("w",match1to2);addRegexToken("ww",match1to2,match2);addRegexToken("W",match1to2);addRegexToken("WW",match1to2,match2);addWeekParseToken(["w","ww","W","WW"],function(input,week,config,token){week[token.substr(0,1)]=toInt(input)});function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week}var defaultLocaleWeek={dow:0,doy:6};_exports.defaultLocaleWeek=defaultLocaleWeek;function localeFirstDayOfWeek(){return this._week.dow}function localeFirstDayOfYear(){return this._week.doy}function getSetWeek(input){var week=this.localeData().week(this);return null==input?week:this.add(7*(input-week),"d")}function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return null==input?week:this.add(7*(input-week),"d")}_exports.$week={localeWeek:localeWeek,defaultLocaleWeek:defaultLocaleWeek,localeFirstDayOfWeek:localeFirstDayOfWeek,localeFirstDayOfYear:localeFirstDayOfYear,getSetWeek:getSetWeek,getSetISOWeek:getSetISOWeek};addFormatToken("d",0,"do","day");addFormatToken("dd",0,0,function(format){return this.localeData().weekdaysMin(this,format)});addFormatToken("ddd",0,0,function(format){return this.localeData().weekdaysShort(this,format)});addFormatToken("dddd",0,0,function(format){return this.localeData().weekdays(this,format)});addFormatToken("e",0,0,"weekday");addFormatToken("E",0,0,"isoWeekday");addUnitAlias("day","d");addUnitAlias("weekday","e");addUnitAlias("isoWeekday","E");addUnitPriority("day",11);addUnitPriority("weekday",11);addUnitPriority("isoWeekday",11);addRegexToken("d",match1to2);addRegexToken("e",match1to2);addRegexToken("E",match1to2);addRegexToken("dd",function(isStrict,locale){return locale.weekdaysMinRegex(isStrict)});addRegexToken("ddd",function(isStrict,locale){return locale.weekdaysShortRegex(isStrict)});addRegexToken("dddd",function(isStrict,locale){return locale.weekdaysRegex(isStrict)});addWeekParseToken(["dd","ddd","dddd"],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);if(null!=weekday){week.d=weekday}else{getParsingFlags(config).invalidWeekday=input}});addWeekParseToken(["d","e","E"],function(input,week,config,token){week[token]=toInt(input)});function parseWeekday(input,locale){if("string"!==typeof input){return input}if(!isNaN(input)){return parseInt(input,10)}input=locale.weekdaysParse(input);if("number"===typeof input){return input}return null}function parseIsoWeekday(input,locale){if("string"===typeof input){return locale.weekdaysParse(input)%7||7}return isNaN(input)?null:input}var defaultLocaleWeekdays="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");_exports.defaultLocaleWeekdays=defaultLocaleWeekdays;function localeWeekdays(m,format){if(!m){return isArray(this._weekdays)?this._weekdays:this._weekdays.standalone}return isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?"format":"standalone"][m.day()]}var defaultLocaleWeekdaysShort="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");_exports.defaultLocaleWeekdaysShort=defaultLocaleWeekdaysShort;function localeWeekdaysShort(m){return m?this._weekdaysShort[m.day()]:this._weekdaysShort}var defaultLocaleWeekdaysMin="Su_Mo_Tu_We_Th_Fr_Sa".split("_");_exports.defaultLocaleWeekdaysMin=defaultLocaleWeekdaysMin;function localeWeekdaysMin(m){return m?this._weekdaysMin[m.day()]:this._weekdaysMin}function handleStrictParse(weekdayName,format,strict){var i,ii,mom,llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse){this._weekdaysParse=[];this._shortWeekdaysParse=[];this._minWeekdaysParse=[];for(i=0;7>i;++i){mom=createUTC([2e3,1]).day(i);this._minWeekdaysParse[i]=this.weekdaysMin(mom,"").toLocaleLowerCase();this._shortWeekdaysParse[i]=this.weekdaysShort(mom,"").toLocaleLowerCase();this._weekdaysParse[i]=this.weekdays(mom,"").toLocaleLowerCase()}}if(strict){if("dddd"===format){ii=indexOf.call(this._weekdaysParse,llc);return-1!==ii?ii:null}else if("ddd"===format){ii=indexOf.call(this._shortWeekdaysParse,llc);return-1!==ii?ii:null}else{ii=indexOf.call(this._minWeekdaysParse,llc);return-1!==ii?ii:null}}else{if("dddd"===format){ii=indexOf.call(this._weekdaysParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._shortWeekdaysParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._minWeekdaysParse,llc);return-1!==ii?ii:null}else if("ddd"===format){ii=indexOf.call(this._shortWeekdaysParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._weekdaysParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._minWeekdaysParse,llc);return-1!==ii?ii:null}else{ii=indexOf.call(this._minWeekdaysParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._weekdaysParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._shortWeekdaysParse,llc);return-1!==ii?ii:null}}}function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(this._weekdaysParseExact){return handleStrictParse.call(this,weekdayName,format,strict)}if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[]}for(i=0;7>i;i++){mom=createUTC([2e3,1]).day(i);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(mom,"").replace(".","\\.?")+"$","i");this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(mom,"").replace(".","\\.?")+"$","i");this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(mom,"").replace(".","\\.?")+"$","i")}if(!this._weekdaysParse[i]){regex="^"+this.weekdays(mom,"")+"|^"+this.weekdaysShort(mom,"")+"|^"+this.weekdaysMin(mom,"");this._weekdaysParse[i]=new RegExp(regex.replace(".",""),"i")}if(strict&&"dddd"===format&&this._fullWeekdaysParse[i].test(weekdayName)){return i}else if(strict&&"ddd"===format&&this._shortWeekdaysParse[i].test(weekdayName)){return i}else if(strict&&"dd"===format&&this._minWeekdaysParse[i].test(weekdayName)){return i}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i}}}function getSetDayOfWeek(input){if(!this.isValid()){return null!=input?this:NaN}var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(null!=input){input=parseWeekday(input,this.localeData());return this.add(input-day,"d")}else{return day}}function getSetLocaleDayOfWeek(input){if(!this.isValid()){return null!=input?this:NaN}var weekday=(this.day()+7-this.localeData()._week.dow)%7;return null==input?weekday:this.add(input-weekday,"d")}function getSetISODayOfWeek(input){if(!this.isValid()){return null!=input?this:NaN}if(null!=input){var weekday=parseIsoWeekday(input,this.localeData());return this.day(this.day()%7?weekday:weekday-7)}else{return this.day()||7}}function weekdaysRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){computeWeekdaysParse.call(this)}if(isStrict){return this._weekdaysStrictRegex}else{return this._weekdaysRegex}}else{if(!hasOwnProp(this,"_weekdaysRegex")){this._weekdaysRegex=matchWord}return this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex}}function weekdaysShortRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){computeWeekdaysParse.call(this)}if(isStrict){return this._weekdaysShortStrictRegex}else{return this._weekdaysShortRegex}}else{if(!hasOwnProp(this,"_weekdaysShortRegex")){this._weekdaysShortRegex=matchWord}return this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}}function weekdaysMinRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){computeWeekdaysParse.call(this)}if(isStrict){return this._weekdaysMinStrictRegex}else{return this._weekdaysMinRegex}}else{if(!hasOwnProp(this,"_weekdaysMinRegex")){this._weekdaysMinRegex=matchWord}return this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}}function computeWeekdaysParse(){function cmpLenRev(a,b){return b.length-a.length}var minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[],i,mom,minp,shortp,longp;for(i=0;7>i;i++){mom=createUTC([2e3,1]).day(i);minp=this.weekdaysMin(mom,"");shortp=this.weekdaysShort(mom,"");longp=this.weekdays(mom,"");minPieces.push(minp);shortPieces.push(shortp);longPieces.push(longp);mixedPieces.push(minp);mixedPieces.push(shortp);mixedPieces.push(longp)}minPieces.sort(cmpLenRev);shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;7>i;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i])}this._weekdaysRegex=new RegExp("^("+mixedPieces.join("|")+")","i");this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp("^("+longPieces.join("|")+")","i");this._weekdaysShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i");this._weekdaysMinStrictRegex=new RegExp("^("+minPieces.join("|")+")","i")}_exports.$dayOfWeek={defaultLocaleWeekdays:defaultLocaleWeekdays,localeWeekdays:localeWeekdays,defaultLocaleWeekdaysShort:defaultLocaleWeekdaysShort,localeWeekdaysShort:localeWeekdaysShort,defaultLocaleWeekdaysMin:defaultLocaleWeekdaysMin,localeWeekdaysMin:localeWeekdaysMin,localeWeekdaysParse:localeWeekdaysParse,getSetDayOfWeek:getSetDayOfWeek,getSetLocaleDayOfWeek:getSetLocaleDayOfWeek,getSetISODayOfWeek:getSetISODayOfWeek,weekdaysRegex:weekdaysRegex,weekdaysShortRegex:weekdaysShortRegex,weekdaysMinRegex:weekdaysMinRegex};function hFormat(){return this.hours()%12||12}addFormatToken("H",["HH",2],0,"hour");addFormatToken("h",["hh",2],0,hFormat);addFormatToken("k",["kk",2],0,function(){return this.hours()||24});addFormatToken("hmm",0,0,function(){return""+hFormat.apply(this)+zeroFill(this.minutes(),2)});addFormatToken("hmmss",0,0,function(){return""+hFormat.apply(this)+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)});addFormatToken("Hmm",0,0,function(){return""+this.hours()+zeroFill(this.minutes(),2)});addFormatToken("Hmmss",0,0,function(){return""+this.hours()+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase)})}meridiem("a",!0);meridiem("A",!1);addUnitAlias("hour","h");addUnitPriority("hour",13);function matchMeridiem(isStrict,locale){return locale._meridiemParse}addRegexToken("a",matchMeridiem);addRegexToken("A",matchMeridiem);addRegexToken("H",match1to2);addRegexToken("h",match1to2);addRegexToken("k",match1to2);addRegexToken("HH",match1to2,match2);addRegexToken("hh",match1to2,match2);addRegexToken("kk",match1to2,match2);addRegexToken("hmm",match3to4);addRegexToken("hmmss",match5to6);addRegexToken("Hmm",match3to4);addRegexToken("Hmmss",match5to6);addParseToken(["H","HH"],HOUR);addParseToken(["k","kk"],function(input,array){var kInput=toInt(input);array[HOUR]=24===kInput?0:kInput});addParseToken(["a","A"],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input});addParseToken(["h","hh"],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=!0});addParseToken("hmm",function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=!0});addParseToken("hmmss",function(input,array,config){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=!0});addParseToken("Hmm",function(input,array){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos))});addParseToken("Hmmss",function(input,array){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2))});function localeIsPM(input){return"p"===(input+"").toLowerCase().charAt(0)}var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;_exports.defaultLocaleMeridiemParse=defaultLocaleMeridiemParse;function localeMeridiem(hours,minutes,isLower){if(11<hours){return isLower?"pm":"PM"}else{return isLower?"am":"AM"}}var getSetHour=makeGetSet("Hours",!0);_exports.getSetHour=getSetHour;_exports.$hour={localeIsPM:localeIsPM,defaultLocaleMeridiemParse:defaultLocaleMeridiemParse,localeMeridiem:localeMeridiem,getSetHour:getSetHour};var baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:defaultInvalidDate,ordinal:defaultOrdinal,dayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse};_exports.baseConfig=baseConfig;_exports.$baseConfig={baseConfig:baseConfig};var locales={},localeFamilies={},globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace("_","-"):key}function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split("-");j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split("-"):null;while(0<j){locale=loadLocale(split.slice(0,j).join("-"));if(locale){return locale}if(next&&next.length>=j&&compareArrays(split,next,!0)>=j-1){break}j--}i++}return globalLocale}function loadLocale(name){var oldLocale=null;if(!locales[name]&&"undefined"!==typeof module&&module&&module.exports){try{oldLocale=globalLocale._abbr;var aliasedRequire=require;aliasedRequire("./locale/"+name);getSetGlobalLocale(oldLocale)}catch(e){}}return locales[name]}function getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data=getLocale(key)}else{data=defineLocale(key,values)}if(data){globalLocale=data}else{if("undefined"!==typeof console&&console.warn){console.warn("Locale "+key+" not found. Did you forget to load it?")}}}return globalLocale._abbr}function defineLocale(name,config){if(null!==config){var locale,parentConfig=baseConfig;config.abbr=name;if(null!=locales[name]){deprecateSimple("defineLocaleOverride","use moment.updateLocale(localeName, config) to change "+"an existing locale. moment.defineLocale(localeName, "+"config) should only be used for creating a new locale "+"See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");parentConfig=locales[name]._config}else if(null!=config.parentLocale){if(null!=locales[config.parentLocale]){parentConfig=locales[config.parentLocale]._config}else{locale=loadLocale(config.parentLocale);if(null!=locale){parentConfig=locale._config}else{if(!localeFamilies[config.parentLocale]){localeFamilies[config.parentLocale]=[]}localeFamilies[config.parentLocale].push({name:name,config:config});return null}}}locales[name]=new Locale(mergeConfigs(parentConfig,config));if(localeFamilies[name]){localeFamilies[name].forEach(function(x){defineLocale(x.name,x.config)})}getSetGlobalLocale(name);return locales[name]}else{delete locales[name];return null}}function updateLocale(name,config){if(null!=config){var locale,tmpLocale,parentConfig=baseConfig;tmpLocale=loadLocale(name);if(null!=tmpLocale){parentConfig=tmpLocale._config}config=mergeConfigs(parentConfig,config);locale=new Locale(config);locale.parentLocale=locales[name];locales[name]=locale;getSetGlobalLocale(name)}else{if(null!=locales[name]){if(null!=locales[name].parentLocale){locales[name]=locales[name].parentLocale}else if(null!=locales[name]){delete locales[name]}}}return locales[name]}function getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr}if(!key){return globalLocale}if(!isArray(key)){locale=loadLocale(key);if(locale){return locale}key=[key]}return chooseLocale(key)}function listLocales(){return keys(locales)}_exports.$locales={getSetGlobalLocale:getSetGlobalLocale,defineLocale:defineLocale,updateLocale:updateLocale,getLocale:getLocale,listLocales:listLocales};function defaults(a,b,c){if(null!=a){return a}if(null!=b){return b}return c}_exports.$defaults={default:defaults};function currentDateArray(config){var nowValue=new Date(hooks.now());if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()]}return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()]}function configFromArray(config){var i,date,input=[],currentDate,expectedWeekday,yearToUse;if(config._d){return}currentDate=currentDateArray(config);if(config._w&&null==config._a[DATE]&&null==config._a[MONTH]){dayOfYearFromWeekInfo(config)}if(null!=config._dayOfYear){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)||0===config._dayOfYear){getParsingFlags(config)._overflowDayOfYear=!0}date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate()}for(i=0;3>i&&null==config._a[i];++i){config._a[i]=input[i]=currentDate[i]}for(;7>i;i++){config._a[i]=input[i]=null==config._a[i]?2===i?1:0:config._a[i]}if(24===config._a[HOUR]&&0===config._a[MINUTE]&&0===config._a[SECOND]&&0===config._a[MILLISECOND]){config._nextDay=!0;config._a[HOUR]=0}config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);expectedWeekday=config._useUTC?config._d.getUTCDay():config._d.getDay();if(null!=config._tzm){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm)}if(config._nextDay){config._a[HOUR]=24}if(config._w&&"undefined"!==typeof config._w.d&&config._w.d!==expectedWeekday){getParsingFlags(config).weekdayMismatch=!0}}function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;w=config._w;if(null!=w.GG||null!=w.W||null!=w.E){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(1>weekday||7<weekday){weekdayOverflow=!0}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;var curWeek=weekOfYear(createLocal(),dow,doy);weekYear=defaults(w.gg,config._a[YEAR],curWeek.year);week=defaults(w.w,curWeek.week);if(null!=w.d){weekday=w.d;if(0>weekday||6<weekday){weekdayOverflow=!0}}else if(null!=w.e){weekday=w.e+dow;if(0>w.e||6<w.e){weekdayOverflow=!0}}else{weekday=dow}}if(1>week||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=!0}else if(null!=weekdayOverflow){getParsingFlags(config)._overflowWeekday=!0}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear}}_exports.$fromArray={configFromArray:configFromArray};var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tzRegex=/Z|[+-]\d\d(?::?\d\d)?/,isoDates=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],isoTimes=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat;if(match){getParsingFlags(config).iso=!0;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=!1!==isoDates[i][2];break}}if(null==dateFormat){config._isValid=!1;return}if(match[3]){for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(match[3])){timeFormat=(match[2]||" ")+isoTimes[i][0];break}}if(null==timeFormat){config._isValid=!1;return}}if(!allowTime&&null!=timeFormat){config._isValid=!1;return}if(match[4]){if(tzRegex.exec(match[4])){tzFormat="Z"}else{config._isValid=!1;return}}config._f=dateFormat+(timeFormat||"")+(tzFormat||"");configFromStringAndFormat(config)}else{config._isValid=!1}}var rfc2822=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function extractFromRFC2822Strings(yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr){var result=[untruncateYear(yearStr),defaultLocaleMonthsShort.indexOf(monthStr),parseInt(dayStr,10),parseInt(hourStr,10),parseInt(minuteStr,10)];if(secondStr){result.push(parseInt(secondStr,10))}return result}function untruncateYear(yearStr){var year=parseInt(yearStr,10);if(49>=year){return 2e3+year}else if(999>=year){return 1900+year}return year}function preprocessRFC2822(s){return s.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function checkWeekday(weekdayStr,parsedInput,config){if(weekdayStr){var weekdayProvided=defaultLocaleWeekdaysShort.indexOf(weekdayStr),weekdayActual=new Date(parsedInput[0],parsedInput[1],parsedInput[2]).getDay();if(weekdayProvided!==weekdayActual){getParsingFlags(config).weekdayMismatch=!0;config._isValid=!1;return!1}}return!0}var obsOffsets={UT:0,GMT:0,EDT:60*-4,EST:60*-5,CDT:60*-5,CST:60*-6,MDT:60*-6,MST:60*-7,PDT:60*-7,PST:60*-8};function calculateOffset(obsOffset,militaryOffset,numOffset){if(obsOffset){return obsOffsets[obsOffset]}else if(militaryOffset){return 0}else{var hm=parseInt(numOffset,10),m=hm%100;return 60*((hm-m)/100)+m}}function configFromRFC2822(config){var match=rfc2822.exec(preprocessRFC2822(config._i));if(match){var parsedArray=extractFromRFC2822Strings(match[4],match[3],match[2],match[5],match[6],match[7]);if(!checkWeekday(match[1],parsedArray,config)){return}config._a=parsedArray;config._tzm=calculateOffset(match[8],match[9],match[10]);config._d=createUTCDate.apply(null,config._a);config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);getParsingFlags(config).rfc2822=!0}else{config._isValid=!1}}function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(null!==matched){config._d=new Date(+matched[1]);return}configFromISO(config);if(!1===config._isValid){delete config._isValid}else{return}configFromRFC2822(config);if(!1===config._isValid){delete config._isValid}else{return}hooks.createFromInputFallback(config)}hooks.createFromInputFallback=deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), "+"which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are "+"discouraged and will be removed in an upcoming major release. Please refer to "+"http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(config){config._d=new Date(config._i+(config._useUTC?" UTC":""))});_exports.$fromString={configFromISO:configFromISO,configFromRFC2822:configFromRFC2822,configFromString:configFromString};hooks.ISO_8601=function(){};hooks.RFC_2822=function(){};function configFromStringAndFormat(config){if(config._f===hooks.ISO_8601){configFromISO(config);return}if(config._f===hooks.RFC_2822){configFromRFC2822(config);return}config._a=[];getParsingFlags(config).empty=!0;var string=""+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(0<skipped.length){getParsingFlags(config).unusedInput.push(skipped)}string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length}if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=!1}else{getParsingFlags(config).unusedTokens.push(token)}addTimeToArrayFromToken(token,parsedInput,config)}else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token)}}getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(0<string.length){getParsingFlags(config).unusedInput.push(string)}if(12>=config._a[HOUR]&&!0===getParsingFlags(config).bigHour&&0<config._a[HOUR]){getParsingFlags(config).bigHour=void 0}getParsingFlags(config).parsedDateParts=config._a.slice(0);getParsingFlags(config).meridiem=config._meridiem;config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config)}function meridiemFixWrap(locale,hour,meridiem){var isPm;if(null==meridiem){return hour}if(null!=locale.meridiemHour){return locale.meridiemHour(hour,meridiem)}else if(null!=locale.isPM){isPm=locale.isPM(meridiem);if(isPm&&12>hour){hour+=12}if(!isPm&&12===hour){hour=0}return hour}else{return hour}}_exports.$fromStringAndFormat={configFromStringAndFormat:configFromStringAndFormat};function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(0===config._f.length){getParsingFlags(config).invalidFormat=!0;config._d=new Date(NaN);return}for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(null!=config._useUTC){tempConfig._useUTC=config._useUTC}tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!isValid$1(tempConfig)){continue}currentScore+=getParsingFlags(tempConfig).charsLeftOver;currentScore+=10*getParsingFlags(tempConfig).unusedTokens.length;getParsingFlags(tempConfig).score=currentScore;if(null==scoreToBeat||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig}}extend(config,bestMoment||tempConfig)}_exports.$fromStringAndArray={configFromStringAndArray:configFromStringAndArray};function configFromObject(config){if(config._d){return}var i=normalizeObjectUnits(config._i);config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10)});configFromArray(config)}_exports.$fromObject={configFromObject:configFromObject};function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,"d");res._nextDay=void 0}return res}function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||getLocale(config._l);if(null===input||format===void 0&&""===input){return createInvalid({nullInput:!0})}if("string"===typeof input){config._i=input=config._locale.preparse(input)}if(isMoment(input)){return new Moment(checkOverflow(input))}else if(isDate(input)){config._d=input}else if(isArray(format)){configFromStringAndArray(config)}else if(format){configFromStringAndFormat(config)}else{configFromInput(config)}if(!isValid$1(config)){config._d=null}return config}function configFromInput(config){var input=config._i;if(isUndefined(input)){config._d=new Date(hooks.now())}else if(isDate(input)){config._d=new Date(input.valueOf())}else if("string"===typeof input){configFromString(config)}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10)});configFromArray(config)}else if(isObject(input)){configFromObject(config)}else if(isNumber(input)){config._d=new Date(input)}else{hooks.createFromInputFallback(config)}}function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(!0===locale||!1===locale){strict=locale;locale=void 0}if(isObject(input)&&isObjectEmpty(input)||isArray(input)&&0===input.length){input=void 0}c._isAMomentObject=!0;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c)}_exports.$fromAnything={prepareConfig:prepareConfig,createLocalOrUTC:createLocalOrUTC};function createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,!0).utc()}_exports.$utc={createUTC:createUTC};function daysInMonth(year,month){if(isNaN(year)||isNaN(month)){return NaN}var modMonth=mod(month,12);year+=(month-modMonth)/12;return 1===modMonth?isLeapYear(year)?29:28:31-modMonth%7%2}addFormatToken("M",["MM",2],"Mo",function(){return this.month()+1});addFormatToken("MMM",0,0,function(format){return this.localeData().monthsShort(this,format)});addFormatToken("MMMM",0,0,function(format){return this.localeData().months(this,format)});addUnitAlias("month","M");addUnitPriority("month",8);addRegexToken("M",match1to2);addRegexToken("MM",match1to2,match2);addRegexToken("MMM",function(isStrict,locale){return locale.monthsShortRegex(isStrict)});addRegexToken("MMMM",function(isStrict,locale){return locale.monthsRegex(isStrict)});addParseToken(["M","MM"],function(input,array){array[MONTH]=toInt(input)-1});addParseToken(["MMM","MMMM"],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(null!=month){array[MONTH]=month}else{getParsingFlags(config).invalidMonth=input}});var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,defaultLocaleMonths="January_February_March_April_May_June_July_August_September_October_November_December".split("_");_exports.defaultLocaleMonths=defaultLocaleMonths;function localeMonths(m,format){if(!m){return isArray(this._months)?this._months:this._months.standalone}return isArray(this._months)?this._months[m.month()]:this._months[(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?"format":"standalone"][m.month()]}var defaultLocaleMonthsShort="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");_exports.defaultLocaleMonthsShort=defaultLocaleMonthsShort;function localeMonthsShort(m,format){if(!m){return isArray(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?"format":"standalone"][m.month()]}function handleStrictParse$1(monthName,format,strict){var i,ii,mom,llc=monthName.toLocaleLowerCase();if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];for(i=0;12>i;++i){mom=createUTC([2e3,i]);this._shortMonthsParse[i]=this.monthsShort(mom,"").toLocaleLowerCase();this._longMonthsParse[i]=this.months(mom,"").toLocaleLowerCase()}}if(strict){if("MMM"===format){ii=indexOf.call(this._shortMonthsParse,llc);return-1!==ii?ii:null}else{ii=indexOf.call(this._longMonthsParse,llc);return-1!==ii?ii:null}}else{if("MMM"===format){ii=indexOf.call(this._shortMonthsParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._longMonthsParse,llc);return-1!==ii?ii:null}else{ii=indexOf.call(this._longMonthsParse,llc);if(-1!==ii){return ii}ii=indexOf.call(this._shortMonthsParse,llc);return-1!==ii?ii:null}}}function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(this._monthsParseExact){return handleStrictParse$1.call(this,monthName,format,strict)}if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[]}for(i=0;12>i;i++){mom=createUTC([2e3,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp("^"+this.months(mom,"").replace(".","")+"$","i");this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(mom,"").replace(".","")+"$","i")}if(!strict&&!this._monthsParse[i]){regex="^"+this.months(mom,"")+"|^"+this.monthsShort(mom,"");this._monthsParse[i]=new RegExp(regex.replace(".",""),"i")}if(strict&&"MMMM"===format&&this._longMonthsParse[i].test(monthName)){return i}else if(strict&&"MMM"===format&&this._shortMonthsParse[i].test(monthName)){return i}else if(!strict&&this._monthsParse[i].test(monthName)){return i}}}function setMonth(mom,value){var dayOfMonth;if(!mom.isValid()){return mom}if("string"===typeof value){if(/^\d+$/.test(value)){value=toInt(value)}else{value=mom.localeData().monthsParse(value);if(!isNumber(value)){return mom}}}dayOfMonth=_Mathmin(mom.date(),daysInMonth(mom.year(),value));mom._d["set"+(mom._isUTC?"UTC":"")+"Month"](value,dayOfMonth);return mom}function getSetMonth(value){if(null!=value){setMonth(this,value);hooks.updateOffset(this,!0);return this}else{return get$1(this,"Month")}}function getDaysInMonth(){return daysInMonth(this.year(),this.month())}function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,"_monthsRegex")){computeMonthsParse.call(this)}if(isStrict){return this._monthsShortStrictRegex}else{return this._monthsShortRegex}}else{if(!hasOwnProp(this,"_monthsShortRegex")){this._monthsShortRegex=matchWord}return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex}}function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,"_monthsRegex")){computeMonthsParse.call(this)}if(isStrict){return this._monthsStrictRegex}else{return this._monthsRegex}}else{if(!hasOwnProp(this,"_monthsRegex")){this._monthsRegex=matchWord}return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex}}function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length}var shortPieces=[],longPieces=[],mixedPieces=[],i,mom;for(i=0;12>i;i++){mom=createUTC([2e3,i]);shortPieces.push(this.monthsShort(mom,""));longPieces.push(this.months(mom,""));mixedPieces.push(this.months(mom,""));mixedPieces.push(this.monthsShort(mom,""))}shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;12>i;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i])}for(i=0;24>i;i++){mixedPieces[i]=regexEscape(mixedPieces[i])}this._monthsRegex=new RegExp("^("+mixedPieces.join("|")+")","i");this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp("^("+longPieces.join("|")+")","i");this._monthsShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i")}_exports.$month={daysInMonth:daysInMonth,defaultLocaleMonths:defaultLocaleMonths,localeMonths:localeMonths,defaultLocaleMonthsShort:defaultLocaleMonthsShort,localeMonthsShort:localeMonthsShort,localeMonthsParse:localeMonthsParse,setMonth:setMonth,getSetMonth:getSetMonth,getDaysInMonth:getDaysInMonth,monthsShortRegex:monthsShortRegex,monthsRegex:monthsRegex};function checkOverflow(m){var overflow,a=m._a;if(a&&-2===getParsingFlags(m).overflow){overflow=0>a[MONTH]||11<a[MONTH]?MONTH:1>a[DATE]||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:0>a[HOUR]||24<a[HOUR]||24===a[HOUR]&&(0!==a[MINUTE]||0!==a[SECOND]||0!==a[MILLISECOND])?HOUR:0>a[MINUTE]||59<a[MINUTE]?MINUTE:0>a[SECOND]||59<a[SECOND]?SECOND:0>a[MILLISECOND]||999<a[MILLISECOND]?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE}if(getParsingFlags(m)._overflowWeeks&&-1===overflow){overflow=WEEK}if(getParsingFlags(m)._overflowWeekday&&-1===overflow){overflow=WEEKDAY}getParsingFlags(m).overflow=overflow}return m}_exports.$checkOverflow={default:checkOverflow};var mathAbs=_Mathabs;function abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this}_exports.$abs={abs:abs};var ordering=["year","quarter","month","week","day","hour","minute","second","millisecond"];function isDurationValid(m){for(var key in m){if(!(-1!==indexOf.call(ordering,key)&&(null==m[key]||!isNaN(m[key])))){return!1}}for(var unitHasDecimal=!1,i=0;i<ordering.length;++i){if(m[ordering[i]]){if(unitHasDecimal){return!1}if(parseFloat(m[ordering[i]])!==toInt(m[ordering[i]])){unitHasDecimal=!0}}}return!0}function isValid$2(){return this._isValid}function createInvalid$1(){return createDuration(NaN)}_exports.$valid$1={default:isDurationValid,isValid:isValid$2,createInvalid:createInvalid$1};function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._isValid=isDurationValid(normalizedInput);this._milliseconds=+milliseconds+1e3*seconds+6e4*minutes+60*(60*(1e3*hours));this._days=+days+7*weeks;this._months=+months+3*quarters+12*years;this._data={};this._locale=getLocale();this._bubble()}function isDuration(obj){return obj instanceof Duration}_exports.$constructor={Duration:Duration,isDuration:isDuration};function absRound(number){if(0>number){return-1*_Mathround(-1*number)}else{return _Mathround(number)}}_exports.$absRound={default:absRound};function createAdder(direction,name){return function(val,period){var dur,tmp;if(null!==period&&!isNaN(+period)){deprecateSimple(name,"moment()."+name+"(period, number) is deprecated. Please use moment()."+name+"(number, period). "+"See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");tmp=val;val=period;period=tmp}val="string"===typeof val?+val:val;dur=createDuration(val,period);addSubtract(this,dur,direction);return this}}function addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=absRound(duration._days),months=absRound(duration._months);if(!mom.isValid()){return}updateOffset=null==updateOffset?!0:updateOffset;if(months){setMonth(mom,get$1(mom,"Month")+months*isAdding)}if(days){set$1(mom,"Date",get$1(mom,"Date")+days*isAdding)}if(milliseconds){mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding)}if(updateOffset){hooks.updateOffset(mom,days||months)}}var add$1=createAdder(1,"add");_exports.add$2=add$1;var subtract=createAdder(-1,"subtract");_exports.subtract$1=subtract;_exports.$addSubtract$1={addSubtract:addSubtract,add:add$1,subtract:subtract};function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset(),sign="+";if(0>offset){offset=-offset;sign="-"}return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~offset%60,2)})}offset("Z",":");offset("ZZ","");addRegexToken("Z",matchShortOffset);addRegexToken("ZZ",matchShortOffset);addParseToken(["Z","ZZ"],function(input,array,config){config._useUTC=!0;config._tzm=offsetFromString(matchShortOffset,input)});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=(string||"").match(matcher);if(null===matches){return null}var chunk=matches[matches.length-1]||[],parts=(chunk+"").match(chunkOffset)||["-",0,0],minutes=+(60*parts[1])+toInt(parts[2]);return 0===minutes?0:"+"===parts[0]?minutes:-minutes}function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?input.valueOf():createLocal(input).valueOf())-res.valueOf();res._d.setTime(res._d.valueOf()+diff);hooks.updateOffset(res,!1);return res}else{return createLocal(input).local()}}function getDateOffset(m){return 15*-_Mathround(m._d.getTimezoneOffset()/15)}hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime,keepMinutes){var offset=this._offset||0,localAdjust;if(!this.isValid()){return null!=input?this:NaN}if(null!=input){if("string"===typeof input){input=offsetFromString(matchShortOffset,input);if(null===input){return this}}else if(16>_Mathabs(input)&&!keepMinutes){input=60*input}if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this)}this._offset=input;this._isUTC=!0;if(null!=localAdjust){this.add(localAdjust,"m")}if(offset!==input){if(!keepLocalTime||this._changeInProgress){addSubtract(this,createDuration(input-offset,"m"),1,!1)}else if(!this._changeInProgress){this._changeInProgress=!0;hooks.updateOffset(this,!0);this._changeInProgress=null}}return this}else{return this._isUTC?offset:getDateOffset(this)}}function getSetZone(input,keepLocalTime){if(null!=input){if("string"!==typeof input){input=-input}this.utcOffset(input,keepLocalTime);return this}else{return-this.utcOffset()}}function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime)}function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=!1;if(keepLocalTime){this.subtract(getDateOffset(this),"m")}}return this}function setOffsetToParsedOffset(){if(null!=this._tzm){this.utcOffset(this._tzm,!1,!0)}else if("string"===typeof this._i){var tZone=offsetFromString(matchOffset,this._i);if(null!=tZone){this.utcOffset(tZone)}else{this.utcOffset(0,!0)}}return this}function hasAlignedHourOffset(input){if(!this.isValid()){return!1}input=input?createLocal(input).utcOffset():0;return 0===(this.utcOffset()-input)%60}function isDaylightSavingTime(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted}var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?createUTC(c._a):createLocal(c._a);this._isDSTShifted=this.isValid()&&0<compareArrays(c._a,other.toArray())}else{this._isDSTShifted=!1}return this._isDSTShifted}function isLocal(){return this.isValid()?!this._isUTC:!1}function isUtcOffset(){return this.isValid()?this._isUTC:!1}function isUtc(){return this.isValid()?this._isUTC&&0===this._offset:!1}_exports.$offset={cloneWithOffset:cloneWithOffset,getSetOffset:getSetOffset,getSetZone:getSetZone,setOffsetToUTC:setOffsetToUTC,setOffsetToLocal:setOffsetToLocal,setOffsetToParsedOffset:setOffsetToParsedOffset,hasAlignedHourOffset:hasAlignedHourOffset,isDaylightSavingTime:isDaylightSavingTime,isDaylightSavingTimeShifted:isDaylightSavingTimeShifted,isLocal:isLocal,isUtcOffset:isUtcOffset,isUtc:isUtc};var aspNetRegex=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,isoRegex=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months}}else if(isNumber(input)){duration={};if(key){duration[key]=input}else{duration.milliseconds=input}}else if(!!(match=aspNetRegex.exec(input))){sign="-"===match[1]?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(absRound(1e3*match[MILLISECOND]))*sign}}else if(!!(match=isoRegex.exec(input))){sign="-"===match[1]?-1:"+"===match[1]?1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)}}else if(null==duration){duration={}}else if("object"===typeof duration&&("from"in duration||"to"in duration)){diffRes=momentsDifference(createLocal(duration.from),createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months}ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,"_locale")){ret._locale=input._locale}return ret}createDuration.fn=Duration.prototype;createDuration.invalid=createInvalid$1;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(",","."));return(isNaN(res)?0:res)*sign}function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0,months:other.month()-base.month()+12*(other.year()-base.year())};if(base.clone().add(res.months,"M").isAfter(other)){--res.months}res.milliseconds=+other-+base.clone().add(res.months,"M");return res}function momentsDifference(base,other){var res;if(!(base.isValid()&&other.isValid())){return{milliseconds:0,months:0}}other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other)}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months}return res}_exports.$create={createDuration:createDuration};function addSubtract$2(duration,input,value,direction){var other=createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble()}function add$2(input,value){return addSubtract$2(this,input,value,1)}function subtract$1(input,value){return addSubtract$2(this,input,value,-1)}_exports.$addSubtract={add:add$2,subtract:subtract$1};function absCeil(number){if(0>number){return _Mathfloor(number)}else{return _Mathceil(number)}}_exports.$absCeil={default:absCeil};function bubble(){var milliseconds=this._milliseconds,days=this._days,months=this._months,data=this._data,seconds,minutes,hours,years,monthsFromDays;if(!(0<=milliseconds&&0<=days&&0<=months||0>=milliseconds&&0>=days&&0>=months)){milliseconds+=864e5*absCeil(monthsToDays(months)+days);days=0;months=0}data.milliseconds=milliseconds%1e3;seconds=absFloor(milliseconds/1e3);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this}function daysToMonths(days){return 4800*days/146097}function monthsToDays(months){return 146097*months/4800}_exports.$bubble={bubble:bubble,daysToMonths:daysToMonths,monthsToDays:monthsToDays};function as(units){if(!this.isValid()){return NaN}var days,months,milliseconds=this._milliseconds;units=normalizeUnits(units);if("month"===units||"year"===units){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return"month"===units?months:months/12}else{days=this._days+_Mathround(monthsToDays(this._months));switch(units){case"week":return days/7+milliseconds/6048e5;case"day":return days+milliseconds/864e5;case"hour":return 24*days+milliseconds/36e5;case"minute":return 1440*days+milliseconds/6e4;case"second":return 86400*days+milliseconds/1e3;case"millisecond":return _Mathfloor(864e5*days)+milliseconds;default:throw new Error("Unknown unit "+units);}}}function valueOf(){if(!this.isValid()){return NaN}return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*toInt(this._months/12)}function makeAs(alias){return function(){return this.as(alias)}}var asMilliseconds=makeAs("ms");_exports.asMilliseconds=asMilliseconds;var asSeconds=makeAs("s");_exports.asSeconds=asSeconds;var asMinutes=makeAs("m");_exports.asMinutes=asMinutes;var asHours=makeAs("h");_exports.asHours=asHours;var asDays=makeAs("d");_exports.asDays=asDays;var asWeeks=makeAs("w");_exports.asWeeks=asWeeks;var asMonths=makeAs("M");_exports.asMonths=asMonths;var asYears=makeAs("y");_exports.asYears=asYears;_exports.$as={as:as,valueOf:valueOf,asMilliseconds:asMilliseconds,asSeconds:asSeconds,asMinutes:asMinutes,asHours:asHours,asDays:asDays,asWeeks:asWeeks,asMonths:asMonths,asYears:asYears};function clone(){return createDuration(this)}_exports.$clone={clone:clone};function get$2(units){units=normalizeUnits(units);return this.isValid()?this[units+"s"]():NaN}function makeGetter(name){return function(){return this.isValid()?this._data[name]:NaN}}var milliseconds=makeGetter("milliseconds");_exports.milliseconds=milliseconds;var seconds=makeGetter("seconds");_exports.seconds=seconds;var minutes=makeGetter("minutes");_exports.minutes=minutes;var hours=makeGetter("hours");_exports.hours=hours;var days=makeGetter("days");_exports.days=days;var months=makeGetter("months");_exports.months=months;var years=makeGetter("years");_exports.years=years;function weeks(){return absFloor(this.days()/7)}_exports.$get={get:get$2,milliseconds:milliseconds,seconds:seconds,minutes:minutes,hours:hours,days:days,months:months,years:years,weeks:weeks};var round=_Mathround,thresholds={ss:44,s:45,m:45,h:22,d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture)}function relativeTime$1(posNegDuration,withoutSuffix,locale){var duration=createDuration(posNegDuration).abs(),seconds=round(duration.as("s")),minutes=round(duration.as("m")),hours=round(duration.as("h")),days=round(duration.as("d")),months=round(duration.as("M")),years=round(duration.as("y")),a=seconds<=thresholds.ss&&["s",seconds]||seconds<thresholds.s&&["ss",seconds]||1>=minutes&&["m"]||minutes<thresholds.m&&["mm",minutes]||1>=hours&&["h"]||hours<thresholds.h&&["hh",hours]||1>=days&&["d"]||days<thresholds.d&&["dd",days]||1>=months&&["M"]||months<thresholds.M&&["MM",months]||1>=years&&["y"]||["yy",years];a[2]=withoutSuffix;a[3]=0<+posNegDuration;a[4]=locale;return substituteTimeAgo.apply(null,a)}function getSetRelativeTimeRounding(roundingFunction){if(roundingFunction===void 0){return round}if("function"===typeof roundingFunction){round=roundingFunction;return!0}return!1}function getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===void 0){return!1}if(limit===void 0){return thresholds[threshold]}thresholds[threshold]=limit;if("s"===threshold){thresholds.ss=limit-1}return!0}function humanize(withSuffix){if(!this.isValid()){return this.localeData().invalidDate()}var locale=this.localeData(),output=relativeTime$1(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output)}return locale.postformat(output)}_exports.$humanize={getSetRelativeTimeRounding:getSetRelativeTimeRounding,getSetRelativeTimeThreshold:getSetRelativeTimeThreshold,humanize:humanize};var abs$2=_Mathabs;function sign(x){return(0<x)-(0>x)||+x}function toISOString(){if(!this.isValid()){return this.localeData().invalidDate()}var seconds=abs$2(this._milliseconds)/1e3,days=abs$2(this._days),months=abs$2(this._months),minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);months%=12;var Y=years,M=months,D=days,h=hours,m=minutes,s=seconds?seconds.toFixed(3).replace(/\.?0+$/,""):"",total=this.asSeconds();if(!total){return"P0D"}var totalSign=0>total?"-":"",ymSign=sign(this._months)!==sign(total)?"-":"",daysSign=sign(this._days)!==sign(total)?"-":"",hmsSign=sign(this._milliseconds)!==sign(total)?"-":"";return totalSign+"P"+(Y?ymSign+Y+"Y":"")+(M?ymSign+M+"M":"")+(D?daysSign+D+"D":"")+(h||m||s?"T":"")+(h?hmsSign+h+"H":"")+(m?hmsSign+m+"M":"")+(s?hmsSign+s+"S":"")}_exports.$isoString={toISOString:toISOString};function locale(key){var newLocaleData;if(key===void 0){return this._locale._abbr}else{newLocaleData=getLocale(key);if(null!=newLocaleData){this._locale=newLocaleData}return this}}var lang=deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(key){if(key===void 0){return this.localeData()}else{return this.locale(key)}});_exports.lang=lang;function localeData(){return this._locale}_exports.$locale$1={locale:locale,lang:lang,localeData:localeData};var proto$1=Duration.prototype;proto$1.isValid=isValid$2;proto$1.abs=abs;proto$1.add=add$2;proto$1.subtract=subtract$1;proto$1.as=as;proto$1.asMilliseconds=asMilliseconds;proto$1.asSeconds=asSeconds;proto$1.asMinutes=asMinutes;proto$1.asHours=asHours;proto$1.asDays=asDays;proto$1.asWeeks=asWeeks;proto$1.asMonths=asMonths;proto$1.asYears=asYears;proto$1.valueOf=valueOf;proto$1._bubble=bubble;proto$1.clone=clone;proto$1.get=get$2;proto$1.milliseconds=milliseconds;proto$1.seconds=seconds;proto$1.minutes=minutes;proto$1.hours=hours;proto$1.days=days;proto$1.weeks=weeks;proto$1.months=months;proto$1.years=years;proto$1.humanize=humanize;proto$1.toISOString=toISOString;proto$1.toString=toISOString;proto$1.toJSON=toISOString;proto$1.locale=locale;proto$1.localeData=localeData;proto$1.toIsoString=deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",toISOString);proto$1.lang=lang;_exports.$duration={createDuration:createDuration,isDuration:isDuration,getSetRelativeTimeRounding:getSetRelativeTimeRounding,getSetRelativeTimeThreshold:getSetRelativeTimeThreshold};function preParsePostFormat(string){return string}_exports.$prePostFormat={preParsePostFormat:preParsePostFormat};var proto$2=Locale.prototype;proto$2.calendar=calendar;proto$2.longDateFormat=longDateFormat;proto$2.invalidDate=invalidDate;proto$2.ordinal=ordinal;proto$2.preparse=preParsePostFormat;proto$2.postformat=preParsePostFormat;proto$2.relativeTime=relativeTime;proto$2.pastFuture=pastFuture;proto$2.set=set$2;proto$2.months=localeMonths;proto$2.monthsShort=localeMonthsShort;proto$2.monthsParse=localeMonthsParse;proto$2.monthsRegex=monthsRegex;proto$2.monthsShortRegex=monthsShortRegex;proto$2.week=localeWeek;proto$2.firstDayOfYear=localeFirstDayOfYear;proto$2.firstDayOfWeek=localeFirstDayOfWeek;proto$2.weekdays=localeWeekdays;proto$2.weekdaysMin=localeWeekdaysMin;proto$2.weekdaysShort=localeWeekdaysShort;proto$2.weekdaysParse=localeWeekdaysParse;proto$2.weekdaysRegex=weekdaysRegex;proto$2.weekdaysShortRegex=weekdaysShortRegex;proto$2.weekdaysMinRegex=weekdaysMinRegex;proto$2.isPM=localeIsPM;proto$2.meridiem=localeMeridiem;getSetGlobalLocale("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=1===toInt(number%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return number+output}});function get$4(format,index,field,setter){var locale=getLocale(),utc=createUTC().set(setter,index);return locale[field](utc,format)}function listMonthsImpl(format,index,field){if(isNumber(format)){index=format;format=void 0}format=format||"";if(null!=index){return get$4(format,index,field,"month")}var i,out=[];for(i=0;12>i;i++){out[i]=get$4(format,i,field,"month")}return out}function listWeekdaysImpl(localeSorted,format,index,field){if("boolean"===typeof localeSorted){if(isNumber(format)){index=format;format=void 0}format=format||""}else{format=localeSorted;index=format;localeSorted=!1;if(isNumber(format)){index=format;format=void 0}format=format||""}var locale=getLocale(),shift=localeSorted?locale._week.dow:0;if(null!=index){return get$4(format,(index+shift)%7,field,"day")}var i,out=[];for(i=0;7>i;i++){out[i]=get$4(format,(i+shift)%7,field,"day")}return out}function listMonths(format,index){return listMonthsImpl(format,index,"months")}function listMonthsShort(format,index){return listMonthsImpl(format,index,"monthsShort")}function listWeekdays(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdays")}function listWeekdaysShort(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdaysShort")}function listWeekdaysMin(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdaysMin")}_exports.$lists={listMonths:listMonths,listMonthsShort:listMonthsShort,listWeekdays:listWeekdays,listWeekdaysShort:listWeekdaysShort,listWeekdaysMin:listWeekdaysMin};hooks.lang=deprecate("moment.lang is deprecated. Use moment.locale instead.",getSetGlobalLocale);hooks.langData=deprecate("moment.langData is deprecated. Use moment.localeData instead.",getLocale);_exports.$locale={getSetGlobalLocale:getSetGlobalLocale,defineLocale:defineLocale,updateLocale:updateLocale,getLocale:getLocale,listLocales:listLocales,listMonths:listMonths,listMonthsShort:listMonthsShort,listWeekdays:listWeekdays,listWeekdaysShort:listWeekdaysShort,listWeekdaysMin:listWeekdaysMin};function getCalendarFormat(myMoment,now){var diff=myMoment.diff(now,"days",!0);return-6>diff?"sameElse":-1>diff?"lastWeek":0>diff?"lastDay":1>diff?"sameDay":2>diff?"nextDay":7>diff?"nextWeek":"sameElse"}function calendar$2(time,formats){var now=time||createLocal(),sod=cloneWithOffset(now,this).startOf("day"),format=hooks.calendarFormat(this,sod)||"sameElse",output=formats&&(isFunction(formats[format])?formats[format].call(this,now):formats[format]);return this.format(output||this.localeData().calendar(format,this,createLocal(now)))}_exports.$calendar$1={getCalendarFormat:getCalendarFormat,calendar:calendar$2};function clone$2(){return new Moment(this)}_exports.$clone$1={clone:clone$2};function isAfter(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return!1}units=normalizeUnits(!isUndefined(units)?units:"millisecond");if("millisecond"===units){return this.valueOf()>localInput.valueOf()}else{return localInput.valueOf()<this.clone().startOf(units).valueOf()}}function isBefore(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return!1}units=normalizeUnits(!isUndefined(units)?units:"millisecond");if("millisecond"===units){return this.valueOf()<localInput.valueOf()}else{return this.clone().endOf(units).valueOf()<localInput.valueOf()}}function isBetween(from,to,units,inclusivity){inclusivity=inclusivity||"()";return("("===inclusivity[0]?this.isAfter(from,units):!this.isBefore(from,units))&&(")"===inclusivity[1]?this.isBefore(to,units):!this.isAfter(to,units))}function isSame(input,units){var localInput=isMoment(input)?input:createLocal(input),inputMs;if(!(this.isValid()&&localInput.isValid())){return!1}units=normalizeUnits(units||"millisecond");if("millisecond"===units){return this.valueOf()===localInput.valueOf()}else{inputMs=localInput.valueOf();return this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf()}}function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units)}function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units)}_exports.$compare={isAfter:isAfter,isBefore:isBefore,isBetween:isBetween,isSame:isSame,isSameOrAfter:isSameOrAfter,isSameOrBefore:isSameOrBefore};function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}_exports.$creationData={creationData:creationData};function diff(input,units,asFloat){var that,zoneDelta,output;if(!this.isValid()){return NaN}that=cloneWithOffset(input,this);if(!that.isValid()){return NaN}zoneDelta=6e4*(that.utcOffset()-this.utcOffset());units=normalizeUnits(units);switch(units){case"year":output=monthDiff(this,that)/12;break;case"month":output=monthDiff(this,that);break;case"quarter":output=monthDiff(this,that)/3;break;case"second":output=(this-that)/1e3;break;case"minute":output=(this-that)/6e4;break;case"hour":output=(this-that)/36e5;break;case"day":output=(this-that-zoneDelta)/864e5;break;case"week":output=(this-that-zoneDelta)/6048e5;break;default:output=this-that;}return asFloat?output:absFloor(output)}function monthDiff(a,b){var wholeMonthDiff=12*(b.year()-a.year())+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,"months"),anchor2,adjust;if(0>b-anchor){anchor2=a.clone().add(wholeMonthDiff-1,"months");adjust=(b-anchor)/(anchor-anchor2)}else{anchor2=a.clone().add(wholeMonthDiff+1,"months");adjust=(b-anchor)/(anchor2-anchor)}return-(wholeMonthDiff+adjust)||0}_exports.$diff={diff:diff};hooks.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";hooks.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function toString(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function toISOString$1(keepOffset){if(!this.isValid()){return null}var utc=!0!==keepOffset,m=utc?this.clone().utc():this;if(0>m.year()||9999<m.year()){return formatMoment(m,utc?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")}if(isFunction(Date.prototype.toISOString)){if(utc){return this.toDate().toISOString()}else{return new Date(this.valueOf()+1e3*(60*this.utcOffset())).toISOString().replace("Z",formatMoment(m,"Z"))}}return formatMoment(m,utc?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function inspect(){if(!this.isValid()){return"moment.invalid(/* "+this._i+" */)"}var func="moment",zone="";if(!this.isLocal()){func=0===this.utcOffset()?"moment.utc":"moment.parseZone";zone="Z"}var prefix="["+func+"(\"]",year=0<=this.year()&&9999>=this.year()?"YYYY":"YYYYYY",suffix=zone+"[\")]";return this.format(prefix+year+"-MM-DD[T]HH:mm:ss.SSS"+suffix)}function format$1(inputString){if(!inputString){inputString=this.isUtc()?hooks.defaultFormatUtc:hooks.defaultFormat}var output=formatMoment(this,inputString);return this.localeData().postformat(output)}_exports.$format$1={toString:toString,toISOString:toISOString$1,inspect:inspect,format:format$1};function from(time,withoutSuffix){if(this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())){return createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix)}else{return this.localeData().invalidDate()}}function fromNow(withoutSuffix){return this.from(createLocal(),withoutSuffix)}_exports.$from={from:from,fromNow:fromNow};var prototypeMin=deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other<this?this:other}else{return createInvalid()}});_exports.prototypeMin=prototypeMin;var prototypeMax=deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other>this?this:other}else{return createInvalid()}});_exports.prototypeMax=prototypeMax;function pickBy(fn,moments){var res,i;if(1===moments.length&&isArray(moments[0])){moments=moments[0]}if(!moments.length){return createLocal()}res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i]}}return res}function min(){var args=[].slice.call(arguments,0);return pickBy("isBefore",args)}function max(){var args=[].slice.call(arguments,0);return pickBy("isAfter",args)}_exports.$minMax={prototypeMin:prototypeMin,prototypeMax:prototypeMax,min:min,max:max};var now=function(){return Date.now?Date.now():+new Date};_exports.now$1=_exports.now=now;_exports.$now={now:now};function to(time,withoutSuffix){if(this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())){return createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix)}else{return this.localeData().invalidDate()}}function toNow(withoutSuffix){return this.to(createLocal(),withoutSuffix)}_exports.$to={to:to,toNow:toNow};function startOf(units){units=normalizeUnits(units);switch(units){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0);}if("week"===units){this.weekday(0)}if("isoWeek"===units){this.isoWeekday(1)}if("quarter"===units){this.month(3*_Mathfloor(this.month()/3))}return this}function endOf(units){units=normalizeUnits(units);if(units===void 0||"millisecond"===units){return this}if("date"===units){units="day"}return this.startOf(units).add(1,"isoWeek"===units?"week":units).subtract(1,"ms")}_exports.$startEndOf={startOf:startOf,endOf:endOf};function valueOf$1(){return this._d.valueOf()-6e4*(this._offset||0)}function unix(){return _Mathfloor(this.valueOf()/1e3)}function toDate(){return new Date(this.valueOf())}function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()]}function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()}}function toJSON(){return this.isValid()?this.toISOString():null}_exports.$toType={valueOf:valueOf$1,unix:unix,toDate:toDate,toArray:toArray,toObject:toObject,toJSON:toJSON};function isValid$3(){return isValid$1(this)}function parsingFlags$1(){return extend({},getParsingFlags(this))}function invalidAt(){return getParsingFlags(this).overflow}_exports.$valid$2={isValid:isValid$3,parsingFlags:parsingFlags$1,invalidAt:invalidAt};addFormatToken(0,["gg",2],0,function(){return this.weekYear()%100});addFormatToken(0,["GG",2],0,function(){return this.isoWeekYear()%100});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter)}addWeekYearFormatToken("gggg","weekYear");addWeekYearFormatToken("ggggg","weekYear");addWeekYearFormatToken("GGGG","isoWeekYear");addWeekYearFormatToken("GGGGG","isoWeekYear");addUnitAlias("weekYear","gg");addUnitAlias("isoWeekYear","GG");addUnitPriority("weekYear",1);addUnitPriority("isoWeekYear",1);addRegexToken("G",matchSigned);addRegexToken("g",matchSigned);addRegexToken("GG",match1to2,match2);addRegexToken("gg",match1to2,match2);addRegexToken("GGGG",match1to4,match4);addRegexToken("gggg",match1to4,match4);addRegexToken("GGGGG",match1to6,match6);addRegexToken("ggggg",match1to6,match6);addWeekParseToken(["gggg","ggggg","GGGG","GGGGG"],function(input,week,config,token){week[token.substr(0,2)]=toInt(input)});addWeekParseToken(["gg","GG"],function(input,week,config,token){week[token]=hooks.parseTwoDigitYear(input)});function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4)}function getISOWeeksInYear(){return weeksInYear(this.year(),1,4)}function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy)}function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(null==input){return weekOfYear(this,dow,doy).year}else{weeksTarget=weeksInYear(input,dow,doy);if(week>weeksTarget){week=weeksTarget}return setWeekAll.call(this,input,week,weekday,dow,doy)}}function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this}_exports.$weekYear={getSetWeekYear:getSetWeekYear,getSetISOWeekYear:getSetISOWeekYear,getISOWeeksInYear:getISOWeeksInYear,getWeeksInYear:getWeeksInYear};addFormatToken("Q",0,"Qo","quarter");addUnitAlias("quarter","Q");addUnitPriority("quarter",7);addRegexToken("Q",match1);addParseToken("Q",function(input,array){array[MONTH]=3*(toInt(input)-1)});function getSetQuarter(input){return null==input?_Mathceil((this.month()+1)/3):this.month(3*(input-1)+this.month()%3)}_exports.$quarter={getSetQuarter:getSetQuarter};addFormatToken("D",["DD",2],"Do","date");addUnitAlias("date","D");addUnitPriority("date",9);addRegexToken("D",match1to2);addRegexToken("DD",match1to2,match2);addRegexToken("Do",function(isStrict,locale){return isStrict?locale._dayOfMonthOrdinalParse||locale._ordinalParse:locale._dayOfMonthOrdinalParseLenient});addParseToken(["D","DD"],DATE);addParseToken("Do",function(input,array){array[DATE]=toInt(input.match(match1to2)[0])});var getSetDayOfMonth=makeGetSet("Date",!0);_exports.getSetDayOfMonth=getSetDayOfMonth;_exports.$dayOfMonth={getSetDayOfMonth:getSetDayOfMonth};addFormatToken("DDD",["DDDD",3],"DDDo","dayOfYear");addUnitAlias("dayOfYear","DDD");addUnitPriority("dayOfYear",4);addRegexToken("DDD",match1to3);addRegexToken("DDDD",match3);addParseToken(["DDD","DDDD"],function(input,array,config){config._dayOfYear=toInt(input)});function getSetDayOfYear(input){var dayOfYear=_Mathround((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==input?dayOfYear:this.add(input-dayOfYear,"d")}_exports.$dayOfYear={getSetDayOfYear:getSetDayOfYear};addFormatToken("m",["mm",2],0,"minute");addUnitAlias("minute","m");addUnitPriority("minute",14);addRegexToken("m",match1to2);addRegexToken("mm",match1to2,match2);addParseToken(["m","mm"],MINUTE);var getSetMinute=makeGetSet("Minutes",!1);_exports.getSetMinute=getSetMinute;_exports.$minute={getSetMinute:getSetMinute};addFormatToken("s",["ss",2],0,"second");addUnitAlias("second","s");addUnitPriority("second",15);addRegexToken("s",match1to2);addRegexToken("ss",match1to2,match2);addParseToken(["s","ss"],SECOND);var getSetSecond=makeGetSet("Seconds",!1);_exports.getSetSecond=getSetSecond;_exports.$second={getSetSecond:getSetSecond};addFormatToken("S",0,0,function(){return~~(this.millisecond()/100)});addFormatToken(0,["SS",2],0,function(){return~~(this.millisecond()/10)});addFormatToken(0,["SSS",3],0,"millisecond");addFormatToken(0,["SSSS",4],0,function(){return 10*this.millisecond()});addFormatToken(0,["SSSSS",5],0,function(){return 100*this.millisecond()});addFormatToken(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()});addFormatToken(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()});addFormatToken(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()});addFormatToken(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()});addUnitAlias("millisecond","ms");addUnitPriority("millisecond",16);addRegexToken("S",match1to3,match1);addRegexToken("SS",match1to3,match2);addRegexToken("SSS",match1to3,match3);var token$1;for(token$1="SSSS";9>=token$1.length;token$1+="S"){addRegexToken(token$1,matchUnsigned)}function parseMs(input,array){array[MILLISECOND]=toInt(1e3*("0."+input))}for(token$1="S";9>=token$1.length;token$1+="S"){addParseToken(token$1,parseMs)}var getSetMillisecond=makeGetSet("Milliseconds",!1);_exports.getSetMillisecond=getSetMillisecond;_exports.$millisecond={getSetMillisecond:getSetMillisecond};addFormatToken("z",0,0,"zoneAbbr");addFormatToken("zz",0,0,"zoneName");function getZoneAbbr(){return this._isUTC?"UTC":""}function getZoneName(){return this._isUTC?"Coordinated Universal Time":""}_exports.$timezone={getZoneAbbr:getZoneAbbr,getZoneName:getZoneName};var proto$3=Moment.prototype;_exports.$prototypeDefault=_exports.momentPrototype=proto$3;proto$3.add=add$1;proto$3.calendar=calendar$2;proto$3.clone=clone$2;proto$3.diff=diff;proto$3.endOf=endOf;proto$3.format=format$1;proto$3.from=from;proto$3.fromNow=fromNow;proto$3.to=to;proto$3.toNow=toNow;proto$3.get=stringGet;proto$3.invalidAt=invalidAt;proto$3.isAfter=isAfter;proto$3.isBefore=isBefore;proto$3.isBetween=isBetween;proto$3.isSame=isSame;proto$3.isSameOrAfter=isSameOrAfter;proto$3.isSameOrBefore=isSameOrBefore;proto$3.isValid=isValid$3;proto$3.lang=lang;proto$3.locale=locale;proto$3.localeData=localeData;proto$3.max=prototypeMax;proto$3.min=prototypeMin;proto$3.parsingFlags=parsingFlags$1;proto$3.set=stringSet;proto$3.startOf=startOf;proto$3.subtract=subtract;proto$3.toArray=toArray;proto$3.toObject=toObject;proto$3.toDate=toDate;proto$3.toISOString=toISOString$1;proto$3.inspect=inspect;proto$3.toJSON=toJSON;proto$3.toString=toString;proto$3.unix=unix;proto$3.valueOf=valueOf$1;proto$3.creationData=creationData;proto$3.year=getSetYear;proto$3.isLeapYear=getIsLeapYear;proto$3.weekYear=getSetWeekYear;proto$3.isoWeekYear=getSetISOWeekYear;proto$3.quarter=proto$3.quarters=getSetQuarter;proto$3.month=getSetMonth;proto$3.daysInMonth=getDaysInMonth;proto$3.week=proto$3.weeks=getSetWeek;proto$3.isoWeek=proto$3.isoWeeks=getSetISOWeek;proto$3.weeksInYear=getWeeksInYear;proto$3.isoWeeksInYear=getISOWeeksInYear;proto$3.date=getSetDayOfMonth;proto$3.day=proto$3.days=getSetDayOfWeek;proto$3.weekday=getSetLocaleDayOfWeek;proto$3.isoWeekday=getSetISODayOfWeek;proto$3.dayOfYear=getSetDayOfYear;proto$3.hour=proto$3.hours=getSetHour;proto$3.minute=proto$3.minutes=getSetMinute;proto$3.second=proto$3.seconds=getSetSecond;proto$3.millisecond=proto$3.milliseconds=getSetMillisecond;proto$3.utcOffset=getSetOffset;proto$3.utc=setOffsetToUTC;proto$3.local=setOffsetToLocal;proto$3.parseZone=setOffsetToParsedOffset;proto$3.hasAlignedHourOffset=hasAlignedHourOffset;proto$3.isDST=isDaylightSavingTime;proto$3.isLocal=isLocal;proto$3.isUtcOffset=isUtcOffset;proto$3.isUtc=isUtc;proto$3.isUTC=isUtc;proto$3.zoneAbbr=getZoneAbbr;proto$3.zoneName=getZoneName;proto$3.dates=deprecate("dates accessor is deprecated. Use date instead.",getSetDayOfMonth);proto$3.months=deprecate("months accessor is deprecated. Use month instead",getSetMonth);proto$3.years=deprecate("years accessor is deprecated. Use year instead",getSetYear);proto$3.zone=deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",getSetZone);proto$3.isDSTShifted=deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",isDaylightSavingTimeShifted);_exports.$prototype$2={default:proto$3};function createUnix(input){return createLocal(1e3*input)}function createInZone(){return createLocal.apply(null,arguments).parseZone()}_exports.$moment={now:now,min:min,max:max,isMoment:isMoment,createUTC:createUTC,createUnix:createUnix,createLocal:createLocal,createInZone:createInZone,createInvalid:createInvalid,momentPrototype:proto$3};addFormatToken("X",0,0,"unix");addFormatToken("x",0,0,"valueOf");addRegexToken("x",matchSigned);addRegexToken("X",matchTimestamp);addParseToken("X",function(input,array,config){config._d=new Date(1e3*parseFloat(input,10))});addParseToken("x",function(input,array,config){config._d=new Date(toInt(input))});_exports.$units={normalizeUnits:normalizeUnits};hooks.version="2.22.2";setHookCallback(createLocal);hooks.fn=proto$3;hooks.min=min;hooks.max=max;hooks.now=now;hooks.utc=createUTC;hooks.unix=createUnix;hooks.months=listMonths;hooks.isDate=isDate;hooks.locale=getSetGlobalLocale;hooks.invalid=createInvalid;hooks.duration=createDuration;hooks.isMoment=isMoment;hooks.weekdays=listWeekdays;hooks.parseZone=createInZone;hooks.localeData=getLocale;hooks.isDuration=isDuration;hooks.monthsShort=listMonthsShort;hooks.weekdaysMin=listWeekdaysMin;hooks.defineLocale=defineLocale;hooks.updateLocale=updateLocale;hooks.locales=listLocales;hooks.weekdaysShort=listWeekdaysShort;hooks.normalizeUnits=normalizeUnits;hooks.relativeTimeRounding=getSetRelativeTimeRounding;hooks.relativeTimeThreshold=getSetRelativeTimeThreshold;hooks.calendarFormat=getCalendarFormat;hooks.prototype=proto$3;hooks.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"};_exports.$moment$1={default:hooks};const $_documentContainer$15=document.createElement("template");$_documentContainer$15.setAttribute("style","display: none;");$_documentContainer$15.innerHTML=`<iron-iconset-svg size="24" name="papinpplc">
<svg><defs>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="place"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild($_documentContainer$15.content);class PaperInputPlace extends GestureEventListeners(PolymerElement){static get template(){return html`
      <style>
      :host {
        display: inline-block;
      }

      iron-icon {
        @apply --paper-input-place-icon-mixin;
      }

      #prefixicon {
        @apply --paper-input-place-prefix-icon-mixin;
      }

      #postfixicon {
        @apply --paper-input-place-postfix-icon-mixin;
      }

      iron-icon[hidden] {
        display: none !important;
      }

      /* paper-input styling */

      input {
        position: relative;
        /* to make a stacking context */
        outline: none;
        box-shadow: none;
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: bottom;

        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;

        @apply --paper-font-subhead;
        @apply --paper-input-container-input;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>
    <template is="dom-if" if="[[apiKey]]" restamp="true">
      <!-- 
        NOTE: the GoogleWebComponents collection has not been updated
        to support Polymer 2.0 as of 5/31/2017.  There is no estimated
        date at this time.

        For that reason this control is using iron-jsonp-library to load
        the google maps api instead of <google-maps-api>.  The url string 
        is the same as what would have been issued by the <google-maps-api> so
        even if that control is used elsewhere in your 1.x app, the api will
        not be loaded twice.
        -->
      <iron-jsonp-library id="ijpl" library-url="[[_gmapApiUrl]]" notify-event="map-api-load" on-map-api-load="_mapsApiLoaded"></iron-jsonp-library>
    </template>

    <paper-input-container id="container" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <iron-icon id="prefixicon" hidden\$="[[hideIcon]]" icon="papinpplc:place" slot="prefix"></iron-icon>

      <label hidden\$="[[!label]]" aria-hidden="true" for="pipIronInput" slot="label">[[label]]</label>

      <iron-input bind-value="{{_value}}" slot="input" class="input-element" id="locationsearch" invalid="{{invalid}}">
        <input id="nativeInput" disabled\$="[[disabled]]" inputmode="text" placeholder\$="[[placeholder]]" on-change="_onChange">
      </iron-input>

      <iron-icon id="postfixicon" icon="papinpplc:clear" slot="suffix" on-tap="_clearLocation"></iron-icon>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

    </paper-input-container>`}static get properties(){return{apiKey:{type:String,notify:!0},apiLoaded:{type:Boolean,notify:!0,value:!1,readOnly:!0},hideError:{type:Boolean,value:!1},hideIcon:{type:Boolean,value:!1},disabled:{type:Boolean,notify:!0,value:!1},_geocoder:{type:Object},searchCountryCode:{type:String,value:""},searchBounds:{type:Object},searchType:{type:String,value:""},errorMessage:{type:String,value:"Invalid - please select a place",notify:!0},invalid:{type:Boolean,notify:!0,readOnly:!0,value:!1},_invalid:{type:Boolean,value:!1},label:{type:String,notify:!0,value:""},placeholder:{type:String,notify:!0,value:""},latLng:{type:Object,notify:!0,readOnly:!0,value:function(){return{lat:0,lng:0}}},place:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},_places:{type:Object},required:{type:Boolean,notify:!0,value:!1},language:{type:String,value:""},minimizeApi:{type:Boolean,value:!1},value:{type:Object,notify:!0,observer:"_valueChanged"},_value:{type:String,notify:!0,value:"",observer:"_svalChanged"},_gmapApiUrl:{type:String,notify:!0,computed:"_computeUrl(apiKey,language,minimizeApi)"}}}static get observers(){return["_searchBiasChanged(searchCountryCode,searchBounds,searchBoundsStrict,searchType)"]}ready(){super.ready();var apiElement=this.querySelector("iron-jsonp-library");if(apiElement&&apiElement.libraryLoaded){this._mapsApiLoaded()}}_computeUrl(akey,lang,minApi){return akey?"https://maps.googleapis.com/maps/api/js?callback=%%callback%%&v=3.exp&libraries="+(minApi?"places":"drawing,geometry,places,visualization")+"&key="+akey+(lang?"&language="+lang:""):""}_mapsApiLoaded(){if(!this._geocoder&&!this._places&&this.$.locationsearch&&this.$.nativeInput){this._geocoder=new google.maps.Geocoder;this._places=new google.maps.places.Autocomplete(this.$.nativeInput,{});google.maps.event.addListener(this._places,"place_changed",this._onChangePlace.bind(this));this._setApiLoaded(!0);this._searchBiasChanged();this.dispatchEvent(new CustomEvent("api-loaded",{detail:{text:"Google api is ready"}}))}}_searchBiasChanged(){if(this.apiLoaded){if(this.searchBounds&&this.searchBounds.hasOwnProperty("east")&&this.searchBounds.hasOwnProperty("west")&&this.searchBounds.hasOwnProperty("north")&&this.searchBounds.hasOwnProperty("south")){this._places.setBounds(this.searchBounds)}else{this._places.setBounds()}if(this.searchCountryCode&&2==this.searchCountryCode.length){this._places.setComponentRestrictions({country:this.searchCountryCode.toString()})}else{this._places.setComponentRestrictions()}if(this.searchType&&["address","geocode","establishment","(regions)","(cities)"].includes(this.searchType)){this._places.setTypes([this.searchType.toString()])}else{this._places.setTypes([])}}}_valueChanged(newValue,oldValue){if(!oldValue||newValue.search!==oldValue.search||newValue.search!==this._value){this._value=newValue&&newValue.search?newValue.search:"";this._invalid=!newValue||!(newValue.place_id&&newValue.latLng&&newValue.latLng.lat&&newValue.latLng.lng);if(!this.hideError){this._setInvalid(this.required?this._invalid:this._invalid&&newValue&&newValue.search)}}}_svalChanged(newValue){if(newValue&&this.place&&this.place.search&&newValue==this.place.search){this.value={place_id:this.place.place_id,search:newValue,latLng:{lat:this.place.latLng.lat,lng:this.place.latLng.lng}};this._invalid=!1;this._setInvalid(!1);return}if(!newValue&&!this.required){this.value={place_id:"",search:"",latLng:{lat:0,lng:0}};this._setPlace({});this._invalid=!0;if(!this.hideError){this._setInvalid(!1)}return}if(newValue&&this.value&&this.value.search&&newValue==this.value.search){return}if((!this.value||!this.value.search)&&newValue){this.value={place_id:"",search:newValue,latLng:{lat:0,lng:0}};this._setPlace({});this._invalid=!0;if(!this.hideError){this._setInvalid(!0)}return}this.value={place_id:"",search:newValue,latLng:{lat:0,lng:0}};this._setPlace({});this._invalid=!0;if(!this.hideError){this._setInvalid(!0)}}_clearLocation(){this._value=""}geocode(address,options){return new Promise((resolve,reject)=>{if(!this._geocoder){reject("Geocoder not ready.")}else{var opts=options?options:{};opts.address=address?address:"";this._geocoder.geocode(opts,(results,status)=>{if(status==google.maps.GeocoderStatus.OK&&results&&results[0]){var p=this._extractPlaceInfo(results[0],opts.address);resolve(p)}else{reject(status)}})}})}reverseGeocode(latlng,options){return new Promise((resolve,reject)=>{if(!this._geocoder){reject("Geocoder not ready.")}else{var opts=options?options:{};if(latlng){opts.location=latlng}this._geocoder.geocode(opts,(results,status)=>{if(status==google.maps.GeocoderStatus.OK&&results&&results[0]){var p=this._extractPlaceInfo(results[0],"");resolve(p)}else{reject(status)}})}})}_onChangePlace(){var pl=this._places.getPlace();if(pl.geometry){var p=this._extractPlaceInfo(pl,this.$.nativeInput.value);this._setPlace(p);this._invalid=!1;this._setInvalid(!1);this._setLatLng({lat:p.latLng.lat,lng:p.latLng.lng});this._value=this.$.nativeInput.value;this.value={search:this.$.nativeInput.value,place_id:p.place_id,latLng:{lat:p.latLng.lat,lng:p.latLng.lng}}}}_extractPlaceInfo(pl,searchTerm){for(var p={place_id:pl.place_id,formatted_address:pl.formatted_address,search:searchTerm?searchTerm:pl.formatted_address,latLng:{lat:pl.geometry.location.lat(),lng:pl.geometry.location.lng()},basic:{name:pl.name||"",address:"",city:"",state:"",stateCode:"",postalCode:"",country:"",countryCode:"",phone:pl.formatted_phone_number||""},placeDetails:{address_components:[],icon:pl.icon,international_phone_number:pl.international_phone_number||"",permanently_closed:pl.permanently_closed||!1,types:pl.types?JSON.parse(JSON.stringify(pl.types)):[],website:pl.website||"",url:pl.url||"",utc_offset:pl.utc_offset}},address={street_number:"",route:""},i=0;i<pl.address_components.length;i++){p.placeDetails.address_components.push(JSON.parse(JSON.stringify(pl.address_components[i])));switch(pl.address_components[i].types[0]){case"locality":p.basic.city=pl.address_components[i].long_name;break;case"administrative_area_level_1":p.basic.stateCode=pl.address_components[i].short_name;p.basic.state=pl.address_components[i].long_name;break;case"country":p.basic.country=pl.address_components[i].long_name;p.basic.countryCode=pl.address_components[i].short_name;break;case"postal_code":p.basic.postalCode=pl.address_components[i].long_name;break;case"street_number":address.street_number=pl.address_components[i].short_name;p.basic.address=address.street_number+" "+address.route;p.basic.streetNumber=address.street_number;break;case"route":address.route=pl.address_components[i].long_name;p.basic.address=address.street_number+" "+address.route;p.basic.route=address.route;break;default:address[pl.address_components[i].types[0]]=pl.address_components[i].long_name;}}return p}putPlace(newPlace){if(newPlace&&newPlace.place_id&&newPlace.latLng){this._setPlace(JSON.parse(JSON.stringify(newPlace)));this._setLatLng({lat:newPlace.latLng.lat,lng:newPlace.latLng.lng});this.value={place_id:newPlace.place_id,search:newPlace.search,latLng:{lat:newPlace.latLng.lat,lng:newPlace.latLng.lng}};this._value=newPlace.search}}focus(){this.$.nativeInput.focus()}_onChange(event){if(this.shadowRoot){this.dispatchEvent(new CustomEvent("input-change",{bubbles:!0,cancelable:event.cancelable,detail:{text:this.$.nativeInput.value}}))}}}window.customElements.define("paper-input-place",PaperInputPlace);const $_documentContainer$16=document.createElement("template");$_documentContainer$16.innerHTML=`<iron-iconset-svg name="app-icons" size="24">
  <svg>
    <defs>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>
      <g id="menu">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </g>
      <g id="check-box">
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
      </g>
      <g id="mail">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
      </g>
      <g id="phone">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
      </g>
      <g id="language">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </g>
      <g id="remove">
        <path d="M19 13H5v-2h14v2z"></path>
      </g>
      <g id="american-express">
        <svg id="footer_am" viewBox="0 22.5 120 75" width="100%" height="100%">
          <path fill="#F9F9F9" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
          <polygon fill="#0073A5" points="77.1 75.3 86.1 75.3 86.1 72.9 79.8 72.9 79.8 70.7 85.9 70.7 85.9 68.6 79.8 68.6 79.8 66.5 86.1 66.5 86.1 64.1 77.1 64.1 "></polygon>
          <path fill="#0073A5" d="M103.5,68.4c-0.2,0-1.7-0.1-1.9-0.1c-0.7-0.1-1.2-0.2-1.2-0.9c0-1.1,1-1,2-1h4.2V64h-5.8c-1.8,0-3.3,1.2-3.3,3.3c0,1.9,0.7,3.4,3.8,3.5c0.2,0,1.5,0.1,1.9,0.1c0.8,0.1,1,0.4,1,0.9c0,1.1-1.1,1.1-1.9,1.1h-4.5v2.4h5.8c1.8,0,3.5-1.1,3.5-3.2C107.2,70.3,106.9,68.6,103.5,68.4z"></path>
          <path fill="#0073A5" d="M93.1,68.4c-0.2,0-1.7-0.1-1.9-0.1c-0.7,0-1.2-0.1-1.2-0.8c0-1.1,1-1,2-1h4.2v-2.4h-5.8c-1.8,0-3.3,1.2-3.3,3.3c0,1.9,0.7,3.4,3.8,3.5c0.2,0,1.5,0.1,1.9,0.1c0.8,0.1,1,0.4,1,0.9c0,1.1-1.1,1.1-1.9,1.1h-4.5v2.4h5.8c1.8,0,3.5-1.1,3.5-3.2C96.8,70.3,96.5,68.6,93.1,68.4z"></path>
          <path fill="#0073A5" d="M60.4,64.1h-9.7l-3.2,3.5l-3.1-3.5H33.6v11.2h10.5l3.3-3.7l3.2,3.7H56v-3.8h3.7c1.4,0,4,0,4-4C63.7,64.7,61.8,64.1,60.4,64.1z M42.7,72.9h-6.4v-2.2h6.1v-2.1h-6.1v-2.1H43l2.7,3.1L42.7,72.9z M53.3,74.2l-4-4.7l4-4.4V74.2zM59.5,69.2H56v-2.7h3.4c1.2,0,1.5,0.7,1.5,1.3C61,68.5,60.6,69.2,59.5,69.2z"></path>
          <path fill="#0073A5" d="M75.6,67.1c0-2.4-2-3-3.3-3h-7.2v11.2h2.8v-4h3.6c1,0,1.3,1,1.4,1.9l0.1,2.1h2.7L75.6,73c0-1.8-0.5-2.7-1.8-2.8C75.2,69.5,75.6,68.5,75.6,67.1z M71.3,69h-3.4v-2.5h3.4c1.2,0,1.5,0.7,1.5,1.3C72.9,68.5,72.5,69,71.3,69z"></path>
          <rect x="66.3" y="44.7" fill="#0073A5" width="2.8" height="11.2"></rect>
          <polygon fill="#0073A5" points="52.7 53.6 46.4 53.6 46.4 51.3 52.5 51.3 52.5 49.2 46.4 49.2 46.4 47.1 52.7 47.1 52.7 44.7 43.7 44.7 43.7 55.9 52.7 55.9 "></polygon>
          <path fill="#0073A5" d="M64.8,47.7c0-2.4-2-3-3.3-3h-7.2v11.2h2.8v-4h3.6c1,0,1.3,1,1.4,1.9l0.1,2.1h2.7l-0.1-2.3c0-1.8-0.5-2.7-1.8-2.8C64.4,50.1,64.8,49.1,64.8,47.7z M60.5,49.6h-3.4v-2.5h3.4c1.2,0,1.5,0.7,1.5,1.3C62.1,49.1,61.7,49.6,60.5,49.6z"></path>
          <path fill="#0073A5" d="M39,47.7v8.2h2.8V44.7h-4.4L34,52.2l-3.4-7.5h-4.3v10.8l-4.8-10.8h-3.6L13,55.9h2.9l1.1-2.5h5.5l1.1,2.5H29v-8.3l3.7,8.3h2.5L39,47.7z M17.9,51l1.6-3.9l1.7,3.9H17.9z"></path>
          <path fill="#0073A5" d="M74.8,55.9h3.6l1.1-2.5H85l1.1,2.5h5.4v-8.2l5,8.2h3.8V44.7h-2.8v7.8l-4.6-7.8h-4.1v10.5L84,44.7h-3.6l-3.8,8.7c0,0-1.6,0-1.8,0c-0.7-0.1-1.7-0.6-1.7-2.6V50c0-2.6,1.4-2.8,3.3-2.8h1.7v-2.4h-3.6c-1.3,0-4,1-4.1,5.6C70.3,53.4,71.7,55.9,74.8,55.9z M82.2,47.1l1.7,3.9h-3.4L82.2,47.1z"></path>         
        </svg>
      </g>
      <g id="master-card">
        <svg id="footer_mc" viewBox="0 22.5 120 75" width="100%" height="100%">
          <path fill="#13457C" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
          <circle fill="#FBB231" cx="74.4" cy="60" r="21.5"></circle>
          <path fill="#EC1C2E" d="M58.9,74.9l-1-1.2h4.3c0.4-0.5,0.7-0.9,1.1-1.4h-6.5L56,71.1h8c0.3-0.5,0.5-0.9,0.8-1.4h-9.6l-0.5-1.2h10.7c0.2-0.5,0.4-0.9,0.5-1.4H54.1l-0.4-1.2h12.5c0.1-0.5,0.3-0.9,0.4-1.4h-3.9l0.2-1.2h3.8c0.1-0.5,0.1-0.9,0.2-1.4h-3.8l0.2-1.2H67c0-0.2,0-0.5,0-0.7c0-1-0.1-1.9-0.2-2.9H53.1l0.2-1.2h13.4c-0.1-0.5-0.2-1-0.3-1.4H53.6l0.4-1.2h12c-0.2-0.5-0.3-1-0.5-1.4h-11l0.5-1.2h10c-0.2-0.5-0.5-1-0.7-1.4h-8.5l0.7-1.2h7.1c-0.3-0.5-0.7-1-1-1.4h-5l1-1.2h3c-3.9-4.3-9.6-7.1-15.9-7.1C33.7,38.5,24,48.1,24,60s9.7,21.5,21.6,21.5c6.1,0,11.6-2.6,15.5-6.7L58.9,74.9L58.9,74.9z M53,60.7h1.3v1.2H53V60.7z"></path>
          <polygon fill="#FFFFFF" points="77.2 65.4 77.3 65.5 79.1 65.5 79.1 65.4 77.3 65.4 77.3 65.4 77.2 65.4 77.2 65.5 77.3 65.5 77.2 65.4 "></polygon>
          <polygon fill="#FFFFFF" points="77.3 64.6 77.3 64.5 77.2 64.7 77.2 64.8 77.2 65.1 77.2 65.4 77.3 65.4 77.3 65.1 77.3 64.8 77.3 64.7 77.3 64.6 77.3 64.5 77.3 64.6 "></polygon>
          <polygon fill="#FFFFFF" points="74.5 65.5 74.5 65.5 74.7 65.6 74.9 65.6 75.1 65.6 75.3 65.6 75.5 65.5 75.7 65.5 75.9 65.4 76.1 65.4 76.3 65.3 76.5 65.2 76.7 65.1 76.8 65 77 64.9 77.1 64.8 77.2 64.7 77.3 64.6 77.3 64.5 77.2 64.6 77.1 64.7 76.9 64.8 76.8 65 76.6 65 76.5 65.1 76.3 65.2 76.1 65.3 75.9 65.3 75.7 65.4 75.5 65.4 75.3 65.5 75.1 65.5 74.9 65.5 74.7 65.5 74.5 65.4 74.5 65.4 74.5 65.5 "></polygon>
          <polygon fill="#FFFFFF" points="47 59.6 47.1 59.5 47.2 59.5 47.5 59.3 48.2 59.3 48.5 59.3 49.9 59.4 50.3 57.6 49.6 57.5 48.2 57.4 47.5 57.4 47.1 57.4 46.7 57.5 46.4 57.5 46.1 57.6 45.8 57.7 45.6 57.8 45.3 58 45.1 58.2 45 58.4 44.8 58.6 44.7 58.8 44.6 59 44.6 59.3 44.5 59.6 44.5 59.9 44.5 60.3 44.5 60.7 44.7 61.1 44.9 61.4 45.1 61.6 45.4 61.8 45.7 62 46 62.1 46.5 62.3 46.8 62.4 47 62.5 47.1 62.6 47.2 62.8 47.3 62.9 47.3 63.1 47.2 63.3 47.2 63.4 47.1 63.5 47 63.6 46.9 63.6 46.8 63.7 46.6 63.7 46.4 63.7 45.8 63.7 45.4 63.7 43.9 63.4 43.6 65.1 43.5 65.2 44 65.3 44.5 65.5 45.2 65.5 46.6 65.6 46.8 65.5 47.3 65.5 47.8 65.4 48 65.3 48.3 65.2 48.5 65.1 48.8 65 49 64.8 49.2 64.6 49.3 64.4 49.5 64.1 49.6 63.8 49.7 63.5 49.8 63.2 49.8 62.7 49.8 62.3 49.7 62 49.6 61.7 49.4 61.4 49.2 61.2 49 61.1 48.8 60.9 47.6 60.5 47.4 60.4 47.2 60.3 47.1 60.2 47 60.1 47 59.9 47 59.8 47 59.8 "></polygon>
          <polygon fill="#FFFFFF" points="53.3 63.7 53 63.8 52.8 63.7 52.7 63.7 52.4 63.6 52.4 63.6 52.3 63.5 52.3 63.4 52.3 63.3 53 59.3 54.2 59.4 54.5 57.5 53.3 57.5 53.6 55.8 51.4 55.8 50 63.8 49.9 64.1 50 64.5 50 64.6 50 64.8 50.1 64.9 50.2 65 50.3 65.1 50.4 65.2 50.6 65.3 50.7 65.4 50.9 65.4 51.2 65.5 51.7 65.5 52.3 65.5 52.9 65.4 53.3 65.3 53.6 65.1 53.9 63.7 53.9 63.6 53.7 63.6 "></polygon>
          <path fill="#FFFFFF" d="M60,63.4l-0.2,0.1l-0.4,0.1l-0.6,0.1h-0.4H58h-0.4l-0.5-0.1L57,63.5l-0.2-0.2l-0.2-0.2L56.5,63l-0.2-0.2l-0.2-0.3v-0.1v-0.1v-0.1h4.7v-0.5l0.1-0.6l0.1-0.6V60l0-0.5l-0.1-0.4l-0.2-0.3l-0.2-0.3l-0.2-0.3L60,58l-0.3-0.2l-0.3-0.1l-0.2-0.2h-0.3l-0.3-0.1h-0.3H58h-0.6l-0.6,0.1l-0.5,0.1l-0.4,0.2L55.5,58l-0.3,0.3l-0.3,0.3l-0.2,0.3l-0.2,0.3l-0.2,0.3l-0.1,0.3L54,60.2v0.3l-0.1,0.3l-0.1,0.5v0.6v0.5l0.1,0.5l0.1,0.4l0.2,0.4l0.2,0.3l0.3,0.3l0.3,0.3l0.3,0.2l0.3,0.2l0.4,0.1l0.4,0.1l0.4,0.1l0.4,0.1h0.4h0.6h0.4l0.7-0.1l0.4-0.1l0.5-0.2l0.3-0.1l0.3-2.1L60,63.4zM56.4,60.5L56.4,60.5l0.1-0.4l0.1-0.2l0.2-0.2l0.2-0.2l0.2-0.1l0.2-0.1h0.2h0.1h0.2l0.2,0.1l0.1,0.1l0.2,0.1l0.1,0.1l0.1,0.2l0.1,0.2v0.1v0.3v0.1L56.4,60.5L56.4,60.5z"></path>
          <polygon fill="#FFFFFF" points="72.3 63 72.1 63.1 72 63.2 71.8 63.2 71.5 63.3 71.1 63.4 70.6 63.4 70.2 63.4 69.7 63.3 69.5 63.2 69.3 63.1 69.1 63 68.9 62.8 68.8 62.7 68.6 62.5 68.5 62.3 68.5 62.1 68.4 61.9 68.3 61.7 68.3 61.2 68.3 60.9 68.4 60.4 68.5 60 68.6 59.6 68.8 59.2 68.9 58.9 69.1 58.6 69.3 58.4 69.5 58.2 69.7 58.1 69.9 58 70 57.9 70.2 57.8 70.4 57.7 70.8 57.7 71.5 57.7 71.9 57.7 72.3 57.8 72.8 57.9 73.4 58.2 73.8 56 73.2 55.8 72.3 55.5 71.6 55.5 71.2 55.4 70.6 55.5 70.4 55.5 69.9 55.6 69.4 55.7 69 55.8 68.5 56 68.3 56.1 68 56.4 67.8 56.5 67.5 56.8 67.2 57.2 66.9 57.6 66.8 57.8 66.6 58.2 66.4 58.7 66.2 59.2 66 59.7 65.9 60.3 65.8 61 65.8 61.5 65.9 62.1 65.9 62.6 66.1 63 66.3 63.4 66.5 63.8 66.7 64.1 67 64.4 67.3 64.7 67.6 64.9 67.9 65.1 68.3 65.3 68.6 65.4 69 65.4 69.3 65.5 69.7 65.5 70.1 65.5 70.7 65.5 71 65.5 71.4 65.4 71.7 65.3 71.9 65.2 72.3 64.9 72.6 62.9 72.4 62.8 "></polygon>
          <path fill="#FFFFFF" d="M90.8,55.8l-0.5,2.7l-0.1-0.1l-0.3-0.3L89.8,58l-0.3-0.2l-0.2-0.1L89,57.6h-0.2h-0.2h-0.2h-0.3h-0.3l-0.3,0.1l-0.3,0.1l-0.3,0.1l-0.3,0.2l-0.3,0.2L86,58.5l-0.2,0.2L85.6,59l-0.2,0.3l-0.2,0.3L85,60l-0.2,0.4l-0.1,0.4l-0.1,0.4l-0.1,0.4V62v0.4v0.4l0.1,0.4l0.1,0.4l0.1,0.4l0.2,0.3l0.2,0.3l0.2,0.3l0.2,0.3l0.3,0.2l0.3,0.2l0.3,0.1l0.4,0.1h0.4h0.1h0.2l0.4-0.1l0.3-0.1l0.1-0.1l0.1-0.1l0.3-0.2l0.3-0.2l0.1-0.1l-0.1,0.6h2.2l1.7-9.6v-0.1C93,55.8,90.8,55.8,90.8,55.8zM88.3,59.5l0.2-0.1h0.2h0.2h0.2h0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.2l0.1,0.2v0.2v0.2V61v0.2v0.2v0.2v0.2L89.9,62l-0.1,0.2l-0.1,0.2l-0.2,0.1l-0.1,0.2l-0.1,0.2L89.2,63l-0.1,0.1L89,63.3l-0.1,0.1l-0.2,0.1h-0.2l-0.2,0.1h-0.2h-0.2l-0.3-0.1l-0.2-0.2l-0.2-0.2l-0.1-0.3L87,62.6l-0.1-0.4v-0.3v-0.3v-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1L88.3,59.5z"></path>
          <path fill="#FFFFFF" d="M44.2,59.7v-0.3v-0.3l-0.1-0.2L44,58.6l-0.2-0.2l-0.2-0.2L43.4,58l-0.2-0.1L43,57.8l-0.2-0.1l-0.2-0.1l-0.3-0.1h-0.2h-0.2h-0.2h-1.2h-0.8L39,57.6l-0.4,0.1l-0.4,0.1l-0.6,2l0.4-0.2l0.3-0.1l1-0.2l0.7-0.1h0.5h0.6h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1v0.1v0.1l-0.1,0.2h-0.2h-0.2H41h-0.8L39,60.5l-0.3,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L37.9,61l-0.2,0.2l-0.2,0.2l-0.2,0.2l-0.2,0.2L37,62l-0.1,0.2l-0.1,0.3l-0.1,0.3v0.3v0.3v0.2v0.2l0.1,0.3v0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.3,0.1l0.4,0.1h0.4h0.2l0.4-0.1l0.4-0.1l0.4-0.2l0.3-0.2l0.1-0.1l-0.1,0.3h2l0.3-1.7l0.7-3.8L44.2,59.7zM41.3,63L41.3,63l-0.1,0.2l-0.1,0.1L41,63.4l-0.1,0.1h-0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1h-0.2h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1l-0.1-0.1l-0.2-0.2L39,63.4v-0.2V63v-0.1v-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1h0.1l0.1-0.1H40h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1H41h0.1h0.1h0.1h0.1h0.1h0.1h0.1l0,0l0,0l0,0v0.2v0.2l-0.1,0.2l-0.1,0.2v0.1L41.3,63L41.3,63z"></path>
          <polygon fill="#FFFFFF" points="33.8 55.8 31.6 61.1 31.3 55.8 27.6 55.8 26 65.4 25.9 65.5 28.1 65.5 29.3 58.8 29.7 65.1 29.7 65.5 32.1 65.5 34.8 58.9 33.7 65.5 35.9 65.5 37.6 55.8 "></polygon>
          <path fill="#FFFFFF" d="M80.2,59.7v-0.3l-0.1-0.3L80,58.9v-0.2l-0.2-0.2l-0.2-0.2l-0.2-0.2L79.2,58L79,57.9l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.2-0.1H78h-0.2h-0.2h-0.2H77h-0.2h-0.2h-0.2h-0.2H76h-0.2h-0.2h-0.2h-0.2H75l-0.2,0.1l-0.2,0.1l-0.2,0.1l0,0l0,0l-0.5,1.8H74h0.1l0.1-0.1h0.1h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2l0,0h0.2h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1v0.2l0,0v0.1v0.1v0.1l0,0h-0.1h-0.1h-0.1h-0.2h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1H76h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1l0,0l0,0H75l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L74,61l-0.2,0.2l-0.2,0.2l-0.2,0.2l-0.2,0.2L73.1,62L73,62.3l-0.1,0.2l-0.1,0.3v0.3v0.3v0.2v0.2V64v0.2v0.2l0.1,0.2l0.1-0.1l0.1,0.2l0.1,0.2l0.1,0.1l0.1,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.3,0.1l0,0l0,0h0.2h0.2h0.2h0.2h0.2h0.2l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1v0.1v0.2v0.3v0.3h1.8l0,0l0,0l0,0l0.3-1.6l0.8-3.8L80.2,59.7zM77.6,62.1v0.2v0.2v0.2v0.1v0.1V63l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.2,0l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.2,0.1l-0.2,0.1h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1l-0.1-0.1l-0.2-0.3L75,63.4v-0.2V63v-0.1v-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1h0.1H76h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1H77h0.1h0.1h0.1h0.1h0.1L77.6,62.1L77.6,62.1l0.2-0.1l0,0l0,0L77.6,62.1z"></path>
          <polygon fill="#FFFFFF" points="84.9 59.5 85.1 59.5 85.5 57.4 84.9 57.5 84.8 57.5 84.4 57.6 84.2 57.7 83.9 57.9 83.7 58.1 83.4 58.3 83.3 58.5 83.4 57.5 81.2 57.5 79.8 65.4 79.8 65.5 82.1 65.5 82.8 61.3 82.9 61 83 60.7 83 60.5 83.2 60.2 83.3 60.1 83.4 60 83.6 59.9 83.7 59.8 83.9 59.7 84.1 59.6 84.3 59.6 84.6 59.5 "></polygon>
          <polygon fill="#FFFFFF" points="66.3 58 66.7 57.5 66.5 57.5 66.3 57.5 66.3 57.5 66.2 57.4 65.7 57.5 65.5 57.5 65.3 57.6 65.1 57.6 64.8 57.8 64.6 58 64.4 58.1 64.2 58.3 64.1 58.5 64.3 57.5 62 57.5 60.6 65.4 60.6 65.5 62.9 65.5 63.6 61.3 63.7 60.8 63.8 60.6 63.8 60.4 63.9 60.3 64 60.2 64.2 60 64.4 59.9 64.6 59.8 64.8 59.8 65 59.7 65.2 59.7 65.5 59.7 65.8 59.7 66.1 58.4 "></polygon>
        </svg>
      </g>
      <g id="visa">
        <svg id="footer_vi" viewBox="0 22.5 120 75" width="100%" height="100%">
          <rect y="38.6" fill="#F9F9F9" width="120" height="42.9"></rect>
          <polygon fill="#0066B2" points="53 48.7 49.4 71.3 55.2 71.3 58.9 48.7 "></polygon>
          <path fill="#0066B2" d="M91.2,48.7h-4.7c-2.2,0-2.7,1.7-2.7,1.7l-8.7,20.8h6.1l1.2-3.3h7.5l0.7,3.3H96L91.2,48.7z M84.1,63.3    l3.1-8.4l1.7,8.4C88.9,63.3,84.1,63.3,84.1,63.3z"></path>
          <path fill="#0066B2" d="M67.3,55c0-2.5,5.7-2.2,8.2-0.8l0.8-4.8c0,0-2.6-1-5.3-1c-2.9,0-9.8,1.3-9.8,7.5c0,5.8,8.1,5.9,8.1,8.9c0,3.1-7.3,2.5-9.7,0.6l-0.9,5.1c0,0,2.6,1.3,6.6,1.3s10-2.1,10-7.7C75.5,58.1,67.3,57.5,67.3,55z"></path>
          <path fill="#0066B2" d="M44.4,48.7l-5.6,15.5l-0.7-3.3l0,0c0,0-1.3-4.1-5.4-7.4c-0.9-0.7-1.7-1.3-2.6-1.8l5.1,19.6h6.1l9.3-22.5h-6.2V48.7z"></path>
          <path fill="#0066B2" d="M120,38.6V26.5c0-2.2-1.8-4-4-4H4c-2.2,0-4,1.8-4,4v12.1H120z"></path>
          <path fill="#F9A533" d="M0,81.4v12.1c0,2.2,1.8,4,4,4h112c2.2,0,4-1.8,4-4V81.4H0z"></path>
          <path fill="#F9A533" d="M38.2,60.9l-2-10.1c0,0-0.2-2-2.8-2h-9.2l-0.1,0.4c0,0,4.4,0.9,8.7,4.4C36.9,56.8,38.2,60.9,38.2,60.9z"></path>
        </svg>
      </g>
      <g id="paypal">
        <svg id="footer_pp" viewBox="0 22.5 120 75" width="100%" height="100%">
          <path fill="#F9F9F9" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
          <path fill="#003366" d="M57.5,53.9c-0.5,0-1.2,0.4-1.6,1c0,0-3.6,6.2-4,6.8c-0.2,0.3-0.4,0.1-0.4,0c0-0.2-1.1-6.7-1.1-6.7c-0.1-0.5-0.7-1-1.4-1h-2.2c-0.5,0-0.9,0.4-0.8,1c0,0,1.7,9.7,2.1,12c0.2,1.3,0,1.5,0,1.5l-2.2,3.9c-0.3,0.5-0.1,1,0.4,1h2.6c0.5,0,1.3-0.4,1.6-1l10-16.9c0,0,1-1.4,0.1-1.4C59.9,53.9,57.5,53.9,57.5,53.9"></path>
          <path fill="#003366" d="M25.9,57.3c-0.8,0.6-1.8,0.8-3.2,0.8h-0.6c-0.5,0-0.9-0.4-0.8-1l0.8-3.3c0.1-0.5,0.7-1,1.2-1h0.8c1,0,1.7,0.2,2.2,0.5s0.7,0.8,0.7,1.5C27.1,56,26.7,56.8,25.9,57.3 M31.3,52.3c-0.3-0.6-0.8-1.1-1.4-1.5s-1.3-0.6-2.2-0.8c-0.8-0.2-1.8-0.2-3-0.2h-5.2c-0.5,0-1.1,0.4-1.2,1l-3.5,15.4c-0.1,0.5,0.2,1,0.8,1h2.5c0.5,0,1.1-0.4,1.2-1l0.9-3.7c0.1-0.5,0.7-1,1.2-1h0.7c3.1,0,5.5-0.6,7.2-1.9c1.7-1.3,2.6-2.9,2.6-5C31.8,53.7,31.7,52.9,31.3,52.3"></path>
          <path fill="#003366" d="M43.4,54.5c-1-0.5-2.4-0.8-4.5-0.8c-1,0-2,0.1-3,0.2c-0.7,0.1-0.8,0.1-1.3,0.2c-1,0.2-1.1,1.2-1.1,1.2l-0.3,1.3c-0.2,0.8,0.3,0.8,0.5,0.7c0.4-0.1,0.6-0.2,1.5-0.4c0.8-0.2,1.7-0.3,2.4-0.3c1,0,1.8,0.1,2.3,0.3s0.8,0.6,0.8,1.1c0,0.1,0,0.3,0,0.4c0,0.1-0.1,0.2-0.4,0.2c-1.4,0.1-2.5,0.2-3.7,0.4s-2.3,0.5-3.2,0.9c-1,0.4-1.7,1-2.2,1.7s-0.7,1.6-0.7,2.6s0.3,1.8,1,2.4c0.7,0.6,1.6,0.9,2.6,0.9c0.7,0,1.2-0.1,1.6-0.1c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.1,0.7-0.3,1-0.6c0.4-0.2,0.6-0.4,0.9-0.6l0,0l-0.1,0.4l0,0l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0l0,0l0,0c0.3,0,1.4,0,1.9,0h0.4l0,0c0.5-0.1,1-0.5,1.1-0.9l1.8-7.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.5,0-0.6C44.9,55.9,44.4,55,43.4,54.5z M39,63.9c-0.3,0.2-0.6,0.4-1,0.5c-0.5,0.2-0.9,0.3-1.3,0.3c-0.6,0-1.1-0.1-1.4-0.3c-0.3-0.2-0.5-0.5-0.5-0.9c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.6-0.5,1.1-0.7s1-0.3,1.7-0.4c0.6-0.1,1.7-0.2,1.9-0.2c0.1,0,0.2-0.1,0.2,0.3c0,0.2-0.4,1.5-0.5,2.1C39.4,63.6,39.1,63.9,39,63.9z"></path>
          <path fill="#336699" d="M89.1,54.5c-1-0.5-2.4-0.8-4.5-0.8c-1,0-2,0.1-3,0.2c-0.7,0.1-0.8,0.1-1.3,0.2c-1,0.2-1.1,1.2-1.1,1.2l-0.3,1.3c-0.2,0.8,0.3,0.8,0.5,0.7c0.4-0.1,0.6-0.3,1.5-0.4c0.8-0.2,1.7-0.3,2.4-0.3c1,0,1.8,0.1,2.3,0.3s0.8,0.6,0.8,1.1c0,0.1,0,0.2,0,0.4c0,0.1-0.1,0.2-0.4,0.2c-1.4,0.1-2.5,0.2-3.7,0.4s-2.3,0.5-3.2,0.9c-1,0.4-1.7,1-2.2,1.7s-0.7,1.6-0.7,2.6s0.3,1.8,1,2.4c0.7,0.6,1.6,0.9,2.7,0.9c0.7,0,1.2-0.1,1.6-0.1c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.1,0.7-0.3,1-0.6c0.4-0.2,0.6-0.4,0.9-0.6l0,0l-0.1,0.4l0,0l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0l0,0l0,0c0.3,0,1.4,0,1.9,0h0.4l0,0c0.5-0.1,1-0.5,1.1-0.9l1.8-7.9c0-0.2,0.1-0.4,0.1-0.7c0-0.2,0.1-0.5,0-0.6C90.5,55.9,90,55.1,89.1,54.5z M84.6,64c-0.3,0.2-0.6,0.4-1,0.5c-0.5,0.2-0.9,0.3-1.3,0.3c-0.6,0-1.1-0.1-1.4-0.3s-0.5-0.5-0.5-0.9c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.6-0.5,1.1-0.7s1-0.3,1.7-0.4c0.6-0.1,1.7-0.2,1.9-0.2c0.1,0,0.2-0.1,0.2,0.3c0,0.2-0.4,1.5-0.5,2.1C85,63.6,84.7,63.9,84.6,64z"></path>
          <path fill="#336699" d="M71.5,57.4c-0.8,0.5-1.8,0.8-3.2,0.8h-0.6c-0.5,0-0.9-0.4-0.8-1l0.8-3.3c0.1-0.5,0.7-1,1.2-1h0.8c1,0,1.7,0.2,2.2,0.5s0.7,0.8,0.7,1.5C72.7,56,72.3,56.8,71.5,57.4 M76.9,52.4c-0.3-0.6-0.8-1.1-1.4-1.5c-0.6-0.4-1.3-0.6-2.2-0.8c-0.8-0.1-1.8-0.2-3-0.2H65c-0.5,0-1.1,0.4-1.2,1l-3.5,15.4c-0.1,0.5,0.2,1,0.8,1h2.5c0.5,0,1.1-0.4,1.2-1l0.9-3.7c0.1-0.5,0.7-1,1.2-1h0.7c3.1,0,5.5-0.6,7.2-1.9c1.7-1.3,2.6-2.9,2.6-5C77.4,53.7,77.3,53,76.9,52.4"></path>
          <path fill="#336699" d="M97.7,50h-2.2l0,0l0,0c-0.5,0-1,0.4-1.2,0.9V51c0,0,0,0.2-0.1,0.6l-3.2,14c-0.1,0.3-0.1,0.5-0.1,0.6l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0h2.3c0.5,0,1-0.4,1.2-0.9c0,0,0,0,0-0.1l3.4-15.2l0,0C98.6,50.4,98.3,50,97.7,50z"></path>
          <path fill="#336699" d="M101.1,53.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.2,0c-0.3,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.4-0.2-0.6V51h-0.3v-0.3h0.3V50h0.4v0.7h0.8V51h-0.8v1.1c0,0.1,0,0.2,0,0.3s0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.3,0c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0l0,0V53.1z"></path>
          <path fill="#336699" d="M105.2,53.1h-0.4v-1.4c0-0.1,0-0.2,0-0.3s0-0.2-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.3,0.2v0.1v0.1v1.6h-0.4v-1.4c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.3,0.2v1.8h-0.4v-2.4h0.4v0.3c0.1-0.1,0.3-0.2,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.3,0,0.5,0.1,0.6,0.2c0.1,0.2,0.2,0.4,0.2,0.7v1.3H105.2z"></path>
        </svg>
      </g>
      <g id="facebook">
        <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
      </g>
      <g id="youtube">
        <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
      </g>
      <g id="instagram">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
      </g>
      <g id="account-box">
        <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>
      </g>
      <g id="my-location">
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
      </g>
      <g id="date-range">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
      </g>
      <g id="send">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      </g>
      <g id="people">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
      </g>
      <g id="pets">
        <circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>`;document.head.appendChild($_documentContainer$16.content);const styleElement=document.createElement("dom-module");styleElement.innerHTML=`<template>
    <style>
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
      }
      .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
      }
      header {
        position: relative;
        width: 100%;
        height: 100vh;
        z-index: 1;
      }
      // header[loading]:before {
      //   content: '';
      //   position: absolute;
      //   width: 100%;
      //   height: 100%;
      //   background-image: url('./static/mountain-bg.png');
      //   background-repeat: no-repeat;
      //   background-size: cover;
      //   background-attachment: scroll;
      //   background-origin: border-box;
      //   background-blend-mode: normal;
      //   z-index: 1;
      // }
      header > [container] {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        z-index: 2;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header > video {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: fill;
        z-index: 1;
      }
      header::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
        z-index: 1;
      }
      header [container] #blank {
        width: 100%;
      }
      header [container] .content {
        flex: 1;
        display: flex;
        text-align: center;
        color: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 8em;
        width: 100%;
      }
      header [container] .content .title {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 2.5em;
        font-weight: 700;
        line-height: 1.3;
        text-shadow: -2px 1px rgba(0, 0, 0, 0.4);
        padding: 0 15px;
      }
      header [container] .content .subtitle {
        margin-bottom: 1.5em;
        text-shadow: -1.5px 1px rgba(0, 0, 0, 0.4);
        padding: 0 15px;
      }
      header [container] .grid-count {
        flex: 1;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      header [container] .grid-count > div {
        flex: 1;
        flex-basis: 25%;
        max-width: 25%;
        text-align: center;
        color: white;
      }
      header [container] .grid-count > div .count h2 {
        font-size: 30px;
        font-weight: 300;
      }
      paper-button.button-ht {
        font-size: 20px;
        font-weight: 700;
        padding: 1vh 10vh;
        background-color: #e05e35;
        color: white;
      }
      section.expirence,
      section.box-grid,
      section.choose-stalking,
      section.hunting,
      section.linkbuild {
        flex: 1;
        position: relative;
        display: block;
        padding-top: 12vh;
        text-align: center;
      }
      section.linkbuild {
        background-color: #383838;
        padding: 1.5rem 0;
        text-align: left;
      }
      section.hunting {
        padding-bottom: 12vh;
      }
      section.media {
        padding: 30px 15px;
        border-top: 1px solid rgba(0,0,0,.2);
      }
      section.media .container img {
        width: 100%;
        height: 60px;
      }
      section.expirence {
        padding: 12vh 0;
      }
      section.expirence {
        background-color: #f7f7f7;
      }
      section.expirence .title h1,
      section.box-grid .title h1,
      section.choose-stalking .title h1,
      section.hunting .title h1 {
        font-size: 30px;
        text-align: center;
        margin: 0;
      }
      section.expirence .title hr,
      section.box-grid .title hr,
      section.choose-stalking .title hr,
      section.hunting .title hr {
        border-top: 2px solid #e05e35;
        max-width: 5%;
      }
      section.choose-stalking .title p {
        font-size: 18px;
        font-weight: 400;
        margin: 10px 0 0 0;
      }
      section.expirence .content-grid,
      section.box-grid .content-grid,
      section.choose-stalking .content-grid,
      section.linkbuild .content-grid,
      footer .footer .content-grid {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        margin-top: 6em;
        margin-bottom: 2em;
      }
      section.linkbuild .content-grid {
        flex-direction: column;
        margin: 0;
      }
      section.box-grid .content-grid {
        flex-wrap: wrap;
        justify-content: end;
      }
      section.expirence .content-grid .grid{
        flex: 1;
        text-align: center;
        flex-basis: 20%;
        width: 20%;
        padding: 10px;
      }
      section.box-grid .content-grid .grid.animation {
        display: flex;
        flex: 1;
        flex-basis: 33.33%;
        width: 33.33%;
        max-width: 33.33%;
        height: 200px;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #222;
        inset 0 0 10px rgba(0,0,0,.5);
        flex-direction: column;
      }
      section.box-grid .content-grid .grid.animation img {
        object-fit: fill;
        width: 100%;
        height: 100%;
        transition: all ease-in-out .5s;
      }
      section.box-grid .content-grid .grid.animation:hover img {
        transform: scale(1.05);
      }
      section.box-grid .content-grid .grid.animation p {
        font: 400 12px/1.3 Roboto,Arial,Tahoma,sans-serif;
        color: #eaddcf;
        padding: 0 10px;
      }
      section.box-grid .content-grid .grid.animation span {
        display: inline-block;
        padding-top: 5px;
        font: 500 12px Roboto,Arial,Tahoma,sans-serif;
        color: #eaddcf;
        text-transform: uppercase;
        padding: 0 10px;
      }
      section.expirence .content-grid .grid hr { 
        border-top: 2px solid;
        max-width: 20%;
      }
      section.expirence .content-grid .grid:nth-child(1) hr {
        border-color: #6fc6bf;
      }
      section.expirence .content-grid .grid:nth-child(2) hr {
        border-color: e78161;
      }
      section.expirence .content-grid .grid:nth-child(3) hr {
        border-color: #549b34;
      }
      section.expirence .content-grid .grid:nth-child(4) hr {
        border-color: #7da2d6;
      }
      section.linkbuild .content-grid .grid {
        flex: 1;
        flex-basis: 100%;
        width: 100%;
        color: #eaddcf;
        padding: 0 15px; 
      }
      section.linkbuild .content-grid .grid h4 {
        font-size: 14px;
        font-weight: 400;
        margin: 0;
      }
      section.linkbuild .content-grid .grid hr {
        border-top: 1px solid rgba(255,255,255,.1);
        margin: 5px 0 7px 0;
        width: 100%!important;
      }
      section.linkbuild .content-grid .grid a {
        color: #eaddcf;
        text-decoration: none;
        transition: .2s ease;
      }
      section.linkbuild .content-grid .grid a:hover {
        color: #e05e35;
        text-decoration: none;
      }
      footer {
        position: relative;
        background: #222;
        color: #eaddcf;
      }
      .footer {
        padding: 30px 0;
      }
      footer a {
        color: #eaddcf;
        text-decoration: none;
        transition: all .5s ease;
      }
      footer a:hover {
        color: #e05e35;
      }
      footer .footer .container .content-grid {
        margin: 0;
      }
      footer .footer .container > .content-grid > .grid {
        flex: 1;
        padding: 0px 15px;
        border-left: 1px solid #333;
        height: 150px;
      }
      footer .footer .container > .content-grid > .grid:first-child {
        border-left: none;
      }
      footer .footer .container .content-grid .grid h3 {
        font: 20px Roboto,Arial,Tahoma,sans-serif;
        font-weight: bolder;
        margin: 0 0 15px 0;
        margin: 0;
        color: #eaddcf;
      }
      footer .footer .container .content-grid .grid h4 {
        font: 16px Roboto,Arial,Tahoma,sans-serif;
        font-weight: bolder;
        margin: 0 0 15px 0;
        margin: 0;
        color: #eaddcf;
      }
      footer .footer .container .content-grid .grid ul {
        list-style: none;
        text-decoration: none;
        padding: 0;
      }
      footer .footer .container .content-grid .grid ul a {
        font-size: 15px;
        color: #eaddcf;
        text-decoration: none;
      }
      footer .footer .container .content-grid .grid ul a:hover {
        color: #e05e35;
      }
      footer .footer .container .content-grid .grid .payementmethod-grid {
        display: flex;
        flex-direction: row;
        margin: 1em 0;
      }
      footer .footer .container .content-grid .grid .payementmethod-grid .grid {
        flex: 1;
        padding: 0 5px;
      }
      footer .footer .container .content-grid .grid .payementmethod-grid .grid svg {
        width: 45px;
        height: 28px;
        color: #eaddcf;
      }
      footer .footer .container .content-grid .grid .network-socials {
        margin: 1em 0;
      }
      footer .footer .container .content-grid .grid .network-socials .grid { padding: 0; }
      footer .footer .container .content-grid .grid .network-socials .grid a {
        // color: #eaddcf;
        text-decoration: none;
      }
      footer .footer .container .content-grid .grid .network-socials .grid a iron-icon {
        color: #eaddcf;
      }
      footer .micro-footer {
        padding: 15px;
        border-top: 1px solid #333;
      }
      footer .micro-footer .container .content-grid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        margin: 0 auto;
      }
      footer .micro-footer .container .content-grid .grid {
        flex: 1;
        text-align: center;
      }
      @media screen and (min-width: 1200px) {
        .container {
          width: 1170px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 16.66%;
          width: 16.66%;
          max-width: 16.66%;
        }
      }
      @media (max-width: 1200px) and (min-width: 992px) { 
        .container {
          width: 970px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 25%;
          width: 25%;
          max-width: 25%;
        }
      }
      @media (max-width: 992px) and (min-width: 768px) { 
        .container {
          width: 750px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 33.33%;
          width: 33.33%;
          max-width: 33.33%;
        }
      }
      @media screen and (max-width: 768px) {
        section.expirence .content-grid {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        section.expirence .content-grid .grid {
          flex: 1;
          text-align: center;
          flex-basis: 100%;
          width: 100%;
          padding: 10px;
        }
        section.box-grid .content-grid .grid.animation {
          flex-basis: 50%;
          width: 50%;
          max-width: 50%;
        }
        header [container] .grid-count > div .count h2 {
          font-size: 24px;
        }
        paper-button.button-ht {
          font-size: 20px;
          font-weight: 700;
          padding: 2vh 10vh;
          background-color: #e05e35;
          color: white;
        }
        header [container] .content .title {
          font-size: 2em;
        }
        header [container] .content .subtitle {
          font-size: 14px;
        }
        section.expirence .title hr,
        section.box-grid .title hr {
          max-width: 20%;
        }
        footer .footer .container > .content-grid {
          flex-wrap: wrap;
        }
        footer .footer .container > .content-grid > .grid {
          flex: 1;
          flex-basis: 100%;
          width: 100%;
          text-align: center;
          padding: 15px;
          border: none;
          height: 65px;
        }
        footer .footer .container > .content-grid > .grid > ul {
          display: flex;
        } 
        footer .footer .container > .content-grid > .grid > ul > li {
          flex: 1;
        }
        footer .footer .container > .content-grid > .grid > .network-socials {
          display: flex;
        }
        footer .footer .container > .content-grid > .grid > .network-socials > .grid {
          flex: 1;
        }
      }
    </style>
  </template>`;styleElement.register("style-element-landing");class Landing extends PolymerElement{static get template(){return html`
      <style include="style-element-landing"></style>
      <header>
        <div container>
          <div id="blank"></div>
          <div class="content">
            <h1 class="title">Ibex largest plataform in Spain</h1>
            <h2 class="subtitle">We compare among hundreds of outfitters. Design your trip in in 1 minute.</h2>
            <a href="[[ routePath ]]form">
              <paper-button class="button-ht">let's go</paper-button>
            </a>
          </div>
          <div class="grid-count">
            <div>
              <div class="count">
                <h2 id="OneCount"></h2>
              </div>
              <div class="text-count"> 
                <p>
                  Verified
                  <br/>
                  Outfitters
                </p>
              </div>
            </div>
            <div>
              <div class="count">
                <h2 id="TwoCount"></h2>
              </div>
              <div class="text-count">
                <p>
                  Hunting
                  <br/>
                  Hectares
                </p>
              </div>
            </div>
            <div>
              <div class="count">
                <h2 id="ThirdCount"></h2> 
              </div>
              <div class="text-count">
                <p>
                  Avilable
                  <br/>
                  Offers
                </p>
              </div>
            </div>
          </div>
        </div>
        <video src="./static/video/video.mp4" type="video/mp4" autoplay loop muted poster="./static/mountain-bg.png"></video>
      </header>
      <section class="expirence">
        <div class="container">
          <div class="title">
            <h1>Hunterfy Experience</h1>
            <hr/>
          </div> 
          <div class="content-grid">
            <div class="grid">
              <img src="./static/icon/tell.png" alt="icon-tell" class="img-card"/>
              <h3 class="title">Tell us what you need</h3>
              <hr/>
              <p>
                Create your own trip
                <br/>
                answering a few simple questions
              </p>
            </div>
            <div class="grid">
              <img src="./static/icon/check.png" alt="icon-check" class="img-card"/>
              <h3 class="title">Verified Outfitters</h3>
              <hr/>
              <p>
                We compare and contrast all of our  outfitters
              </p>
            </div>
            <div class="grid">
              <img src="./static/icon/sofa.png" alt="icon-safa" class="img-card"/>
              <h3 class="title">Book it from your sofa</h3>
              <hr/>
              <p>
                Reserve online and avoid uncomfortable steps
              </p>           
            </div>
            <div class="grid">
              <img src="./static/icon/something.png" alt="icon-somthing" class="img-card"/>
              <h3 class="title">No commissions</h3>
              <hr/>
              <p>
              Direct contact with the outfitter
              </p>
              </div>
          </div> 
          <a href="[[ routePath ]]form">
            <paper-button class="button-ht">START YOUR ADVENTURE</paper-button>
          </a>
          </div>
      </section>
      <section class="box-grid">
        <div class="">
          <div class="title">
            <h1>Leave your hunts in good hands</h1>
            <hr/>
          </div>
          <div class="content-grid">
            <div class="grid animation">
              <img src="./static/images/Enjoy Hunting Activities.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./static/images/Exclusive Acommodation.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“With the hunt you never know but I have hit you guys”</p>
              <span>Martín G.</span>
            </div>
            <div class="grid animation">
              <img src="./static/images/Exclusive Services of Hunterfy.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./static/images/Friendly Hunters.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./static/images/Full Hunting Experience.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“Tremendous hunting day, what else can I say”
              </p>
              <span>Antonio D.</span>
            </div>
            <div class="grid animation">
              <img src="./static/images/Gredos Ibex stalking.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“Highlight the personal service received and the team behind. Thank you”
              </p>
              <span>John AG.</span>
            </div>
            <div class="grid animation">
              <img src="./static/images/Hunterfy senses.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./static/images/Hunting ibex spain.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./static/images/International Hunter.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./static/images/International Hunters.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“I feel your passion for hunting from beginning to end. Do not stop doing things like this. Thank you”</p>
              <span>Mary E.</span>
            </div>
            <div class="grid animation">
              <img src="./static/images/Spanish Food with the best chef.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation">
              <img src="./static/images/Spanish Ibex Specimen.jpg" alt="icon-somthing" class="img-card"/>
            </div>
            <div class="grid animation text">
              <p>“After so many years of hunting, I never imagined finding something so authentic and well done”</p>
              <span>James A.</span>
            </div>
          </div>
        </div>
      </section>
      <section class="choose-stalking">
        <div class="container">
          <div class="title">
            <h1>Choose your stalking from hundreds of offers</h1>
            <hr/>
            <p>Guarantee of shooting. No added fees</p>
          </div>
          <div class="content-grid">
            <div class="grid">
            </div>
            <div class="grid">
            </div>
            <div class="grid">
            </div>
            <div class="grid">
            </div>
          </div>
        </div>
      </section>
      <section class="hunting">
        <div class="container">
          <div class="title">
            <h1>Enjoy the hunting of yesterday with today's technology</h1>
          </div>
          <a href="[[ routePath ]]form">
            <paper-button class="button-ht">START</paper-button>
          </a>
        </div>
      </section>
      <section class="media">
        <div class="container">
          <img src="./static/images/all.jpg"/>
        </div>
      </section>
      <section class="linkbuild">
        <div class="container">
          <div class="content-grid">
            <div class="grid">
              <h4>What kind of stalking are you looking for?</h4>
              <hr/>
            </div>
            <div class="grid">
              <a href="/rececho-macho-montes" title="Recechos de Macho Montés">Ibex Stalking,</a>
              <a href="/rececho-macho-montes-gredos" title="Macho Montés de Gredos">Gredos Ibex Stalking,</a>
              <a href="/rececho-macho-montes-ronda" title="Macho Montés en Ronda">Ronda Ibex,</a>
              <a href="/rececho-macho-montes-beceite" title="Macho Montés en Beceite">Beceite Ibex,</a>
              <a href="/rececho-macho-montes-sierra-nevada" title="Macho Montés en Sierra Nevada">Sierra Nevada Ibex</a>
            </div>
            <br/>
            <div class="grid">
              <h4>Ibex Grand Slam's unique experience</h4>
              <hr/>
            </div>
            <div class="grid">
              <a href="/ibex-grand-slam-spain-offer" title=Grand Slam">Grand Slam</a>
            </div>
            <br/>
            <div class="grid">
              <h4>Verified hunting experiences</h4>
              <hr/>
            </div>
            <div class="grid">
              <a href="/Spanish-ibex-hunting-price.php" title="Spanish">Ibex hunting price,</a>
              <a href="/representative-ibex-offer" title="Oferta Beceite 6 años o 180 puntos">Beceite Offer 6 years or 180 points,</a>
              <a href="/gold-ibex-offer" title="Oro">Gold Offer</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer">
          <div class="container">
            <div class="content-grid">
              <div class="grid">
                <h4>Hunterfy</h4>
                <ul>
                  <li>
                    <a href="/legal">Conditions</a>
                  </li>
                  <li>
                    <a href="/contacto">Contact us</a>
                  </li>
                  <li>
                    <a href="/oferta/rececho-macho-montes-beceite-representativo">Blog</a>
                  </li>
                </ul>
              </div>
              <div class="grid">
                <h4>Trustfulness</h4>
                <div class="payementmethod-grid">
                  <div class="grid">
                    <svg id="footer_pp" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <path fill="#F9F9F9" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
                      <path fill="#003366" d="M57.5,53.9c-0.5,0-1.2,0.4-1.6,1c0,0-3.6,6.2-4,6.8c-0.2,0.3-0.4,0.1-0.4,0c0-0.2-1.1-6.7-1.1-6.7c-0.1-0.5-0.7-1-1.4-1h-2.2c-0.5,0-0.9,0.4-0.8,1c0,0,1.7,9.7,2.1,12c0.2,1.3,0,1.5,0,1.5l-2.2,3.9c-0.3,0.5-0.1,1,0.4,1h2.6c0.5,0,1.3-0.4,1.6-1l10-16.9c0,0,1-1.4,0.1-1.4C59.9,53.9,57.5,53.9,57.5,53.9"></path>
                      <path fill="#003366" d="M25.9,57.3c-0.8,0.6-1.8,0.8-3.2,0.8h-0.6c-0.5,0-0.9-0.4-0.8-1l0.8-3.3c0.1-0.5,0.7-1,1.2-1h0.8c1,0,1.7,0.2,2.2,0.5s0.7,0.8,0.7,1.5C27.1,56,26.7,56.8,25.9,57.3 M31.3,52.3c-0.3-0.6-0.8-1.1-1.4-1.5s-1.3-0.6-2.2-0.8c-0.8-0.2-1.8-0.2-3-0.2h-5.2c-0.5,0-1.1,0.4-1.2,1l-3.5,15.4c-0.1,0.5,0.2,1,0.8,1h2.5c0.5,0,1.1-0.4,1.2-1l0.9-3.7c0.1-0.5,0.7-1,1.2-1h0.7c3.1,0,5.5-0.6,7.2-1.9c1.7-1.3,2.6-2.9,2.6-5C31.8,53.7,31.7,52.9,31.3,52.3"></path>
                      <path fill="#003366" d="M43.4,54.5c-1-0.5-2.4-0.8-4.5-0.8c-1,0-2,0.1-3,0.2c-0.7,0.1-0.8,0.1-1.3,0.2c-1,0.2-1.1,1.2-1.1,1.2l-0.3,1.3c-0.2,0.8,0.3,0.8,0.5,0.7c0.4-0.1,0.6-0.2,1.5-0.4c0.8-0.2,1.7-0.3,2.4-0.3c1,0,1.8,0.1,2.3,0.3s0.8,0.6,0.8,1.1c0,0.1,0,0.3,0,0.4c0,0.1-0.1,0.2-0.4,0.2c-1.4,0.1-2.5,0.2-3.7,0.4s-2.3,0.5-3.2,0.9c-1,0.4-1.7,1-2.2,1.7s-0.7,1.6-0.7,2.6s0.3,1.8,1,2.4c0.7,0.6,1.6,0.9,2.6,0.9c0.7,0,1.2-0.1,1.6-0.1c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.1,0.7-0.3,1-0.6c0.4-0.2,0.6-0.4,0.9-0.6l0,0l-0.1,0.4l0,0l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0l0,0l0,0c0.3,0,1.4,0,1.9,0h0.4l0,0c0.5-0.1,1-0.5,1.1-0.9l1.8-7.9c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.5,0-0.6C44.9,55.9,44.4,55,43.4,54.5z M39,63.9c-0.3,0.2-0.6,0.4-1,0.5c-0.5,0.2-0.9,0.3-1.3,0.3c-0.6,0-1.1-0.1-1.4-0.3c-0.3-0.2-0.5-0.5-0.5-0.9c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.6-0.5,1.1-0.7s1-0.3,1.7-0.4c0.6-0.1,1.7-0.2,1.9-0.2c0.1,0,0.2-0.1,0.2,0.3c0,0.2-0.4,1.5-0.5,2.1C39.4,63.6,39.1,63.9,39,63.9z"></path>
                      <path fill="#336699" d="M89.1,54.5c-1-0.5-2.4-0.8-4.5-0.8c-1,0-2,0.1-3,0.2c-0.7,0.1-0.8,0.1-1.3,0.2c-1,0.2-1.1,1.2-1.1,1.2l-0.3,1.3c-0.2,0.8,0.3,0.8,0.5,0.7c0.4-0.1,0.6-0.3,1.5-0.4c0.8-0.2,1.7-0.3,2.4-0.3c1,0,1.8,0.1,2.3,0.3s0.8,0.6,0.8,1.1c0,0.1,0,0.2,0,0.4c0,0.1-0.1,0.2-0.4,0.2c-1.4,0.1-2.5,0.2-3.7,0.4s-2.3,0.5-3.2,0.9c-1,0.4-1.7,1-2.2,1.7s-0.7,1.6-0.7,2.6s0.3,1.8,1,2.4c0.7,0.6,1.6,0.9,2.7,0.9c0.7,0,1.2-0.1,1.6-0.1c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.1,0.7-0.3,1-0.6c0.4-0.2,0.6-0.4,0.9-0.6l0,0l-0.1,0.4l0,0l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0l0,0l0,0c0.3,0,1.4,0,1.9,0h0.4l0,0c0.5-0.1,1-0.5,1.1-0.9l1.8-7.9c0-0.2,0.1-0.4,0.1-0.7c0-0.2,0.1-0.5,0-0.6C90.5,55.9,90,55.1,89.1,54.5z M84.6,64c-0.3,0.2-0.6,0.4-1,0.5c-0.5,0.2-0.9,0.3-1.3,0.3c-0.6,0-1.1-0.1-1.4-0.3s-0.5-0.5-0.5-0.9c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.6-0.5,1.1-0.7s1-0.3,1.7-0.4c0.6-0.1,1.7-0.2,1.9-0.2c0.1,0,0.2-0.1,0.2,0.3c0,0.2-0.4,1.5-0.5,2.1C85,63.6,84.7,63.9,84.6,64z"></path>
                      <path fill="#336699" d="M71.5,57.4c-0.8,0.5-1.8,0.8-3.2,0.8h-0.6c-0.5,0-0.9-0.4-0.8-1l0.8-3.3c0.1-0.5,0.7-1,1.2-1h0.8c1,0,1.7,0.2,2.2,0.5s0.7,0.8,0.7,1.5C72.7,56,72.3,56.8,71.5,57.4 M76.9,52.4c-0.3-0.6-0.8-1.1-1.4-1.5c-0.6-0.4-1.3-0.6-2.2-0.8c-0.8-0.1-1.8-0.2-3-0.2H65c-0.5,0-1.1,0.4-1.2,1l-3.5,15.4c-0.1,0.5,0.2,1,0.8,1h2.5c0.5,0,1.1-0.4,1.2-1l0.9-3.7c0.1-0.5,0.7-1,1.2-1h0.7c3.1,0,5.5-0.6,7.2-1.9c1.7-1.3,2.6-2.9,2.6-5C77.4,53.7,77.3,53,76.9,52.4"></path>
                      <path fill="#336699" d="M97.7,50h-2.2l0,0l0,0c-0.5,0-1,0.4-1.2,0.9V51c0,0,0,0.2-0.1,0.6l-3.2,14c-0.1,0.3-0.1,0.5-0.1,0.6l0,0c-0.1,0.5,0.2,0.9,0.7,0.9l0,0h2.3c0.5,0,1-0.4,1.2-0.9c0,0,0,0,0-0.1l3.4-15.2l0,0C98.6,50.4,98.3,50,97.7,50z"></path>
                      <path fill="#336699" d="M101.1,53.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.2,0c-0.3,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.4-0.2-0.6V51h-0.3v-0.3h0.3V50h0.4v0.7h0.8V51h-0.8v1.1c0,0.1,0,0.2,0,0.3s0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.3,0c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0l0,0V53.1z"></path>
                      <path fill="#336699" d="M105.2,53.1h-0.4v-1.4c0-0.1,0-0.2,0-0.3s0-0.2-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.3,0.2v0.1v0.1v1.6h-0.4v-1.4c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.3,0.2v1.8h-0.4v-2.4h0.4v0.3c0.1-0.1,0.3-0.2,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.3,0,0.5,0.1,0.6,0.2c0.1,0.2,0.2,0.4,0.2,0.7v1.3H105.2z"></path>
                    </svg>
                  </div>
                  <div class="grid">
                    <svg id="footer_vi" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <rect y="38.6" fill="#F9F9F9" width="120" height="42.9"></rect>
                      <polygon fill="#0066B2" points="53 48.7 49.4 71.3 55.2 71.3 58.9 48.7 "></polygon>
                      <path fill="#0066B2" d="M91.2,48.7h-4.7c-2.2,0-2.7,1.7-2.7,1.7l-8.7,20.8h6.1l1.2-3.3h7.5l0.7,3.3H96L91.2,48.7z M84.1,63.3    l3.1-8.4l1.7,8.4C88.9,63.3,84.1,63.3,84.1,63.3z"></path>
                      <path fill="#0066B2" d="M67.3,55c0-2.5,5.7-2.2,8.2-0.8l0.8-4.8c0,0-2.6-1-5.3-1c-2.9,0-9.8,1.3-9.8,7.5c0,5.8,8.1,5.9,8.1,8.9c0,3.1-7.3,2.5-9.7,0.6l-0.9,5.1c0,0,2.6,1.3,6.6,1.3s10-2.1,10-7.7C75.5,58.1,67.3,57.5,67.3,55z"></path>
                      <path fill="#0066B2" d="M44.4,48.7l-5.6,15.5l-0.7-3.3l0,0c0,0-1.3-4.1-5.4-7.4c-0.9-0.7-1.7-1.3-2.6-1.8l5.1,19.6h6.1l9.3-22.5h-6.2V48.7z"></path>
                      <path fill="#0066B2" d="M120,38.6V26.5c0-2.2-1.8-4-4-4H4c-2.2,0-4,1.8-4,4v12.1H120z"></path>
                      <path fill="#F9A533" d="M0,81.4v12.1c0,2.2,1.8,4,4,4h112c2.2,0,4-1.8,4-4V81.4H0z"></path>
                      <path fill="#F9A533" d="M38.2,60.9l-2-10.1c0,0-0.2-2-2.8-2h-9.2l-0.1,0.4c0,0,4.4,0.9,8.7,4.4C36.9,56.8,38.2,60.9,38.2,60.9z"></path>
                    </svg>
                  </div>
                  <div class="grid">
                    <svg id="footer_mc" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <path fill="#13457C" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
                      <circle fill="#FBB231" cx="74.4" cy="60" r="21.5"></circle>
                      <path fill="#EC1C2E" d="M58.9,74.9l-1-1.2h4.3c0.4-0.5,0.7-0.9,1.1-1.4h-6.5L56,71.1h8c0.3-0.5,0.5-0.9,0.8-1.4h-9.6l-0.5-1.2h10.7c0.2-0.5,0.4-0.9,0.5-1.4H54.1l-0.4-1.2h12.5c0.1-0.5,0.3-0.9,0.4-1.4h-3.9l0.2-1.2h3.8c0.1-0.5,0.1-0.9,0.2-1.4h-3.8l0.2-1.2H67c0-0.2,0-0.5,0-0.7c0-1-0.1-1.9-0.2-2.9H53.1l0.2-1.2h13.4c-0.1-0.5-0.2-1-0.3-1.4H53.6l0.4-1.2h12c-0.2-0.5-0.3-1-0.5-1.4h-11l0.5-1.2h10c-0.2-0.5-0.5-1-0.7-1.4h-8.5l0.7-1.2h7.1c-0.3-0.5-0.7-1-1-1.4h-5l1-1.2h3c-3.9-4.3-9.6-7.1-15.9-7.1C33.7,38.5,24,48.1,24,60s9.7,21.5,21.6,21.5c6.1,0,11.6-2.6,15.5-6.7L58.9,74.9L58.9,74.9z M53,60.7h1.3v1.2H53V60.7z"></path>
                      <polygon fill="#FFFFFF" points="77.2 65.4 77.3 65.5 79.1 65.5 79.1 65.4 77.3 65.4 77.3 65.4 77.2 65.4 77.2 65.5 77.3 65.5 77.2 65.4 "></polygon>
                      <polygon fill="#FFFFFF" points="77.3 64.6 77.3 64.5 77.2 64.7 77.2 64.8 77.2 65.1 77.2 65.4 77.3 65.4 77.3 65.1 77.3 64.8 77.3 64.7 77.3 64.6 77.3 64.5 77.3 64.6 "></polygon>
                      <polygon fill="#FFFFFF" points="74.5 65.5 74.5 65.5 74.7 65.6 74.9 65.6 75.1 65.6 75.3 65.6 75.5 65.5 75.7 65.5 75.9 65.4 76.1 65.4 76.3 65.3 76.5 65.2 76.7 65.1 76.8 65 77 64.9 77.1 64.8 77.2 64.7 77.3 64.6 77.3 64.5 77.2 64.6 77.1 64.7 76.9 64.8 76.8 65 76.6 65 76.5 65.1 76.3 65.2 76.1 65.3 75.9 65.3 75.7 65.4 75.5 65.4 75.3 65.5 75.1 65.5 74.9 65.5 74.7 65.5 74.5 65.4 74.5 65.4 74.5 65.5 "></polygon>
                      <polygon fill="#FFFFFF" points="47 59.6 47.1 59.5 47.2 59.5 47.5 59.3 48.2 59.3 48.5 59.3 49.9 59.4 50.3 57.6 49.6 57.5 48.2 57.4 47.5 57.4 47.1 57.4 46.7 57.5 46.4 57.5 46.1 57.6 45.8 57.7 45.6 57.8 45.3 58 45.1 58.2 45 58.4 44.8 58.6 44.7 58.8 44.6 59 44.6 59.3 44.5 59.6 44.5 59.9 44.5 60.3 44.5 60.7 44.7 61.1 44.9 61.4 45.1 61.6 45.4 61.8 45.7 62 46 62.1 46.5 62.3 46.8 62.4 47 62.5 47.1 62.6 47.2 62.8 47.3 62.9 47.3 63.1 47.2 63.3 47.2 63.4 47.1 63.5 47 63.6 46.9 63.6 46.8 63.7 46.6 63.7 46.4 63.7 45.8 63.7 45.4 63.7 43.9 63.4 43.6 65.1 43.5 65.2 44 65.3 44.5 65.5 45.2 65.5 46.6 65.6 46.8 65.5 47.3 65.5 47.8 65.4 48 65.3 48.3 65.2 48.5 65.1 48.8 65 49 64.8 49.2 64.6 49.3 64.4 49.5 64.1 49.6 63.8 49.7 63.5 49.8 63.2 49.8 62.7 49.8 62.3 49.7 62 49.6 61.7 49.4 61.4 49.2 61.2 49 61.1 48.8 60.9 47.6 60.5 47.4 60.4 47.2 60.3 47.1 60.2 47 60.1 47 59.9 47 59.8 47 59.8 "></polygon>
                      <polygon fill="#FFFFFF" points="53.3 63.7 53 63.8 52.8 63.7 52.7 63.7 52.4 63.6 52.4 63.6 52.3 63.5 52.3 63.4 52.3 63.3 53 59.3 54.2 59.4 54.5 57.5 53.3 57.5 53.6 55.8 51.4 55.8 50 63.8 49.9 64.1 50 64.5 50 64.6 50 64.8 50.1 64.9 50.2 65 50.3 65.1 50.4 65.2 50.6 65.3 50.7 65.4 50.9 65.4 51.2 65.5 51.7 65.5 52.3 65.5 52.9 65.4 53.3 65.3 53.6 65.1 53.9 63.7 53.9 63.6 53.7 63.6 "></polygon>
                      <path fill="#FFFFFF" d="M60,63.4l-0.2,0.1l-0.4,0.1l-0.6,0.1h-0.4H58h-0.4l-0.5-0.1L57,63.5l-0.2-0.2l-0.2-0.2L56.5,63l-0.2-0.2l-0.2-0.3v-0.1v-0.1v-0.1h4.7v-0.5l0.1-0.6l0.1-0.6V60l0-0.5l-0.1-0.4l-0.2-0.3l-0.2-0.3l-0.2-0.3L60,58l-0.3-0.2l-0.3-0.1l-0.2-0.2h-0.3l-0.3-0.1h-0.3H58h-0.6l-0.6,0.1l-0.5,0.1l-0.4,0.2L55.5,58l-0.3,0.3l-0.3,0.3l-0.2,0.3l-0.2,0.3l-0.2,0.3l-0.1,0.3L54,60.2v0.3l-0.1,0.3l-0.1,0.5v0.6v0.5l0.1,0.5l0.1,0.4l0.2,0.4l0.2,0.3l0.3,0.3l0.3,0.3l0.3,0.2l0.3,0.2l0.4,0.1l0.4,0.1l0.4,0.1l0.4,0.1h0.4h0.6h0.4l0.7-0.1l0.4-0.1l0.5-0.2l0.3-0.1l0.3-2.1L60,63.4zM56.4,60.5L56.4,60.5l0.1-0.4l0.1-0.2l0.2-0.2l0.2-0.2l0.2-0.1l0.2-0.1h0.2h0.1h0.2l0.2,0.1l0.1,0.1l0.2,0.1l0.1,0.1l0.1,0.2l0.1,0.2v0.1v0.3v0.1L56.4,60.5L56.4,60.5z"></path>
                      <polygon fill="#FFFFFF" points="72.3 63 72.1 63.1 72 63.2 71.8 63.2 71.5 63.3 71.1 63.4 70.6 63.4 70.2 63.4 69.7 63.3 69.5 63.2 69.3 63.1 69.1 63 68.9 62.8 68.8 62.7 68.6 62.5 68.5 62.3 68.5 62.1 68.4 61.9 68.3 61.7 68.3 61.2 68.3 60.9 68.4 60.4 68.5 60 68.6 59.6 68.8 59.2 68.9 58.9 69.1 58.6 69.3 58.4 69.5 58.2 69.7 58.1 69.9 58 70 57.9 70.2 57.8 70.4 57.7 70.8 57.7 71.5 57.7 71.9 57.7 72.3 57.8 72.8 57.9 73.4 58.2 73.8 56 73.2 55.8 72.3 55.5 71.6 55.5 71.2 55.4 70.6 55.5 70.4 55.5 69.9 55.6 69.4 55.7 69 55.8 68.5 56 68.3 56.1 68 56.4 67.8 56.5 67.5 56.8 67.2 57.2 66.9 57.6 66.8 57.8 66.6 58.2 66.4 58.7 66.2 59.2 66 59.7 65.9 60.3 65.8 61 65.8 61.5 65.9 62.1 65.9 62.6 66.1 63 66.3 63.4 66.5 63.8 66.7 64.1 67 64.4 67.3 64.7 67.6 64.9 67.9 65.1 68.3 65.3 68.6 65.4 69 65.4 69.3 65.5 69.7 65.5 70.1 65.5 70.7 65.5 71 65.5 71.4 65.4 71.7 65.3 71.9 65.2 72.3 64.9 72.6 62.9 72.4 62.8 "></polygon>
                      <path fill="#FFFFFF" d="M90.8,55.8l-0.5,2.7l-0.1-0.1l-0.3-0.3L89.8,58l-0.3-0.2l-0.2-0.1L89,57.6h-0.2h-0.2h-0.2h-0.3h-0.3l-0.3,0.1l-0.3,0.1l-0.3,0.1l-0.3,0.2l-0.3,0.2L86,58.5l-0.2,0.2L85.6,59l-0.2,0.3l-0.2,0.3L85,60l-0.2,0.4l-0.1,0.4l-0.1,0.4l-0.1,0.4V62v0.4v0.4l0.1,0.4l0.1,0.4l0.1,0.4l0.2,0.3l0.2,0.3l0.2,0.3l0.2,0.3l0.3,0.2l0.3,0.2l0.3,0.1l0.4,0.1h0.4h0.1h0.2l0.4-0.1l0.3-0.1l0.1-0.1l0.1-0.1l0.3-0.2l0.3-0.2l0.1-0.1l-0.1,0.6h2.2l1.7-9.6v-0.1C93,55.8,90.8,55.8,90.8,55.8zM88.3,59.5l0.2-0.1h0.2h0.2h0.2h0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.2l0.1,0.2v0.2v0.2V61v0.2v0.2v0.2v0.2L89.9,62l-0.1,0.2l-0.1,0.2l-0.2,0.1l-0.1,0.2l-0.1,0.2L89.2,63l-0.1,0.1L89,63.3l-0.1,0.1l-0.2,0.1h-0.2l-0.2,0.1h-0.2h-0.2l-0.3-0.1l-0.2-0.2l-0.2-0.2l-0.1-0.3L87,62.6l-0.1-0.4v-0.3v-0.3v-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1L88.3,59.5z"></path>
                      <path fill="#FFFFFF" d="M44.2,59.7v-0.3v-0.3l-0.1-0.2L44,58.6l-0.2-0.2l-0.2-0.2L43.4,58l-0.2-0.1L43,57.8l-0.2-0.1l-0.2-0.1l-0.3-0.1h-0.2h-0.2h-0.2h-1.2h-0.8L39,57.6l-0.4,0.1l-0.4,0.1l-0.6,2l0.4-0.2l0.3-0.1l1-0.2l0.7-0.1h0.5h0.6h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1v0.1v0.1l-0.1,0.2h-0.2h-0.2H41h-0.8L39,60.5l-0.3,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L37.9,61l-0.2,0.2l-0.2,0.2l-0.2,0.2l-0.2,0.2L37,62l-0.1,0.2l-0.1,0.3l-0.1,0.3v0.3v0.3v0.2v0.2l0.1,0.3v0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.2l0.1,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.3,0.1l0.4,0.1h0.4h0.2l0.4-0.1l0.4-0.1l0.4-0.2l0.3-0.2l0.1-0.1l-0.1,0.3h2l0.3-1.7l0.7-3.8L44.2,59.7zM41.3,63L41.3,63l-0.1,0.2l-0.1,0.1L41,63.4l-0.1,0.1h-0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1h-0.2h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1l-0.1-0.1l-0.2-0.2L39,63.4v-0.2V63v-0.1v-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1h0.1l0.1-0.1H40h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1H41h0.1h0.1h0.1h0.1h0.1h0.1h0.1l0,0l0,0l0,0v0.2v0.2l-0.1,0.2l-0.1,0.2v0.1L41.3,63L41.3,63z"></path>
                      <polygon fill="#FFFFFF" points="33.8 55.8 31.6 61.1 31.3 55.8 27.6 55.8 26 65.4 25.9 65.5 28.1 65.5 29.3 58.8 29.7 65.1 29.7 65.5 32.1 65.5 34.8 58.9 33.7 65.5 35.9 65.5 37.6 55.8 "></polygon>
                      <path fill="#FFFFFF" d="M80.2,59.7v-0.3l-0.1-0.3L80,58.9v-0.2l-0.2-0.2l-0.2-0.2l-0.2-0.2L79.2,58L79,57.9l-0.2-0.1l-0.2-0.1l-0.2-0.1l-0.2-0.1H78h-0.2h-0.2h-0.2H77h-0.2h-0.2h-0.2h-0.2H76h-0.2h-0.2h-0.2h-0.2H75l-0.2,0.1l-0.2,0.1l-0.2,0.1l0,0l0,0l-0.5,1.8H74h0.1l0.1-0.1h0.1h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2h0.2l0,0h0.2h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1v0.2l0,0v0.1v0.1v0.1l0,0h-0.1h-0.1h-0.1h-0.2h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1H76h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1h-0.1l0,0l0,0H75l-0.2,0.1l-0.2,0.1l-0.2,0.1l-0.2,0.1L74,61l-0.2,0.2l-0.2,0.2l-0.2,0.2l-0.2,0.2L73.1,62L73,62.3l-0.1,0.2l-0.1,0.3v0.3v0.3v0.2v0.2V64v0.2v0.2l0.1,0.2l0.1-0.1l0.1,0.2l0.1,0.2l0.1,0.1l0.1,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.2,0.1l0.3,0.1l0,0l0,0h0.2h0.2h0.2h0.2h0.2h0.2l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1v0.1v0.2v0.3v0.3h1.8l0,0l0,0l0,0l0.3-1.6l0.8-3.8L80.2,59.7zM77.6,62.1v0.2v0.2v0.2v0.1v0.1V63l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.2,0l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.2,0.1l-0.2,0.1h-0.2h-0.2h-0.2h-0.1h-0.1h-0.1l-0.1-0.1l-0.2-0.3L75,63.4v-0.2V63v-0.1v-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1h0.1H76h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.1H77h0.1h0.1h0.1h0.1h0.1L77.6,62.1L77.6,62.1l0.2-0.1l0,0l0,0L77.6,62.1z"></path>
                      <polygon fill="#FFFFFF" points="84.9 59.5 85.1 59.5 85.5 57.4 84.9 57.5 84.8 57.5 84.4 57.6 84.2 57.7 83.9 57.9 83.7 58.1 83.4 58.3 83.3 58.5 83.4 57.5 81.2 57.5 79.8 65.4 79.8 65.5 82.1 65.5 82.8 61.3 82.9 61 83 60.7 83 60.5 83.2 60.2 83.3 60.1 83.4 60 83.6 59.9 83.7 59.8 83.9 59.7 84.1 59.6 84.3 59.6 84.6 59.5 "></polygon>
                      <polygon fill="#FFFFFF" points="66.3 58 66.7 57.5 66.5 57.5 66.3 57.5 66.3 57.5 66.2 57.4 65.7 57.5 65.5 57.5 65.3 57.6 65.1 57.6 64.8 57.8 64.6 58 64.4 58.1 64.2 58.3 64.1 58.5 64.3 57.5 62 57.5 60.6 65.4 60.6 65.5 62.9 65.5 63.6 61.3 63.7 60.8 63.8 60.6 63.8 60.4 63.9 60.3 64 60.2 64.2 60 64.4 59.9 64.6 59.8 64.8 59.8 65 59.7 65.2 59.7 65.5 59.7 65.8 59.7 66.1 58.4 "></polygon>
                    </svg>
                  </div>
                  <div class="grid">
                    <svg id="footer_am" viewBox="0 22.5 120 75" width="100%" height="100%">
                      <path fill="#F9F9F9" d="M120,93.5c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4v-67c0-2.2,1.8-4,4-4h112c2.2,0,4,1.8,4,4V93.5z"></path>
                      <polygon fill="#0073A5" points="77.1 75.3 86.1 75.3 86.1 72.9 79.8 72.9 79.8 70.7 85.9 70.7 85.9 68.6 79.8 68.6 79.8 66.5 86.1 66.5 86.1 64.1 77.1 64.1 "></polygon>
                      <path fill="#0073A5" d="M103.5,68.4c-0.2,0-1.7-0.1-1.9-0.1c-0.7-0.1-1.2-0.2-1.2-0.9c0-1.1,1-1,2-1h4.2V64h-5.8c-1.8,0-3.3,1.2-3.3,3.3c0,1.9,0.7,3.4,3.8,3.5c0.2,0,1.5,0.1,1.9,0.1c0.8,0.1,1,0.4,1,0.9c0,1.1-1.1,1.1-1.9,1.1h-4.5v2.4h5.8c1.8,0,3.5-1.1,3.5-3.2C107.2,70.3,106.9,68.6,103.5,68.4z"></path>
                      <path fill="#0073A5" d="M93.1,68.4c-0.2,0-1.7-0.1-1.9-0.1c-0.7,0-1.2-0.1-1.2-0.8c0-1.1,1-1,2-1h4.2v-2.4h-5.8c-1.8,0-3.3,1.2-3.3,3.3c0,1.9,0.7,3.4,3.8,3.5c0.2,0,1.5,0.1,1.9,0.1c0.8,0.1,1,0.4,1,0.9c0,1.1-1.1,1.1-1.9,1.1h-4.5v2.4h5.8c1.8,0,3.5-1.1,3.5-3.2C96.8,70.3,96.5,68.6,93.1,68.4z"></path>
                      <path fill="#0073A5" d="M60.4,64.1h-9.7l-3.2,3.5l-3.1-3.5H33.6v11.2h10.5l3.3-3.7l3.2,3.7H56v-3.8h3.7c1.4,0,4,0,4-4C63.7,64.7,61.8,64.1,60.4,64.1z M42.7,72.9h-6.4v-2.2h6.1v-2.1h-6.1v-2.1H43l2.7,3.1L42.7,72.9z M53.3,74.2l-4-4.7l4-4.4V74.2zM59.5,69.2H56v-2.7h3.4c1.2,0,1.5,0.7,1.5,1.3C61,68.5,60.6,69.2,59.5,69.2z"></path>
                      <path fill="#0073A5" d="M75.6,67.1c0-2.4-2-3-3.3-3h-7.2v11.2h2.8v-4h3.6c1,0,1.3,1,1.4,1.9l0.1,2.1h2.7L75.6,73c0-1.8-0.5-2.7-1.8-2.8C75.2,69.5,75.6,68.5,75.6,67.1z M71.3,69h-3.4v-2.5h3.4c1.2,0,1.5,0.7,1.5,1.3C72.9,68.5,72.5,69,71.3,69z"></path>
                      <rect x="66.3" y="44.7" fill="#0073A5" width="2.8" height="11.2"></rect>
                      <polygon fill="#0073A5" points="52.7 53.6 46.4 53.6 46.4 51.3 52.5 51.3 52.5 49.2 46.4 49.2 46.4 47.1 52.7 47.1 52.7 44.7 43.7 44.7 43.7 55.9 52.7 55.9 "></polygon>
                      <path fill="#0073A5" d="M64.8,47.7c0-2.4-2-3-3.3-3h-7.2v11.2h2.8v-4h3.6c1,0,1.3,1,1.4,1.9l0.1,2.1h2.7l-0.1-2.3c0-1.8-0.5-2.7-1.8-2.8C64.4,50.1,64.8,49.1,64.8,47.7z M60.5,49.6h-3.4v-2.5h3.4c1.2,0,1.5,0.7,1.5,1.3C62.1,49.1,61.7,49.6,60.5,49.6z"></path>
                      <path fill="#0073A5" d="M39,47.7v8.2h2.8V44.7h-4.4L34,52.2l-3.4-7.5h-4.3v10.8l-4.8-10.8h-3.6L13,55.9h2.9l1.1-2.5h5.5l1.1,2.5H29v-8.3l3.7,8.3h2.5L39,47.7z M17.9,51l1.6-3.9l1.7,3.9H17.9z"></path>
                      <path fill="#0073A5" d="M74.8,55.9h3.6l1.1-2.5H85l1.1,2.5h5.4v-8.2l5,8.2h3.8V44.7h-2.8v7.8l-4.6-7.8h-4.1v10.5L84,44.7h-3.6l-3.8,8.7c0,0-1.6,0-1.8,0c-0.7-0.1-1.7-0.6-1.7-2.6V50c0-2.6,1.4-2.8,3.3-2.8h1.7v-2.4h-3.6c-1.3,0-4,1-4.1,5.6C70.3,53.4,71.7,55.9,74.8,55.9z M82.2,47.1l1.7,3.9h-3.4L82.2,47.1z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="grid">
                <h4>Community</h4>
                <div class="network-socials">
                  <div class="grid">
                    <a href="https://www.facebook.com/HunterfySpain/" target="_blank">
                      <iron-icon icon="app-icons:facebook"></iron-icon>
                      Facebook
                    </a>
                  </div>
                  <div class="grid">
                    <a href="https://www.facebook.com/HunterfySpain/" target="_blank">
                      <iron-icon icon="app-icons:youtube"></iron-icon>
                      Youtube
                    </a>
                  </div>
                  <div class="grid">
                    <a href="https://www.instagram.com/hunterfy/" target="_blank">
                      <iron-icon icon="app-icons:instagram"></iron-icon>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              <div class="grid" style="text-align: center">
                <h3>Doubts? Contact Us</h3>
                <p>
                  <a href="tel:+34649613609">+34 649 613 609</a>
                </p>
                <p>You can also write to our email address:</p>
                <a href="mailto:hello@hunterfy.com?subject=feedback">hello@hunterfy.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="micro-footer">
          <div class="container">
            <div class="content-grid">
              <div class="grid">
                <a href="/legal">Terms &amp; Condition</a>
              </div>
              <div class="grid">
                <a href="/cookies">Cookies</a>
              </div>
              <div class="grid">
                <a href="/privacy-policies">Privacy Policies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `}static get properties(){return{}}ready(){super.ready();this.$.blank.style=`height: ${this.pt}px;`;this.OneCount=0;this.TwoCount=125900;this.ThirdCount=1300;let intervalOne=setInterval(()=>{this.OneCount+=1;this.$.OneCount.innerHTML=this.OneCount.toLocaleString();if(108===this.OneCount)clearInterval(intervalOne)},1),intervalTwo=setInterval(()=>{this.TwoCount+=1;this.$.TwoCount.innerHTML=this.TwoCount.toLocaleString();if(126e3===this.TwoCount)clearInterval(intervalTwo)},1),intervalThird=setInterval(()=>{this.ThirdCount+=1;this.$.ThirdCount.innerHTML=this.ThirdCount.toLocaleString();if(1404===this.ThirdCount)clearInterval(intervalThird)},1)}}window.customElements.define("app-landing",Landing);const styleElement$1=document.createElement("dom-module");styleElement$1.innerHTML=`<template>
    <style>
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
      }
      .container {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
      a[disabled] {
        pointer-events: none;
        cursor: default;
      }
      header {
        flex: 1;
        width: 100%;
        flex-basis: 10%;
        min-height: 10%;
        text-align: center;
        margin-top: 10px;r
        box-sizing: border-box;
      }
      header h4 {
        font-size: 18px;
        font-weight: 300;
        color: #252422;
        margin: 0;
      }
      header p {
        font-size: 14px;
        font-weight: 400;
        color: #9a9a9a;
        margin-bottom: 0;
      }
      .form-content {
        flex: 1;
        width: 100%;
        flex-basis: 70%;
        min-height: 70%; 
      }
      .form-content iron-pages {
        display: flex;
        width: 100%;
        height: 100%;
      }
      .tabs-navigations {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        width: 100%;
        flex-basis: 20%;
        min-height: 20%;
        justify-content: center;
        align-items: center;
      }
      .tabs-navigations .step {
        display: flex;
        flex: 1;
        border-radius: 100%;
        overflow: hidden;
        text-align: center;
        height: 100%;
        min-width: 80px;
        align-items: center;
        justify-content: center;
      }
      .tabs-navigations .step a {
        color: #9a9a9a;
        text-decoration: none;
        transition: all .85s ease;
      }
      .tabs-navigations .step a:hover,
      .tabs-navigations .step a.passed,
      .tabs-navigations .step a.active {
        color: #e05e35;
      }
      .tabs-navigations .step a .step-icon {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #9a9a9a;
        // color: #e05e35;
        margin-bottom: 8px;
        border-radius: 100%;
        border: 2.5px solid #e7e7e7;
        // border: 2.5px solid #e05e35;
        background-color: transparent;
        transition: all .85s ease;
        overflow: hidden;
        position: relative;
      }
      .tabs-navigations .step a:hover .step-icon,
      .tabs-navigations .step a.passed .step-icon {
        color: #e05e35;
        border: 2.5px solid #e05e35;
      }
      .tabs-navigations .step a.active .step-icon {
        color: white;
        background-color: #e05e35;
        border: 2.5px solid #e05e35;
      }
      @media screen and (min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
      @media (max-width: 1200px) and (min-width: 992px) { 
        
      }
      @media (max-width: 992px) and (min-width: 768px) { 
        .container {
          width: 750px;
        }
      }
      @media screen and (max-width: 768px) {
        .container {
          padding: 0;
        }
        .tabs-navigations .step {
          max-width: 80px;
        }
        .tabs-navigations .step:first-child,
        .tabs-navigations .step:last-child {
          display: none;
        }
      }
    </style>
  </template>`;styleElement$1.register("style-element-form");const styleElement$2=document.createElement("dom-module");styleElement$2.innerHTML=`<template>
    <style>
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        --paper-input-container-focus-color: #e05e35;
      }
      .hidden {
        display: none;
      }
      form {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
      .title {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        font-size: 30px;
        text-align: center;
      }
      .form-control {
        width: 50%;
        margin: 0 auto;
      }
      .form-control .button-control paper-button {
        width: 100%;
        background-color: #e05e35;
        color: #ffff;
      }
    </style>
  </template>`;styleElement$2.register("style-element-name");class Name extends PolymerElement{static get template(){return html`
      <style include="style-element-name"></style>
      <form id="form">
        <h2 class="title">What is your name?</h2>
        <div class="form-control">
          <paper-input label="Name" name="name" id="name" value="[[ object.name ]]"></paper-input>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-click="_onclick" on-value-changed="_change">Next</paper-button>
            <button type="submit" id="submit" class="hidden"></button>
          </div>
        </div>
      </form>
    `}constructor(){super();this._submit=this._submit.bind(this);this._onclick=this._onclick.bind(this)}ready(){super.ready();this.$.form.addEventListener("submit",this._submit)}static get properties(){return{page:{type:Object,notify:!0},object:{type:Object,notify:!0}}}_onclick(){if(this.$.name.value)this.$.submit.click();else this.toast("The name field is empty")}_submit(e){e.preventDefault();this.setProperties({object:{...this.object,name:this.$.name.value},page:"place"})}}window.customElements.define("app-name",Name);const styleElement$3=document.createElement("dom-module");styleElement$3.innerHTML=`<template>
    <style>
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        --paper-input-container-focus-color: #e05e35;
      }
      .hidden {
        display: none;
      }
      form {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        font-size: 30px;
        text-align: center;
      }
      .form-control {
        width: 50%;
        margin: 0 auto;
      }
      .form-control .button-control {
        text-align: center;
      }
      .form-control paper-input-place {
        position: relative;
        display: block;
        width: 100%;
      }
      .form-control .button-control paper-button {
        width: 48%;
        margin: 0;
        background-color: #e05e35;
        color: #ffff;
      }
      .grid-container {
        position: relative;
        width: auto;
        display: flex;
        flex-wrap: wrap;
        padding: 2.5px;
        margin-top: 2.5px;
      }
      .grid-container .grid-place {
        flex: 1;
        flex-basis: 50%;
        width: 50%;
        box-sizing: border-box;
        padding: 10px;
      }
      .grid-container .grid-place a {
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        display: flex;
        border-radius: 10px;
        border: 1.5px solid transparent;
        transition: all .2s linear;
      }
      .grid-container .grid-place a.active {
        border-color: #e05e35;
      }
      .grid-container .grid-place img {
        width: 100%;
        height: 100%;
        min-height: 250px;
        object-fit: cover;
        transition: all .5s ease-in-out;
      }
      .grid-container .grid-place a:hover img {
        transform: scale(1.2); 
      }
      .grid-container .grid-place h3 {
        cursor: pointer;
        position: absolute;
        z-index: 200;
        color: white;
        text-shadow: 1px 1px 1px black;
        text-align: center;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        margin: 0;
        text-transform: capitalize;
      }
      @media screen and (max-width: 768px){
        .grid-container .grid-place {
          flex: 1;
          flex-basis: 100%;
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
        } 
      } 
      @media screen and (max-width: 390px){
        .form-control .button-control paper-button {
          width: 100%;
          margin-bottom: 10px;
        }
      }
    </style>
  </template>`;styleElement$3.register("style-element-place");class Place extends PolymerElement{static get template(){return html`
      <style include="style-element-place"></style>
      <form id="form">
        <h2 class="title">[[ object.name ]], ¿What city are you from?</h2>
        <div class="form-control">
          <paper-input-place 
            label="Place" 
            name="place" 
            id="place" 
            required 
            api-key="AIzaSyBxDdU9RdjN9pGv4jOrDi8sXCYWl1maVJU" 
            value="{{ value }}" 
            place="{{ place }}" 
            error-message="Pick a place from the list"
          >
          </paper-input-place>
          <br/>
          <div class="grid-container">
            <div class="grid-place">
              <a id="gredos">
                <img src="./static/images/G1 Hunting spanish ibex.jpg" alt=""/>
                <h3>gredos</h3>
                <paper-ripple></paper-ripple>
              </a>
            </div>
            <div class="grid-place">
              <a id="sierraNevada">
                <img src="./static/images/Spanish Hunting Landscapes.jpg" alt=""/>
                <h3>sierra nevada</h3>
                <paper-ripple></paper-ripple>
              </a> 
            </div>
            <div class="grid-place">
              <a id="ronda">
                <img src="./static/images/Panoramic view of Ronda.jpg" alt=""/>
                <h3>ronda</h3>
                <paper-ripple></paper-ripple>
              </a>  
            </div>
            <div class="grid-place">
              <a id="beceite">
                <img src="./static/images/G1 Beceite secrets.jpg" alt=""/>
                <h3>beceite</h3>
                <paper-ripple></paper-ripple>
              </a>
            </div>
          </div>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-click="_back">Back</paper-button>
            <paper-button raised on-click="_onclick">Next</paper-button>
            <button type="submit" id="submit" class="hidden"></button>  
          </div>
        </div>
      </form>
    `}constructor(){super();this._submit=this._submit.bind(this);this._onclick=this._onclick.bind(this);this._back=this._back.bind(this);this._selectArea=this._selectArea.bind(this)}ready(){super.ready();this.$.form.addEventListener("submit",this._submit);this.$.gredos.addEventListener("click",()=>this._selectArea("gredos"));this.$.sierraNevada.addEventListener("click",()=>this._selectArea("sierra nevada"));this.$.ronda.addEventListener("click",()=>this._selectArea("ronda"));this.$.beceite.addEventListener("click",()=>this._selectArea("beceite"))}static get properties(){return{page:{type:Object,notify:!0},object:{type:Object,notify:!0},place:{type:Object,value:{}},area:{type:Object,value:{}}}}_back(){this.set("page","name")}_selectArea(area){this.$.gredos.classList.remove("active");this.$.sierraNevada.classList.remove("active");this.$.ronda.classList.remove("active");this.$.beceite.classList.remove("active");switch(area){case"gredos":this.$.gredos.classList.add("active");break;case"sierra nevada":this.$.sierraNevada.classList.add("active");break;case"ronda":this.$.ronda.classList.add("active");break;case"beceite":this.$.beceite.classList.add("active");break;}this.area=area}_onclick(){if(0<Object.keys(this.place).length&&0<Object.keys(this.area).length)this.$.submit.click();else this.toast("You have not selected a place or an area")}_submit(e){e.preventDefault();this.setProperties({object:{...this.object,place:{...this.place,area:this.area}},page:"size"})}}window.customElements.define("app-place",Place);const styleElement$4=document.createElement("dom-module");styleElement$4.innerHTML=`<template>
    <style>
      :host {
        position: relative;
        display: flex; 
        width: 100%;
        height: 100%;
        --paper-input-container-focus-color: #e05e35;
      }
      .hidden {
        display: none;
      }
      form {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        font-size: 30px;
        text-align: center;
      }
      .form-control {
        width: 50%;
        margin: 0 auto;
      }
      .form-control .button-control {
        text-align: center;
      }
      .form-control .button-control paper-button {
        width: 48%;
        margin: 0;
        background-color: #e05e35;
        color: #ffff;
      }
      .form-control .selected-button {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
      .form-control .selected-button .grid {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .form-control .selected-button .grid > div {
        flex: 1;
        padding: 5px;
      }
      .form-control .selected-button .grid .count {
        font-size: 30px;
        font-weight: 700;
        color: #e05e35;
        text-align: center;
      }
      .form-control .selected-button .grid .label {
        font-size: 18px;
        text-align: center;
      }
      .form-control .selected-button .grid .button {
        text-align: center;
      }
      .form-control .selected-button .grid .button paper-icon-button {
        background-color: #e05e35;
        color: #ffff;
        border-radius: 100%;
      }
      @media screen and (max-width: 390px){
        .form-control .button-control paper-button {
          width: 100%;
          margin-bottom: 10px;
        }
      }
    </style>
  </template>`;styleElement$4.register("style-element-size");class Size extends PolymerElement{static get template(){return html`
      <style include="style-element-size"></style>
      <form id="form">
        <h2 class="title">What category of trophy doo you want?</h2>
        <div class="form-control">
          <div class="selected-button">
            <div class="grid">
              <div class="count">[[ size.countGold ]]</div>
              <div class="label">Gold</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeGold"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addGold"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ size.countSilver ]]</div>
              <div class="label">Silver</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeSilver"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addSliver"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ size.countBronce ]]</div>
              <div class="label">Bronce</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeBronce"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addBronce"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ size.countRepresentative ]]</div>
              <div class="label">Representative</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeRepresentative"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addRepresentative"></paper-icon-button>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-click="_back">Back</paper-button>
            <paper-button raised on-click="_onclick">Next</paper-button>
            <button type="submit" id="submit" class="hidden"></button>  
          </div>
        </div>
      </form>
    `}constructor(){super();this._submit=this._submit.bind(this);this._onclick=this._onclick.bind(this);this._back=this._back.bind(this)}ready(){super.ready();this.size={countGold:0,countSilver:0,countBronce:0,countRepresentative:0};this.$.form.addEventListener("submit",this._submit)}static get properties(){return{page:{type:Object,notify:!0},object:{type:Object,notify:!0}}}_addGold(){this.set("size.countGold",this.size.countGold+1)}_addSliver(){this.set("size.countSilver",this.size.countSilver+1)}_addBronce(){this.set("size.countBronce",this.size.countBronce+1)}_addRepresentative(){this.set("size.countRepresentative",this.size.countRepresentative+1)}_removeGold(){if(0<this.size.countGold)this.set("size.countGold",this.size.countGold-1)}_removeSilver(){if(0<this.size.countSilver)this.set("size.countSilver",this.size.countSilver-1)}_removeBronce(){if(0<this.size.countBronce)this.set("size.countBronce",this.size.countBronce-1)}_removeRepresentative(){if(0<this.size.countRepresentative)this.set("size.countRepresentative",this.size.countRepresentative-1)}_back(){this.set("page","place")}_onclick(){if(0<this.size.countGold||0<this.size.countSilver||0<this.size.countBronce||0<this.size.countRepresentative)this.$.submit.click();else this.toast("You have not selected any category of trophies")}_submit(e){e.preventDefault();this.setProperties({object:{...this.object,size:this.size},page:"calendar"})}}window.customElements.define("app-size",Size);const $_documentContainer$17=document.createElement("template");$_documentContainer$17.innerHTML=`<iron-iconset-svg name="date-picker" size="24">
    <svg>
      <defs>
        <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
        <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
      </defs>
    </svg>
  </iron-iconset-svg>`;document.head.appendChild($_documentContainer$17.content);const styleElement$5=document.createElement("dom-module");styleElement$5.innerHTML=`<template>
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        padding: 12px 0;
        position: relative;
        width: 100%;
        height: 100%;
        min-width: 160px;
        min-height: 160px;
        color: var(--primary-text-color);
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        --ease-in-sine: cubic-bezier(0.47, 0, 0.745, 0.715);
        --ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1);
        @apply --paper-font-body1;
        @apply --paper-calendar;
        overflow: hidden;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        @apply --paper-calendar;
      }
      #calendar {
        position: relative;
        width: 100%;
        height: 100%;
        @apply --layout-horizontal;
      }
      #months {
        height: 100%;
        @apply --layout-horizontal;
      }
      #months.animating .month-nav {
        opacity: 1;
      }
      #months.animating {
        transition-property: transform, opacity;
        transition-duration: 300ms;
      }
      #months.animating.swipe {
        transition-timing-function: var(--ease-in-sine);
        --webkit-transition-timing-function: var(--ease-in-sine);
      }
      #months.animating.reset {
        transition-timing-function: var(--ease-out-sine);
        --webkit-transition-timing-function: var(--ease-out-sine);
      }
      .month {
        height: 100%;
        @apply --layout-vertical;
        @apply --layout-justified;
        @apply --layout-flex;
      }

      .month-row, .month-nav {
        height: calc(100%/8);
        box-sizing: border-box;
        padding: 0 calc(100%/36);
      }

      .month-col {
        position: relative;
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      .month-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 1;
        @apply --layout-horizontal;
        @apply --layout-center;
      }
      .month-nav .col {
        position: relative;
        @apply --layout-vertical;
        @apply --layout-center-center;
      }
      .month-nav .btn .icon {
        cursor: pointer;
      }
      .month-nav .btn .ripple {
        position: absolute;
        width: 48px;
        height: 48px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .month-nav .btn.right {
        text-align: right;
      }
      .month-name {
        line-height: 24px;
        vertical-align: middle;
        text-align: center;
        font-weight: bold;
        @apply --paper-font-body2;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }
      .month-weekdays {
        color: var(--secondary-text-color);
        @apply --layout-horizontal;
        @apply --layout-justified;
        @apply --layout-flex;
      }
      .month-days {
        @apply --layout-horizontal;
        @apply --layout-justified;
        @apply --layout-flex;
      }
      .month-col .day {
        cursor: default;
        pointer-events: none;
        @apply --layout-fit;
        @apply --layout-vertical;
        @apply --layout-center-center;
      }
      .month-col {
        position: relative;
        width: 100%;
        height: 100%;
        @apply --layout-center-center;
      }
      .day-item {
        border-radius: 100%;
        width: 100%;
        height: 100%;
      }
      .day-item::selection {
        background: none;
      }
      .day-item.selected {
        background: #e05e35;
      }
      .day-item.selected .day {
        color: var(--text-primary-color);
      }
      .day-item:not([disabled]) {
        cursor: pointer;
      }
      .day-item[disabled] .day {
        color: var(--text-disabled-color, #9d9d9d);
      }
      .day-item.today .day {
        color: var(--default-primary-color);
      }
      .day-item.selected.today .day {
        color: var(--text-primary-color);
      }
      .flex {
        @apply --layout-flex;
      }
      .flex-5 {
        @apply --layout-flex-5;
      }
    </style>
  </template>`;styleElement$5.register("style-element-calendar");const WIGGLE_THRESHOLD=4,FLICK_SPEED=.5,PRELOAD_MONTHS=1;function dateDiff(a,b){a=new Date(a.getTime());b=new Date(b.getTime());a.setHours(0,0,0,0);b.setHours(0,0,0,0);return(a.getTime()-b.getTime())/864e5}class PaperCalendar extends mixinBehaviors([IronResizableBehavior],PolymerElement){static get template(){return html`
      <style include="style-element-calendar"></style>
      <div id="calendar">
        <div id="months" on-track="_onTrack" class$="{{_contentClass}}">
          <template is="dom-repeat" items="{{_months}}" as="month">
            <div class$="{{_getMonthClass('month', month)}}">
              <div class="month-row month-name">
                <span>{{dateFormat(month.date, 'MMMM YYYY', locale)}}</span>
              </div>
              <div class="month-row month-weekdays week">
                <template is="dom-repeat" items="{{_weekdays}}">
                  <div class="month-col layout vertical flex">
                    <div class="day">{{item.0}}</div>
                  </div>
                </template>
              </div>
              <template is="dom-repeat" items="{{month.weeks}}" as="row">
                <div class="month-row month-days">
                  <template is="dom-repeat" items="{{row}}">
                    <div class="month-col">
                      <div class$="{{_getDayClass('day-item selection', item.date, today, date)}}"
                        disabled$="{{_isDisabled(item.day, item.date, minDate, maxDate)}}"
                        on-tap="_tapDay" date$="{{item.name}}">
                        <div class="day">{{item.day}}</div>
                      </div>
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>
        </div>
        <div id="monthNav" class="month-nav">
          <template is="dom-if" if="[[ disabled ]]">
            <div class="flex col self-stretch">
              <div class="btn" on-tap="_swipePrevMonth">
                <paper-ripple center class="ripple circle"></paper-ripple>
                <iron-icon class="icon flex" icon="date-picker:chevron-left"></iron-icon>
              </div>
            </div>
          </template>
          <div class="flex-5"></div>
          <div class="flex col self-stretch">
            <div class="btn" on-tap="_swipeNextMonth">
              <paper-ripple center class="ripple circle"></paper-ripple>
              <iron-icon class="icon flex" icon="date-picker:chevron-right"></iron-icon>
            </div>
          </div>
        </div>
      </div>
    `}ready(){super.ready();this._resizeHandler=this._resizeHandler.bind(this);this._onSwipe=this._onSwipe.bind(this);this._updateToday();this.currentMonth=this.date.getMonth()+1;this.currentYear=this.date.getFullYear();this._transitionEvent=this._whichTransitionEnd()}static get properties(){return{date:{type:Date,notify:!0,value(){var d=new Date;d.setHours(0,0,0,0);return d},observer:"_dateChanged"},nowDate:{type:Date,value:new Date},disabled:{type:Boolean,value:!1},locale:{type:String,value:"en",notify:!0,observer:"_localeChanged"},minDate:{type:Date,value:null},maxDate:{type:Date,value:null},currentMonth:{type:Number},currentYear:{type:Number},_contentClass:String,_months:Array,_firstDayOfWeek:Number}}static get observers(){return["_populate(currentYear, currentMonth, minDate, maxDate, locale)"]}connectedCallback(){super.connectedCallback();this.addEventListener("iron-resize",this._resizeHandler);this.addEventListener("swiped",this._onSwipe)}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("iron-resize",this._resizeHandler);this.removeEventListener("swiped",this._onSwipe)}dateFormat(date,format,locale){if(!date){return""}var value=hooks(date);value.locale(locale||this.locale);return value.format(format)}_localeChanged(locale){var localeMoment=hooks();localeMoment.locale(locale);for(var weekdays=[],i=0;7>i;i++){weekdays.push(localeMoment.weekday(i).format("dd"))}this._weekdays=weekdays;this._firstDayOfWeek=localeMoment.weekday(0).format("d")}_populate(currentYear,currentMonth,minDate,maxDate){var date,month,weeks,day,d,dayInfo,monthData,months=[];if(minDate&&new Date(currentYear,currentMonth,0)<minDate){this.currentYear=minDate.getFullYear();this.currentMonth=minDate.getMonth()+1;return}else if(maxDate&&new Date(currentYear,currentMonth-1,1)>maxDate){this.currentYear=maxDate.getFullYear();this.currentMonth=maxDate.getMonth()+1;return}for(var i=-PRELOAD_MONTHS;i<=PRELOAD_MONTHS;i++){weeks=[[]];day=1;date=new Date(currentYear,currentMonth-1+i,1);month=date.getMonth();monthData={year:date.getFullYear(),month:date.getMonth()+1,date:new Date(date)};if(!this._monthWithinValidRange(monthData.year,monthData.month)){continue}var firstDay=date.getDay()-this._firstDayOfWeek;if(0>firstDay){firstDay=7+firstDay}for(d=0;d<firstDay;d++){weeks[0].push({day:null,date:null})}while(date.getMonth()===month){if(weeks[0].length&&0===d%7){weeks.push([])}dayInfo={date:new Date(date.getFullYear(),month,day),name:this.dateFormat(date,"YYYY-MM-DD"),year:currentYear,month:month,day:day};weeks[weeks.length-1].push(dayInfo);date.setDate(++day);d++}while(42>d){if(0===d%7){weeks.push([])}weeks[weeks.length-1].push({day:null,date:null});d+=1}monthData.weeks=weeks;months.push(monthData)}if(!months.length){return}this.set("_months",months);this.async(function(){this._updateSelection();this._positionSlider()})}_getDayClass(cssClass,date){if(date){if(0===dateDiff(date,this.today)){cssClass+=" today"}if(0===dateDiff(date,this.date)){cssClass+=" selected";this.async(function(){this._updateSelection()})}}return cssClass}_isDisabled(day,date){return!day||!this._withinValidRange(date)}_getMonthClass(name,month){return name+" month-"+month.year+"-"+month.month}_onTrack(event){var dx=event.detail.dx,dy=event.detail.dy,adx=_Mathabs(dx),ady=_Mathabs(dy),width=this._containerWidth;switch(event.detail.state){case"start":this._trackStartTime=new Date().getTime();this._startPos=this._currentPos;this._moveQueue=[];break;case"track":if(4<=this._moveQueue.length){this._moveQueue.shift()}this._moveQueue.push(event);if(!this._gesture&&dx*dx+dy*dy>WIGGLE_THRESHOLD*WIGGLE_THRESHOLD){this._gesture=adx>ady?"pan-x":"pan-y"}if("pan-x"!==this._gesture){return}this._dragging=!0;var fullWidth=width*this._months.length,x=this._startPos+dx;if(0<x||x<-fullWidth+width){if(isNaN(parseInt(this._resistStart,10))){this._resistStart=adx}var rdx=adx-this._resistStart,p,d;p=rdx>width?1:rdx/width;d=40*(1-_Mathpow(1-p,2));x=0>dx?-this._scrollWidth+width-d:d}else{this._resistStart=null}this._translateX(x);break;case"end":this._resistStart=null;var lastIdx=this._getMonthIdx(this._startPos),idx=this._getMonthIdx(this._currentPos),speed=this._getFastestMovement(event).v;if(!this._resistStart&&"pan-x"===this._gesture&&(idx!==lastIdx||speed>FLICK_SPEED)){if(speed>FLICK_SPEED){var newDuration=(width-adx)/speed;if(300<newDuration){newDuration=300}this._transitionDuration=newDuration}if(0<dx){this._swipePrevMonth()}else{this._swipeNextMonth()}}else{this._translateX(this._startPos,"reset")}this._gesture=null;}}_swipePrevMonth(){this.fire("swipe-start",{direction:"right"});this._translateX(0,"swipe",function(){this.set("_contentClass","");this.transform("translateX("+this._startPos+"px)",this.$.months);this.fire("swiped",{direction:"right"})}.bind(this))}_swipeNextMonth(){if(!this.maxDate||this.currentYear<this.maxDate.getFullYear()||this.currentMonth<this.maxDate.getMonth()+1){this._translateX(2*-this._containerWidth,"swipe",function(){this.set("_contentClass","");this.transform("translateX("+this._startPos+"px)",this.$.months);this.fire("swiped",{direction:"left"})}.bind(this))}}_getMonthIdx(pos){var width=this._containerWidth,i=_Mathfloor((-pos+width/2)/width);return 0>i?0:i}_translateX(x,transition,cb){if(isNaN(parseInt(x,10))){throw new Error("Not a number: "+x)}this._currentPos=x;if(transition){if(this._transitionDuration){this.$.months.style.transitionDuration=this._transitionDuration+"ms"}this._once(this._transitionEvent,function(){this.set("_contentClass","");this.$.months.style.transitionDuration="";this._transitionDuration=null;this.$.monthNav.style.removeProperty("opacity");if(cb){cb()}}.bind(this),this.$.months);this.set("_contentClass","animating "+transition);this.$.monthNav.style.removeProperty("opacity");this._once("touchstart",function(){})}window.requestAnimationFrame(function(){if(!transition){var halfWidth=this._containerWidth/2,dx=_Mathabs(this._startPos-x),p=100*(1-dx/halfWidth);p=(100-_Mathpow(p,2))/100/100;var opacity=_Mathabs(parseFloat(p).toFixed(2));this.$.monthNav.style.opacity=opacity}this.transform("translateX("+x+"px)",this.$.months)}.bind(this))}_getFastestMovement(event){for(var l=this._moveQueue.length,dt,tx,ty,tv2,x=0,y=0,v2=0,i=0,m;i<l&&(m=this._moveQueue[i]);i++){dt=event.timeStamp-m.timeStamp;tx=(event.detail.x-m.detail.x)/dt;ty=(event.detail.y-m.detail.y)/dt;tv2=tx*tx+ty*ty;if(tv2>v2){x=tx;y=ty;v2=tv2}}return{x:x,y:y,v:_Mathsqrt(v2)}}_onSwipe(event){if("right"===event.detail.direction){this._prevMonth()}else{this._nextMonth()}}_once(eventName,callback,node){node=node||this;function onceCallback(){node.removeEventListener(eventName,onceCallback);callback.apply(null,arguments)}node.addEventListener(eventName,onceCallback)}_incrMonth(i){var date=new Date(this.currentYear,this.currentMonth-1+i),year=date.getFullYear(),month=date.getMonth()+1;if(this._monthWithinValidRange(year,month)){this.currentYear=year;this.currentMonth=month}}_prevMonth(){this._incrMonth(-1)}_nextMonth(){this._incrMonth(1)}_dateChanged(date,oldValue){if(!this._isValidDate(date)){console.warn("Invalid date: "+date);this.date=date=oldValue}if(!this._withinValidRange(date)){console.warn("Date outside of valid range: "+date);if(date.getFullYear()==this.maxDate.getFullYear()){this.date=this.maxDate}else if(date.getFullYear()==this.minDate.getFullYear()){this.date=this.minDate}else{this.date=date=oldValue}}this.currentYear=date.getFullYear();this.currentMonth=date.getMonth()+1;if(oldValue&&date.getTime&&oldValue.getTime&&date.getTime()===oldValue.getTime()){return}this._updateSelection()}_tapDay(event){if(!this._withinValidRange(event.model.item.date)){return!1}var item=event.model.item,newDate=new Date(this.date.getTime());newDate.setDate(1);newDate.setYear(item.year);newDate.setMonth(item.month);newDate.setDate(item.day);this.date=newDate}_isValidDate(date){return date&&date.getTime&&!isNaN(date.getTime())}_withinValidRange(date){if(this._isValidDate(date)){return(!this.minDate||date>=this.minDate)&&(!this.maxDate||date<=this.maxDate)}return!1}_monthWithinValidRange(year,month){var monthStart=new Date(year,month-1,1),monthEnd=new Date(year,month,0);return this._withinValidRange(monthStart)||this._withinValidRange(monthEnd)}_positionSlider(){if(!this._months||!this._containerWidth){return}this._scrollWidth=this.$.calendar.offsetWidth*this._months.length;this.$.months.style.minWidth=this._scrollWidth+"px";var i=12*this.currentYear+this.currentMonth-(12*this._months[0].year+this._months[0].month);this._translateX(-i*this._containerWidth)}_updateSelection(){var selected=this.shadowRoot.querySelector(".day-item.selected");if(!selected){return}selected.style.height="";selected.style.width="";var w=selected.parentElement.offsetWidth,h=selected.parentElement.offsetHeight;selected.style.flex="";window.requestAnimationFrame(function(){if(0<w&&w<h){selected.style.height=w+"px"}else if(0<h){selected.style.width=h+"px"}})}_resizeHandler(){this._containerWidth=this.$.calendar.offsetWidth;this._positionSlider();this._updateSelection()}_getDayName(date){return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()}_updateToday(){this.today=new Date;this.today.setHours(0,0,0,0)}_whichTransitionEnd(){var transitions={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var t in transitions){if(this.style[t]!==void 0){return transitions[t]}}}}window.customElements.define("paper-calendar",PaperCalendar);const styleElement$6=document.createElement("dom-module");styleElement$6.innerHTML=`<template>
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        @apply --paper-font-common-base;
        /* for iron-list to fit */
        position: relative;
      }
      .year {
        cursor: pointer;
        height: var(--paper-year-list-item-height, 44px);
        line-height: var(--paper-year-list-item-height, 44px);
        text-align: center;
        vertical-align: middle;
      }
      .selected {
        color: var(--default-primary-color);
        font-size: 24px;
      }
      iron-list {
        @apply --layout-fit;
      }
    </style>
  </template>`;styleElement$6.register("style-element-list-year");class PaperYearList extends mixinBehaviors([IronResizableBehavior],PolymerElement){static get template(){return html`
      <style include="style-element-list-year"></style>
      <iron-list id="yearList" items="[[_years]]">
        <template>
          <div class$="year{{_addSelectedClass(selected)}}" on-tap="_tappedYearHandler">
            [[item.year]]
          </div>
        </template>
      </iron-list>
    `}static get properties(){return{date:{type:Date,notify:!0,observer:"_dateChange"},max:{type:Number,value:2100,observer:"_maxChange"},min:{type:Number,value:1900,observer:"_minChange"},selected:{type:Number,notify:!0,observer:"_selectedChange"},_years:{type:Array,computed:"_computeYears(min, max)",readOnly:!0,value(){return Date.now().getFullYear}}}}ready(){super.ready();this.$.yearList._resizeHandler=function(){this.debounce("resize",function(){this._render();if(this._itemsRendered&&this._physicalItems&&this._isVisible){this._resetAverage();this.updateViewportBoundaries()}})}.bind(this.$.yearList)}centerSelected(){if(null!==this.selected){var selectedYearIdx=this.selected-this.min;this.$.yearList.scrollToIndex(selectedYearIdx);this.async(function(){var selectedPos=selectedYearIdx*this._physicalAverage+1;if(selectedPos!==this.scrollTop){this._update();this.scrollTop=selectedPos}if(this.scrollHeight-this.offsetHeight!==this.scrollTop){this.scrollTop+=(this._physicalAverage-this.offsetHeight)/2}}.bind(this.$.yearList))}}_addSelectedClass(selected){if(selected){return" selected"}}_computeYears(min,max){if("number"!==typeof min||"number"!==typeof max){return}var years=[];for(;min<=max;min++){years.push({year:min})}return years}_dateChange(date){var newYear=date.getFullYear();this.selected=this._withinRange(newYear)?newYear:null}_maxChange(max){if("number"!==typeof max){this.max=2100}}_minChange(min){if("number"!==typeof min){this.min=1900}}_selectedChange(selected){if(null===selected){this.$.yearList.clearSelection();return}if(selected!==this.date.getFullYear()){this.date=new Date(this.date.setFullYear(selected))}this._selectYearInList(selected)}_selectYearInList(year){var yearIdx=year-this.min;this.$.yearList.selectIndex(yearIdx)}_tappedYearHandler(e){var yearItem=e.model.item,year=yearItem.year;if(this.selected!==year){this.$.yearList.selectItem(yearItem);this.selected=year}}_withinRange(year){return!(this.min&&year<this.min||this.max&&year>this.max)}}window.customElements.define("paper-list-year",PaperYearList);const styleElement$7=document.createElement("dom-module");styleElement$7.innerHTML=`<template>
    <style>
      :host {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        widh: 100%;
        display: inline-block;
        color: var(--primary-text-color);
        @apply --paper-font-body1;
        @apply --paper-date-picker;
      }

      /** Landscape ******************/
      #datePicker {
        min-width: 512px;
        min-height: 248px;
        @apply --layout-horizontal;
        border: 1px solid #d4d2d2;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: -4px 4px 18px 0px #eee;
      }

      /** Narrow *********************/
      :host([narrow]) #datePicker {
        width: 328px;
        height: 428px;
        @apply --layout-vertical;
      }
      :host([narrow]) #heading {
        width: auto;
        height: 96px;
        padding: 16px 24px;
        @apply --paper-date-picker-heading--narrow;
      }

      /** Heading ********************/
      #heading {
        width: 168px;
        padding: 16px;
        box-sizing: border-box;
        color: var(--text-primary-color);
        background: #e05e35;

        @apply --layout-vertical;
        @apply --paper-date-picker-heading;
      }
      #heading .date,
      #heading .year {
        cursor: pointer;
      }
      #heading .date {
        @apply --paper-font-display1;
        font-weight: bold;
        margin-top: 2px;
        @apply --paper-date-picker-heading-date;
      }
      #heading div.date {
        letter-spacing: 0.025em;
      }
      #heading .date span {
        white-space: nowrap;
      }
      #heading .year {
        @apply --paper-font-body2;
        font-size: var(--paper-date-picker-year-size, 16px);
        @apply --paper-date-picker-heading-date;
      }
      #heading:not(.pg-chooseYear) .year,
      #heading.pg-chooseYear .date {
        color: var(--light-primary-color);
      }

      /** Calendar/Year picker ********/
      :host([isTouch]) paper-year-list::-webkit-scrollbar {
        width: 0 !important;
      }
      #pages {
        @apply --layout-flex;
        width: auto;
        background: var(--default-background-color);
      }
      #calendar {
        --paper-calendar: {
          @apply --paper-date-picker-calendar;
        }
      }
    </style>
  </template>`;styleElement$7.register("style-element-date-picker");class PaperDatePicker extends mixinBehaviors([IronResizableBehavior],PolymerElement){static get template(){return html`
      <style include="style-element-date-picker"></style>
      <iron-media-query query="{{_getMediaQuery(forceNarrow, responsiveWidth)}}" query-matches="{{_queryMatches}}"></iron-media-query>
      <div id="datePicker">
        <div id="heading" class$="{{_getHeadingClass('heading-content', _selectedPage)}}">
          <div class="year">{{dateFormat(date, 'YYYY', locale)}}</div>
          <div class="date">
            <template is="dom-repeat" items="{{_splitHeadingDate(date, headingFormat, locale)}}">
              <span>{{item}}</span>
            </template>
          </div>
        </div>
        <neon-animated-pages id="pages" selected="{{_selectedPage}}" attr-for-selected="id"
          entry-animation="fade-in-animation" exit-animation="fade-out-animation"
          on-iron-select="_pageSelected">
          <neon-animatable id="chooseDate">
            <paper-calendar id="calendar" locale="{{locale}}" date="{{date}}"
              min-date="{{minDate}}" max-date="{{maxDate}}">
            </paper-calendar>
          </neon-animatable>
          <neon-animatable id="chooseYear">
            <paper-list-year id="yearList" date="{{date}}" on-tap="_tapHeadingDate" min="[[_minYear]]" max="[[_maxYear]]"></paper-list-year>
          </neon-animatable>
        </neon-animated-pages>
      </div>
    `}static get properties(){return{date:{type:Date,notify:!0},responsiveWidth:{type:String,value:"560px"},locale:{type:String,value:"en"},headingFormat:{type:String,value:"ddd, MMM D"},minDate:{type:Date,value:null},maxDate:{type:Date,value:null},forceNarrow:{type:Boolean,value:!1},narrow:{type:Boolean,reflectToAttribute:!0,notify:!0,computed:"_computeNarrow(forceNarrow, _queryMatches)"},isTouch:{type:Boolean,value:!1,readOnly:!0,reflectToAttribute:!0},_queryMatches:{type:Boolean,value:!1},headingBreak:{type:String,value:"[,]"},_selectedPage:String,_maxYear:{type:Number,computed:"_getFullYear(maxDate)"},_minYear:{type:Number,computed:"_getFullYear(minDate)"}}}ready(){super.ready();this._resizeHandler=this._resizeHandler.bind(this);this.today=this.$.calendar.today;this._setIsTouch("ontouchstart"in window);this._selectPage("chooseDate")}connectedCallback(){super.connectedCallback();this.addEventListener("iron-resize",this._resizeHandler)}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("iron-resize",this._resizeHandler)}dateFormat(){return this.$.calendar.dateFormat.apply(this.$.calendar,arguments)}_tapHeadingDate(){if("chooseDate"!==this.$.pages.selected){this._selectPage("chooseDate")}else{this.$.calendar.currentMonth=this.date.getMonth()+1;this.$.calendar.currentYear=this.date.getFullYear()}}_tapHeadingYear(){if("chooseYear"!==this.$.pages.selected){this._selectPage("chooseYear");this.$.yearList.centerSelected()}}_selectPage(page){this.$.pages.selected=page}_getMediaQuery(forceNarrow,responsiveWidth){return"(max-width: "+(forceNarrow?"":responsiveWidth)+")"}_getHeadingClass(pfx,selectedPage){return pfx+" pg-"+selectedPage}_getFullYear(date){return date?new Date(date).getFullYear():null}_splitHeadingDate(date,format,locale){var re=new RegExp(this.headingBreak,"g"),text=this.dateFormat(date,format,locale),seps=text.match(re),value;if(!seps){value=[text]}else{value=text.split(re).map(function(s,i){return s+(seps[i]||"")})}return value}_computeNarrow(queryMatches,forceNarrow){return queryMatches||forceNarrow}_pageSelected(){this._resizeHandler()}_resizeHandler(){if(this._resizing){return}this._resizing=!0;this.$.calendar.notifyResize();this._resizing=!1;this.updateStyles()}}window.customElements.define("paper-date-picker",PaperDatePicker);const styleElement$8=document.createElement("dom-module");styleElement$8.innerHTML=`<template>
   <style>
    :host {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      --paper-input-container-focus-color: #e05e35;
    }
    .hidden {
      display: none;
    }
    form {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .title {
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      font-size: 30px;
      text-align: center;
    }
    .form-control {
      width: 50%;
      margin: 0 auto;
    }
    .form-control .form-grid {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .form-control .form-grid paper-input {
      flex: 1;
      padding: 0 10px;
      box-sizing: border-box;
    }
    .form-control .button-control {
      text-align: center;
    }
    .form-control .button-control paper-button {
      width: 48%;
      margin: 0;
      background-color: #e05e35;
      color: #ffff;
    }
    paper-dialog .buttons paper-button {
      color: #e05e35;
    }
    @media screen and (max-width: 390px){
      .form-control .button-control paper-button {
        width: 100%;
        margin-bottom: 10px;
      }
    }
   </style>
 </template>`;styleElement$8.register("style-element-calendar");class Calendar extends PolymerElement{static get template(){return html`
      <style include="style-element-calendar"></style>
      <form id="form">
        <h2 class="title">When does the adventure begin?</h2>
        <div class="form-control">
          <div class="form-grid">
            <paper-input on-tap="_openDialogStart" type="date" label="Start date:" required value="{{ date.startLabel }}"></paper-input>
            <paper-input on-tap="_openDialogEnd" type="date" label="End date:" required value="{{ date.endLabel }}"></paper-input>
          </div>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-click="_back">Back</paper-button>
            <paper-button raised on-click="_onclick">Next</paper-button>
            <button type="submit" id="submit" class="hidden"></button>  
          </div>  
        </div>
      </form>
      <paper-dialog id="datePickerStart">
        <paper-date-picker date="{{ date.start }}"></paper-date-picker>
        <div class="buttons">
          <paper-button dialog-confirm>Cancel</paper-button>
          <paper-button on-click="_submitStart">OK</paper-button>
        </div>  
      </paper-dialog>
      <paper-dialog id="datePickerEnd">
        <paper-date-picker date="{{ date.end }}"></paper-date-picker>
        <div class="buttons">
          <paper-button dialog-confirm>Cancel</paper-button>
          <paper-button on-click="_submitEnd">OK</paper-button>
        </div>  
      </paper-dialog>
    `}constructor(){super();this._back=this._back.bind(this);this._onclick=this._onclick.bind(this);this._submit=this._submit.bind(this)}ready(){super.ready();this.$.form.addEventListener("submit",this._submit)}static get properties(){return{page:{type:Object,notify:!0},object:{type:Object,notify:!0},date:{type:Object,value:{}}}}_openDialogStart(){this.$.datePickerStart.open()}_openDialogEnd(){this.$.datePickerEnd.open()}_submitStart(){this.set("date.startLabel",hooks(this.date.start).format("YYYY-MM-DD"));this.$.datePickerStart.close();console.log(this.date.startLabel)}_submitEnd(){this.set("date.endLabel",hooks(this.date.end).format("YYYY-MM-DD"));this.$.datePickerEnd.close();console.log(this.date.endLabel)}_back(){this.set("page","size")}_onclick(){if(this.date.startLabel&&this.date.endLabel){console.log(hooks(this.date.endLabel).isAfter(this.date.startLabel));if(hooks(this.date.endLabel).isAfter(this.date.startLabel))this.$.submit.click();else this.toast("The end date has to be higher than the start date")}else this.toast("You have not selected any dates")}_submit(e){e.preventDefault();this.setProperties({object:{...this.object,calendar:{start:this.date.startLabel,end:this.date.endLabel}},page:"hunting"})}}window.customElements.define("app-calendar",Calendar);const styleElement$9=document.createElement("dom-module");styleElement$9.innerHTML=`<template>
    <style>
      :host {
        position: relative;
        display: flex; 
        width: 100%;
        height: 100%;
        --paper-input-container-focus-color: #e05e35;
      }
      .hidden {
        display: none;
      }
      form {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        font-size: 30px;
        text-align: center;
      }
      .form-control {
        width: 50%;
        margin: 0 auto;
      }
      .form-control .button-control {
        text-align: center;
      }
      .form-control .button-control paper-button {
        width: 48%;
        margin: 0;
        background-color: #e05e35;
        color: #ffff;
      }
      .form-control .selected-button {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
      .form-control .selected-button .grid {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .form-control .selected-button .grid > div {
        flex: 1;
        padding: 5px;
      }
      .form-control .selected-button .grid .count {
        font-size: 30px;
        font-weight: 700;
        color: #e05e35;
        text-align: center;
      }
      .form-control .selected-button .grid .label {
        font-size: 18px;
        text-align: center;
      }
      .form-control .selected-button .grid .button {
        text-align: center;
      }
      .form-control .selected-button .grid .button paper-icon-button {
        background-color: #e05e35;
        color: #ffff;
        border-radius: 100%;
      }
      @media screen and (max-width: 390px){
        .form-control .button-control paper-button {
          width: 100%;
          margin-bottom: 10px;
        }
      }
    </style>
  </template>`;styleElement$9.register("style-element-hunting");class Huntings extends PolymerElement{static get template(){return html`
      <style include="style-element-hunting"></style>
      <form id="form">
        <h2 class="title">How many are you?</h2>
        <div class="form-control">
          <div class="selected-button">
            <div class="grid">
              <div class="count">[[ hunting.countHunting ]]</div>
              <div class="label">Hunters</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeHunters"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addHunters"></paper-icon-button>
              </div>
            </div>
            <div class="grid">
              <div class="count">[[ hunting.countCompanions ]]</div>
              <div class="label">Companions</div>
              <div class="button">
                <paper-icon-button icon="app-icons:remove" on-click="_removeCompanions"></paper-icon-button>
                <paper-icon-button icon="app-icons:add" on-click="_addCompanions"></paper-icon-button>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div class="button-control">
            <paper-button raised on-click="_back">Back</paper-button>
            <paper-button raised on-click="_onclick">Next</paper-button>
            <button type="submit" id="submit" class="hidden"></button>  
          </div>
        </div>
      </form>
    `}constructor(){super();this._submit=this._submit.bind(this);this._onclick=this._onclick.bind(this);this._back=this._back.bind(this)}ready(){super.ready();this.hunting={countHunting:0,countCompanions:0};this.$.form.addEventListener("submit",this._submit)}static get properties(){return{page:{type:Object,notify:!0},object:{type:Object,notify:!0}}}_addHunters(){this.set("hunting.countHunting",this.hunting.countHunting+1)}_addCompanions(){this.set("hunting.countCompanions",this.hunting.countCompanions+1)}_removeHunters(){if(0<this.hunting.countHunting)this.set("hunting.countHunting",this.hunting.countHunting-1)}_removeCompanions(){if(0<this.hunting.countCompanions)this.set("hunting.countCompanions",this.hunting.countCompanions+1)}_back(){this.set("page","place")}_onclick(){if(0<this.hunting.countCompanions||0<this.hunting.countHunting)this.$.submit.click();else this.toast("You have not selected a hunter amount")}_submit(e){e.preventDefault();this.setProperties({object:{...this.object,hunting:this.hunting},page:"sendEmail"})}}window.customElements.define("app-hunting",Huntings);const styleElement$10=document.createElement("dom-module");styleElement$10.innerHTML=`<template>
    <style>
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        --paper-input-container-focus-color: #e05e35;
        --paper-checkbox-checked-color: #e05e35;
        --paper-checkbox-checked-color: #e05e35;
      }
      .hidden {
        display: none;
      }
      form {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
      .title {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        font-size: 30px;
        text-align: center;
      }
      .subtitle {
        text-align: center;
        margin: 0;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
        font-size: 18px;
      }
      .form-control {
        width: 50%;
        margin: 0 auto;
      }
      .form-control .button-control {
        text-align: center;
      }
      .form-control .button-control paper-button {
        width: 48%;
        margin: 0;
        background-color: #e05e35;
        color: #ffff;
      }
      paper-button[disabled] span { visibility: hidden; }
      paper-button paper-spinner { display: none; }
      paper-button[disabled] paper-spinner { display: block !important; }
      paper-button[disabled] paper-spinner {
        position: absolute;
        width: 20px;
        height: 20px;
      }
    </style>
  </template>`;styleElement$10.register("style-element-sendEmail");class sendEmail extends PolymerElement{static get template(){return html`
      <style include="style-element-sendEmail"></style>
      <form id="form">
        <h2 class="title">[[ object.name ]], leave your contact details ready</h2>
        <h4 class="subtitle">We send you the offers you are looking for</h4>
        <div class="form-control">
          <paper-input type="email" label="Email" name="email" id="email" value="[[ object.sendEmail.email ]]"></paper-input>
          <paper-input type="tel" label="Phone" name="phone" id="phone" value="[[ object.sendEmail.phone ]]"></paper-input>
          <br/>
          <br/>
          <div class="button-control">
            <paper-checkbox on-change="_checkboxPriv">
              I accept and agree with the <a href="">Privacy Policies</a> 
            </paper-checkbox>
            <h5>You're one step away from hunting with Hunterfy!</h5>
            <paper-button raised on-click="_back">Back</paper-button>
            <paper-button raised on-click="_onclick" disabled$="[[ loading ]]">
              <span>Get my offers</span>
              <paper-spinner active></paper-spinner>
            </paper-button>
            <button type="submit" id="submit" class="hidden"></button>  
          </div>
        </div>
      </form>
    `}constructor(){super();this._submit=this._submit.bind(this);this._onclick=this._onclick.bind(this);this._back=this._back.bind(this);this._checkboxPriv=this._checkboxPriv.bind(this)}ready(){super.ready();this.$.form.addEventListener("submit",this._submit)}static get properties(){return{page:{type:Object,notify:!0},object:{type:Object,notify:!0}}}_back(){this.set("page","hunting")}_onclick(){if(!0===this.object.policePriv){if(this.$.email.value&&this.$.phone.value)this.$.submit.click();else this.toast("The email field or phone filed is empty")}else this.toast("You have not accepted the privacy policies")}_checkboxPriv(e){this.set("object.policePriv",e.target.checked)}_submit(e){e.preventDefault();this.setProperties({object:{...this.object,sendEmail:{email:this.$.email.value,phone:this.$.phone.value}}});this.loading=!this.loading;fetch("./sendEmail.php",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:this.object}).then(response=>response.json()).then(response=>{console.log(response)}).catch(error=>{this.toast("Error de conexion");console.log(error)}).finally(()=>this.loading=!this.loading)}}window.customElements.define("app-sendemail",sendEmail);class Form extends PolymerElement{static get template(){return html`
      <style include="style-element-form"></style>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{subrouteData}}"
      >
      </app-route>
      <div class="container">
        <header>
          <div class="container">
            <h4>Hunterfy</h4>
            <p>Fill out this questionnaire to offer you the best experience!</p>
          </div>
        </header>
        <div class="form-content">
          <div class="container">
            <iron-pages selected="[[ page ]]" attr-for-selected="subview" role="main">
              <app-name 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="name"
                toast="{{ toast }}"
              >
              </app-name>
              <app-place 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="place"
                toast="{{ toast }}"
              >
              </app-place>
              <app-size 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="size"
                toast="{{ toast }}"
              >
              </app-size>
              <app-calendar 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="calendar"
                toast="{{ toast }}"
              >
              </app-calendar>
              <app-hunting 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="hunting"
                toast="{{ toast }}"
              >
              </app-hunting>
              <app-sendemail 
                page="{{ page }}" 
                object="{{ object }}" 
                subview="sendEmail"
                toast="{{ toast }}"
              >
              </app-sendemail>
            </iron-pages>
          </div>
        </div>
        <div class="tabs-navigations">
          <div class="step"></div>
          <div class="step">
            <a href="/form/name" class$="[[ tabs.name  ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:account-box"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Name</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/place" class$="[[ tabs.place ]]" disabled$="[[ !object.name ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:my-location"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Place</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/size" class$="[[ tabs.size ]]" disabled$="[[ !object.place ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:pets"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Press size</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/calendar" class$="[[ tabs.calendar ]]" disabled$="[[ !object.size ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:date-range"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Calendar</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/hunting" class$="[[ tabs.hunting ]]" disabled$="[[ !object.calendar ]]">   
              <div class="step-icon">
                <iron-icon icon="app-icons:people"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Hunters</div>
            </a>
          </div>
          <div class="step">
            <a href="/form/sendEmail" class$="[[ tabs.sendEmail ]]" disabled$="[[ !object.hunting ]]">
              <div class="step-icon">
                <iron-icon icon="app-icons:send"></iron-icon>
                <paper-ripple></paper-ripple>
              </div>
              <div class="step-title">Send</div>
            </a>
          </div>
          <div class="step"></div>
        </div>
      </div>
    `}static get properties(){return{page:{type:Object,reflectToAttribute:!0,observer:"_stepChange"},route:Object,object:{type:Object,reflectToAttribute:!0,value:{}},tabs:{type:Object,value:{name:"",place:"",size:"",calendar:"",hunting:"",sendEmail:""}}}}static get observers(){return["_routePageChanged(subrouteData.page)"]}ready(){super.ready();this._validRoute()}_validRoute(){if(0===Object.keys(this.object).length){this.set("tabs.name","active");this.set("tabs.place","");this.set("tabs.size","");this.set("tabs.calendar","");this.set("tabs.hunting","");this.set("tabs.sendEmail","");return this.page="name"}if(-1!==["name"].indexOf(this.object)){this.set("tabs.name","active");this.set("tabs.place","active");this.set("tabs.size","");this.set("tabs.calendar","");this.set("tabs.hunting","");this.set("tabs.sendEmail","");return this.page="place"}if(-1!==["name","place"].indexOf(this.object)){this.set("tabs.name","active");this.set("tabs.place","active");this.set("tabs.size","active");this.set("tabs.calendar","");this.set("tabs.hunting","");this.set("tabs.sendEmail","");return this.page="size"}if(-1!==["name","place","size"].indexOf(this.object)){this.set("tabs.name","active");this.set("tabs.place","active");this.set("tabs.size","active");this.set("tabs.calendar","active");this.set("tabs.hunting","");this.set("tabs.sendEmail","");return this.page="calendar"}if(-1!==["name","place","size","calendar"].indexOf(this.object)){this.set("tabs.name","active");this.set("tabs.place","active");this.set("tabs.size","active");this.set("tabs.calendar","active");this.set("tabs.hunting","active");this.set("tabs.sendEmail","");return this.page="hunting"}if(-1!==["name","place","size","calendar","hunting"].indexOf(this.object)){this.set("tabs.name","active");this.set("tabs.place","active");this.set("tabs.size","active");this.set("tabs.calendar","active");this.set("tabs.hunting","active");this.set("tabs.sendEmail","active");return this.page="sendEmail"}}_routePageChanged(page){if(!page)this.page="name";else if(-1!==["name","place","size","calendar","hunting","sendEmail"].indexOf(page))this.page=page;else{this.page="landing";this.set("route.path","/")}}_stepChange(page){console.log("step");switch(page){case"name":this.set("route.path","/name");this.set("tabs.name","active");break;case"place":this.set("route.path","/place");this.set("tabs.place","active");break;case"size":this.set("route.path","/size");this.set("tabs.size","active");break;case"calendar":this.set("route.path","/calendar");this.set("tabs.calendar","active");break;case"hunting":this.set("route.path","/hunting");this.set("tabs.hunting","active");break;case"sendEmail":this.set("route.path","/sendEmail");this.set("tabs.sendEmail","active");break;default:this.set("route.path","/name");this.set("tabs.name","active");break;}}}window.customElements.define("app-form",Form);setPassiveTouchGestures(!0);setRootPath(MyAppGlobals.rootPath);class AppRoot extends PolymerElement{static get template(){return html`
      <style>
        :host {
          position: relative; 
          display: block;
          box-sizing: boder-box;
          width: 100%;
          height: 100%;
        }
        app-drawer {
          --app-drawer-content-container: {
            color: white;
            background-color: #222;
          }
        }
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
        .drawer-list {
          margin: 0 20px;
        }
        .drawer-list {
          margin: 0 20px;
        }
        .drawer-list a {
          border-top: 1px solid rgba(255,255,255,0.08);
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
          outline: none;
        }
        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        app-header {
          color: #fff;
          background-color: rgba(255, 255, 255, 0);
          transition: all 0.2s ease-in-out !important;
        }
        app-header[shadow] {
          color: black;
          background-color: rgba(255, 255, 255, 1);
        }
        app-header[shadow] a {
          color: black;
        }
        app-header[hidden] {
          display: none;
        }
        iron-pages {
          position: relative;
          display: flex;
          width: 100%;
          height: 100%;
        }
        paper-icon-button.logo {
          padding: inherit;
          width: 134px;
        }
        paper-icon-button[icon="app-icons:menu"] {
          display: none;
        }
        [main-href] {
          display: flex;
          flex: 1;
          justify-content: flex-end;          
        }
        paper-button,
        paper-button a {
          color: white;
          text-transform: none;
          font-size: 14px;
          text-decoration: none;
        }
        paper-button div {
          display: inline-block;
        }
        paper-button:hover a {
          color: #e05e35;
        }
        @media screen and (max-width: 768px) {
          app-header app-toolbar paper-button {
            min-width: auto !important;
          }
          app-header app-toolbar paper-button {
            display: none;
          }
          app-header app-toolbar paper-icon-button[icon="app-icons:menu"] {
            display: block;
          }
        }
      </style>
      <app-location route="{{ route }}" url-space-regex="^[[ rootPath ]]"></app-location>
      <app-route route="{{ route }}" pattern="[[ rootPath ]]:page" data="{{ routeData }}" tail="{{ subroute }}"></app-route>
      <app-drawer-layout fullbleed="" force-narrow>
        <app-drawer id="drawer" slot="drawer" >
          <app-toolbar>
            <a href="[[ routePath ]]">
              <paper-icon-button class="logo" src="./static/logo.png" disabled></paper-icon-button>
            </a>
          </app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="landing" href="[[ routePath ]]landing">
              <iron-icon icon="app-icons:person"></iron-icon>
              Hunting Assistant
            </a>
            <a href="tel:+34649613609">
              <iron-icon icon="app-icons:phone"></iron-icon>
              34 649 613 609
            </a>
            <a href="mailto:hello@hunterfy.com">
              <iron-icon icon="app-icons:mail"></iron-icon>
              hello@hunterfy.com
            </a>
            <a href="[[ routePath ]]contact">
              <iron-icon icon="app-icons:info"></iron-icon>
              Contact
            </a>
          </iron-selector>
        </app-drawer>
        <app-header-layout has-scrolling-region fullbleed id="layout">
          <app-header slot="header" condenses fixed effects="waterfall" id="header" hidden="[[ hidden ]]">
            <app-toolbar>
              <paper-icon-button class="logo" src="./static/logo.png"></paper-icon-button>
              <div main-href>
                <paper-button>
                  <a href="[[ routePath ]]form">
                    <iron-icon icon="app-icons:person"></iron-icon>
                    <div>Hunting Assistant</div>
                  </a>
                </paper-button>
                <paper-button>
                  <a href="tel:+34649613609">
                    <iron-icon icon="app-icons:phone"></iron-icon>
                    <div>34 649 613 609</div>
                  </a>
                </paper-button>
                <paper-button>
                  <a href="mailto:hello@hunterfy.com">
                    <iron-icon icon="app-icons:mail"></iron-icon>
                    <div>hello@hunterfy.com</div>
                  </a>
                  </paper-button>
                <paper-button>
                  <a href="[[ routePath ]]contact">
                    <iron-icon icon="app-icons:info"></iron-icon>
                    <div>Contact</div>
                  </a>
                </paper-button>
                <paper-icon-button icon="app-icons:menu" drawer-toggle>
                </paper-icon-button>
              </div>
              <paper-progress slot="middle" class="fit" value="60"></paper-progress>
            </app-toolbar>
          </app-header>
          <iron-pages selected="[[ page ]]" attr-for-selected="view" role="main">
            <app-landing 
              view="landing"
              route="{{ subroute }}"
              routeData="{{ routeData }}"
              toast="{{ _openToast }}"
              pt="{{ paddingTop }}"
            >
            </app-landing>
            <app-form    
              view="form"
              route="{{ subroute }}"
              routeData="{{ routeData }}"
              toast="{{ _openToast }}"
            />
            </app-form>
            <app-contact
              view="form"
              route="{{ routeData }}" 
              routeData="{{ routeData }}"
              toast="{{ _openToast }}"
            >
            </app-contact>
          </iron-pages>
          <paper-toast id="toast" text="[[ message ]]"></paper-toast>
        </app-header-layout>
      </app-drawer-layout>
    `}constructor(){super();this._openToast=this._openToast.bind(this)}ready(){super.ready();this.paddingTop=this.$.header.offsetHeight}static get properties(){return{page:{type:String,reflectToAttribute:!0,observer:"_pageChanged"},hello:String,routeData:Object,subroute:Object,routePath:Object}}static get observers(){return["_routePageChanged(routeData.page)"]}_routePageChanged(page){if(!page)this.page="landing";else if(-1!==["landing","form"].indexOf(page))this.page=page;else{this.page="landing";this.set("routeData","/")}}_pageChanged(page){switch(page){case"landing":this.hidden=!1;break;case"form":this.hidden=!0;break;default:this.hidden=!1;break;}}_openToast(message){this.message=message;this.$.toast.open()}}window.customElements.define("app-root",AppRoot)});