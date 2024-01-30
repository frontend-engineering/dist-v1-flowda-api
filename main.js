/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = exports.providers = exports.controllers = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const customers_controller_1 = __webpack_require__("./src/customers/customers.controller.ts");
const services_module_1 = __webpack_require__("./src/services/services.module.ts");
const products_controller_1 = __webpack_require__("./src/products/products.controller.ts");
const orders_controller_1 = __webpack_require__("./src/orders/orders.controller.ts");
const license_controller_1 = __webpack_require__("./src/license/license.controller.ts");
const core_1 = __webpack_require__("@nestjs/core");
const jy_articles_controller_1 = __webpack_require__("./src/jy-articles/jy-articles.controller.ts");
const zhiplus_controller_1 = __webpack_require__("./src/zhiplus/zhiplus.controller.ts");
const worker_controller_1 = __webpack_require__("./src/worker/worker.controller.ts");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
const jyArticlesJwt_strategy_1 = __webpack_require__("./src/jy-articles/jyArticlesJwt.strategy.ts");
const zhiPlusJwt_strategy_1 = __webpack_require__("./src/zhiplus/zhiPlusJwt.strategy.ts");
exports.controllers = [
    customers_controller_1.CustomersController,
    products_controller_1.ProductsController,
    orders_controller_1.OrdersController,
    jy_articles_controller_1.JyArticlesController,
    license_controller_1.LicenseController,
    zhiplus_controller_1.ZhiPlusController,
    worker_controller_1.WorkerController,
];
exports.providers = [
    {
        provide: core_1.APP_FILTER,
        useClass: v1_flowda_services_1.AppExceptionFilter,
    },
    jyArticlesJwt_strategy_1.JyArticlesJwtStrategy,
    zhiPlusJwt_strategy_1.ZhiPlusJwtStrategy,
];
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule],
        controllers: exports.controllers,
        providers: exports.providers,
    })
], AppModule);


/***/ }),

/***/ "./src/customers/customers.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CustomersController_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomersController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_legacy_services_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/index.ts");
let CustomersController = CustomersController_1 = class CustomersController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(CustomersController_1.name);
    }
    getCustomers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.service.getCustomers();
        });
    }
    getCustomerById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.getCustomerById(id);
        });
    }
    getCustomer(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.getCustomer(email);
        });
    }
    create(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.createAccountByEmail(dto);
        });
    }
    sendLicense(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug('got email: ', email);
            return this.service.sendLicense(email);
        });
    }
};
exports.CustomersController = CustomersController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersController.prototype, "getCustomers", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getById'),
    tslib_1.__param(0, (0, common_1.Query)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersController.prototype, "getCustomerById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getByEmail'),
    tslib_1.__param(0, (0, common_1.Query)('email')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersController.prototype, "getCustomer", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof v1_biz_legacy_services_1.LegacyCreateAccountDto !== "undefined" && v1_biz_legacy_services_1.LegacyCreateAccountDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)('/resend'),
    tslib_1.__param(0, (0, common_1.Query)('email')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersController.prototype, "sendLicense", null);
exports.CustomersController = CustomersController = CustomersController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('flowda/customers'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_biz_legacy_services_1.LegacyCustomersService !== "undefined" && v1_biz_legacy_services_1.LegacyCustomersService) === "function" ? _a : Object])
], CustomersController);


/***/ }),

/***/ "./src/jy-articles/jy-articles.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var JyArticlesController_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JyArticlesController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_legacy_services_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/index.ts");
const v1_biz_services_1 = __webpack_require__("../../../libs/v1/biz-services/src/index.ts");
const license_guard_1 = __webpack_require__("./src/license/license.guard.ts");
const plan_decortator_1 = __webpack_require__("./src/license/plan.decortator.ts");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const jyArticlesJwtAuth_guard_1 = __webpack_require__("./src/jy-articles/jyArticlesJwtAuth.guard.ts");
let JyArticlesController = JyArticlesController_1 = class JyArticlesController {
    constructor(service, customerService) {
        this.service = service;
        this.customerService = customerService;
        this.logger = new common_1.Logger(JyArticlesController_1.name);
    }
    create(dto) {
        return this.service.createArticle(dto);
    }
    save(dto, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customerId = req.user.id;
            this.logger.log(`saving article: ${customerId}`);
            // 使用 LimitGuard
            yield this.service.checkLimit(200, customerId);
            const resp = yield this.service.createArticle({
                customerId: customerId,
                html: dto.html,
                image: dto.image,
                title: dto.title,
                excerpt: dto.excerpt,
                source: dto.source,
            });
            yield this.service.incrementLimit(customerId);
            let link = resp.link;
            if (!(link === null || link === void 0 ? void 0 : link.startsWith('http'))) {
                link = `https://${link}`;
            }
            const pageLink = `https://reader.webinfra.cloud/collection/detail?url=${link}`;
            const collectionLink = `https://reader.webinfra.cloud/collection/${customerId}`; // 临时先写死前端阅读列表地址
            if (req.user.email) {
                yield this.customerService.sendEmail(req.user.email, 'COLLECT', {
                    previewUrl: pageLink,
                    collectionUrl: collectionLink,
                });
            }
            else {
                console.log('user has no email, maybe notify by wechat');
            }
            return Object.assign({ customerId: dto.customerId }, (resp || {}));
        });
    }
    remove(id, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`deleting article: ${id}`);
            const customerId = req.user.id;
            const isOwner = yield this.service.isOwner(id, customerId);
            if (!isOwner) {
                throw new common_1.HttpException('No permission', common_1.HttpStatus.FORBIDDEN);
            }
            const resp = yield this.service.removeArticle(id);
            return {
                success: true,
                meta: resp,
            };
        });
    }
    list(params, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { cid: customerId } = params;
            const { sort, pageNo, pageSize } = query;
            this.logger.log(`list articles for ${customerId}, ${sort}, ${pageNo}, ${pageSize}`);
            if (!customerId) {
                return [];
            }
            const { total, data } = (yield this.service.list(customerId, sort || 'desc', Number(pageNo || 1), Number(pageSize || 20))) || {};
            return {
                success: true,
                pageNo,
                pageSize,
                sort,
                total,
                data,
            };
        });
    }
};
exports.JyArticlesController = JyArticlesController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(license_guard_1.LicenseGuard),
    (0, plan_decortator_1.Plan)(v1_flowda_types_1.EPlan.Free),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof v1_biz_services_1.CreateArticleDto !== "undefined" && v1_biz_services_1.CreateArticleDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], JyArticlesController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Post)('/save'),
    (0, common_1.UseGuards)(jyArticlesJwtAuth_guard_1.JyArticlesJwtAuthGuard)
    // @Plan(EPlan.Free)
    ,
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof v1_biz_services_1.CreateArticleDto !== "undefined" && v1_biz_services_1.CreateArticleDto) === "function" ? _d : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JyArticlesController.prototype, "save", null);
tslib_1.__decorate([
    (0, common_1.Post)('/remove'),
    (0, common_1.UseGuards)(jyArticlesJwtAuth_guard_1.JyArticlesJwtAuthGuard)
    // @Plan(EPlan.Free)
    ,
    tslib_1.__param(0, (0, common_1.Body)('id')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JyArticlesController.prototype, "remove", null);
tslib_1.__decorate([
    (0, common_1.Get)('/list/:cid'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JyArticlesController.prototype, "list", null);
exports.JyArticlesController = JyArticlesController = JyArticlesController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('jy-article'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_biz_services_1.JYArticleService !== "undefined" && v1_biz_services_1.JYArticleService) === "function" ? _a : Object, typeof (_b = typeof v1_biz_legacy_services_1.LegacyCustomersService !== "undefined" && v1_biz_legacy_services_1.LegacyCustomersService) === "function" ? _b : Object])
], JyArticlesController);


/***/ }),

/***/ "./src/jy-articles/jyArticlesJwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JyArticlesJwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const common_1 = __webpack_require__("@nestjs/common");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
let JyArticlesJwtStrategy = class JyArticlesJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jyArticlesJwt') {
    constructor(customerAuth) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: customerAuth.getAccessTokenSecret(),
        });
        this.customerAuth = customerAuth;
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.customerAuth.getUser(payload.uid);
            console.log('jy article auth user: ', user);
            return user;
        });
    }
};
exports.JyArticlesJwtStrategy = JyArticlesJwtStrategy;
exports.JyArticlesJwtStrategy = JyArticlesJwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_flowda_services_1.CustomerAuthService !== "undefined" && v1_flowda_services_1.CustomerAuthService) === "function" ? _a : Object])
], JyArticlesJwtStrategy);


/***/ }),

/***/ "./src/jy-articles/jyArticlesJwtAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JyArticlesJwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let JyArticlesJwtAuthGuard = class JyArticlesJwtAuthGuard extends (0, passport_1.AuthGuard)('jyArticlesJwt') {
};
exports.JyArticlesJwtAuthGuard = JyArticlesJwtAuthGuard;
exports.JyArticlesJwtAuthGuard = JyArticlesJwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JyArticlesJwtAuthGuard);


/***/ }),

/***/ "./src/license/license.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LicenseController_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LicenseController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_legacy_services_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/index.ts");
let LicenseController = LicenseController_1 = class LicenseController {
    constructor(customersService) {
        this.customersService = customersService;
        this.logger = new common_1.Logger(LicenseController_1.name);
    }
    create(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.log(`create license for ${JSON.stringify(dto)}`);
                const rt = yield this.customersService.refreshLicense(dto);
                return {
                    customerId: dto.customerId,
                    license: rt.license,
                };
            }
            catch (e) {
                this.logger.error(e.message);
            }
        });
    }
    verify(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.customersService.decodeLicense2(dto);
        });
    }
};
exports.LicenseController = LicenseController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof v1_biz_legacy_services_1.LegacyCreateLicenseDto !== "undefined" && v1_biz_legacy_services_1.LegacyCreateLicenseDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Post)('/verify'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof v1_biz_legacy_services_1.LegacyDecodeLicenseDto !== "undefined" && v1_biz_legacy_services_1.LegacyDecodeLicenseDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "verify", null);
exports.LicenseController = LicenseController = LicenseController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('flowda/license'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_biz_legacy_services_1.LegacyCustomersService !== "undefined" && v1_biz_legacy_services_1.LegacyCustomersService) === "function" ? _a : Object])
], LicenseController);


/***/ }),

/***/ "./src/license/license.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LicenseGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_legacy_services_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/index.ts");
const core_1 = __webpack_require__("@nestjs/core");
const plan_decortator_1 = __webpack_require__("./src/license/plan.decortator.ts");
let LicenseGuard = class LicenseGuard {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    constructor(reflector, service) {
        this.reflector = reflector;
        this.service = service;
    }
    canActivate(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const planArgs = this.reflector.get(plan_decortator_1.PlanSymbol, context.getHandler()) || [];
            if (planArgs.length === 0) {
                throw new Error('Plan decorator is need');
            }
            if (planArgs.length > 1) {
                throw new Error('Plan decorator wrong arguments count');
            }
            const plan = planArgs[0];
            const request = context.switchToHttp().getRequest();
            const license = request.headers['lic'];
            if (!license) {
                throw new common_1.HttpException('No license in header', common_1.HttpStatus.FORBIDDEN);
            }
            const licRes = yield this.service.decodeLicense2({ license });
            request.decodedLicense = {
                customerId: licRes.customerId,
                email: licRes.email,
                plan: licRes.plan,
            };
            if (licRes.plan >= plan) {
                return true;
            }
            else {
                throw new common_1.HttpException('Forbidden license', common_1.HttpStatus.FORBIDDEN);
            }
        });
    }
};
exports.LicenseGuard = LicenseGuard;
exports.LicenseGuard = LicenseGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, common_1.Inject)(v1_biz_legacy_services_1.LegacyCustomersService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof v1_biz_legacy_services_1.LegacyCustomersService !== "undefined" && v1_biz_legacy_services_1.LegacyCustomersService) === "function" ? _b : Object])
], LicenseGuard);


/***/ }),

/***/ "./src/license/plan.decortator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plan = exports.PlanSymbol = void 0;
const common_1 = __webpack_require__("@nestjs/common");
exports.PlanSymbol = Symbol();
const Plan = (...requirements) => (0, common_1.SetMetadata)(exports.PlanSymbol, requirements);
exports.Plan = Plan;


/***/ }),

/***/ "./src/loadModule.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadModule = void 0;
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
const v1_biz_services_1 = __webpack_require__("../../../libs/v1/biz-services/src/index.ts");
const v1_biz_legacy_services_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../../libs/flowda-shared-node/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
function loadModule(container) {
    // todo: 不用兼容，调用就报错
    container.bind(flowda_shared_1.FlowdaTrpcClientSymbol).toConstantValue({});
    container.load(flowda_shared_1.flowdaSharedModule);
    container.load(flowda_shared_node_1.flowdaSharedNodeModule);
    container.load(v1_flowda_services_1.prismaClientFlowdaModule);
    container.load(v1_flowda_services_1.flowdaInfraModule);
    container.load(v1_flowda_services_1.flowdaServicesModule);
    container.load(v1_biz_legacy_services_1.legacyDomainModule);
    container.load(v1_biz_legacy_services_1.legacyServicesModule);
    container.load(v1_biz_services_1.flowdaBizServicesModule);
}
exports.loadModule = loadModule;


/***/ }),

/***/ "./src/orders/orders.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var OrdersController_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_legacy_services_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/index.ts");
let OrdersController = OrdersController_1 = class OrdersController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(OrdersController_1.name);
    }
    create(dto) {
        this.logger.log(`creating order: ${JSON.stringify(dto)}`);
        return this.service.legacyCreate(dto);
    }
    query(orderId) {
        this.logger.log(`querying order: ${orderId}`);
        return this.service.legacyQuery(orderId);
    }
};
exports.OrdersController = OrdersController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof v1_biz_legacy_services_1.LegacyCreateOrderDto !== "undefined" && v1_biz_legacy_services_1.LegacyCreateOrderDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], OrdersController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)('/query'),
    tslib_1.__param(0, (0, common_1.Query)('orderId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OrdersController.prototype, "query", null);
exports.OrdersController = OrdersController = OrdersController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('flowda/orders'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_biz_legacy_services_1.LegacyOrdersService !== "undefined" && v1_biz_legacy_services_1.LegacyOrdersService) === "function" ? _a : Object])
], OrdersController);


/***/ }),

/***/ "./src/products/products.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProductsController_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_legacy_services_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/index.ts");
let ProductsController = ProductsController_1 = class ProductsController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(ProductsController_1.name);
    }
    findAll() {
        this.logger.debug(`products list`);
        return this.service.findAll();
    }
};
exports.ProductsController = ProductsController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
exports.ProductsController = ProductsController = ProductsController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('flowda/products'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_biz_legacy_services_1.LegacyProductsService !== "undefined" && v1_biz_legacy_services_1.LegacyProductsService) === "function" ? _a : Object])
], ProductsController);


/***/ }),

/***/ "./src/services/services.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = exports.servicesContainer = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const loadModule_1 = __webpack_require__("./src/loadModule.ts");
exports.servicesContainer = new inversify_1.Container();
(0, loadModule_1.loadModule)(exports.servicesContainer);
const services = (0, flowda_shared_1.getServices)(exports.servicesContainer);
let ServicesModule = class ServicesModule {
    constructor() { }
};
exports.ServicesModule = ServicesModule;
exports.ServicesModule = ServicesModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: services,
        exports: services,
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ServicesModule);


/***/ }),

/***/ "./src/worker/worker.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var WorkerController_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerController = void 0;
const tslib_1 = __webpack_require__("tslib");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_services_1 = __webpack_require__("../../../libs/v1/biz-services/src/index.ts");
let WorkerController = WorkerController_1 = class WorkerController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(WorkerController_1.name);
    }
    // 仅当client端已有的服务实例全都失败时触发该接口，为用户重新选择一个新的可用实例
    // TODO: 同一个用户，只能刷新一次，所以这里也需要做个校验
    renew(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const list = this.service.getWorkers();
            const topList = list === null || list === void 0 ? void 0 : list.filter(item => item.id !== id).sort((itemA, itemB) => itemB.score - itemA.score);
            // 将之前的实例评分降低,防止用户暴击，加个倍率缓冲
            if (Math.random() < 0.1) {
                const prevInstance = list.find(item => item.id === id);
                if (prevInstance) {
                    yield this.service.updateWorker({
                        id,
                        score: Math.max(prevInstance.score - 1, 0),
                    });
                }
            }
            return {
                success: true,
                data: topList && topList[0] ? topList[0] : null,
            };
        });
    }
    // client端启动时，做服务初始化，更新本地的服务器列表
    list() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const list = this.service.getWorkers();
            // 仅返回两台性能好的
            const topList = list === null || list === void 0 ? void 0 : list.sort((itemA, itemB) => itemB.score - itemA.score).slice(0, 2);
            return {
                success: true,
                data: topList,
            };
        });
    }
    listAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const list = this.service.getWorkers();
            return {
                success: true,
                data: list,
            };
        });
    }
    register(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // 服务器之间的信任，就是这么朴实无华
            if ((dto === null || dto === void 0 ? void 0 : dto.auth) === 'auth-hash-str') {
                const data = {
                    url: dto.url,
                };
                if (dto.id) {
                    data.id = dto.id;
                }
                if (dto.score) {
                    data.score = dto.score;
                }
                const resp = yield this.service.addWorker(data);
                return {
                    success: !!resp,
                    data: resp,
                };
            }
            return {
                success: false,
                data: {},
            };
        });
    }
    remove(dto, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((dto === null || dto === void 0 ? void 0 : dto.auth) === 'auth-hash-str') {
                const resp = yield this.service.delWorker(dto.id);
                return {
                    success: true,
                    data: resp,
                };
            }
            // 做个假回复
            return {
                success: false,
                data: {},
            };
        });
    }
    heart(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((dto === null || dto === void 0 ? void 0 : dto.auth) === 'auth-hash-str') {
                const target = this.service.getWorker(dto === null || dto === void 0 ? void 0 : dto.id);
                if (!target) {
                    return {
                        success: false,
                        data: null,
                    };
                }
                const resp = yield this.service.updateWorker({
                    id: dto.id,
                    score: Math.min(target.score + 1, 10),
                });
                return {
                    success: true,
                    data: resp,
                };
            }
        });
    }
    // TODO: 定时检测任务，接受不到心跳时的处理逻辑
    down(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((dto === null || dto === void 0 ? void 0 : dto.auth) === 'auth-hash-str') {
                const target = this.service.getWorker(dto === null || dto === void 0 ? void 0 : dto.id);
                if (!target) {
                    return {
                        success: false,
                        data: null,
                    };
                }
                const resp = yield this.service.updateWorker({
                    id: dto.id,
                    score: Math.max(target.score - 1, 0),
                });
                return {
                    success: true,
                    data: resp,
                };
            }
        });
    }
};
exports.WorkerController = WorkerController;
tslib_1.__decorate([
    (0, common_1.Get)('/renew'),
    tslib_1.__param(0, (0, common_1.Query)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "renew", null);
tslib_1.__decorate([
    (0, common_1.Get)('/list'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "list", null);
tslib_1.__decorate([
    (0, common_1.Get)('/list-all'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "listAll", null);
tslib_1.__decorate([
    (0, common_1.Post)('/register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof v1_biz_services_1.RegisterWorkerDto !== "undefined" && v1_biz_services_1.RegisterWorkerDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.Post)('remove'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof v1_biz_services_1.RemoveWorkerDto !== "undefined" && v1_biz_services_1.RemoveWorkerDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "remove", null);
tslib_1.__decorate([
    (0, common_1.Post)('heart'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof v1_biz_services_1.HeartWorkerDto !== "undefined" && v1_biz_services_1.HeartWorkerDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "heart", null);
tslib_1.__decorate([
    (0, common_1.Post)('down'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof v1_biz_services_1.HeartWorkerDto !== "undefined" && v1_biz_services_1.HeartWorkerDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "down", null);
exports.WorkerController = WorkerController = WorkerController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('worker'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_biz_services_1.WorkerService !== "undefined" && v1_biz_services_1.WorkerService) === "function" ? _a : Object])
], WorkerController);


/***/ }),

/***/ "./src/zhiplus/zhiPlusJwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZhiPlusJwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const common_1 = __webpack_require__("@nestjs/common");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
let ZhiPlusJwtStrategy = class ZhiPlusJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'zhiPlusJwt') {
    constructor(customerAuth) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: customerAuth.getAccessTokenSecret(),
        });
        this.customerAuth = customerAuth;
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.customerAuth.getUser(payload.uid);
            console.log('zhi plus auth user: ', user);
            return user;
        });
    }
};
exports.ZhiPlusJwtStrategy = ZhiPlusJwtStrategy;
exports.ZhiPlusJwtStrategy = ZhiPlusJwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_flowda_services_1.CustomerAuthService !== "undefined" && v1_flowda_services_1.CustomerAuthService) === "function" ? _a : Object])
], ZhiPlusJwtStrategy);


/***/ }),

/***/ "./src/zhiplus/zhiPlusJwtAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZhiPlusJwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let ZhiPlusJwtAuthGuard = class ZhiPlusJwtAuthGuard extends (0, passport_1.AuthGuard)('zhiPlusJwt') {
};
exports.ZhiPlusJwtAuthGuard = ZhiPlusJwtAuthGuard;
exports.ZhiPlusJwtAuthGuard = ZhiPlusJwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ZhiPlusJwtAuthGuard);


/***/ }),

/***/ "./src/zhiplus/zhiplus.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ZhiPlusController_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZhiPlusController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const v1_biz_services_1 = __webpack_require__("../../../libs/v1/biz-services/src/index.ts");
const zhiPlusJwtAuth_guard_1 = __webpack_require__("./src/zhiplus/zhiPlusJwtAuth.guard.ts");
let ZhiPlusController = ZhiPlusController_1 = class ZhiPlusController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(ZhiPlusController_1.name);
    }
    apply(dto, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customerId = req.user.id;
            if (!customerId) {
                throw new Error('Unauthorized');
            }
            // TODO: 整体做一个限流，防止有用户刷接口，特别是付费用户
            // TODO: 使用 LimitGuard
            const checkResp = yield this.service.checkLimit(req.user);
            if (!checkResp.success) {
                throw new Error('Limit Reached');
            }
            const cnt = checkResp === null || checkResp === void 0 ? void 0 : checkResp.cnt;
            console.log('free plan check passed: ', checkResp);
            const record = yield this.service.createQuestion({
                customerId: customerId,
                question: dto.question,
            });
            const cipherTxt = this.service.generateToken({
                id: record.id,
                uid: customerId,
                cnt,
            });
            const result = {
                id: record.id,
                cnt: cnt - 1,
                hash: cipherTxt,
            };
            console.log('apply result: ', JSON.stringify(result));
            return {
                success: true,
                data: result,
            };
        });
    }
    feedback(dto, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customerId = req.user.id;
            dto.uid = customerId;
            const result = yield this.service.feedQuestion(dto);
            return {
                success: true,
                data: result,
            };
        });
    }
};
exports.ZhiPlusController = ZhiPlusController;
tslib_1.__decorate([
    (0, common_1.Post)('/apply'),
    (0, common_1.UseGuards)(zhiPlusJwtAuth_guard_1.ZhiPlusJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof v1_biz_services_1.CreateQuestionDto !== "undefined" && v1_biz_services_1.CreateQuestionDto) === "function" ? _b : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZhiPlusController.prototype, "apply", null);
tslib_1.__decorate([
    (0, common_1.Post)('/feedback'),
    (0, common_1.UseGuards)(zhiPlusJwtAuth_guard_1.ZhiPlusJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof v1_biz_services_1.FeedQuestionDto !== "undefined" && v1_biz_services_1.FeedQuestionDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZhiPlusController.prototype, "feedback", null);
exports.ZhiPlusController = ZhiPlusController = ZhiPlusController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('zhiplus'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_biz_services_1.ZhiPlusService !== "undefined" && v1_biz_services_1.ZhiPlusService) === "function" ? _a : Object])
], ZhiPlusController);


/***/ }),

/***/ "../../../libs/flowda-shared-node/src/assist/audit.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuditService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditService = exports.QueryAuditSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const z = tslib_1.__importStar(__webpack_require__("zod"));
const QueryAuditSchema = z.object({
    auditType: z.string(),
    auditId: z.number(),
    pageSize: z.number(),
    current: z.number(),
});
class QueryAuditSchemaDto extends (0, nestjs_zod_1.createZodDto)(QueryAuditSchema) {
}
exports.QueryAuditSchemaDto = QueryAuditSchemaDto;
let AuditService = AuditService_1 = class AuditService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(AuditService_1.name);
    }
    queryAudit(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [data, count] = yield this.prisma.$transaction([
                this.prisma.audits.findMany({
                    skip: dto.pageSize * (dto.current - 1),
                    take: dto.pageSize,
                    where: {
                        auditType: dto.auditType,
                        auditId: dto.auditId,
                    },
                    orderBy: {
                        createdAt: 'desc',
                    },
                }),
                this.prisma.audits.count({
                    where: {
                        auditType: dto.auditType,
                        auditId: dto.auditId,
                    },
                }),
            ]);
            return {
                total: count,
                data,
            };
        });
    }
};
exports.AuditService = AuditService;
exports.AuditService = AuditService = AuditService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], AuditService);


/***/ }),

/***/ "../../../libs/flowda-shared-node/src/assist/table-filter.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TableFilterService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterService = exports.RemoveTableFilterSchemaDto = exports.QueryTableFilterSchemaDto = exports.TableFilterSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
// import { TableFilterSchema } from '@flowda-projects/prisma-wms'
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const zod_1 = __webpack_require__("zod");
// todo @flowda-projects/prisma-wms
// 不能有关联关系，先手动 copy 出来
exports.TableFilterSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    path: zod_1.z.string(),
    name: zod_1.z.string(),
    filterJSON: zod_1.z.string(),
});
const QueryTableFilterSchema = exports.TableFilterSchema.pick({
    path: true,
});
const RemoveTableFilterSchema = exports.TableFilterSchema.pick({
    id: true,
});
class QueryTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(QueryTableFilterSchema) {
}
exports.QueryTableFilterSchemaDto = QueryTableFilterSchemaDto;
class RemoveTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(RemoveTableFilterSchema) {
}
exports.RemoveTableFilterSchemaDto = RemoveTableFilterSchemaDto;
let TableFilterService = TableFilterService_1 = class TableFilterService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(TableFilterService_1.name);
    }
    save(dto) {
        return this.prisma.tableFilter.create({
            data: dto,
        });
    }
    remove(dto) {
        return this.prisma.tableFilter.delete({
            where: { id: dto.id },
        });
    }
    query(dto) {
        return this.prisma.tableFilter.findMany({
            where: {
                isDeleted: false,
                path: dto.path,
            },
            select: {
                id: true,
                path: true,
                name: true,
                filterJSON: true,
            },
        });
    }
};
exports.TableFilterService = TableFilterService;
exports.TableFilterService = TableFilterService = TableFilterService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], TableFilterService);


/***/ }),

/***/ "../../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppExceptionFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
let AppExceptionFilter = AppExceptionFilter_1 = class AppExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(AppExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof flowda_shared_1.CustomError) {
            const rt = JSON.parse(exception.message);
            this.logger.error(`CustomError|${rt.code}|${rt.message}`);
            response.status(common_1.HttpStatus.OK).json({
                code: rt.code,
                message: rt.message,
            });
        }
        else if (exception instanceof common_1.HttpException) {
            const res = exception.getResponse();
            if (typeof res === 'object') {
                const extra = JSON.stringify(res);
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}|${extra}`);
            }
            else {
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}`);
            }
            response.status(exception.getStatus()).json({
                code: exception.getStatus(),
                message: typeof res === 'object' ? res : exception.message,
            });
        }
        else {
            this.logger.error(exception.stack);
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: exception.message,
            });
        }
    }
};
exports.AppExceptionFilter = AppExceptionFilter;
exports.AppExceptionFilter = AppExceptionFilter = AppExceptionFilter_1 = tslib_1.__decorate([
    (0, common_1.Catch)(),
    tslib_1.__metadata("design:paramtypes", [])
], AppExceptionFilter);


/***/ }),

/***/ "../../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedNodeModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const table_filter_service_1 = __webpack_require__("../../../libs/flowda-shared-node/src/assist/table-filter.service.ts");
const audit_service_1 = __webpack_require__("../../../libs/flowda-shared-node/src/assist/audit.service.ts");
exports.flowdaSharedNodeModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, table_filter_service_1.TableFilterService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, audit_service_1.AuditService);
    bind('Factory<Logger>').toFactory(context => {
        return name => {
            return new common_1.Logger(name);
        };
    });
});


/***/ }),

/***/ "../../../libs/flowda-shared-node/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared-node/src/assist/table-filter.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared-node/src/assist/audit.service.ts"), exports);


/***/ }),

/***/ "../../../libs/flowda-shared/src/flowdaShared.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const prismaSchema_service_1 = __webpack_require__("../../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const data_service_1 = __webpack_require__("../../../libs/flowda-shared/src/services/data/data.service.ts");
const schema_service_1 = __webpack_require__("../../../libs/flowda-shared/src/services/schema/schema.service.ts");
const schemaTransformer_1 = __webpack_require__("../../../libs/flowda-shared/src/services/schema/schemaTransformer.ts");
const prismaUtils_1 = __webpack_require__("../../../libs/flowda-shared/src/services/schema/prismaUtils.ts");
const symbols_1 = __webpack_require__("../../../libs/flowda-shared/src/symbols.ts");
exports.flowdaSharedModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, flowda_shared_1.DataServiceSymbol, data_service_1.DataService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, flowda_shared_1.SchemaServiceSymbol, schema_service_1.SchemaService);
    bind(symbols_1.PrismaSchemaServiceSymbol).to(prismaSchema_service_1.PrismaSchemaService).inSingletonScope();
    bind(flowda_shared_1.PrismaUtilsSymbol).to(prismaUtils_1.PrismaUtils).inSingletonScope();
    bind(symbols_1.SchemaTransformerSymbol).to(schemaTransformer_1.SchemaTransformer).inTransientScope();
    bind('Factory<SchemaTransformer>').toFactory(context => {
        return (z) => {
            const transformer = context.container.get(symbols_1.SchemaTransformerSymbol);
            transformer.setZodType(z);
            return transformer;
        };
    });
    bind(flowda_shared_1.DynamicTableSchemaTransformerSymbol)
        .to(flowda_shared_1.DynamicTableSchemaTransformer)
        .inTransientScope();
});


/***/ }),

/***/ "../../../libs/flowda-shared/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/symbols.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/flowdaShared.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/utils/bindService.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/utils/matchPath.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/utils/getServices.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/utils/browser-log-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/interfaces/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/interfaces/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/services/schema/meta.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/services/schema/schemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/services/schema/schema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/flowda-shared/src/services/data/data.service.ts"), exports);


/***/ }),

/***/ "../../../libs/flowda-shared/src/interfaces/schema.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../../libs/flowda-shared/src/interfaces/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COSSymbol = exports.CustomError = exports.K3CloudIdentifyInfoSymbol = exports.CustomZodSchemaSymbol = exports.PrismaZodSchemaSymbol = exports.ENVSymbol = exports.URLSymbol = exports.APISymbol = exports.ServiceSymbol = exports.PrismaClientSymbol = void 0;
exports.PrismaClientSymbol = Symbol('PrismaClient');
/**
 * getServices 方法会将 inversify module 转换成 nestjs module，这样 nestjs controller 就可以使用了
 * 所以，注意：如果不需要给 controller 使用，则不需要 bind
 */
exports.ServiceSymbol = Symbol('Service');
exports.APISymbol = Symbol('API');
exports.URLSymbol = Symbol.for('URL');
exports.ENVSymbol = Symbol.for('ENV');
exports.PrismaZodSchemaSymbol = Symbol.for('PrismaZodSchema');
exports.CustomZodSchemaSymbol = Symbol.for('CustomZodSchema');
exports.K3CloudIdentifyInfoSymbol = Symbol.for('K3CloudIdentifyInfo');
class CustomError extends Error {
    constructor(code, message, extra) {
        super(JSON.stringify({ code: code, message }));
        this.message = JSON.stringify({ code, message, extra });
    }
}
exports.CustomError = CustomError;
exports.COSSymbol = Symbol('COS');


/***/ }),

/***/ "../../../libs/flowda-shared/src/services/data/data.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DataService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const lodash_1 = __webpack_require__("lodash");
const types_1 = __webpack_require__("../../../libs/flowda-shared/src/interfaces/types.ts");
const symbols_1 = __webpack_require__("../../../libs/flowda-shared/src/symbols.ts");
// import * as db from '@prisma/client-cms_admin'
/*
todo: 增加 reference_type 区分是如何做 nest
e.g. Customer#weixinProfile 和 Order#customerId 的 nest 查询有区别
 */
let DataService = DataService_1 = class DataService {
    constructor(prisma, prismaSchemaService, loggerFactory) {
        this.prisma = prisma;
        this.prismaSchemaService = prismaSchemaService;
        this.logger = loggerFactory(DataService_1.name);
    }
    get(reqUser, pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`get(reqUser ${JSON.stringify(reqUser, null, 2)}, path: ${pathname}, query: ${JSON.stringify(query, null, 2)})`);
            const findParamRet = yield this.prismaSchemaService.toFindParam(pathname, query);
            if (_.isEmpty(findParamRet)) {
                return {};
            }
            const { resource, action, param } = findParamRet;
            if (action === 'findUnique') {
                const ret = yield this.prisma[resource][action](param);
                if (ret.isDeleted)
                    return {};
                return _.omit(ret, ['isDeleted']);
            }
            if (action === 'findMany') {
                const [data, count] = yield this.prisma.$transaction([
                    this.prisma[resource][action](param),
                    this.prisma[resource].count({ where: param.where }),
                ]);
                return {
                    pagination: {
                        total: count,
                    },
                    data,
                };
            }
        });
    }
    put(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`put(reqUser ${JSON.stringify(reqUser, null, 2)}), path: ${path}, values: ${JSON.stringify(values, null, 2)}`);
            const updateParamRet = yield this.prismaSchemaService.toUpdateParam(path, values);
            const { resource, param } = updateParamRet;
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
                select: _.mapValues(param.data, item => true),
            });
            this.logger.debug(`prevRet ${JSON.stringify(prevRet, null, 2)}`);
            const auditChanges = Object.keys(param.data).reduce((acc, k) => {
                acc[k] = [prevRet[k], param.data[k]];
                return acc;
            }, {});
            const ret = yield this.prisma[resource].update(param);
            const auditInfo = {
                auditId: param.where.id,
                auditType: resource,
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                username: reqUser['user_name'],
                action: 'update',
                auditChanges: JSON.stringify(auditChanges),
                version: 0,
            };
            this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
            yield this.prisma.audits.create({
                data: auditInfo,
            });
            return ret;
        });
    }
    post(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[post] reqUser ${JSON.stringify(reqUser, null, 2)}`);
            const createParamRet = yield this.prismaSchemaService.toCreateParam(path, values);
            const { resource, param } = createParamRet;
            if (createParamRet['x-unique']) {
                const ref = createParamRet['x-unique'];
                const refId = values[ref.name];
                const refModelName = ref.reference.model_name;
                const refData = yield this.prisma[(0, lodash_1.lowerFirst)(refModelName)].findUnique({
                    where: {
                        id: refId,
                    },
                    include: {
                        [resource]: true,
                    },
                });
                const id = refData[resource].id;
                const ret = yield this.prisma[resource].update({
                    where: {
                        id: id,
                    },
                    data: Object.assign(Object.assign({}, param.data), {
                        isDeleted: false,
                    }),
                });
                const auditInfo = {
                    auditId: id,
                    auditType: resource,
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                    username: reqUser['user_name'],
                    action: 'soft_delete_revert',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
                return ret;
            }
            else {
                const ret = yield this.prisma[resource].create(param);
                const auditInfo = {
                    auditId: ret.id,
                    auditType: resource,
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                    username: reqUser['user_name'],
                    action: 'create',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
                return ret;
            }
        });
    }
    remove(reqUser, pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[remove] reqUser ${JSON.stringify(reqUser, null, 2)}`);
            const assDelStrategy = yield this.prismaSchemaService.getAssociationDeleteStrategy(pathname);
            const { resource, param } = yield this.prismaSchemaService.toRemoveParam(pathname);
            for (const k of Object.keys(assDelStrategy)) {
                const ass = assDelStrategy[k];
                if (ass['x-onSoftDelete'] === 'Restrict') {
                    const ret = yield this.prisma[(0, lodash_1.lowerFirst)(k)].findMany({
                        where: {
                            isDeleted: false,
                            [ass.name]: param.where.id,
                        },
                    });
                    if (ret.length > 0) {
                        throw new Error(`删除失败, 关联的<${ass.relatedDisplayName}>不为空`);
                    }
                }
            }
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
            });
            const ret = yield this.prisma[resource].update(param);
            const auditInfo = {
                auditId: param.where.id,
                auditType: resource,
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                username: reqUser['user_name'],
                action: 'soft_delete',
                auditChanges: JSON.stringify(prevRet),
                version: 0,
            };
            this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
            yield this.prisma.audits.create({
                data: auditInfo,
            });
            return ret;
        });
    }
};
exports.DataService = DataService;
exports.DataService = DataService = DataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(symbols_1.PrismaSchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], DataService);


/***/ }),

/***/ "../../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DynamicTableSchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableSchemaTransformer = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../../libs/flowda-shared/src/utils/matchPath.ts");
let DynamicTableSchemaTransformer = DynamicTableSchemaTransformer_1 = class DynamicTableSchemaTransformer {
    constructor(loggerFactory) {
        this.logger = loggerFactory(DynamicTableSchemaTransformer_1.name);
    }
    transform(input) {
        const cols = input.dynamicTableDefColumns.map((c) => {
            return Object.assign({
                name: c.name,
                column_type: c.type,
            }, c.extendedSchema);
        });
        return Object.assign({
            name: (0, matchPath_1.toModelName)(input.name),
            slug: (0, matchPath_1.toPath)(input.name),
            schema_name: (0, matchPath_1.toSchemaName)(input.name),
            primary_key: 'id',
            columns: cols,
            prisma: false,
            is_dynamic: true,
        }, input.extendedSchema);
    }
};
exports.DynamicTableSchemaTransformer = DynamicTableSchemaTransformer;
exports.DynamicTableSchemaTransformer = DynamicTableSchemaTransformer = DynamicTableSchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], DynamicTableSchemaTransformer);


/***/ }),

/***/ "../../../libs/flowda-shared/src/services/schema/meta.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meta = void 0;
const zod_1 = __webpack_require__("zod");
// motor-admin JSON.parse(document.getElementById('app').dataset.schema)
// todo: 目前尽量在后端定义，后续可以再开辟一条链路来储存 schema，并进行 merge
// 当然如果后端定义链路保留，应该做成 decorator
function meta(values) {
    return zod_1.z.unknown().optional().describe(JSON.stringify(values));
}
exports.meta = meta;


/***/ }),

/***/ "../../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaSchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaSchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../../libs/flowda-shared/src/utils/matchPath.ts");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
let PrismaSchemaService = PrismaSchemaService_1 = class PrismaSchemaService {
    constructor(prismaUtils, schemaService, loggerFactory) {
        this.prismaUtils = prismaUtils;
        this.schemaService = schemaService;
        this.logger = loggerFactory(PrismaSchemaService_1.name);
    }
    toPrismaSelect(fields, theResourceSchema) {
        let fieldsArr = [];
        if (fields == null) {
            fieldsArr = theResourceSchema.columns.map(c => c.name);
        }
        else {
            fieldsArr = fields.split(',');
        }
        return fieldsArr.reduce((acc, cur) => {
            acc[cur] = true;
            return acc;
        }, {});
    }
    toFindParam(pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // if (!query['fields']) {
            //   throw new Error('No query fields')
            // }
            this.logger.debug(`[toFindParam] pathname: ${pathname}, query: ${JSON.stringify(query, null, 2)}`);
            const parsedPath = (0, matchPath_1.matchPath)(pathname);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { resource, id, resourceSchema } = parsedPath[parsedPath.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            let action;
            let param = {};
            const queryFields = query['fields'];
            const fields = this.toPrismaSelect(queryFields && queryFields[resource], theResourceSchema);
            const include = {};
            if (typeof query['include'] === 'string' && query['include'] !== '') {
                query['include'].split(',').forEach((inc) => {
                    // this.logger.log(`[toFindParam] parse include ${inc}`)
                    const refSelect = this.getRefSelect(schemaCache, theResourceSchema, inc);
                    const selectRet = this.toPrismaSelect(queryFields[inc], theResourceSchema);
                    include[inc] = {
                        // todo: 似乎 prisma nest select 不支持 order by 只有 include 支持，但是 include 不支持 nest select fields
                        // orderBy: [{ createdAt: 'desc' }],
                        select: Object.assign(Object.assign({}, selectRet), refSelect),
                    };
                });
            }
            if (id != null) {
                action = 'findUnique';
                const id2 = yield this.prismaUtils.parseId(resource, id);
                param = {
                    where: {
                        id: id2,
                    },
                    select: Object.assign(Object.assign(Object.assign({}, fields), include), { isDeleted: true }),
                };
            }
            else {
                const filter = this.convertQueryToPrismaFilter(schemaCache, theResourceSchema, query);
                const orderBy = this.convertToOrderBy(query);
                action = 'findMany';
                const skip = query['current'] ? (_.toNumber(query['current']) - 1) * _.toNumber(query['pageSize']) : undefined;
                const take = query['pageSize'] ? _.toNumber(query['pageSize']) : undefined;
                if (parsedPath.length > 1) {
                    // 情况1：根据前一个 resource id 搜索 list
                    const pResource = parsedPath[parsedPath.length - 2];
                    // this.logger.log(`${resource}.findMany`)
                    param = _.omitBy({
                        where: Object.assign({
                            [`${pResource.resource}Id`]: pResource.id,
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, _.isUndefined);
                }
                else {
                    param = _.omitBy({
                        where: Object.assign({
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, _.isUndefined);
                }
            }
            const ret = {
                action,
                param,
                resource,
            };
            this.logger.debug(`[toFindParam] ret ${JSON.stringify(ret)}`);
            return ret;
        });
    }
    convertToOrderBy(query) {
        let sort;
        if (query.sort != null) {
            sort = query.sort;
        }
        else {
            return [{ createdAt: 'desc' }];
        }
        if (sort[0] === '-') {
            return [{ [sort.slice(1)]: 'desc' }];
        }
        else {
            return [{ [sort]: 'asc' }];
        }
    }
    /**
     * 根据 resource 的 schema 中 columns 是 ref， e.g. resource(Receipt) 收货单关联的 ref(partVersion)
     * 找到对应 refSchema 的 display_column 中的又 include e.g. display_column(partId)，得到 nest select
     * { [include: partVersion]: { select { partId: true, [partId x-relationField: part]: { select: { id: true, [display_column*]: true} }}} }
     *
     * todo: 现在是根据 display_column 里如果有 ref 来计算的，后续可以改成所有 ref 都默认向下搜索一层
     */
    getRefSelect(schemaCache, resourceSchema, includeRef) {
        const refSelect = {};
        if (resourceSchema && resourceSchema.columns) {
            // e.g. inc partVersion
            const refColumn = resourceSchema.columns.find(col => col.column_type === 'reference' && col.reference['x-relationField'] === includeRef);
            if (refColumn) {
                // e.g. model_name PartVersion
                // e.g. display_column partId,version
                const { model_name, display_column } = refColumn.reference;
                // e.g. PartVersionResourceSchema
                const refSchema = schemaCache[model_name + 'ResourceSchema'];
                let displayCols = [];
                if (typeof display_column === 'string') {
                    displayCols = [display_column];
                }
                else {
                    displayCols = display_column || [];
                }
                displayCols.forEach(item => {
                    // e.g. item partId
                    const disCol = refSchema.columns.find(col => col.name === item);
                    if (disCol == null) {
                        throw new Error(`schema '${model_name}', wrong display column '${item}'`);
                    }
                    else if (disCol.column_type === 'reference') {
                        // e.g. name
                        const display_column = disCol.reference.display_column;
                        const relationField = disCol.reference['x-relationField'];
                        let display_column2;
                        if (Array.isArray(display_column)) {
                            display_column2 = display_column;
                        }
                        else {
                            display_column2 = [display_column];
                        }
                        const select = display_column2.reduce((acc, cur) => {
                            acc[cur] = true;
                            return acc;
                        }, {});
                        refSelect[relationField] = {
                            select: Object.assign({
                                id: true,
                            }, select),
                        };
                    }
                });
            }
        }
        return refSelect;
    }
    /*
      [
        {
          type: { eq: 'UNSCHEDULE' },
          status: { eq: 'DONE' },
        },
      ]
     */
    convertQueryToPrismaFilter(schemaCache, resourceSchema, query) {
        if (query.filter && Array.isArray(query.filter) && query.filter.length > 0) {
            // console.log(query.filter)
            const filter = query.filter;
            const andIdx = filter.findIndex(item => typeof item === 'string' && item === 'AND');
            const orIdx = filter.findIndex(item => typeof item === 'string' && item === 'OR');
            const ret = {};
            if (andIdx === 0) {
                ret['AND'] = [];
                if (orIdx === -1) {
                    const andFilter = filter.slice(1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
                else {
                    const andFilter = filter.slice(1, orIdx);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                    ret['OR'] = [];
                    const orFilter = filter.slice(orIdx + 1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
            }
            else if (orIdx === 0) {
                ret['OR'] = [];
                if (andIdx === -1) {
                    const orFilter = filter.slice(1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
                else {
                    const orFilter = filter.slice(1, andIdx);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                    ret['AND'] = [];
                    const andFilter = filter.slice(andIdx + 1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
            }
            else {
                throw new Error('Wrong filter');
            }
            return ret;
        }
        else if (query.q != null &&
            Array.isArray(resourceSchema.searchable_columns) &&
            resourceSchema.searchable_columns.length > 0) {
            return {
                OR: resourceSchema.searchable_columns.reduce((acc, cur) => {
                    acc.push({ [cur]: { contains: query.q } });
                    return acc;
                }, []),
            };
        }
        else {
            return {};
        }
    }
    toUpdateParam(pathname, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`pathname: ${pathname}, body: ${JSON.stringify(values)}`);
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { resource, id, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            this.removeRelationFields(schemaCache, resourceSchema, values);
            const ret = {
                resource,
                param: {
                    where: { id: id },
                    data: values,
                },
            };
            this.logger.debug(JSON.stringify(ret));
            return ret;
        });
    }
    // todo: 需要增加 relation name
    getAssociationDeleteStrategy(pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { origin, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            if (theResourceSchema.associations == null) {
                return {};
            }
            const ret = theResourceSchema.associations.reduce((acc, cur) => {
                const assSchema = schemaCache[cur.model_name + 'ResourceSchema'];
                if (assSchema == null) {
                    throw new Error(`${resourceSchema} associated schema ${cur.model_name} is null`);
                }
                const relCol = assSchema.columns.find(ac => ac.column_type === 'reference' && ac.reference.model_name === (0, matchPath_1.toModelName)(origin));
                if (relCol == null) {
                    throw new Error('Cannot found related column');
                }
                if (relCol.reference['x-onSoftDelete'] === 'Restrict') {
                    acc[cur.model_name] = {
                        'x-onSoftDelete': relCol.reference['x-onSoftDelete'],
                        name: relCol.name,
                        relatedDisplayName: assSchema.display_name,
                    };
                    return acc;
                }
                return acc;
            }, {});
            return ret;
        });
    }
    toRemoveParam(pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { resource, origin, id, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            let assDisconnect = {};
            let include;
            if (theResourceSchema.associations != null) {
                assDisconnect = theResourceSchema.associations.reduce((acc, cur) => {
                    const assSchema = schemaCache[cur.model_name + 'ResourceSchema'];
                    const relCol = assSchema.columns.find(ac => ac.column_type === 'reference' && ac.reference.model_name === (0, matchPath_1.toModelName)(origin));
                    if (relCol == null) {
                        throw new Error('Cannot found related column');
                    }
                    if (relCol.reference['x-onSoftDelete'] !== 'Restrict' /* Restrict 已经确保 is_deleted 不需要解除关联 */) {
                        acc[cur.name] = {
                            set: [] /* disconnectAll 模拟 setNull */,
                        };
                        if (include == null)
                            include = {};
                        include[cur.name] = true;
                    }
                    return acc;
                }, {});
            }
            let id2;
            if (id == null) {
                throw new Error(`remove ${resource}, id null`);
            }
            else {
                id2 = yield this.prismaUtils.parseId(resource, id);
            }
            const ret = {
                resource,
                param: {
                    where: {
                        id: id2,
                    },
                    data: Object.assign({
                        isDeleted: true,
                    }, assDisconnect),
                    include,
                },
            };
            this.logger.debug(JSON.stringify(ret));
            return ret;
        });
    }
    mapItemToPrismaFilter(schemaCache, resourceSchema, item) {
        // 先初步转换
        const k = Object.keys(item)[0];
        // https://javascript.plainenglish.io/how-to-rename-object-keys-in-react-javascript-using-lodash-b73fb92ea24d
        item[k] = _.mapKeys(item[k], (v, k) => {
            switch (k) {
                case 'eq':
                    return 'equals';
                case 'neq':
                    return 'not';
                default:
                    return k;
            }
        });
        item[k] = _.mapValues(item[k], v => {
            // 得用 schema 判断下，主要就是 string 的 LIKE
            const kk = k.split('.');
            let col;
            if (kk.length === 2) {
                const refCol = resourceSchema.columns.find(col => {
                    return col.column_type === 'reference' && col.reference['x-relationField'] === kk[0];
                });
                const refSchema = schemaCache[refCol.reference.model_name + 'ResourceSchema'];
                col = refSchema.columns.find(item => item.name === kk[1]);
            }
            else {
                col = resourceSchema.columns.find(item => item.name === k);
            }
            if (col && ['string', 'textarea'].indexOf(col.column_type) > -1) {
                return v;
            }
            else if ((0, matchPath_1.isLikeNumber)(v)) {
                return _.toNumber(v);
            }
            else {
                return v;
            }
        });
        // 再将 . 改成嵌套（chatGPT 给出的方式）
        const ret = {};
        _.forEach(item, (value, key) => {
            _.set(ret, key.replace(/\./g, '.'), value);
        });
        return ret;
    }
    toCreateParam(pathname, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            // console.log(matchRet)
            const { resource, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            this.removeRelationFields(schemaCache, resourceSchema, values);
            const theResourceSchema = schemaCache[resourceSchema];
            // console.log(theResourceSchema)
            const uniqueCols = theResourceSchema.columns.filter(col => {
                return col.column_type === 'reference' && col.reference['x-unique'];
            });
            if (uniqueCols.length === 0) {
                return {
                    action: 'create',
                    resource: resource,
                    param: {
                        data: values,
                    },
                };
            }
            else if (uniqueCols.length > 1) {
                throw new Error('Not support multiple unique key');
            }
            else {
                const uniqueCol = uniqueCols[0];
                // console.log(uniqueCol)
                return {
                    action: 'update',
                    resource: resource,
                    param: {
                        data: values,
                    },
                    'x-unique': uniqueCol,
                };
            }
        });
    }
    removeRelationFields(schemaCache, resourceSchema, values) {
        // todo: 目前是通过显式声明 x-relationField 来删除 put 时候的 reference 值
        const relationFields = [];
        const theResourceSchema = schemaCache[resourceSchema];
        // console.log(theResourceSchema)
        if (theResourceSchema) {
            Object.keys(values).forEach((k) => {
                var _a;
                const kProp = theResourceSchema.columns && theResourceSchema.columns.find(col => col.name === k);
                if (kProp && kProp.column_type === 'reference') {
                    const relationField = (_a = kProp.reference) === null || _a === void 0 ? void 0 : _a['x-relationField'];
                    if (relationField) {
                        relationFields.push(relationField);
                    }
                }
            });
        }
        // console.log(relationFields)
        relationFields.forEach(k => {
            delete values[k];
        });
    }
};
exports.PrismaSchemaService = PrismaSchemaService;
exports.PrismaSchemaService = PrismaSchemaService = PrismaSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaUtilsSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.SchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], PrismaSchemaService);


/***/ }),

/***/ "../../../libs/flowda-shared/src/services/schema/prismaUtils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaUtils_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaUtils = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../../libs/flowda-shared/src/utils/matchPath.ts");
const types_1 = __webpack_require__("../../../libs/flowda-shared/src/interfaces/types.ts");
let PrismaUtils = PrismaUtils_1 = class PrismaUtils {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(PrismaUtils_1.name);
    }
    parseId(resource, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modelName = (0, matchPath_1.toModelName)(resource);
            const dmmf = yield this.prisma._getDmmf();
            const idField = dmmf.modelMap[modelName].fields.find((item) => item.name === 'id');
            // this.logger.log(`id: ${id}, type: ${idField.type}`)
            return idField.type === 'Int' && typeof id !== 'number' ? parseInt(id) : id;
        });
    }
};
exports.PrismaUtils = PrismaUtils;
exports.PrismaUtils = PrismaUtils = PrismaUtils_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], PrismaUtils);


/***/ }),

/***/ "../../../libs/flowda-shared/src/services/schema/schema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const types_1 = __webpack_require__("../../../libs/flowda-shared/src/interfaces/types.ts");
let SchemaService = SchemaService_1 = class SchemaService {
    constructor(loggerFactory, modelSchemaFactory, zt, czt) {
        this.modelSchemaFactory = modelSchemaFactory;
        this.zt = zt;
        this.czt = czt;
        this.logger = loggerFactory(SchemaService_1.name);
    }
    getSchema() {
        console.time('generate schema');
        const schema = Object.keys(this.czt).reduce((acc, k) => {
            const e = this.czt[k];
            if (['ZodObject'].indexOf(e.constructor.name) > -1) {
                const transformer = this.modelSchemaFactory(e);
                acc[k] = transformer.buildSchema(k).toSchema();
            }
            else {
                this.logger.error('Wrong type', k);
            }
            return acc;
        }, {});
        this.schemaCache = schema;
        console.timeEnd('generate schema');
        return schema;
    }
    getSchemaCache() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.schemaCache) {
                // 重启的话内存里就没有了，可以手动重新获取下
                this.logger.log(`schemaCache is empty, getSchema again.`);
                return this.getSchema();
            }
            else {
                return this.schemaCache;
            }
        });
    }
};
exports.SchemaService = SchemaService;
exports.SchemaService = SchemaService = SchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<SchemaTransformer>')),
    tslib_1.__param(2, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)(types_1.CustomZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Object, Object])
], SchemaService);


/***/ }),

/***/ "../../../libs/flowda-shared/src/services/schema/schemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaTransformer = exports.SUFFIX = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_1 = __webpack_require__("zod");
const inversify_1 = __webpack_require__("inversify");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const types_1 = __webpack_require__("../../../libs/flowda-shared/src/interfaces/types.ts");
const matchPath_1 = __webpack_require__("../../../libs/flowda-shared/src/utils/matchPath.ts");
exports.SUFFIX = 'ResourceSchema';
let SchemaTransformer = SchemaTransformer_1 = class SchemaTransformer {
    constructor(loggerFactory, prismaZod) {
        this.prismaZod = prismaZod;
        this.modelLevelSchema = {};
        this.associations = [];
        this.columns = [];
        this.logger = loggerFactory(SchemaTransformer_1.name);
    }
    setZodType(z) {
        this.zodType = z;
    }
    buildSchema(schemaName) {
        if (!this.zodType) {
            const errMsg = 'zodType is not initialized';
            this.logger.error(errMsg);
            throw new Error(errMsg);
        }
        this.schemaName = schemaName;
        this.jsonSchema = (0, zod_openapi_1.generateSchema)(this.zodType);
        this.modelLevelSchema = this.getModelSchema();
        const props = this.getProperties();
        this.columns = props.reduce((acc, k) => {
            const jsProp = this.jsonSchema.properties[k];
            if (jsProp.virtual === 'true') {
                return acc; // 不处理 virtual，目前只有 1..1 用到
            }
            if (jsProp.type === 'array') {
                if (!jsProp.model_name) {
                    throw new Error(`${this.schemaName} 1..n model_name is not set`);
                }
                this.associations.push({
                    foreign_key: this.getForeignKey(jsProp.foreign_key),
                    model_name: jsProp.model_name,
                    primary_key: jsProp.primary_key || 'id',
                    name: k,
                    slug: (0, matchPath_1.toPath)(k),
                    display_name: jsProp.title,
                    schema_name: jsProp.model_name + exports.SUFFIX,
                });
                return acc; // 不处理 array
            }
            const c = _.omitBy(_.assign({ name: k }, {
                name: k,
                column_type: this.doColumnType(k),
                format: this.doFormat(k),
                display_name: this.doDisplayName(k),
                access_type: this.doAccessType(k),
                reference: jsProp.reference ? this.doRef(k) : undefined,
                validators: this.doValidators(k),
                prisma: jsProp.prisma,
            }), _.isUndefined);
            acc.push(c);
            return acc;
        }, []);
        if (Array.isArray(this.extendSchema.columns)) {
            // 合并 __meta.columns 和 cols
            this.columns.forEach((c) => {
                const f = this.extendSchema.columns.find((c1) => c1.name === c.name);
                Object.assign(c, f || {});
            });
        }
        return this;
    }
    toSchema() {
        const name = this.schemaName.split(exports.SUFFIX)[0];
        return _.omitBy({
            name: name,
            slug: (0, matchPath_1.toPath)(name),
            prisma: this.modelLevelSchema.prisma != null ? this.modelLevelSchema.prisma : undefined,
            schema_name: this.schemaName,
            primary_key: this.modelLevelSchema.primary_key || 'id',
            custom: this.jsonSchema.custom,
            display_column: this.doDisplayColumn(this.modelLevelSchema.display_column),
            display_name: this.modelLevelSchema.display_name,
            display_primary_key: this.modelLevelSchema.display_primary_key == null
                ? true
                : this.modelLevelSchema.display_primary_key === 'true',
            searchable_columns: this.modelLevelSchema.searchable_columns
                ? this.modelLevelSchema.searchable_columns.split(',')
                : undefined,
            columns: this.columns,
            associations: this.associations,
            // __jsonschema: this.jsonSchema,
        }, _.isUndefined);
    }
    doDisplayColumn(display_column) {
        if (!display_column)
            return undefined; // 默认 id
        const cols = display_column.split(',');
        if (cols.length > 1)
            return cols;
        else
            return display_column;
    }
    doRef(k) {
        const jsProp = this.jsonSchema.properties[k];
        // console.log(jsProp)
        const t = jsProp.reference + 'Schema';
        const ref = (0, zod_openapi_1.generateSchema)(this.prismaZod[t]);
        const { primary_key, display_name, display_column } = ref;
        const ret = {
            model_name: jsProp.reference,
            'x-relationField': jsProp['x-relationField'] || k.replace('Id', ''),
            'x-onSoftDelete': !jsProp.nullable && this.jsonSchema.required.indexOf(k) > -1 ? 'Restrict' : 'SetNull',
            primary_key,
            display_name: jsProp.display_name || display_name,
            display_column: this.doDisplayColumn(display_column),
            // foreign_key: jsProp.foreign_key,
        };
        if (jsProp['x-unique']) {
            return Object.assign(Object.assign({}, ret), { 'x-unique': true });
        }
        else {
            return ret;
        }
    }
    getProperties() {
        // 拿到最大的 columns
        const keys = Object.keys(this.zodType.shape);
        const properties = keys.filter(key => {
            const item = this.zodType.shape[key];
            return (key !== '__meta' &&
                !(item instanceof zod_1.z.ZodDefault || item._def.typeName === 'ZodDefault') &&
                !(item instanceof zod_1.z.ZodNever || item._def.typeName === 'ZodDefault') &&
                keys.indexOf(key + 'Id') === -1 && // 忽略 product (product + 'Id' === productId)
                key !== 'isDeleted');
        });
        return properties;
    }
    getModelSchema() {
        this.checkValid();
        const _extends = this.extendSchema.extends;
        const { prisma } = this.extendSchema;
        if (prisma !== false && !this.prismaZod[_extends]) {
            throw new Error('no _extends');
        }
        else {
            if (prisma !== false) {
                return (0, zod_openapi_1.generateSchema)(this.prismaZod[_extends]);
            }
            else {
                const ret = Object.assign({ prisma: false }, _.omit(this.jsonSchema, ['type', 'properties', 'required']));
                // this.logger.debug!(ret)
                return ret;
            }
        }
    }
    checkValid() {
        // 暂时认为必须有 __meta，简化下逻辑
        // 现在 __meta 里必须定义 extends
        // todo: support no prisma schema
        if (!this.jsonSchema.properties.__meta) {
            throw new Error('no __meta');
        }
        this.extendSchema = JSON.parse(this.jsonSchema.properties.__meta.description);
    }
    doDisplayName(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.title === 'string') {
            return jsProp.title;
        }
        else {
            if (k === 'createdAt') {
                return '创建时间';
            }
            if (k === 'updatedAt') {
                return '更新时间';
            }
            return;
        }
    }
    doAccessType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.access_type === 'string') {
            return jsProp.access_type;
        }
        else {
            if (k === 'createdAt' || k === 'updatedAt' || k === this.modelLevelSchema.primary_key) {
                return 'read_only';
            }
            else {
                return;
            }
        }
    }
    doColumnType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            return 'tag';
        }
        else if (jsProp.override_type) {
            jsProp.type = jsProp.override_type;
        }
        else if (jsProp.format === 'date-time') {
            return 'datetime';
        }
        if (jsProp.column_type) {
            return jsProp.column_type;
        }
        return jsProp.reference ? 'reference' : jsProp.type;
    }
    doValidators(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (!jsProp) {
            this.logger.warn('undef key: ' + k);
            return;
        }
        const validators = [];
        if (['createdAt', 'updatedAt'].indexOf(k) === -1 && !jsProp.nullable && this.jsonSchema.required.indexOf(k) > -1) {
            validators.push({ required: true });
        }
        return validators.length === 0 ? undefined : validators;
    }
    doFormat(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            if (jsProp['x-enumNames']) {
                const enumNames = jsProp['x-enumNames'].split(',');
                return {
                    select_options: jsProp.enum.map((opt, idx) => ({
                        value: opt,
                        label: enumNames[idx],
                    })),
                };
            }
            return {
                select_options: jsProp.enum.map((opt) => ({
                    value: opt,
                    label: opt,
                })),
            };
        }
        else {
            return;
        }
    }
    getForeignKey(fk) {
        if (fk)
            return fk;
        const schema = this.extendSchema.extends;
        return _.lowerFirst(schema.split('Schema')[0]) + 'Id';
    }
};
exports.SchemaTransformer = SchemaTransformer;
exports.SchemaTransformer = SchemaTransformer = SchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Object])
], SchemaTransformer);


/***/ }),

/***/ "../../../libs/flowda-shared/src/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlowdaTrpcClientSymbol = exports.DynamicTableSchemaTransformerSymbol = exports.SchemaServiceSymbol = exports.DataServiceSymbol = exports.PrismaUtilsSymbol = exports.SchemaTransformerSymbol = exports.PrismaSchemaServiceSymbol = void 0;
exports.PrismaSchemaServiceSymbol = Symbol.for('PrismaSchemaService');
exports.SchemaTransformerSymbol = Symbol.for('SchemaTransformer');
exports.PrismaUtilsSymbol = Symbol.for('PrismaUtils');
exports.DataServiceSymbol = Symbol.for('DataService');
exports.SchemaServiceSymbol = Symbol.for('SchemaService');
exports.DynamicTableSchemaTransformerSymbol = Symbol.for('DynamicTableSchemaTransformer');
exports.FlowdaTrpcClientSymbol = Symbol.for('FlowdaTrpcClient');


/***/ }),

/***/ "../../../libs/flowda-shared/src/utils/bindService.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindServiceSymbol = exports.bindService = void 0;
function bindService(bind, serviceIdentifier, constructor) {
    bind(constructor).toSelf().inSingletonScope();
    bind(serviceIdentifier).toFactory((context) => {
        return context.container.get(constructor);
    });
}
exports.bindService = bindService;
function bindServiceSymbol(bind, serviceIdentifier, implementIdentifier, constructor) {
    bind(implementIdentifier).to(constructor).inSingletonScope();
    bind(serviceIdentifier).toFactory((context) => {
        return context.container.get(implementIdentifier);
    });
}
exports.bindServiceSymbol = bindServiceSymbol;


/***/ }),

/***/ "../../../libs/flowda-shared/src/utils/browser-log-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = exports.warn = exports.info = exports.debug = void 0;
const levelColorMap = {
    0: '#c0392b', // Red
    1: '#f39c12', // Yellow
    3: '#00BCD4', // Cyan
    4: '#ccc',
};
function style(level) {
    return `
  background: ${levelColorMap[level]};
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
  padding: 2px 0.5em;
`;
}
function debug(msg) {
    return [`%c debug `, style(4), '', msg];
}
exports.debug = debug;
function info(msg) {
    return [`%c info `, style(3), '', msg];
}
exports.info = info;
function warn(msg) {
    return [`%c warn `, style(1), '', msg];
}
exports.warn = warn;
function error(msg) {
    return [`%c error `, style(0), '', msg];
}
exports.error = error;


/***/ }),

/***/ "../../../libs/flowda-shared/src/utils/getServices.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getServices = void 0;
const types_1 = __webpack_require__("../../../libs/flowda-shared/src/interfaces/types.ts");
function getServices(servicesContainer) {
    return servicesContainer.getAll(types_1.ServiceSymbol).map((service) => {
        return {
            provide: service.constructor,
            useValue: service,
        };
    });
}
exports.getServices = getServices;


/***/ }),

/***/ "../../../libs/flowda-shared/src/utils/matchPath.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.matchPath = exports.toSchemaName = exports.toPath = exports.toModelName = exports.isLikeNumber = void 0;
const tslib_1 = __webpack_require__("tslib");
const plur = tslib_1.__importStar(__webpack_require__("pluralize"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
plur.addSingularRule(/data/i, 'data');
plur.addSingularRule(/defs/i, 'def');
// s* equipment 不可数
const REG = /(([a-z_]+s*)\/?([A-Za-z0-9-_:]+)?)+/g;
const NUM_REG = /^-?\d+(\.\d+)?$/;
// todo: 暂时没想到更精确的方法，这个应该能覆盖 100%
function isLikeNumber(value) {
    return NUM_REG.test(value);
}
exports.isLikeNumber = isLikeNumber;
function toModelName(slug) {
    return _.startCase(_.camelCase(plur.singular(slug))).replace(/ /g, '');
}
exports.toModelName = toModelName;
function toPath(modelName) {
    return plur.plural(_.snakeCase(modelName));
}
exports.toPath = toPath;
function toSchemaName(slug) {
    const p = plur.singular(slug);
    return toModelName(p) + 'ResourceSchema';
}
exports.toSchemaName = toSchemaName;
function matchPath(path) {
    const ret1 = path.match(REG);
    // console.log(ret1)
    if (ret1 != null) {
        const ret2 = ret1.map(item => {
            const [resource, id] = item.split('/');
            const p = plur.singular(resource);
            return {
                resource: _.camelCase(p),
                resourceSchema: toSchemaName(resource),
                origin: resource,
                id: isLikeNumber(id) ? _.toNumber(id) : id,
            };
        });
        return ret2;
    }
    else {
        return [];
    }
}
exports.matchPath = matchPath;


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/domain/customers/legacyCustomer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LegacyCustomer_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyCustomer = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
let LegacyCustomer = LegacyCustomer_1 = class LegacyCustomer {
    constructor(prisma, loggerFactory, config) {
        this.prisma = prisma;
        this.config = config;
        this.logger = loggerFactory(LegacyCustomer_1.name);
    }
    getCustomers() {
        return this.prisma.customer.findMany();
    }
    /*
    - 按道理，没必要搞这种低效的封装，除非未来要替换 prisma，但是替换也是 progressive 的，不要提前 over design
    - 作为 dependency 存在，client 需要 mock output（没有必要判断 params 吐出不同的 mock output，还是靠近用户场景来直接在 client 设置 output）
    - 除非 params 比如在 prisma 里，本身其实是多个方法，只不过变成了 chain method。
    即，我假设 dependencies 返回的就是我想要的。
    - 在编写 client 的 test 的时候，可以选择 mock 的数据，可以微调（fork）出一个新的场景（scenario）
    那场景会爆炸吗？
    - 其实因为是特征测试，所以就算场景爆炸，也无所谓了。场景的 mock 数据，不需要重构。就放着，作为特征测试的现状永远存在着。只是上层用不用的区别，不用删除或者规整。
    - 当然可以提供工具，来对比场景的依赖的 output 的不同
    */
    getCustomerByEmail(email) {
        return this.prisma['customer'].findFirstOrThrow({
            where: { name: email },
        });
    }
    getCustomerById(id) {
        return this.prisma.customer.findFirstOrThrow({
            where: { id },
        });
    }
    findOrRegister(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let customer = yield this.prisma.customer.findFirst({
                where: {
                    name: dto.email,
                },
            });
            this.logger.log(`findOrRegister(${dto.email}) found ${customer === null || customer === void 0 ? void 0 : customer.id}`);
            if (customer == null) {
                this.logger.log(`findOrRegister(${dto.email}) creating customer with ${dto.email}`);
                customer = yield this.prisma.customer.create({
                    data: {
                        name: dto.email,
                        email: dto.email,
                        hashedPassword: null,
                        appId: dto.appId,
                        tenantId: dto.tenantId,
                    },
                });
            }
            return customer;
        });
    }
    /**
     * 更新 refreshToken 就生成新的 license
     * 不保存之前的 license
     *
     */
    refreshLicense(customerId, email, productIds) {
        const refreshToken = jwt.sign({
            customerId: customerId,
            email: email,
            productIds: productIds,
            createdAt: Date.now(),
        }, this.config.getEnv('SECRET_FOR_LICENSE_TOKEN'));
        this.logger.debug(`refreshToken size: ${refreshToken.length}`);
        return this.prisma.legacyProfile.upsert({
            where: {
                customerId: customerId,
            },
            create: {
                customerId: customerId,
                license: (0, v1_flowda_services_1.cuid)(),
                refreshToken,
            },
            update: {
                license: (0, v1_flowda_services_1.cuid)(),
                refreshToken,
            },
        });
    }
};
exports.LegacyCustomer = LegacyCustomer;
exports.LegacyCustomer = LegacyCustomer = LegacyCustomer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(2, (0, inversify_1.inject)(v1_flowda_services_1.IConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, Function, typeof (_b = typeof v1_flowda_services_1.IConfigService !== "undefined" && v1_flowda_services_1.IConfigService) === "function" ? _b : Object])
], LegacyCustomer);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/domain/legacyDomain.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.legacyDomainModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const legacyCustomer_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/domain/customers/legacyCustomer.ts");
const legacyOrders_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/domain/orders/legacyOrders.ts");
exports.legacyDomainModule = new inversify_1.ContainerModule((bind) => {
    bind(legacyCustomer_1.LegacyCustomer).toSelf().inSingletonScope();
    bind(legacyOrders_1.LegacyOrders).toSelf().inSingletonScope();
});


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/domain/orders/legacyOrders.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LegacyOrders_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyOrders = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
let LegacyOrders = LegacyOrders_1 = class LegacyOrders {
    constructor(prisma, loggerFactory, orderService, orderTx) {
        this.prisma = prisma;
        this.orderService = orderService;
        this.orderTx = orderTx;
        this.logger = loggerFactory(LegacyOrders_1.name);
    }
    legacyCreate(customerId, productIdList) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`${customerId} createing order of product: ${JSON.stringify(productIdList)} `);
            const order = yield this.orderTx.createOrder(customerId);
            const products = yield this.createProductSnapshots(productIdList, order.id);
            const snapshots = yield this.prisma.productSnapshot.findMany({
                where: {
                    orderId: order.id,
                },
            });
            return {
                order,
                products: products,
                productSnapshots: snapshots,
            };
        });
    }
    createProductSnapshots(productIdList, orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const products = yield this.prisma.product.findMany({
                where: {
                    id: {
                        in: productIdList,
                    },
                },
            });
            const snapshots = products.map(t => ({
                snapshotPrice: t.price,
                orderId: orderId,
                productId: t.id,
                tenantId: '', // 之前都没有tenant的概念，这里先临时补一下
            }));
            yield this.prisma.productSnapshot.createMany({ data: snapshots });
            return products;
        });
    }
};
exports.LegacyOrders = LegacyOrders;
exports.LegacyOrders = LegacyOrders = LegacyOrders_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(2, (0, inversify_1.inject)(v1_flowda_services_1.OrderService)),
    tslib_1.__param(3, (0, inversify_1.inject)(v1_flowda_services_1.OrderTx)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, Function, typeof (_b = typeof v1_flowda_services_1.OrderService !== "undefined" && v1_flowda_services_1.OrderService) === "function" ? _b : Object, typeof (_c = typeof v1_flowda_services_1.OrderTx !== "undefined" && v1_flowda_services_1.OrderTx) === "function" ? _c : Object])
], LegacyOrders);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/domain/legacyDomain.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/legacyServices.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyCreateLicense.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyVerifyLicense.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/legacyCustomers.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyCreateAccount.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyVerifyLicenseRes.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyVerifyLicense2Res.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyDecodeLicense.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/orders/dto/legacyCreateOrder.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/orders/legacyOrders.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-legacy-services/src/services/products/legacyProducts.service.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyCreateAccount.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyCreateAccountDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class LegacyCreateAccountDto {
}
exports.LegacyCreateAccountDto = LegacyCreateAccountDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '用来注册的邮箱原样返回',
    }),
    tslib_1.__metadata("design:type", String)
], LegacyCreateAccountDto.prototype, "email", void 0);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyCreateLicense.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyCreateLicenseDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class LegacyCreateLicenseDto {
}
exports.LegacyCreateLicenseDto = LegacyCreateLicenseDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '一般是 customer.id',
    }),
    tslib_1.__metadata("design:type", String)
], LegacyCreateLicenseDto.prototype, "customerId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'customer.email',
    }),
    tslib_1.__metadata("design:type", String)
], LegacyCreateLicenseDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '购买的产品 id 列表，如果升级，则重新创建 license，之前的 license 失效',
    }),
    tslib_1.__metadata("design:type", Array)
], LegacyCreateLicenseDto.prototype, "productIds", void 0);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyDecodeLicense.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyDecodeLicenseDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
class LegacyDecodeLicenseDto {
}
exports.LegacyDecodeLicenseDto = LegacyDecodeLicenseDto;
tslib_1.__decorate([
    (0, v1_flowda_services_1.isCuid)({
        message: '证书格式不合法',
    }),
    (0, swagger_1.ApiProperty)({
        description: '证书',
    }),
    tslib_1.__metadata("design:type", String)
], LegacyDecodeLicenseDto.prototype, "license", void 0);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyVerifyLicense.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyVerifyLicenseDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class LegacyVerifyLicenseDto {
}
exports.LegacyVerifyLicenseDto = LegacyVerifyLicenseDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '一般是 customer.id',
    }),
    tslib_1.__metadata("design:type", String)
], LegacyVerifyLicenseDto.prototype, "customerId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '证书',
    }),
    tslib_1.__metadata("design:type", String)
], LegacyVerifyLicenseDto.prototype, "license", void 0);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyVerifyLicense2Res.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyVerifyLicense2ResDto = void 0;
const legacyCreateLicense_dto_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyCreateLicense.dto.ts");
class LegacyVerifyLicense2ResDto extends legacyCreateLicense_dto_1.LegacyCreateLicenseDto {
}
exports.LegacyVerifyLicense2ResDto = LegacyVerifyLicense2ResDto;


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyVerifyLicenseRes.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyVerifyLicenseResDto = void 0;
const legacyCreateLicense_dto_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/dto/legacyCreateLicense.dto.ts");
class LegacyVerifyLicenseResDto extends legacyCreateLicense_dto_1.LegacyCreateLicenseDto {
}
exports.LegacyVerifyLicenseResDto = LegacyVerifyLicenseResDto;


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/customers/legacyCustomers.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LegacyCustomersService_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyCustomersService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const legacyCustomer_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/domain/customers/legacyCustomer.ts");
let LegacyCustomersService = LegacyCustomersService_1 = class LegacyCustomersService {
    constructor(prisma, config, legacyCustomer, mailService, loggerFactory) {
        this.prisma = prisma;
        this.config = config;
        this.legacyCustomer = legacyCustomer;
        this.mailService = mailService;
        this.logger = loggerFactory(LegacyCustomersService_1.name);
    }
    getCustomers() {
        return this.legacyCustomer.getCustomers();
    }
    getCustomerById(id) {
        return this.legacyCustomer.getCustomerById(id);
    }
    getCustomer(email) {
        return this.legacyCustomer.getCustomerByEmail(email);
    }
    sendEmail(email, templateName, params) {
        return this.mailService.sendEmail({
            email,
            templateName,
            params,
        });
    }
    /**
     * 更新 refreshToken 就生成新的 license
     * 不保存之前的 license
     *
     */
    refreshLicense(dto) {
        return this.legacyCustomer.refreshLicense(dto.customerId, dto.email, dto.productIds);
    }
    decodeLicense(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = yield this.legacyCustomer.getCustomerById(dto.customerId);
            const profile = yield this.prisma.legacyProfile.findUniqueOrThrow({
                where: { customerId: dto.customerId },
            });
            if (profile.license == null || !v1_flowda_services_1.cuid.isCuid(profile.license)) {
                this.logger.error('Invalid license');
                throw new v1_flowda_types_1.LicenseError.InvalidLicense();
            }
            const decodedToken = jwt.verify(profile.refreshToken, this.config.getEnv('SECRET_FOR_LICENSE_TOKEN'));
            if (decodedToken.customerId !== dto.customerId) {
                this.logger.error('Invalid customerId in decodedToken');
                throw new v1_flowda_types_1.LicenseError.InvalidLicense();
            }
            if (decodedToken.email !== customer.email) {
                this.logger.error('Invalid email in decodedToken');
                throw new v1_flowda_types_1.LicenseError.InvalidLicense();
            }
            return {
                customerId: decodedToken.customerId,
                email: decodedToken.email,
                productIds: decodedToken.productIds,
            };
        });
    }
    /**
     * 不用校验 customerId
     */
    decodeLicense2(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`decodeLicense2...${dto === null || dto === void 0 ? void 0 : dto.license}`);
            const profile = yield this.prisma.legacyProfile.findFirst({
                where: { license: dto.license },
            });
            if (profile == null || profile.license == null || !v1_flowda_services_1.cuid.isCuid(profile.license)) {
                this.logger.error(`invalid license`);
                throw new v1_flowda_types_1.LicenseError.InvalidLicense();
            }
            const decodedToken = jwt.verify(profile.refreshToken, this.config.getEnv('SECRET_FOR_LICENSE_TOKEN'));
            const products = yield this.prisma.product.findMany({
                where: {
                    id: {
                        in: decodedToken.productIds,
                    },
                },
            });
            const plans = _.map(products, t => t.plan);
            if (!plans || !plans[0]) {
                this.logger.error('no plans found');
                throw new v1_flowda_types_1.LicenseError.InvalidLicense();
            }
            this.logger.log(`info decoded ${JSON.stringify(decodedToken)}`);
            return {
                customerId: decodedToken.customerId,
                email: decodedToken.email,
                productIds: decodedToken.productIds,
                plan: plans[0],
            };
        });
    }
    sendLicense(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`sending license to ${email}`);
            const customer = yield this.prisma.customer.findFirst({
                where: { name: email },
            });
            if (customer) {
                const profile = yield this.prisma.legacyProfile.findUniqueOrThrow({
                    where: {
                        customerId: customer.id,
                    },
                });
                this.logger.debug(`got profile:  ${profile ? JSON.stringify(profile) : 'EMPTY'}`);
                yield this.mailService.sendLicense(email, profile.license);
                return {
                    success: true,
                    email,
                    // license: profile.license, // 安全起见，不返回license信息
                };
            }
            return {
                success: false,
                message: 'customer not found',
            };
        });
    }
    createAccountByEmail(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`createAccountByEmail: ${dto.email}`);
            const existingCustomer = yield this.prisma.customer.findFirst({
                where: { name: dto.email },
            });
            if (existingCustomer) {
                this.logger.log(`find existed customer: ${existingCustomer === null || existingCustomer === void 0 ? void 0 : existingCustomer.id}`);
                let profile = yield this.prisma.legacyProfile.findFirst({
                    where: {
                        customerId: existingCustomer.id,
                    },
                });
                if (profile) {
                    this.logger.log(`find existed profile: ${profile === null || profile === void 0 ? void 0 : profile.license}`);
                    yield this.mailService.sendLicense(dto.email, profile.license);
                    return {
                        email: dto.email,
                        // license: profile.license,
                        message: 'existing customer',
                    };
                }
                this.logger.log(`customer exist but cannot find valid profile`);
                // 临时解决方案
                // 异常逻辑，先重新生成一个免费的profile，能用
                // 长期方案：
                // 1. 付款异常逻辑修复
                // 2. 需要管理员能后台方便的修复逻辑，目前都是外键，无法编辑
                const product0 = yield this.getFreeProduct();
                profile = yield this.legacyCustomer.refreshLicense(existingCustomer.id, existingCustomer.name, [product0.id]);
                yield this.mailService.sendLicense(dto.email, profile.license);
                return {
                    email: dto.email,
                    message: 'new customer created',
                };
            }
            else {
                this.logger.log(`customer not existed, try to create a new one with free product`);
                // 创建用户
                const customer = yield this.legacyCustomer.findOrRegister(dto);
                // 创建默认 license，注意，不需要创建默认订单
                const product0 = yield this.getFreeProduct();
                const profile = yield this.legacyCustomer.refreshLicense(customer.id, customer.name, [product0.id]);
                this.logger.log(`customer(${dto.email}) created with license: ${profile === null || profile === void 0 ? void 0 : profile.license} and product: ${product0.id}`);
                yield this.mailService.sendLicense(dto.email, profile.license);
                return {
                    email: dto.email,
                    //        license: profile.license,
                    message: 'new customer created',
                };
            }
        });
    }
    // 创建默认产品订单
    getFreeProduct() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const product0 = yield this.prisma.product.findFirst({
                where: {
                    plan: v1_flowda_types_1.EPlan.Free,
                },
            });
            if (!product0) {
                throw new v1_flowda_types_1.OrderError.NoProducts();
            }
            return product0;
        });
    }
};
exports.LegacyCustomersService = LegacyCustomersService;
exports.LegacyCustomersService = LegacyCustomersService = LegacyCustomersService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(v1_flowda_services_1.IConfigService)),
    tslib_1.__param(2, (0, inversify_1.inject)(legacyCustomer_1.LegacyCustomer)),
    tslib_1.__param(3, (0, inversify_1.inject)(v1_flowda_services_1.IMailService)),
    tslib_1.__param(4, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof v1_flowda_services_1.IConfigService !== "undefined" && v1_flowda_services_1.IConfigService) === "function" ? _b : Object, typeof (_c = typeof legacyCustomer_1.LegacyCustomer !== "undefined" && legacyCustomer_1.LegacyCustomer) === "function" ? _c : Object, typeof (_d = typeof v1_flowda_services_1.IMailService !== "undefined" && v1_flowda_services_1.IMailService) === "function" ? _d : Object, Function])
], LegacyCustomersService);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/legacyServices.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.legacyServicesModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const flowda_shared_2 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const legacyCustomers_service_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/services/customers/legacyCustomers.service.ts");
const legacyProducts_service_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/services/products/legacyProducts.service.ts");
const legacyOrders_service_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/services/orders/legacyOrders.service.ts");
exports.legacyServicesModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_2.bindService)(bind, flowda_shared_1.ServiceSymbol, legacyCustomers_service_1.LegacyCustomersService);
    (0, flowda_shared_2.bindService)(bind, flowda_shared_1.ServiceSymbol, legacyProducts_service_1.LegacyProductsService);
    (0, flowda_shared_2.bindService)(bind, flowda_shared_1.ServiceSymbol, legacyOrders_service_1.LegacyOrdersService);
});


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/orders/dto/legacyCreateOrder.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyCreateOrderDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class LegacyCreateOrderDto {
}
exports.LegacyCreateOrderDto = LegacyCreateOrderDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '用户下单需要填写邮箱',
    }),
    tslib_1.__metadata("design:type", String)
], LegacyCreateOrderDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '用户购买的商品列表',
    }),
    tslib_1.__metadata("design:type", Array)
], LegacyCreateOrderDto.prototype, "productIdList", void 0);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/orders/legacyOrders.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LegacyOrdersService_1;
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyOrdersService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const legacyCustomer_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/domain/customers/legacyCustomer.ts");
const legacyOrders_1 = __webpack_require__("../../../libs/v1/biz-legacy-services/src/domain/orders/legacyOrders.ts");
// todo: 创建的事务
// todo: eager loading 不起作用，目前只看了在 unit test 情景，是 mock 的不够吗？
let LegacyOrdersService = LegacyOrdersService_1 = class LegacyOrdersService {
    constructor(prisma, mailService, legacyCustomer, legacyOrders, orderTx, wxPayService) {
        this.prisma = prisma;
        this.mailService = mailService;
        this.legacyCustomer = legacyCustomer;
        this.legacyOrders = legacyOrders;
        this.orderTx = orderTx;
        this.wxPayService = wxPayService;
        this.logger = new common_1.Logger(LegacyOrdersService_1.name);
    }
    legacyCreate(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`creating order for ${dto.email} product: ${JSON.stringify(dto.productIdList)}`);
            const customer = yield this.legacyCustomer.findOrRegister({
                email: dto.email,
                appId: dto.appId,
                tenantId: dto.tenantId,
            });
            const orderRet = yield this.legacyOrders.legacyCreate(customer.id, dto.productIdList);
            const { productSnapshots, products } = orderRet;
            let { order } = orderRet;
            const { desc, total } = _.reduce(products, (acc, i) => {
                acc.total = client_v1_flowda_1.Prisma.Decimal.add(acc.total, i.price);
                acc.desc += i.name + ',';
                return acc;
            }, {
                desc: '',
                total: new client_v1_flowda_1.Prisma.Decimal(0),
            });
            let codeUrl = '';
            // 免费产品，直接创建订单，并声称license
            // 新增订单状态 FREE_DEAL，指无需付款的订单，不关联支付
            if (total.toNumber() === 0) {
                this.logger.log(`product is free, create order status ${client_v1_flowda_1.OrderStatus.FREE_DEAL}`);
                order = yield this.prisma.order.update({
                    where: { id: order.id },
                    data: { status: client_v1_flowda_1.OrderStatus.FREE_DEAL },
                });
                const licenseRet = yield this.legacyCustomer.refreshLicense(customer.id, customer.name, productSnapshots.map(t => t.productId));
                yield this.mailService.sendLicense(customer.name, licenseRet.license);
            }
            else {
                // 发起微信支付
                this.logger.log(`product price ${total}, call wechat pay`);
                const wxRet = yield this.wxPayService.transactionsNative(order.id, desc, total.toNumber());
                codeUrl = wxRet.code_url;
                this.logger.log(`order ${order.id} update to status ${client_v1_flowda_1.OrderStatus.PAY_ASSOCIATED}`);
                order = yield this.prisma.order.update({
                    where: { id: order.id },
                    data: { status: client_v1_flowda_1.OrderStatus.PAY_ASSOCIATED },
                });
            }
            return Object.assign(Object.assign({}, order), { customer,
                productSnapshots,
                codeUrl });
        });
    }
    legacyQuery(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { order, payQueryRet } = yield this.orderTx.doQueryPay(orderId);
            const licenseRet = yield this.legacyCustomer.refreshLicense(order.customer.id, order.customer.name, order.productSnapshots.map(t => t.productId));
            yield this.mailService.sendLicense(order.customer.name, licenseRet.license);
            this.logger.log('order succeed');
            return {
                orderId: orderId,
                transactionId: payQueryRet.transaction_id,
            };
        });
    }
};
exports.LegacyOrdersService = LegacyOrdersService;
exports.LegacyOrdersService = LegacyOrdersService = LegacyOrdersService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(v1_flowda_services_1.IMailService)),
    tslib_1.__param(2, (0, inversify_1.inject)(legacyCustomer_1.LegacyCustomer)),
    tslib_1.__param(3, (0, inversify_1.inject)(legacyOrders_1.LegacyOrders)),
    tslib_1.__param(4, (0, inversify_1.inject)(v1_flowda_services_1.OrderTx)),
    tslib_1.__param(5, (0, inversify_1.inject)(v1_flowda_services_1.WxPayService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof v1_flowda_services_1.IMailService !== "undefined" && v1_flowda_services_1.IMailService) === "function" ? _b : Object, typeof (_c = typeof legacyCustomer_1.LegacyCustomer !== "undefined" && legacyCustomer_1.LegacyCustomer) === "function" ? _c : Object, typeof (_d = typeof legacyOrders_1.LegacyOrders !== "undefined" && legacyOrders_1.LegacyOrders) === "function" ? _d : Object, typeof (_e = typeof v1_flowda_services_1.OrderTx !== "undefined" && v1_flowda_services_1.OrderTx) === "function" ? _e : Object, typeof (_f = typeof v1_flowda_services_1.WxPayService !== "undefined" && v1_flowda_services_1.WxPayService) === "function" ? _f : Object])
], LegacyOrdersService);


/***/ }),

/***/ "../../../libs/v1/biz-legacy-services/src/services/products/legacyProducts.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LegacyProductsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
let LegacyProductsService = class LegacyProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.product.findMany();
    }
};
exports.LegacyProductsService = LegacyProductsService;
exports.LegacyProductsService = LegacyProductsService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object])
], LegacyProductsService);


/***/ }),

/***/ "../../../libs/v1/biz-services/src/flowdaBizServices.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaBizServicesModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const flowda_shared_2 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const jy_articles_service_1 = __webpack_require__("../../../libs/v1/biz-services/src/jy-articles/jy-articles.service.ts");
const zhiplus_service_1 = __webpack_require__("../../../libs/v1/biz-services/src/zhiplus/zhiplus.service.ts");
const worker_service_1 = __webpack_require__("../../../libs/v1/biz-services/src/worker/worker.service.ts");
const wecom_service_1 = __webpack_require__("../../../libs/v1/biz-services/src/wecom/wecom.service.ts");
const wecom_service_2 = __webpack_require__("../../../libs/v1/biz-services/src/interfaces/wecom/wecom.service.ts");
exports.flowdaBizServicesModule = new inversify_1.ContainerModule((bind) => {
    bind(wecom_service_2.IWecomHookService).to(wecom_service_1.WecomService);
    (0, flowda_shared_2.bindService)(bind, flowda_shared_1.ServiceSymbol, jy_articles_service_1.JYArticleService);
    (0, flowda_shared_2.bindService)(bind, flowda_shared_1.ServiceSymbol, zhiplus_service_1.ZhiPlusService);
    // worker
    (0, flowda_shared_2.bindService)(bind, flowda_shared_1.ServiceSymbol, worker_service_1.WorkerService);
});


/***/ }),

/***/ "../../../libs/v1/biz-services/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/flowdaBizServices.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/jy-articles/jy-articles.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/jy-articles/dto/create.article.dto.ts"), exports);
// zhi plus
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/zhiplus/zhiplus.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/zhiplus/dto/create.question.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/zhiplus/dto/feed.question.dto.ts"), exports);
// worker
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/worker/worker.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/worker/dto/heart.worker.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/worker/dto/register.worker.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/biz-services/src/worker/dto/remove.worker.dto.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/biz-services/src/interfaces/wecom/wecom.service.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WecomPayloadType = exports.IWecomHookService = void 0;
exports.IWecomHookService = Symbol.for('IWecomHookService');
var WecomPayloadType;
(function (WecomPayloadType) {
    WecomPayloadType["TEMPLATE"] = "template_card";
})(WecomPayloadType || (exports.WecomPayloadType = WecomPayloadType = {}));


/***/ }),

/***/ "../../../libs/v1/biz-services/src/jy-articles/dto/create.article.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateArticleDto = void 0;
class CreateArticleDto {
}
exports.CreateArticleDto = CreateArticleDto;


/***/ }),

/***/ "../../../libs/v1/biz-services/src/jy-articles/jy-articles.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var JYArticleService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JYArticleService = void 0;
const tslib_1 = __webpack_require__("tslib");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const stream_1 = __webpack_require__("stream");
const common_1 = __webpack_require__("@nestjs/common");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const dayjs = __webpack_require__("dayjs");
const OSS_BUCKET_PREFIX = 'jy-articles-1253674045.cos.ap-shanghai.myqcloud.com/';
const findKeyFromLink = (link) => {
    return link === null || link === void 0 ? void 0 : link.replace(OSS_BUCKET_PREFIX, '');
};
let JYArticleService = JYArticleService_1 = class JYArticleService {
    constructor(prisma, cos) {
        this.prisma = prisma;
        this.cos = cos;
        this.logger = new common_1.Logger(JYArticleService_1.name);
    }
    list(customerId, order, pageNo, pageSize) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const profile = yield this.findOrCreateJYProfile(customerId);
            this.logger.log(`listing articles with ${profile === null || profile === void 0 ? void 0 : profile.id}`);
            const perPageCnt = pageSize || 20;
            const skip = pageNo ? (pageNo - 1) * perPageCnt : 0;
            const [total, list] = yield this.prisma.$transaction([
                this.prisma.article.count({
                    where: {
                        profileId: profile.id,
                    },
                }),
                this.prisma.article.findMany({
                    skip,
                    take: perPageCnt,
                    where: {
                        profileId: profile.id,
                    },
                    orderBy: {
                        createdAt: order === 'asc' ? 'asc' : 'desc',
                    },
                }),
            ]);
            return {
                total,
                data: list,
            };
        });
    }
    incrementLimit(customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const profile = yield this.findOrCreateJYProfile(customerId);
            const month = dayjs().month();
            const countRes = yield this.prisma.jYFreeCount.findFirstOrThrow({
                where: {
                    profileId: profile.id,
                    cycle: month,
                },
            });
            countRes.count = countRes.count + 1;
            this.logger.log(`incrementLimit ${profile === null || profile === void 0 ? void 0 : profile.id} to count: ${countRes.count}`);
            yield this.prisma.jYFreeCount.update({
                where: { id: countRes.id },
                data: countRes,
            });
            return countRes.count;
        });
    }
    checkLimit(countSet, customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const profile = yield this.findOrCreateJYProfile(customerId);
            const month = dayjs().month();
            let countRes = yield this.prisma.jYFreeCount.findFirst({
                where: {
                    profileId: profile.id,
                    cycle: month,
                },
            });
            if (!countRes) {
                countRes = yield this.prisma.jYFreeCount.create({
                    data: {
                        count: 0,
                        cycle: month,
                        profileId: profile.id,
                    },
                });
            }
            const count = countRes.count;
            if (count >= countSet) {
                throw new v1_flowda_types_1.LicenseError.FreeLicenseLimitReached();
            }
        });
    }
    isOwner(id, customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!id || !customerId) {
                throw new Error('Invalid parameters');
            }
            const article = yield this.prisma.article.findFirstOrThrow({
                where: { id },
            });
            const profileId = article === null || article === void 0 ? void 0 : article.profileId;
            const jyProfile = yield this.prisma.jYProfile.findFirstOrThrow({
                where: { id: profileId },
            });
            const userId = jyProfile.userId;
            return userId === customerId;
        });
    }
    createArticle(dto) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const file = decodeURIComponent(dto.html);
            const image = decodeURIComponent(dto.image || '');
            const title = decodeURIComponent(dto.title || '');
            const excerpt = decodeURIComponent(dto.excerpt || '');
            const source = decodeURIComponent(dto.source || '');
            const link = yield this.upload(dto.customerId, file);
            let imgLink = '';
            if (image) {
                if (image.startsWith('http')) {
                    imgLink = image;
                }
                else {
                    // TODO: Check image format is valid base64
                    const type = (_a = image.split(';')[0]) === null || _a === void 0 ? void 0 : _a.replace('data:', '');
                    imgLink = yield this.upload(dto.customerId, image, type);
                    this.logger.log(`uploaded image: ${imgLink}`);
                }
            }
            const profile = yield this.findOrCreateJYProfile(dto.customerId);
            this.logger.debug(`create with profile: ${profile === null || profile === void 0 ? void 0 : profile.id} source ${source}`);
            const rt = yield this.prisma.article.create({
                data: {
                    link,
                    image: imgLink,
                    title,
                    excerpt,
                    source,
                    profileId: profile.id,
                },
            });
            return rt;
        });
    }
    removeArticle(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const article = yield this.prisma.article.findFirstOrThrow({
                where: { id },
            });
            if (article) {
                this.release(findKeyFromLink(article.link));
                this.release(findKeyFromLink(article.image || ''));
                // TODO: Flag OSS resources as to be released
                const rt = yield this.prisma.article.delete({
                    where: { id },
                });
                return rt;
            }
            return 'ID Not found';
        });
    }
    findOrCreateJYProfile(customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let profile = yield this.prisma.jYProfile.findFirst({
                where: {
                    userId: customerId,
                },
            });
            if (!profile) {
                profile = yield this.prisma.jYProfile.create({
                    data: {
                        userId: customerId,
                    },
                });
            }
            return profile;
        });
    }
    // Release resource on OSS
    release(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const logger = this.logger;
            return new Promise((resolve, reject) => {
                if (!key)
                    resolve('No key found');
                logger.log(`releasing key: ${key}`);
                this.cos.deleteObject({
                    Bucket: 'jy-articles-1253674045' /* 必须 */,
                    Region: 'ap-shanghai' /* 必须 */,
                    Key: key,
                }, (err, data) => {
                    logger.log(`deleting with resp:  ${JSON.stringify(err || data)}`);
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
    }
    upload(customerId, file, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const logger = this.logger;
            // SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
            return new Promise((resolve, reject) => {
                let format = 'html';
                if (type) {
                    this.logger.log(`upload type - ${type}`);
                    const matched = type.split('/')[1];
                    if (matched) {
                        format = matched;
                    }
                }
                let body;
                if (typeof file === 'string' && file.startsWith('data:')) {
                    this.logger.log('upload base64 string');
                    body = Buffer.from(file.split(',')[1], 'base64');
                }
                else {
                    this.logger.log('upload file');
                    body = stream_1.Readable.from(file);
                }
                this.cos.putObject({
                    Bucket: 'jy-articles-1253674045' /* 必须 */,
                    Region: 'ap-shanghai' /* 必须 */,
                    Key: `art-${customerId}-${Math.floor(new Date().valueOf() / 1000)}.${format}`, // 这里暂且限制最多每秒一个，重复了强制覆盖
                    StorageClass: 'STANDARD',
                    Body: body, // 上传文件对象
                    ContentType: type || 'text/html', // 默认应该都是html格式
                    Expires: Number(12 * 30 * 24 * 60 * 60).toString(), // 一年吧，省流量
                    Headers: {
                        'x-cos-tagging': 'AUTO_DEL=30', // 标签管理，30天自动删除
                    },
                    onProgress: function (progressData) {
                        logger.debug(JSON.stringify(progressData));
                    },
                }, (err, data) => {
                    logger.log(`upload to tencent with resp:  ${JSON.stringify(err || data)}`);
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data === null || data === void 0 ? void 0 : data.Location);
                    }
                });
            });
        });
    }
};
exports.JYArticleService = JYArticleService;
exports.JYArticleService = JYArticleService = JYArticleService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.COSSymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, Object])
], JYArticleService);


/***/ }),

/***/ "../../../libs/v1/biz-services/src/wecom/wecom.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var WecomService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WecomService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const wecom_service_1 = __webpack_require__("../../../libs/v1/biz-services/src/interfaces/wecom/wecom.service.ts");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
let WecomService = WecomService_1 = class WecomService {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(WecomService_1.name);
    }
    send(payload) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!payload) {
                throw new Error('Invalid payload');
            }
            const URL = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${this.config.getEnv('WECOM_HOOK_KEY')}`;
            const { type, data } = payload;
            const sendData = {
                msgtype: type,
            };
            if (type === wecom_service_1.WecomPayloadType.TEMPLATE) {
                if (!data.nodeStatus) {
                    throw new Error('invalid input data');
                }
                const template_card = {
                    card_type: 'text_notice',
                    emphasis_content: {
                        title: data.nodeStatus,
                        desc: data.node,
                    },
                    card_action: {
                        type: 1,
                        url: data.url,
                    },
                };
                if (data.source) {
                    template_card.source = {
                        desc: data.source || 'my.api.webinfra.cloud',
                        desc_color: 0,
                    };
                }
                if (data.title) {
                    template_card.main_title = {
                        title: data.title || '',
                        desc: data.description || '',
                    };
                }
                if (data.list) {
                    template_card.sub_title_text = data.listName;
                    template_card.horizontal_content_list = data.list.map((item) => {
                        return {
                            keyname: item.name,
                            value: item.status,
                        };
                    });
                }
                const repoUrl = (((_a = template_card === null || template_card === void 0 ? void 0 : template_card.card_action) === null || _a === void 0 ? void 0 : _a.url) || '').replace('git://', 'https://');
                template_card.card_action.url = repoUrl;
                sendData.template_card = template_card;
            }
            else {
                this.logger.error('not supported message type');
                throw new Error('Not Supported');
            }
            this.logger.log('[action-wechat-work] Sending message ...');
            yield fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sendData),
            })
                .then(resp => resp.json())
                .then(resp => {
                this.logger.log('[action-wechat-work] request response: ', resp);
            });
        });
    }
};
exports.WecomService = WecomService;
exports.WecomService = WecomService = WecomService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(v1_flowda_services_1.IConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_flowda_services_1.IConfigService !== "undefined" && v1_flowda_services_1.IConfigService) === "function" ? _a : Object])
], WecomService);


/***/ }),

/***/ "../../../libs/v1/biz-services/src/worker/dto/heart.worker.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeartWorkerDto = void 0;
class HeartWorkerDto {
}
exports.HeartWorkerDto = HeartWorkerDto;


/***/ }),

/***/ "../../../libs/v1/biz-services/src/worker/dto/register.worker.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterWorkerDto = void 0;
class RegisterWorkerDto {
}
exports.RegisterWorkerDto = RegisterWorkerDto;


/***/ }),

/***/ "../../../libs/v1/biz-services/src/worker/dto/remove.worker.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveWorkerDto = void 0;
class RemoveWorkerDto {
}
exports.RemoveWorkerDto = RemoveWorkerDto;


/***/ }),

/***/ "../../../libs/v1/biz-services/src/worker/worker.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var WorkerService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const inversify_1 = __webpack_require__("inversify");
const wecom_service_1 = __webpack_require__("../../../libs/v1/biz-services/src/interfaces/wecom/wecom.service.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const crypto_1 = __webpack_require__("crypto");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
let WorkerService = WorkerService_1 = class WorkerService {
    constructor(prisma, config, wecom) {
        this.prisma = prisma;
        this.config = config;
        this.wecom = wecom;
        this.logger = new common_1.Logger(WorkerService_1.name);
        const initStr = this.config.getEnv('WORKER_LIST');
        if (typeof initStr !== 'string') {
            return;
        }
        this.workers =
            initStr
                .split(',')
                .map(url => {
                if (!url)
                    return;
                return {
                    id: (0, crypto_1.randomUUID)(),
                    url,
                    score: 10,
                    uptime: new Date().valueOf(),
                };
            })
                .filter(item => !!item) || [];
        this.workers.map(item => {
            this.pingNode(item === null || item === void 0 ? void 0 : item.url)
                .then(isValid => {
                if (!isValid) {
                    throw new Error('invalid node');
                }
            })
                .catch(err => {
                this.logger.error('test node invalid: ', err);
                this.delWorker(item.id);
            });
        });
    }
    getWorkers() {
        return this.workers;
    }
    getWorker(id) {
        if (typeof id === 'string') {
            return this.workers.find(worker => worker.id === id) || null;
        }
        return null;
    }
    addWorker(worker) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!worker || !(worker === null || worker === void 0 ? void 0 : worker.url)) {
                return null;
            }
            // Check if already exist
            const exist = this.getWorker(worker.id) || ((_a = this.workers) === null || _a === void 0 ? void 0 : _a.find(item => item.url === worker.url));
            if (exist) {
                // TODO: 重新注册，更新uptime
                this.logger.log('existed: ', exist);
                this.notify(exist, 'UPDATE');
                return exist;
            }
            const defaultWokerData = {
                id: (0, crypto_1.randomUUID)(),
                score: 10,
                uptime: new Date().valueOf(),
            };
            // TODO: Ping worker to check if it's valid
            const workerData = Object.assign(defaultWokerData, worker);
            this.workers.push(workerData);
            this.notify(workerData, 'UP');
            return workerData;
        });
    }
    delWorker(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof id !== 'string') {
                return null;
            }
            this.logger.log('remove worker: ', id);
            const target = this.workers.find(worker => (worker === null || worker === void 0 ? void 0 : worker.id) === id);
            this.workers = this.workers.filter(worker => (worker === null || worker === void 0 ? void 0 : worker.id) !== id);
            this.notify(target, 'DOWN');
            return target || null;
        });
    }
    updateWorker(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!data) {
                return null;
            }
            const target = this.workers.find(worker => worker.id === (data === null || data === void 0 ? void 0 : data.id) || worker.url === (data === null || data === void 0 ? void 0 : data.url));
            if (!target) {
                return null;
            }
            Object.assign(target, data);
            if (typeof data.score === 'number' && data.score <= 0) {
                // Down server
                this.delWorker(data.id);
            }
            return target;
        });
    }
    pingNode(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log('ping url: ', url);
            if (!url)
                return;
            return fetch(`${url}/api/ping`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'user-agent': 'chat-node-server',
                },
                body: JSON.stringify({}),
            })
                .then(resp => resp.json())
                .then(resp => {
                var _a, _b;
                console.log(`ping srv done with resp: `, resp);
                if (((_a = resp === null || resp === void 0 ? void 0 : resp.pong) === null || _a === void 0 ? void 0 : _a.serviceId) && ((_b = resp === null || resp === void 0 ? void 0 : resp.pong) === null || _b === void 0 ? void 0 : _b.serviceScore) > 0) {
                    return true;
                }
                return false;
            })
                .catch(err => {
                console.error('ping exception caught: ', err);
                return false;
            });
        });
    }
    notify(target, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!target) {
                return;
            }
            const alertInfo = {
                source: 'my.api.webinfra.cloud',
                title: '节点状态变更通知',
                description: '分布式节点自动寻址服务',
                url: target.url,
                // Changed node info
                nodeStatus: status,
                node: target.id,
                // list info
                listName: '可用节点列表',
                list: this.workers.map(item => ({
                    name: item.id,
                    status: String(item.score),
                })),
            };
            try {
                yield this.wecom.send({
                    type: wecom_service_1.WecomPayloadType.TEMPLATE,
                    data: alertInfo,
                });
            }
            catch (error) {
                this.logger.error('notify exception: ', error);
            }
        });
    }
};
exports.WorkerService = WorkerService;
exports.WorkerService = WorkerService = WorkerService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(v1_flowda_services_1.IConfigService)),
    tslib_1.__param(2, (0, inversify_1.inject)(wecom_service_1.IWecomHookService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof v1_flowda_services_1.IConfigService !== "undefined" && v1_flowda_services_1.IConfigService) === "function" ? _b : Object, typeof (_c = typeof wecom_service_1.IWecomHookService !== "undefined" && wecom_service_1.IWecomHookService) === "function" ? _c : Object])
], WorkerService);


/***/ }),

/***/ "../../../libs/v1/biz-services/src/zhiplus/dto/create.question.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateQuestionDto = void 0;
class CreateQuestionDto {
}
exports.CreateQuestionDto = CreateQuestionDto;


/***/ }),

/***/ "../../../libs/v1/biz-services/src/zhiplus/dto/feed.question.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedQuestionDto = void 0;
class FeedQuestionDto {
}
exports.FeedQuestionDto = FeedQuestionDto;


/***/ }),

/***/ "../../../libs/v1/biz-services/src/zhiplus/zhiplus.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ZhiPlusService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZhiPlusService = void 0;
const tslib_1 = __webpack_require__("tslib");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_services_1 = __webpack_require__("../../../libs/v1/flowda-services/src/index.ts");
const CryptoJS = tslib_1.__importStar(__webpack_require__("crypto-js"));
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let ZhiPlusService = ZhiPlusService_1 = class ZhiPlusService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
        this.logger = new common_1.Logger(ZhiPlusService_1.name);
    }
    generateToken(result) {
        const cipherTxt = CryptoJS.AES.encrypt(JSON.stringify({
            id: result.id,
            openId: result.uid,
            left: result.cnt,
            date: new Date().valueOf(),
        }), this.config.getEnv('CHAT_SALT')).toString();
        return cipherTxt;
    }
    checkLimit(userInfo) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('starting check api limit: ', userInfo);
            if (!(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id)) {
                return {
                    success: false,
                    message: 'user info not found',
                };
            }
            const result = {
                success: false,
            };
            if (!(((_a = userInfo.profile) === null || _a === void 0 ? void 0 : _a.amount) > 0)) {
                // no amount left
                const num = (yield this.prisma.question.count({
                    where: {
                        uid: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
                        createdAt: {
                            lt: new Date(),
                            gt: new Date(new Date().valueOf() - 24 * 60 * 60 * 1000),
                        },
                    },
                })) || 0;
                console.log(`${userInfo === null || userInfo === void 0 ? void 0 : userInfo.id} ctn number: ${num} `);
                if (num > this.config.getEnv('ZHI_CNT_PER_DAY')) {
                    console.log('24 hours throttle is verified', this.config.getEnv('ZHI_CNT_PER_DAY'));
                    result.success = false;
                    result.cnt = 0;
                }
                else {
                    result.success = true;
                    result.cnt = this.config.getEnv('ZHI_CNT_PER_DAY') - num;
                }
            }
            else {
                result.success = true;
                result.cnt = userInfo.profile.amount;
                yield this.updateMount(userInfo.profile.id);
            }
            return result;
        });
    }
    updateMount(profileId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Cnt update
            yield this.prisma.profile.update({
                where: { id: profileId },
                data: {
                    amount: {
                        decrement: 1,
                    },
                },
            });
        });
    }
    createQuestion(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`create question record: ${dto}`);
            const rt = yield this.prisma.question.create({
                data: {
                    uid: dto.customerId,
                    question: dto.question,
                },
            });
            return rt;
        });
    }
    feedQuestion(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`feed question record: ${dto}`);
            const record = yield this.prisma.question.findFirst({
                where: { id: dto.id },
            });
            if (!record) {
                throw new Error('invalid question');
            }
            if (record.uid !== dto.uid) {
                throw new Error('Not owner');
            }
            const rt = yield this.prisma.question.update({
                where: {
                    id: dto.id,
                },
                data: {
                    answer: dto.answer,
                    success: dto.success ? 1 : 0,
                },
            });
            return rt;
        });
    }
};
exports.ZhiPlusService = ZhiPlusService;
exports.ZhiPlusService = ZhiPlusService = ZhiPlusService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(v1_flowda_services_1.IConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof v1_flowda_services_1.IConfigService !== "undefined" && v1_flowda_services_1.IConfigService) === "function" ? _b : Object])
], ZhiPlusService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/legacy-libs.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/utils/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/shared-web/appExceptionFilter.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/config/config.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ConfigService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const env = tslib_1.__importStar(__webpack_require__("dotenv"));
const envalid_1 = __webpack_require__("envalid");
const common_1 = __webpack_require__("@nestjs/common");
env.config();
let ConfigService = ConfigService_1 = class ConfigService {
    constructor() {
        this.logger = new common_1.Logger(ConfigService_1.name);
        this.env = (0, envalid_1.cleanEnv)(process.env, {
            DATABASE_URL: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            SECRET_FOR_LICENSE_TOKEN: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            // secret 不设置默认值，强制配置
            // customer
            customer_access_token_secret: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            customer_refresh_token_secret: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            customer_access_token_expire: (0, envalid_1.num)({ default: 7 * 24 * 60 * 60 }),
            customer_refresh_token_expire: (0, envalid_1.num)({ default: 12 * 30 * 24 * 60 * 60 }),
            // app
            app_access_token_secret: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            app_refresh_token_secret: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            app_access_token_expire: (0, envalid_1.num)({ default: 7 * 24 * 60 * 60 }),
            app_refresh_token_expire: (0, envalid_1.num)({ default: 12 * 30 * 24 * 60 * 60 }),
            app_token_secret: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            // tenant
            tenant_access_token_secret: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            tenant_refresh_token_secret: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('test') }),
            tenant_access_token_expire: (0, envalid_1.num)({ default: 10 * 60 }),
            tenant_refresh_token_expire: (0, envalid_1.num)({ default: 7 * 24 * 60 * 60 }),
            // 以下设置 default，是因为 e2e CI 上不需要强制配置
            // 但是其实生产环境需要设置下
            merchant_serial_no: (0, envalid_1.str)({ default: '' }),
            mchid: (0, envalid_1.str)({ default: '' }),
            'apiclient_key.pem': (0, envalid_1.str)({ default: '' }),
            'apiclient_cert.pem': (0, envalid_1.str)({ default: '' }),
            appid: (0, envalid_1.str)({ default: '' }),
            feishu_mail_account: (0, envalid_1.email)({ default: 'tset@test.com' }),
            feishu_mail_secret: (0, envalid_1.str)({ default: '' }),
            TENCENT_SEC_ID: (0, envalid_1.str)({ default: '' }),
            TENCENT_SEC_KEY: (0, envalid_1.str)({ default: '' }),
            mail_smtp: (0, envalid_1.str)({ default: '' }),
            mail_smtp_port: (0, envalid_1.port)({ default: 0 }),
            mail_account: (0, envalid_1.str)({ default: '' }),
            mail_secret: (0, envalid_1.str)({ default: '' }),
            freecharger_pc_appid: (0, envalid_1.str)({ default: '' }),
            freecharger_pc_appSecret: (0, envalid_1.str)({ default: '' }),
            freecharger_fuwuhao_appid: (0, envalid_1.str)({ default: '' }),
            freecharger_fuwuhao_secret: (0, envalid_1.str)({ default: '' }),
            fuwuhao_state_secret: (0, envalid_1.str)({ default: '' }),
            ZHI_CNT_PER_DAY: (0, envalid_1.str)({ default: 20 }),
            CHAT_SALT: (0, envalid_1.str)({ default: 'CHAT_SALT_STR' }),
            WORKER_LIST: (0, envalid_1.str)({ default: '' }),
            WECOM_HOOK_KEY: (0, envalid_1.str)({ default: 'f392b278-930a-4ccf-81ab-31128d668631' }),
            FLOWDA_URL: (0, envalid_1.str)({ devDefault: (0, envalid_1.testOnly)('http://localhost:3350') }),
        }, {
            reporter: ({ errors, env }) => {
                for (const [envVar, err] of Object.entries(errors)) {
                    if (err instanceof envalid_1.EnvError) {
                        process.exit(1);
                    }
                    else if (err instanceof envalid_1.EnvMissingError) {
                        this.logger.error(`missing ${envVar}`);
                        process.exit(1);
                    }
                    else {
                        process.exit(1);
                    }
                }
            },
        });
    }
    getEnv(key) {
        return this.env[key];
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = ConfigService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], ConfigService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/flowdaInfra.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaInfraModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const mail_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/interfaces/mail/mail.service.ts");
const mail_service_2 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/mail/mail.service.ts");
const config_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/config/config.service.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const config_service_2 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/interfaces/config/config.service.ts");
const legacy_libs_1 = __webpack_require__("../../../libs/v1/flowda-services/src/legacy-libs.ts");
exports.flowdaInfraModule = new inversify_1.ContainerModule((bind) => {
    // 一些切面依赖暂时先放在这，应该放在基础设施层的，不过不强调过分学术的分层
    // 现在分出 domain 层的目标主要是为了解决循环依赖
    bind(mail_service_1.IMailService).to(mail_service_2.MailService).inSingletonScope();
    bind(config_service_2.IConfigService).to(config_service_1.ConfigService).inSingletonScope();
    bind(flowda_shared_1.COSSymbol)
        .toDynamicValue((context) => {
        const config = context.container.get(config_service_2.IConfigService);
        return new legacy_libs_1.COS({
            SecretId: config.getEnv('TENCENT_SEC_ID'),
            SecretKey: config.getEnv('TENCENT_SEC_KEY'),
        });
    })
        .inSingletonScope();
    bind(legacy_libs_1.WechatpayNodeV3Symbol)
        .toDynamicValue((context) => {
        const config = context.container.get(config_service_2.IConfigService);
        return new legacy_libs_1.WechatpayNodeV3({
            appid: config.getEnv('appid'),
            mchid: config.getEnv('mchid'),
            publicKey: Buffer.from(config.getEnv('apiclient_cert.pem'), 'utf-8'),
            privateKey: Buffer.from(config.getEnv('apiclient_key.pem'), 'utf-8'),
        });
    })
        .inSingletonScope();
    bind(legacy_libs_1.WechatpayNodeV3FactorySymbol).toFactory(context => {
        return () => context.container.get(legacy_libs_1.WechatpayNodeV3Symbol);
    });
    bind(legacy_libs_1.WechatOAuthSymbol)
        .toDynamicValue((context) => {
        const config = context.container.get(config_service_2.IConfigService);
        return new legacy_libs_1.WechatOAuth(config.getEnv('freecharger_pc_appid'), config.getEnv('freecharger_pc_appSecret'));
    })
        .inSingletonScope();
    bind(legacy_libs_1.WechatOAuthFactorySymbol).toFactory(context => {
        return () => context.container.get(legacy_libs_1.WechatOAuthSymbol);
    });
});


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/infra/flowdaInfra.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/infra/prismaClientFlowda.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/infra/interfaces/mail/mail.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/infra/interfaces/config/config.service.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/interfaces/config/config.service.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IConfigService = void 0;
exports.IConfigService = Symbol.for('IConfigService');


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/interfaces/mail/mail.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IMailService = void 0;
const tslib_1 = __webpack_require__("tslib");
exports.IMailService = Symbol.for('IMailService');
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/infra/mail/templates/index.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/mail/mail.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var MailService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const tslib_1 = __webpack_require__("tslib");
const nodemailer = tslib_1.__importStar(__webpack_require__("nodemailer"));
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const config_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/interfaces/config/config.service.ts");
const templates_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/mail/templates/index.ts");
let MailService = MailService_1 = class MailService {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(MailService_1.name);
        this.getTransporter = () => {
            return nodemailer.createTransport({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore host 类型在 SMTPTransport 不存在？
                host: this.config.getEnv('mail_smtp'),
                port: this.config.getEnv('mail_smtp_port'),
                secure: true,
                auth: {
                    user: this.config.getEnv('mail_account'),
                    pass: this.config.getEnv('mail_secret'),
                },
            });
        };
    }
    _sendMail(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const transporter = this.getTransporter();
            try {
                // SMTP 发信限制规则
                // 发信频率（调用 SMTP 服务的整体频率）200 封/100 秒
                // 单日发信上限（一个发件人单日发信上限） 450 封
                yield transporter.sendMail(options);
            }
            catch (error) {
                this.logger.error('send mail exception: ', error);
                // TODO: Emergency Alert
            }
        });
    }
    sendLicense(email, license) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`sending license ${email}`);
            const { html, subject } = (0, templates_1.render)('LICENSE', { license });
            yield this._sendMail({
                from: this.config.getEnv('mail_account'),
                to: email,
                subject,
                html,
            });
            // const transporter = this.getTransporter();
            // await transporter.sendMail({
            //   to: email,
            //   from: '"Support Team" <support@webinfra.cloud>',
            //   subject: 'Thank you for buying the nice product!',
            //   text: ' Your license is\n' + license,
            // })
        });
    }
    sendEmail({ email, templateName, params }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`sending email ${email}`);
            const { html, subject } = (0, templates_1.render)(templateName, params);
            yield this._sendMail({
                from: this.config.getEnv('mail_account'),
                to: email,
                subject,
                html,
            });
        });
    }
    legacySendEmail(email, subject, content) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`sending email ${email}`);
            const transporter = nodemailer.createTransport({
                host: 'smtp.feishu.cn',
                port: 465,
                secure: true,
                auth: {
                    user: this.config.getEnv('mail_account'),
                    pass: this.config.getEnv('mail_secret'),
                },
            });
            yield transporter.sendMail({
                to: email,
                from: '"Support Team" <qa@webinfra.cloud>',
                subject: subject,
                text: content,
            });
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = MailService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(config_service_1.IConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_service_1.IConfigService !== "undefined" && config_service_1.IConfigService) === "function" ? _a : Object])
], MailService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/mail/templates/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.render = void 0;
const tslib_1 = __webpack_require__("tslib");
const reader_1 = tslib_1.__importDefault(__webpack_require__("../../../libs/v1/flowda-services/src/infra/mail/templates/reader/index.ts"));
const license_1 = tslib_1.__importDefault(__webpack_require__("../../../libs/v1/flowda-services/src/infra/mail/templates/license/index.ts"));
const templateMap = {
    COLLECT: reader_1.default,
    LICENSE: license_1.default,
};
const render = (name, params) => {
    const templateFn = templateMap[name];
    if (!templateFn) {
        throw new Error(`Email Template(${name}) not found`);
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const render = templateFn.render;
    const html = render(params);
    const subject = templateFn.renderSubject(params);
    return {
        html,
        subject,
    };
};
exports.render = render;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/mail/templates/license/index.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const render = (params) => {
    const { license } = params;
    if (!license) {
        throw new Error('No license for email');
    }
    return `<html>
  <head>
    <title>Email Confirmation</title>

    <style type="text/css">
      @media screen {
        @font-face {
          font-family: 'Source Sans Pro';
          font-style: normal;
          font-weight: 400;
          src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
        }

        @font-face {
          font-family: 'Source Sans Pro';
          font-style: normal;
          font-weight: 700;
          src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
        }
      }

      /**
       * Avoid browser level font resizing.
       * 1. Windows Mobile
       * 2. iOS / OSX
       */
      body,
      table,
      td,
      a {
        -ms-text-size-adjust: 100%;
        /* 1 */
        -webkit-text-size-adjust: 100%;
        /* 2 */
      }

      /**
       * Remove extra space added to tables and cells in Outlook.
       */
      table,
      td {
        mso-table-rspace: 0pt;
        mso-table-lspace: 0pt;
      }

      /**
       * Better fluid images in Internet Explorer.
       */
      img {
        -ms-interpolation-mode: bicubic;
      }

      /**
       * Remove blue links for iOS devices.
       */
      a[x-apple-data-detectors] {
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        color: inherit !important;
        text-decoration: none !important;
      }

      /**
       * Fix centering issues in Android 4.4.
       */
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }

      body {
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      /**
       * Collapse table borders to avoid space between cells.
       */
      table {
        border-collapse: collapse !important;
      }

      a {
        color: #1a82e2;
      }

      img {
        height: auto;
        line-height: 100%;
        text-decoration: none;
        border: 0;
        outline: none;
      }
    </style>

    <style>
      @font-face {
        font-family: 'Open Sans Regular';
        font-style: normal;
        font-weight: 400;
        src: url('chrome-extension://gkkdmjjodidppndkbkhhknakbeflbomf/fonts/open_sans/open-sans-v18-latin-regular.woff');
      }
    </style>
    <style>
      @font-face {
        font-family: 'Open Sans Bold';
        font-style: normal;
        font-weight: 800;
        src: url('chrome-extension://gkkdmjjodidppndkbkhhknakbeflbomf/fonts/open_sans/open-sans-v18-latin-800.woff');
      }
    </style>
    <base target="_blank">
  </head>

  <body style="background-color: #e9ecef;">


    <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
      A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%">

      <tbody>
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
              <tbody>
                <tr>
                  <td align="center" valign="top" style="padding: 36px 24px;">
                    <a href="https://reader.webinfra.cloud" style="display: inline-block;">
                      <img src="data:image/png;base64,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" alt="Logo" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td align="center" bgcolor="#e9ecef">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
              <tbody>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                    <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">请查收您的License</h1>
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
        <tr>
          <td align="center" bgcolor="#e9ecef">

            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">


              <tbody>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                    <p style="margin: 0;">该 license 作为您 FreeSaver 账户的唯一标志，请妥善保管</p>
                  </td>
                </tr>



                <tr>
                  <td align="left" bgcolor="#ffffff">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                              <tbody>
                                <tr>
                                  <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                                    <a style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">
                                    ${license}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                    <p style="margin: 0;">如有遗失，可点击下方链接申请重新生成 license，本邮箱会收到生成新的 license，原 license 则作废</p>
                    <p style="margin: 0;"><a href="https://pay.xiaolizupai.com/?id=hlaemjfdnknpdlpgcpmigacmpieofedl">请至登录界面选择 忘记License</a></p>
                  </td>
                </tr>

                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                    <p style="margin: 0;">Cheers,<br>FreeSaver</p>
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
  </body>

  </html>`;
};
const renderSubject = () => {
    return 'FreeSaver License';
};
exports["default"] = {
    render,
    renderSubject,
};


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/mail/templates/reader/index.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const render = (params) => {
    const { previewUrl, collectionUrl } = params || {};
    return `<html lang="en"><head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }

        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }

        p {
          line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }

        @media (max-width:660px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }

          .icons-inner {
            text-align: center;
          }

          .icons-inner td {
            margin: 0 auto;
          }

          .image_block img.big,
          .row-content {
            width: 100% !important;
          }

          .mobile_hide {
            display: none;
          }

          .stack .column {
            width: 100%;
            display: block;
          }

          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }

          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body style="background-color: #f3f2f3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f2f3;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px;" width="640">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 48px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
    <table border="0" cellpadding="0" cellspacing="0" class="empty_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="pad" style="padding-right:0px;padding-bottom:0px;padding-left:0px;padding-top:33px;">
    <div></div>
    </td>
    </tr>
    </tbody></table>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
    <table border="0" cellpadding="0" cellspacing="0" class="empty_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="pad">
    <div></div>
    </td>
    </tr>
    </tbody></table>
    </td>
    <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 48px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
    <div class="spacer_block" style="height:5px;line-height:5px;font-size:1px;">&hairsp;</div>
    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-2 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:30px;">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&hairsp;</span></td>
    </tr>
    </tbody></table>
    </div>
    </td>
    </tr>
    </tbody></table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tbody><tr>
    <td class="pad" style="padding-bottom:33px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 21.6px; color: #555555; line-height: 1.8;">
    <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 25.2px;"><span style="color:#2a272b;"><strong>FreeSaver</strong></span></p>
    </div>
    </div>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f2f3; color: #000000; width: 640px;" width="640">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <div class="spacer_block" style="height:1px;line-height:1px;font-size:1px;">&hairsp;</div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: url('images/bg-shade.jpg'); background-position: center top; background-repeat: repeat; color: #000000; width: 640px;" width="640">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">

    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-2 mobile_hide" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="pad" style="padding-top:50px;">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&hairsp;</span></td>
    </tr>
    </tbody></table>
    </div>
    </td>
    </tr>
    </tbody></table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tbody><tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
    <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;"><a style="color:#004afd;" href="${previewUrl}"><strong>点击预览</strong></a></p>
    </div>
    </div>
    </td>
    </tr>
    </tbody></table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tbody><tr>
    <td class="pad" style="padding-bottom:15px;padding-left:38px;padding-right:38px;padding-top:20px;">
    </td>
    </tr>
    </tbody></table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tbody><tr>
    <td class="pad" style="padding-bottom:10px;padding-left:38px;padding-right:38px;padding-top:10px;">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
    <p style="margin: 0; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;color:#2a272b;">欢迎使用<strong>FreeSaver</strong>，一键收藏即可分享</span></p>
    <p style="margin: 0; text-align: center; mso-line-height-alt: 24px;"><span style="font-size:16px;color:#2a272b;">再也不用担心收藏夹的网页内容丢失了</span></p>
    <p style="margin: 0; mso-line-height-alt: 18px;">&nbsp;</p>
    </div>
    </div>
    </td>
    </tr>
    </tbody></table>
    <table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="pad" style="text-align:center;">
    <div align="center" class="alignment">
    <a href=${collectionUrl} style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#004afd;border-radius:60px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:12px;padding-bottom:16px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:32px;padding-right:32px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="margin: 0; word-break: break-word; line-height: 32px; color: #fff; text-decoration: none;"><strong>查看收藏列表</strong></span></span></a>
    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
    </div>
    </td>
    </tr>
    </tbody></table>
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody><tr>
    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
    <div align="center" class="alignment" style="line-height:10px"><img alt="Image" class="big" src="data:image/png;base64,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" style="display: block; height: auto; border: 0; width: 640px; max-width: 100%;" title="Image" width="640"></div>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->

    </body></html>
  `;
};
const renderSubject = (params) => {
    return 'FreeSaver 收藏提醒';
};
exports["default"] = {
    render,
    renderSubject,
};


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/infra/prismaClientFlowda.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prismaClientFlowdaModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const prisma = new client_v1_flowda_1.PrismaClient({
// log: ['query', 'info', 'warn', 'error'],
});
exports.prismaClientFlowdaModule = new inversify_1.ContainerModule((bind) => {
    bind(flowda_shared_1.PrismaClientSymbol).toConstantValue(prisma);
});


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/legacy-libs.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COS = exports.WechatpayNodeV3 = exports.advancedFormat = exports.timezone = exports.utc = exports.dayjs = exports.WechatOAuth = exports.cuid = exports.WechatpayNodeV3FactorySymbol = exports.WechatpayNodeV3Symbol = exports.WechatOAuthFactorySymbol = exports.WechatOAuthSymbol = void 0;
const cuid = __webpack_require__("cuid");
exports.cuid = cuid;
const WechatOAuth = __webpack_require__("wechat-oauth");
exports.WechatOAuth = WechatOAuth;
exports.WechatOAuthSymbol = Symbol.for('WechatOAuth');
exports.WechatOAuthFactorySymbol = Symbol.for('WechatOAuthFactory');
const dayjs = __webpack_require__("dayjs");
exports.dayjs = dayjs;
const utc = __webpack_require__("dayjs/plugin/utc");
exports.utc = utc;
const timezone = __webpack_require__("dayjs/plugin/timezone");
exports.timezone = timezone;
const advancedFormat = __webpack_require__("dayjs/plugin/advancedFormat");
exports.advancedFormat = advancedFormat;
const WechatpayNodeV3 = __webpack_require__("wechatpay-node-v3");
exports.WechatpayNodeV3 = WechatpayNodeV3;
exports.WechatpayNodeV3Symbol = Symbol.for('WechatpayNodeV3Symbol');
exports.WechatpayNodeV3FactorySymbol = Symbol.for('WechatpayNodeV3FactorySymbol');
const COS = __webpack_require__("cos-nodejs-sdk-v5");
exports.COS = COS;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const infra_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
let AppService = AppService_1 = class AppService {
    constructor(prisma, config, loggerFactory) {
        this.prisma = prisma;
        this.config = config;
        this.logger = loggerFactory(AppService_1.name);
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const apps = yield this.prisma.app.findMany({ where: { isDeleted: false } });
            return apps.map(app => (Object.assign(Object.assign({}, app), { appToken: this.decode(app.hashedAppToken) })));
        });
    }
    findByTenantId(tenantId) {
        // todo: 租户id
        return this.prisma.app
            .findMany({
            where: {
                tenantId: tenantId,
            },
        })
            .then(list => {
            return list.map((item) => {
                if (item.hashedAppToken) {
                    const token = this.decode(item.hashedAppToken);
                    item.appToken = token;
                }
                return item;
            });
        });
    }
    update(toApp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const app = yield this.prisma.app.update({
                where: {
                    id: toApp.id,
                },
                data: {
                    displayName: toApp.displayName,
                    description: toApp.description,
                },
            });
            return app;
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const app = yield this.prisma.app.findFirst({
                where: {
                    id: id,
                    isDeleted: false,
                },
            });
            if (app === null) {
                return null;
            }
            const nextApp = app;
            nextApp.appToken = this.decode(app.hashedAppToken);
            return nextApp;
        });
    }
    decode(token) {
        if (!token) {
            return null;
        }
        const decode = jwt.verify(token, this.config.getEnv('app_token_secret'));
        return decode.appToken;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = AppService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(infra_1.IConfigService)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof infra_1.IConfigService !== "undefined" && infra_1.IConfigService) === "function" ? _b : Object, Function])
], AppService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/app/appAuth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppAuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const jwt_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/jwt/jwt.service.ts");
const infra_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const authentication_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/authentication.service.ts");
const keymachine_1 = tslib_1.__importDefault(__webpack_require__("keymachine"));
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
let AppAuthService = class AppAuthService extends authentication_service_1.AuthenticationService {
    constructor(identityProvider, jwt, config, mailService, prisma, flowdaTrpc) {
        super(identityProvider, jwt, config, mailService);
        this.identityProvider = identityProvider;
        this.jwt = jwt;
        this.config = config;
        this.mailService = mailService;
        this.prisma = prisma;
        this.flowdaTrpc = flowdaTrpc;
    }
    postConstruct() {
        this.setOptions({
            access_token_secret: this.config.getEnv('app_access_token_secret'),
            refresh_token_secret: this.config.getEnv('app_refresh_token_secret'),
            access_token_expire: this.config.getEnv('app_access_token_expire'),
            refresh_token_expire: this.config.getEnv('app_refresh_token_expire'),
        });
    }
    create(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const randomAppId = this.generateRandomUppercaseLetter(4);
            const randomAppToken = (0, keymachine_1.default)();
            const user = yield this.signup({
                name: randomAppId,
                password: randomAppToken,
                tenantId: dto.tenantId,
            }, dto);
            return {
                id: user.id,
                appId: user.name,
                appToken: randomAppToken, // appToken 虽然是密码，但是需要返回给前台
                displayName: user.displayName,
                description: user.description,
            };
        });
    }
    validate(appId, appToken) {
        const _super = Object.create(null, {
            validateUserReturnTokens: { get: () => super.validateUserReturnTokens }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tokens = yield _super.validateUserReturnTokens.call(this, 'name', appId, appToken);
            return {
                at: tokens.at,
                rt: tokens.rt,
                expireAt: tokens.expireAt,
                app: tokens.user,
            };
        });
    }
    validateV4(appId, appToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tenant = yield this.flowdaTrpc.user.getTenantByName.query({
                tenantName: appId,
            });
            const { at, exp } = this.jwt.generateAccessToken(String(tenant.id), {
                secret: this.options.access_token_secret,
                exp: this.options.access_token_expire,
            });
            return {
                at,
                rt: null,
                app: this.v4ConvertTo(tenant),
                expireAt: exp,
            };
        });
    }
    /**
     * 映射 tenant -> 和原来的 app 表
     * @param tenant
     * @private
     */
    v4ConvertTo(tenant) {
        return {
            id: tenant.id,
            name: tenant.name,
            displayName: tenant.name,
            description: tenant.name,
        };
    }
    getUserV4(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[getUserV4] userId ${userId}`);
            const tenant = yield this.flowdaTrpc.user.getTenant.query({
                tid: Number(userId),
            });
            if (!tenant) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNotFound();
            }
            return this.v4ConvertTo(tenant);
        });
    }
    appRefreshToken(rt) {
        const _super = Object.create(null, {
            refreshToken: { get: () => super.refreshToken }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield _super.refreshToken.call(this, rt);
            return {
                at: ret.at,
                expireAt: ret.expireAt,
                app: ret.user,
            };
        });
    }
    signup(dto, extraFields = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const app = yield this.identityProvider.find({
                name: dto.name,
                tenantId: dto.tenantId,
            });
            if (app) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNameAlreadyExists();
            }
            let hashedPassword = null;
            if (dto.password) {
                // todo: 先不做验证这一步，邮箱需要，但是微信/手机号不需要
                hashedPassword = yield bcrypt.hash(dto.password, 10);
            }
            // const { password, ...rest } = dto // 删除 password
            const a = Object.assign(Object.assign(Object.assign({}, dto), { hashedPassword: hashedPassword, hashedRefreshToken: null, recoveryCode: null, recoveryToken: null }), extraFields);
            const newApp = yield this.identityProvider.create(a);
            return (0, authentication_service_1.excludedIdentity)(newApp);
        });
    }
};
exports.AppAuthService = AppAuthService;
tslib_1.__decorate([
    (0, inversify_1.postConstruct)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppAuthService.prototype, "postConstruct", null);
exports.AppAuthService = AppAuthService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(v1_flowda_types_1.IdentityProviderServiceSymbol)),
    tslib_1.__param(0, (0, inversify_1.named)('app')),
    tslib_1.__param(1, (0, inversify_1.inject)(jwt_service_1.JwtService)),
    tslib_1.__param(2, (0, inversify_1.inject)(infra_1.IConfigService)),
    tslib_1.__param(3, (0, inversify_1.inject)(infra_1.IMailService)),
    tslib_1.__param(4, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(5, (0, inversify_1.inject)(flowda_shared_1.FlowdaTrpcClientSymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_flowda_types_1.IIdentityProviderService !== "undefined" && v1_flowda_types_1.IIdentityProviderService) === "function" ? _a : Object, typeof (_b = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof infra_1.IConfigService !== "undefined" && infra_1.IConfigService) === "function" ? _c : Object, typeof (_d = typeof infra_1.IMailService !== "undefined" && infra_1.IMailService) === "function" ? _d : Object, typeof (_e = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _e : Object, Object])
], AppAuthService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/app/dto/appRegisterRes.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/app/dto/dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCreateDto = exports.AppUpdateDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const class_validator_jsonschema_1 = __webpack_require__("class-validator-jsonschema");
const class_validator_1 = __webpack_require__("class-validator");
const v1_prisma_flowda_1 = __webpack_require__("../../../libs/v1/prisma-flowda/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const appCreateUpdateMeta = {
    extends: 'AppSchema',
    columns: [
        { name: 'displayName' },
        {
            name: 'description',
            column_type: 'textarea',
            validators: [
                {
                    format: '^[\\w.%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
                    message: 'invalid email',
                },
            ],
        },
    ],
};
const AppCreateSchema = v1_prisma_flowda_1.AppSchema.pick({
    displayName: true,
    description: true,
    tenantId: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)(appCreateUpdateMeta),
});
// todo: updateSchema 前端已经不需要，但是 nestjs DTO 暂时还需要
// todo: createZodDto 可以读取 floSchema
const AppUpdateSchema = v1_prisma_flowda_1.AppSchema.pick({
    id: true,
    displayName: true,
    description: true,
})
    .partial()
    .extend({
    __meta: (0, flowda_shared_1.meta)(appCreateUpdateMeta),
});
class AppUpdateDto extends (0, nestjs_zod_1.createZodDto)(AppUpdateSchema) {
}
exports.AppUpdateDto = AppUpdateDto;
// todo: 尽量全部走 zod 定义了，这样 zod 还能前后端 share 类型
// 也就是放弃使用 class validator 了
class AppCreateDto extends (0, nestjs_zod_1.createZodDto)(AppCreateSchema) {
}
exports.AppCreateDto = AppCreateDto;
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_jsonschema_1.JSONSchema)({
        description: 'test',
    }),
    tslib_1.__metadata("design:type", String)
], AppCreateDto.prototype, "displayName", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/authentication.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuthenticationService_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.excludedIdentity = exports.excludedIdentityAndRefreshToken = exports.exclude = exports.AuthenticationService = void 0;
const tslib_1 = __webpack_require__("tslib");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/jwt/jwt.service.ts");
const index_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const keymachine_1 = tslib_1.__importDefault(__webpack_require__("keymachine"));
/**
 * 为了保证 nest module 和 inversify 配合简单，需要将 auth service 降为 base class
 * 新建3个 child 来 bind
 * 但是如果全部用 inverisfy 本质上是想实现：
 * AppController -> @someDecorator('tenant') AuthService -> IdentityProvider<Tenant>
 *   bind(IdentityProvider).to(TenantIdentityProvider).when(request -> request.parent.target === 'tenant')
 * 似乎也有些复杂了。用 child class 直观，代码虽然多了点，但是合理，否则就会有 leaky abstraction
 * 经验总结：先完成任务，再提取（重构），否则写起来畏手畏脚
 *
 *
 * todo: 将 parent class 的某些行为移动到需要的 child class 里
 * 所以还有一种做法是做 composition，但是 identityProvider 需要手动 set property（相当于策略模式）
 * 但是 base class 相对简单，可以认为是重构的第一步。重构需要渐进
 */
let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    constructor(identityProvider, jwt, config, mailService) {
        this.identityProvider = identityProvider;
        this.jwt = jwt;
        this.config = config;
        this.mailService = mailService;
        this.logger = new common_1.Logger(AuthenticationService_1.name);
    }
    setOptions(options) {
        this.options = options;
    }
    signup(dto, extraFields = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({
                name: dto.name,
            });
            if (user) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNameAlreadyExists();
            }
            let hashedPassword = null;
            if (dto.password) {
                // todo: 先不做验证这一步，邮箱需要，但是微信/手机号不需要
                hashedPassword = yield bcrypt.hash(dto.password, 10);
            }
            // const { password, ...rest } = dto // 删除 password
            const a = Object.assign(Object.assign(Object.assign({}, dto), { hashedPassword: hashedPassword, hashedRefreshToken: null, recoveryCode: null, recoveryToken: null }), extraFields);
            const newUser = yield this.identityProvider.create(a);
            return excludedIdentity(newUser);
        });
    }
    validateUser(nameField, name, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.doValidateUser(nameField, name, password);
            return excludedIdentityAndRefreshToken(user);
        });
    }
    validateUserReturnTokens(nameField, name, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.doValidateUser(nameField, name, password);
            const { at, exp } = this.jwt.generateAccessToken(user.id, {
                secret: this.options.access_token_secret,
                exp: this.options.access_token_expire,
            });
            return {
                at,
                rt: user.refreshToken,
                user: excludedIdentityAndRefreshToken(user),
                expireAt: exp,
            };
        });
    }
    /**
     * 由服务端将 jwt 存在 cookie 里（而不是客户端拿到 access token 自己负责存储），适合 web 端应用，API 的话得自己想办法存
     * 但是要处理，跨域 cookie
     * e.g response.setHeader('Set-Cookie', cookie)
     */
    getCookieWithJwtToken(userId) {
        const { at, rt } = this.getTokens(userId);
        return [
            `Authentication=${at}; HttpOnly; Path=/; Max-Age=${this.options.access_token_expire}`,
            `Refresh=${rt}; HttpOnly; Path=/; Max-Age=${this.options.refresh_token_expire}`,
        ];
    }
    getTokens(userId) {
        const { at } = this.jwt.generateAccessToken(userId, {
            secret: this.options.access_token_secret,
            exp: this.options.access_token_expire,
        });
        const { rt } = this.jwt.generateRefreshToken(userId, {
            secret: this.options.refresh_token_secret,
            exp: this.options.refresh_token_expire,
        });
        return { at, rt };
    }
    logout(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.logoutApi(userId);
            return ['Authentication=; HttpOnly; Path=/; Max-Age=0', 'Refresh=; HttpOnly; Path=/; Max-Age=0'];
        });
    }
    getUser(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({ id: userId });
            if (!user) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNotFound();
            }
            return excludedIdentity(user);
        });
    }
    logoutApi(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({ id: userId });
            if (!user) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNotFound();
            }
            const data = Object.assign(Object.assign({}, user), { hashedRefreshToken: null });
            yield this.identityProvider.update(data);
        });
    }
    getAccessTokenSecret() {
        return this.options.access_token_secret;
    }
    doValidateUser(nameField, name, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({
                [nameField]: name,
            });
            if (!user) {
                throw new v1_flowda_types_1.AuthenticationError.UserNamePasswordMismatch();
            }
            // 微信登录可以不用校验密码
            if (password != null) {
                if (!user.hashedPassword) {
                    throw new v1_flowda_types_1.AuthenticationError.NotInitPassword();
                }
                const match = yield bcrypt.compare(password, user.hashedPassword);
                if (!match) {
                    throw new v1_flowda_types_1.AuthenticationError.UserNamePasswordMismatch();
                }
            }
            const { rt } = this.jwt.generateRefreshToken(user.id, {
                secret: this.options.refresh_token_secret,
                exp: this.options.refresh_token_expire,
            });
            const hash = yield bcrypt.hash(rt, 10);
            user.hashedRefreshToken = hash;
            const updatedUser = yield this.identityProvider.update(user);
            // db 不要明文存 refresh token，但是 refresh token 要返回给 client
            return Object.assign(Object.assign({}, user), { refreshToken: rt });
        });
    }
    refreshToken(rt) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let decodedToken;
            try {
                decodedToken = this.jwt.verifyRefreshToken(rt, {
                    secret: this.options.refresh_token_secret,
                });
            }
            catch (error) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidToken();
            }
            const uid = decodedToken.uid;
            const user = yield this.identityProvider.find({ id: uid });
            if (!user) {
                this.logger.error('cannot find uid');
                throw new v1_flowda_types_1.AuthenticationError.InvalidToken();
            }
            if (user.hashedRefreshToken == null) {
                throw new v1_flowda_types_1.AuthenticationError.NullRefreshToken();
            }
            const match = yield bcrypt.compare(rt, user.hashedRefreshToken);
            if (!match) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidToken();
            }
            const { at, exp } = this.jwt.generateAccessToken(user.id, {
                secret: this.options.access_token_secret,
                exp: this.options.access_token_expire,
            });
            return { at, expireAt: exp, user: excludedIdentity(user) };
        });
    }
    generateRecoveryCode(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({
                appId: dto.appId,
                email: dto.email,
            });
            if (!user) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNotFound();
            }
            const recoveryToken = this.jwt.generateRecoveryToken(dto.email, {
                secret: this.options.access_token_secret,
            });
            // token 过长，关联一个 code 发到邮箱里
            const recoveryCode = this.generateRandomUppercaseLetter();
            user.recoveryToken = recoveryToken;
            user.recoveryCode = recoveryCode;
            yield this.identityProvider.update(user);
            yield this.mailService.legacySendEmail(dto.email, 'sdk customer recovery code', recoveryCode);
            return {
                recoveryCode,
            };
        });
    }
    resetPassword(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({
                appId: dto.appId,
                recoveryCode: dto.recoveryCode,
            });
            if (!user) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidRecoveryCode();
            }
            const recoveryToken = user.recoveryToken;
            if (recoveryToken == null) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidRecoveryCode();
            }
            let decodedToken;
            try {
                decodedToken = this.jwt.verifyRecoveryToken(recoveryToken, {
                    secret: this.options.access_token_secret,
                });
            }
            catch (error) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidRecoveryCode();
            }
            if (!decodedToken.verificationToken) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidRecoveryCode();
            }
            const hash = yield bcrypt.hash(dto.password, 10);
            user.hashedPassword = hash;
            user.hashedRefreshToken = null;
            user.recoveryCode = null;
            user.recoveryToken = null;
            yield this.identityProvider.update(user);
            return excludedIdentity(user);
        });
    }
    generateRandomUppercaseLetter(len = 6) {
        return (0, keymachine_1.default)({
            possibility: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            length: len,
            case: 'upper',
        });
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = AuthenticationService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_flowda_types_1.IIdentityProviderService !== "undefined" && v1_flowda_types_1.IIdentityProviderService) === "function" ? _a : Object, typeof (_b = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof index_1.IConfigService !== "undefined" && index_1.IConfigService) === "function" ? _c : Object, typeof (_d = typeof index_1.IMailService !== "undefined" && index_1.IMailService) === "function" ? _d : Object])
], AuthenticationService);
function exclude(clazz, keys) {
    for (const key of keys) {
        delete clazz[key];
    }
    return clazz;
}
exports.exclude = exclude;
function excludedIdentityAndRefreshToken(user) {
    return exclude(user, ['hashedPassword', 'refreshToken', 'hashedRefreshToken', 'recoveryCode', 'recoveryToken']);
}
exports.excludedIdentityAndRefreshToken = excludedIdentityAndRefreshToken;
function excludedIdentity(user) {
    return exclude(user, ['hashedPassword', 'hashedRefreshToken', 'recoveryCode', 'recoveryToken']);
}
exports.excludedIdentity = excludedIdentity;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/dto/generateRecoveryCode.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenerateRecoveryCodeDto = void 0;
class GenerateRecoveryCodeDto {
}
exports.GenerateRecoveryCodeDto = GenerateRecoveryCodeDto;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/dto/resetPassword.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordDto = void 0;
class ResetPasswordDto {
}
exports.ResetPasswordDto = ResetPasswordDto;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/dto/signup.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignupDto = void 0;
class SignupDto {
}
exports.SignupDto = SignupDto;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/dto/supperAdminSignup.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupperAdminSignupDto = void 0;
class SupperAdminSignupDto {
}
exports.SupperAdminSignupDto = SupperAdminSignupDto;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SuperAdminAuthenticationQuery_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuperAdminAuthenticationQuery = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
// todo: 借着创建 super admin 账户，准备重构 authentication
let SuperAdminAuthenticationQuery = SuperAdminAuthenticationQuery_1 = class SuperAdminAuthenticationQuery {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(SuperAdminAuthenticationQuery_1.name);
    }
    mathRoles(roles, tenant) {
        if (tenant.role == null)
            return false;
        if (roles.indexOf('superadmin') > -1)
            return true;
        if (roles.indexOf(tenant.role) > -1)
            return true;
        return false;
    }
    getTenantList() {
        return this.prisma.tenant.findMany();
    }
};
exports.SuperAdminAuthenticationQuery = SuperAdminAuthenticationQuery;
exports.SuperAdminAuthenticationQuery = SuperAdminAuthenticationQuery = SuperAdminAuthenticationQuery_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], SuperAdminAuthenticationQuery);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuperAdminAuthenticationService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
// todo: 借着创建 super admin 账户，准备重构 authentication
let SuperAdminAuthenticationService = class SuperAdminAuthenticationService {
    // todo: 后续换成 zod
    signup(dto, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tenant = yield tx.tenant.findFirst({
                where: {
                    name: dto.username,
                },
            });
            if (tenant) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNameAlreadyExists();
            }
            const hashedPassword = yield bcrypt.hash(dto.password, 10);
            const newTenant = yield tx.tenant.create({
                data: {
                    name: dto.username,
                    hashedPassword: hashedPassword,
                    email: dto.email,
                    role: 'superadmin',
                },
            });
            return newTenant;
        });
    }
};
exports.SuperAdminAuthenticationService = SuperAdminAuthenticationService;
exports.SuperAdminAuthenticationService = SuperAdminAuthenticationService = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], SuperAdminAuthenticationService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.tx.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SuperAdminAuthenticationTx_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuperAdminAuthenticationTx = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const superAdminAuthentication_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.service.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
let SuperAdminAuthenticationTx = SuperAdminAuthenticationTx_1 = class SuperAdminAuthenticationTx {
    constructor(service, prisma, loggerFactory) {
        this.service = service;
        this.prisma = prisma;
        this.logger = loggerFactory(SuperAdminAuthenticationTx_1.name);
    }
    signup(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction(tx => this.service.signup(dto, { tx }));
        });
    }
};
exports.SuperAdminAuthenticationTx = SuperAdminAuthenticationTx;
exports.SuperAdminAuthenticationTx = SuperAdminAuthenticationTx = SuperAdminAuthenticationTx_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(superAdminAuthentication_service_1.SuperAdminAuthenticationService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof superAdminAuthentication_service_1.SuperAdminAuthenticationService !== "undefined" && superAdminAuthentication_service_1.SuperAdminAuthenticationService) === "function" ? _a : Object, typeof (_b = typeof db !== "undefined" && db.PrismaClient) === "function" ? _b : Object, Function])
], SuperAdminAuthenticationTx);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/customer-auth/customerAuth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerAuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const jwt_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/jwt/jwt.service.ts");
const infra_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const authentication_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/authentication.service.ts");
const wxLogin_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/wx-login/wxLogin.service.ts");
const wxFwhLogin_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/wx-login/wxFwhLogin.service.ts");
let CustomerAuthService = class CustomerAuthService extends authentication_service_1.AuthenticationService {
    constructor(identityProvider, jwt, config, mailService, prisma, wxLogin, wxFwhLogin, flowdaTrpc) {
        super(identityProvider, jwt, config, mailService);
        this.identityProvider = identityProvider;
        this.jwt = jwt;
        this.config = config;
        this.mailService = mailService;
        this.prisma = prisma;
        this.wxLogin = wxLogin;
        this.wxFwhLogin = wxFwhLogin;
        this.flowdaTrpc = flowdaTrpc;
    }
    postConstruct() {
        this.setOptions({
            access_token_secret: this.config.getEnv('customer_access_token_secret'),
            refresh_token_secret: this.config.getEnv('customer_refresh_token_secret'),
            access_token_expire: this.config.getEnv('customer_access_token_expire'),
            refresh_token_expire: this.config.getEnv('customer_refresh_token_expire'),
        });
    }
    /**
     * 预注册
     * sdk.register
     */
    preSignup(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // 一个邮箱只能注册一个
            const user = yield this.identityProvider.find(dto);
            if (user) {
                throw new v1_flowda_types_1.AuthenticationError.EmailAlreadyExists();
            }
            const app = yield this.prisma.app.findUniqueOrThrow({ where: { id: dto.appId } });
            const randomCode = this.generateRandomUppercaseLetter();
            yield this.prisma.customerPreSignup.create({
                data: {
                    tenantId: app.tenantId,
                    appId: dto.appId,
                    email: dto.email,
                    verifyCode: randomCode,
                },
            });
            yield this.mailService.legacySendEmail(dto.email, 'sdk customer register verify code', randomCode);
            return {
                verifyCode: randomCode,
            };
        });
    }
    signup(dto, extraFields = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({
                appId: dto.appId,
                name: dto.name,
            });
            if (user) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNameAlreadyExists();
            }
            let hashedPassword = null;
            if (dto.password) {
                // todo: 先不做验证这一步，邮箱需要，但是微信/手机号不需要
                hashedPassword = yield bcrypt.hash(dto.password, 10);
            }
            // const { password, ...rest } = dto // 删除 password
            const app = yield this.prisma.app.findUniqueOrThrow({ where: { id: dto.appId } });
            const a = Object.assign(Object.assign(Object.assign({}, dto), { tenantId: app.tenantId, hashedPassword: hashedPassword, hashedRefreshToken: null, recoveryCode: null, recoveryToken: null }), extraFields);
            const newUser = yield this.identityProvider.create(a);
            return (0, authentication_service_1.excludedIdentity)(newUser);
        });
    }
    verifyAndSignup(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const rt = yield this.prisma.customerPreSignup.findFirst({
                where: {
                    AND: [{ appId: dto.appId }, { email: dto.email }, { verifyCode: dto.verifyCode }],
                },
            });
            if (!rt) {
                throw new v1_flowda_types_1.SdkError.WrongVerifyCode();
            }
            const newUser = yield this.signup({
                appId: dto.appId,
                name: dto.name,
                password: dto.password,
                email: dto.email,
            });
            yield this.prisma.customerPreSignup.delete({
                where: {
                    id: rt.id,
                },
            });
            return newUser;
        });
    }
    validateUser(nameField, appId, name, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.doValidateUserWithApp(nameField, appId, name, password);
            return (0, authentication_service_1.excludedIdentityAndRefreshToken)(user);
        });
    }
    validateUserReturnTokens(nameField, appId, name, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.doValidateUserWithApp(nameField, appId, name, password);
            const { at, exp } = this.jwt.generateAccessToken(user.id, {
                secret: this.options.access_token_secret,
                exp: this.options.access_token_expire,
            });
            return {
                at,
                rt: user.refreshToken,
                user: (0, authentication_service_1.excludedIdentityAndRefreshToken)(user),
                expireAt: exp,
            };
        });
    }
    validateUserReturnTokensV4(nameField, appId, name, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.flowdaTrpc.user.validateByEmail.query({
                tenantId: Number(appId),
                email: name,
                password: password,
            });
            const userRet = yield this.flowdaTrpc.user.findUnique.query({
                email: name,
            });
            if (!userRet) {
                throw new Error('Cannot find user by email ' + name);
            }
            const weixinProfile = yield this.prisma.weixinProfile.findFirst({
                where: {
                    unionid: userRet.unionid,
                },
            });
            return {
                at: '',
                rt: '',
                user: {
                    id: String(userRet.id),
                    name: userRet.username,
                    email: userRet.email,
                    image: userRet.image,
                    weixinProfile,
                },
                expireAt: 0,
            };
        });
    }
    wxValidateUser(code, appId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug('invoke wxValidateUser');
            // appId valite
            if (!appId) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidAppId();
            }
            const ret = yield this.wxLogin.getAccessToken(code);
            const data = ret.data;
            const findCustomerRet = yield this.identityProvider.find({ name: data.unionid + appId, appId });
            let customer;
            if (!findCustomerRet) {
                // 如果不存在则创建
                // 微信注册，只需要 name
                customer = yield this.signup({
                    appId,
                    name: data.unionid + appId,
                });
                const wxUser = yield this.wxLogin.getUser(data.openid, data.access_token);
                const app = yield this.prisma.app.findUniqueOrThrow({ where: { id: appId } });
                // 创建微信信息
                yield this.prisma.weixinProfile.create({
                    data: {
                        tenantId: app.tenantId,
                        unionid: data.unionid,
                        loginOpenid: data.openid,
                        headimgurl: wxUser.headimgurl,
                        nickname: wxUser.nickname,
                        sex: wxUser.sex,
                        customerId: customer.id,
                    },
                });
            }
            else {
                customer = findCustomerRet;
            }
            return this.validateUserReturnTokens('name', appId, customer.name);
        });
    }
    wxValidateUserV4(code, appId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`invoke wxValidateUserV4, appId ${appId}`);
            // appId valite
            if (!appId) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidAppId();
            }
            const ret = yield this.wxLogin.getAccessToken(code);
            const data = ret.data;
            const findCustomerRet = yield this.flowdaTrpc.user.findByUnionIdAndTenantId.query({
                unionid: data.unionid,
                tenantId: Number(appId),
            });
            let customer;
            let weixinProfile;
            if (!findCustomerRet) {
                // 如果不存在则创建
                // 微信注册，只需要 name
                customer = yield this.flowdaTrpc.user.registerByUnionId.mutate({
                    unionid: data.unionid,
                    tenantId: Number(appId),
                });
                const wxUser = yield this.wxLogin.getUser(data.openid, data.access_token);
                // const app = await this.prisma.app.findUniqueOrThrow({ where: { id: appId } })
                // 创建微信信息
                weixinProfile = yield this.prisma.weixinProfile.create({
                    data: {
                        // tenantId: '不填写数据库默认值',
                        unionid: data.unionid,
                        loginOpenid: data.openid,
                        headimgurl: wxUser.headimgurl,
                        nickname: wxUser.nickname,
                        sex: wxUser.sex,
                        customerId: null,
                    },
                });
            }
            else {
                customer = findCustomerRet;
                weixinProfile = yield this.prisma.weixinProfile.findFirst({
                    where: {
                        unionid: data.unionid,
                    },
                });
            }
            return {
                at: '',
                rt: '',
                user: Object.assign(customer, {
                    id: String(customer.id),
                    name: customer.username,
                    weixinProfile,
                }),
                expireAt: 0,
            };
        });
    }
    // 匿名登录 <- name: 匿名token
    // 快捷支付 <- name: openid
    //    1. customer
    //    2. 一笔订单（只考虑了一笔）
    // 以上发生在 merge 之前
    fwhLoginMerge(code, appId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.wxFwhLogin.getAccessTokenByCode(code);
            // 拿到 unionid 和 openid
            // 根据 openid 找到匿名用户
            // 1. 根据 openid 拿 customer 1
            const customerByFwhOpenId = yield this.prisma.customer.findFirst({
                where: {
                    appId,
                    name: ret.openid, // 注意在 queryPayQuick 的时候，已经将 name 改成了 openid
                },
            });
            if (!customerByFwhOpenId) {
                // 1. 没有支付 2. 已经合并(unionid)
                throw new v1_flowda_types_1.WXError.RecoveryNoOrderFound();
            }
            // 2. 再尝试通过 unionid 去拿 customer 2
            const customerByUnionId = yield this.identityProvider.find({ name: ret.unionid, appId });
            // 3. customer 1 \2 合并，customer+  order关联
            if (!customerByUnionId) {
                // 如果不存在，则 name 替换为 unionid
                // TODO: 应该添加 appId 限制
                customerByFwhOpenId.name = ret.unionid;
                yield this.prisma.customer.update({
                    where: {
                        id: customerByFwhOpenId.id,
                    },
                    data: customerByFwhOpenId,
                });
            }
            else {
                // 如果存在，则替换 order 的 customerId， todo 并且废弃掉之前的 customerByFwhOpenId
                yield this.prisma.order.updateMany({
                    where: {
                        customerId: customerByFwhOpenId.id,
                    },
                    data: {
                        customerId: customerByUnionId.id,
                    },
                });
            }
            const customer = yield this.validateUserReturnTokens('name', appId, ret.unionid);
            return customer;
        });
    }
    fwhLogin(code, appId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.wxFwhLogin.getAccessTokenByCode(code);
            const name = ret.unionid || ret.openid; // 如果 unionid 为空，则 fallback 到 openid
            const findCustomerRet = yield this.identityProvider.find({ name: name, appId });
            let customer;
            if (!findCustomerRet) {
                // 如果不存在则创建
                // 微信注册，只需要 name
                customer = yield this.signup({ name, appId });
            }
            else {
                customer = findCustomerRet;
            }
            // 更新微信信息
            const wxUser = yield this.wxLogin.getUser(ret.openid, ret.access_token);
            const app = yield this.prisma.app.findUniqueOrThrow({ where: { id: appId } });
            yield this.prisma.weixinProfile.upsert({
                where: {
                    customerId: customer.id,
                },
                create: {
                    tenantId: app.tenantId,
                    unionid: ret.unionid,
                    loginOpenid: ret.openid,
                    headimgurl: wxUser.headimgurl,
                    nickname: wxUser.nickname,
                    sex: wxUser.sex,
                    customerId: customer.id,
                },
                update: {
                    unionid: ret.unionid,
                    loginOpenid: ret.openid,
                    headimgurl: wxUser.headimgurl,
                    nickname: wxUser.nickname,
                    sex: wxUser.sex,
                },
            });
            return this.validateUserReturnTokens('name', appId, customer.name);
        });
    }
    // 服务号的state校验
    // 可能也要根据app做配置，每个app默认生成一个唯一的secret防止线上用户数据混淆
    validateState(state) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const s = this.config.getEnv('fuwuhao_state_secret');
            return s === state;
        });
    }
    doValidateUserWithApp(nameField, appId, name, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!appId) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidAppId();
            }
            const user = yield this.identityProvider.find({
                [nameField]: name,
                appId,
            });
            if (!user) {
                throw new v1_flowda_types_1.AuthenticationError.UserNamePasswordMismatch();
            }
            // 微信登录可以不用校验密码
            if (password != null) {
                if (!user.hashedPassword) {
                    throw new v1_flowda_types_1.AuthenticationError.NotInitPassword();
                }
                const match = yield bcrypt.compare(password, user.hashedPassword);
                if (!match) {
                    throw new v1_flowda_types_1.AuthenticationError.UserNamePasswordMismatch();
                }
            }
            const { rt } = this.jwt.generateRefreshToken(user.id, {
                secret: this.options.refresh_token_secret,
                exp: this.options.refresh_token_expire,
            });
            const hash = yield bcrypt.hash(rt, 10);
            user.hashedRefreshToken = hash;
            const updatedUser = yield this.identityProvider.update(user);
            // db 不要明文存 refresh token，但是 refresh token 要返回给 client
            return Object.assign(Object.assign({}, user), { refreshToken: rt });
        });
    }
    getUserV4(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userRet = yield this.flowdaTrpc.user.findUnique.query({ id: Number(userId) });
            if (!userRet) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNotFound();
            }
            const weixinProfile = yield this.prisma.weixinProfile.findFirst({
                where: {
                    unionid: userRet.unionid,
                },
            });
            return {
                id: String(userRet.id),
                name: userRet.username,
                email: userRet.email,
                image: userRet.image,
                weixinProfile,
            };
        });
    }
};
exports.CustomerAuthService = CustomerAuthService;
tslib_1.__decorate([
    (0, inversify_1.postConstruct)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CustomerAuthService.prototype, "postConstruct", null);
exports.CustomerAuthService = CustomerAuthService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(v1_flowda_types_1.IdentityProviderServiceSymbol)),
    tslib_1.__param(0, (0, inversify_1.named)('customer')),
    tslib_1.__param(1, (0, inversify_1.inject)(jwt_service_1.JwtService)),
    tslib_1.__param(2, (0, inversify_1.inject)(infra_1.IConfigService)),
    tslib_1.__param(3, (0, inversify_1.inject)(infra_1.IMailService)),
    tslib_1.__param(4, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(5, (0, inversify_1.inject)(wxLogin_service_1.WxLoginService)),
    tslib_1.__param(6, (0, inversify_1.inject)(wxFwhLogin_service_1.WxFwhLoginService)),
    tslib_1.__param(7, (0, inversify_1.inject)(flowda_shared_1.FlowdaTrpcClientSymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_flowda_types_1.IIdentityProviderService !== "undefined" && v1_flowda_types_1.IIdentityProviderService) === "function" ? _a : Object, typeof (_b = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof infra_1.IConfigService !== "undefined" && infra_1.IConfigService) === "function" ? _c : Object, typeof (_d = typeof infra_1.IMailService !== "undefined" && infra_1.IMailService) === "function" ? _d : Object, typeof (_e = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _e : Object, typeof (_f = typeof wxLogin_service_1.WxLoginService !== "undefined" && wxLogin_service_1.WxLoginService) === "function" ? _f : Object, typeof (_g = typeof wxFwhLogin_service_1.WxFwhLoginService !== "undefined" && wxFwhLogin_service_1.WxFwhLoginService) === "function" ? _g : Object, Object])
], CustomerAuthService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/customer-auth/dto/customerEmailSignup.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerEmailSignupDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class CustomerEmailSignupDto {
}
exports.CustomerEmailSignupDto = CustomerEmailSignupDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CustomerEmailSignupDto.prototype, "appId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CustomerEmailSignupDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CustomerEmailSignupDto.prototype, "verifyCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CustomerEmailSignupDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CustomerEmailSignupDto.prototype, "name", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/customer-auth/dto/customerPreSignup.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.customerPreSignupDto = void 0;
class customerPreSignupDto {
}
exports.customerPreSignupDto = customerPreSignupDto;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/customer-auth/dto/customerSignup.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerSignupDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class CustomerSignupDto {
}
exports.CustomerSignupDto = CustomerSignupDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CustomerSignupDto.prototype, "appId", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/customer/customer.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CustomerService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
const dayjs_1 = __webpack_require__("../../../libs/v1/flowda-services/src/utils/dayjs.ts");
let CustomerService = CustomerService_1 = class CustomerService {
    constructor(loggerFactory, prisma) {
        this.prisma = prisma;
        this.logger = loggerFactory(CustomerService_1.name);
    }
    createAnonymous(anonymousCustomerToken, appId, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findRet = yield tx.customer.findFirst({
                where: {
                    appId,
                    name: anonymousCustomerToken,
                },
            });
            if (findRet) {
                throw new v1_flowda_types_1.OrderError.DuplicateAnonymousCustomerToken();
            }
            const app = yield tx.app.findUniqueOrThrow({ where: { id: appId } });
            return tx.customer.create({
                data: {
                    tenantId: app.tenantId,
                    appId,
                    name: anonymousCustomerToken,
                },
            });
        });
    }
    findAll(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('find query: ', query);
            let limit = 100;
            if (query === null || query === void 0 ? void 0 : query.limit) {
                limit = query.limit;
                delete query.limit;
            }
            return this.prisma.customer.findMany({
                where: query,
                take: limit,
            });
        });
    }
    count(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (query === null || query === void 0 ? void 0 : query.limit) {
                delete query.limit;
            }
            return this.prisma.customer.count({
                where: query,
            });
        });
    }
    findbyAppId(appId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!appId) {
                throw new v1_flowda_types_1.AuthenticationError.InvalidAppId();
            }
            return this.prisma.customer.findMany({
                where: { appId },
            });
        });
    }
    /*
      todo: 修改，不要覆盖数据
      直接将匿名账户的 name 改成 openid
      未来合并账户的时候，再改成 unionid
     */
    updateAnonymousToPayOpenId(anonymousCustomerToken, openid, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findRet = yield tx.customer.findFirstOrThrow({
                where: {
                    name: anonymousCustomerToken,
                },
            });
            findRet.name = openid;
            const updateRet = yield tx.customer.update({
                where: { id: findRet.id },
                data: findRet,
                include: {
                    profile: true,
                    weixinProfile: true,
                },
            });
            return updateRet;
        });
    }
    /**
     * 更新用户额度
     * update amount
     */
    amountUpdate(option, { tx }) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log('updating amount: ', option);
            const profile = (_a = option.userInfo) === null || _a === void 0 ? void 0 : _a.profile;
            if (!profile) {
                throw new Error('User has no profile');
            }
            if (profile.expireAt) {
                if (new Date(profile.expireAt).valueOf() < Date.now()) {
                    throw new Error('No valid amount');
                }
            }
            const cnt = option.count || 1;
            const action = option.action || 'decrement';
            if (action === 'decrement') {
                if (profile.amount < cnt) {
                    throw new Error('Reach amount limit');
                }
            }
            else {
                throw new Error('Action not allowed');
            }
            const resp = yield this.updateProfileAmount(profile.id, action, cnt, { tx });
            return Object.assign(Object.assign({}, option.userInfo), { profile: resp });
        });
    }
    // 免费产品直接容易一份到 customer 相当于授权码
    // v1(free saver) 其实是用了 license Code
    // v2 通过登录实现，直接把 authorization code 挂载到 Customer 上
    updateFreeProfile(userId, product, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const prevProfile = yield tx.profile.findUnique({
                where: {
                    customerId: userId,
                },
            });
            // 订阅免费计划，不应该将已有计划清空（如果有的话）
            // TODO: Plan 的情况先不管
            const profile = {
                tenantId: product.tenantId,
                productType: (product === null || product === void 0 ? void 0 : product.productType) || db.ProductType.PLAN,
                plan: v1_flowda_types_1.EPlan.Free,
                amount: product.amount == null ? prevProfile === null || prevProfile === void 0 ? void 0 : prevProfile.amount : product.amount + ((prevProfile === null || prevProfile === void 0 ? void 0 : prevProfile.amount) || 0),
                expireAt: null,
            };
            return tx.customer.update({
                where: {
                    id: userId,
                },
                data: {
                    profile: {
                        upsert: {
                            update: profile,
                            create: profile,
                        },
                    },
                },
                include: {
                    profile: true,
                },
            });
        });
    }
    updatePaidProfile(userId, product, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const prevProfile = yield tx.profile.findUnique({
                where: {
                    customerId: userId,
                },
            });
            const nextProfile = {
                tenantId: product.tenantId,
                productType: product.productType,
                plan: product.plan,
                amount: product.amount == null
                    ? null
                    : product.amount + (prevProfile && prevProfile.amount != null ? prevProfile.amount : 0),
                expireAt: product.validityPeriod != null ? (0, dayjs_1.getTimeByDay)(product.validityPeriod) : null,
            };
            // 更新用户的 plan
            return tx.customer.update({
                where: {
                    id: userId,
                },
                data: {
                    profile: {
                        upsert: {
                            update: nextProfile,
                            create: nextProfile,
                        },
                    },
                },
                include: {
                    profile: true,
                    weixinProfile: true,
                },
            });
        });
    }
    updateProfileAmount(profileId, action, cnt, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Cnt update
            const updated = action === 'decrement'
                ? {
                    decrement: cnt || 1,
                }
                : {
                    increment: cnt || 1,
                };
            const resp = yield tx.profile.update({
                where: { id: profileId },
                data: {
                    amount: updated,
                },
            });
            this.logger.log('update resp: ', resp);
            return resp;
        });
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = CustomerService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object])
], CustomerService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/customer/customer.tx.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CustomerTx_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerTx = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
const customer_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/customer/customer.service.ts");
let CustomerTx = CustomerTx_1 = class CustomerTx {
    constructor(service, prisma, loggerFactory) {
        this.service = service;
        this.prisma = prisma;
        this.logger = loggerFactory(CustomerTx_1.name);
    }
    amountUpdate(option) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction(tx => this.service.amountUpdate(option, { tx }));
        });
    }
};
exports.CustomerTx = CustomerTx;
exports.CustomerTx = CustomerTx = CustomerTx_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(customer_service_1.CustomerService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof customer_service_1.CustomerService !== "undefined" && customer_service_1.CustomerService) === "function" ? _a : Object, typeof (_b = typeof db !== "undefined" && db.PrismaClient) === "function" ? _b : Object, Function])
], CustomerTx);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/customer/dto/customerUpdateAmount.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerUpdateAmountDto = void 0;
class CustomerUpdateAmountDto {
}
exports.CustomerUpdateAmountDto = CustomerUpdateAmountDto;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/flowdaServices.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaServicesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const v1_prisma_flowda_1 = __webpack_require__("../../../libs/v1/prisma-flowda/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const wxPay_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/wx-pay/wxPay.service.ts");
const jwt_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/jwt/jwt.service.ts");
const tenantIdentityProvider_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/identity-provider/tenantIdentityProvider.service.ts");
const appIdentityProvider_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/identity-provider/appIdentityProvider.service.ts");
const customerIdentityProvider_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/identity-provider/customerIdentityProvider.service.ts");
const tenantAuth_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/tenant/tenantAuth.service.ts");
const appAuth_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/app/appAuth.service.ts");
const customerAuth_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/customer-auth/customerAuth.service.ts");
const order_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.service.ts");
const customer_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/customer/customer.service.ts");
const product_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.service.ts");
const wxLogin_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/wx-login/wxLogin.service.ts");
const wxFwhLogin_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/wx-login/wxFwhLogin.service.ts");
const app_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/app/app.service.ts");
const product_query_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.query.ts");
const product_tx_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.tx.ts");
const order_tx_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.tx.ts");
const order_query_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.query.ts");
const customer_tx_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/customer/customer.tx.ts");
const superAdminAuthentication_tx_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.tx.ts");
const superAdminAuthentication_query_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.query.ts");
const superAdminAuthentication_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.service.ts");
const tenant_query_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/tenant/tenant.query.ts");
const schema = tslib_1.__importStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/schema/schema.ts"));
exports.flowdaServicesModule = new inversify_1.ContainerModule((bind) => {
    // const schema = generateSchema()
    bind(flowda_shared_1.PrismaZodSchemaSymbol).toConstantValue(v1_prisma_flowda_1.zt);
    bind(flowda_shared_1.CustomZodSchemaSymbol).toConstantValue(schema);
    // bind(TenantService).toSelf().inRequestScope()
    bind(wxPay_service_1.WxPayService).toSelf().inSingletonScope();
    bind(jwt_service_1.JwtService).toSelf().inSingletonScope();
    bind(wxLogin_service_1.WxLoginService).toSelf().inSingletonScope();
    bind(wxFwhLogin_service_1.WxFwhLoginService).toSelf().inSingletonScope();
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, tenantAuth_service_1.TenantAuthService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, app_service_1.AppService);
    // sdk
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, appAuth_service_1.AppAuthService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, customerAuth_service_1.CustomerAuthService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, order_service_1.OrderService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, order_tx_1.OrderTx);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, order_query_1.OrderQuery);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, customer_service_1.CustomerService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, customer_tx_1.CustomerTx);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, product_service_1.ProductService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, product_query_1.ProductQuery);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, product_tx_1.ProductTx);
    bind(superAdminAuthentication_service_1.SuperAdminAuthenticationService).toSelf().inSingletonScope();
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, superAdminAuthentication_tx_1.SuperAdminAuthenticationTx);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, superAdminAuthentication_query_1.SuperAdminAuthenticationQuery);
    bind(tenant_query_1.TenantQuery).toSelf().inSingletonScope();
    // identity provider
    bind(v1_flowda_types_1.IdentityProviderServiceSymbol)
        .to(tenantIdentityProvider_service_1.TenantIdentityProviderService)
        .whenTargetNamed('tenant');
    bind(v1_flowda_types_1.IdentityProviderServiceSymbol)
        .to(appIdentityProvider_service_1.AppIdentityProviderService)
        .whenTargetNamed('app');
    bind(v1_flowda_types_1.IdentityProviderServiceSymbol)
        .to(customerIdentityProvider_service_1.CustomerIdentityProviderService)
        .whenTargetNamed('customer');
});


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/identity-provider/appIdentityProvider.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppIdentityProviderService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const infra_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
let AppIdentityProviderService = class AppIdentityProviderService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    create(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const hashedAppToken = jwt.sign({
                appId: dto.name,
                appToken: dto.password,
            }, this.config.getEnv('app_token_secret'));
            const user = yield this.prisma.app.create({
                data: {
                    tenantId: dto.tenantId,
                    name: dto.name,
                    hashedAppToken: hashedAppToken,
                    hashedPassword: dto.hashedPassword,
                    hashedRefreshToken: null,
                    displayName: dto.displayName,
                    description: dto.description,
                },
            });
            return user;
        });
    }
    find(query) {
        const or = [];
        if (query.id) {
            or.push({ id: query.id });
        }
        if (query.name) {
            or.push({ name: query.name });
        }
        return this.prisma.app.findFirst({
            where: {
                OR: or,
            },
        });
    }
    update(user) {
        return this.prisma.app.update({
            where: { id: user.id },
            data: user,
        });
    }
};
exports.AppIdentityProviderService = AppIdentityProviderService;
exports.AppIdentityProviderService = AppIdentityProviderService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(infra_1.IConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof infra_1.IConfigService !== "undefined" && infra_1.IConfigService) === "function" ? _b : Object])
], AppIdentityProviderService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/identity-provider/customerIdentityProvider.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerIdentityProviderService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
let CustomerIdentityProviderService = class CustomerIdentityProviderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /*if (!dto.hashedPassword) {
              throw new SdkError.NoPassword()
            }
            if (!dto.email) {
              throw new AuthenticationError.NoEmail()
            }*/
            const user = yield this.prisma.customer.create({
                data: {
                    tenantId: dto.tenantId,
                    appId: dto.appId,
                    name: dto.name,
                    email: dto.email,
                    hashedPassword: dto.hashedPassword,
                    hashedRefreshToken: null,
                },
            });
            return user;
        });
    }
    find(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const appIdQuery = { appId: query.appId };
            const or = [];
            if (query.id) {
                or.push({ id: query.id });
                delete appIdQuery.appId;
            }
            else {
                if (!query.appId) {
                    throw new v1_flowda_types_1.AuthenticationError.InvalidAppId();
                }
            }
            if (query.name) {
                or.push({ name: query.name });
            }
            if (query.email) {
                or.push({ email: query.email });
            }
            if (query.recoveryCode) {
                or.push({ recoveryCode: query.recoveryCode });
            }
            const customer = yield this.prisma.customer.findFirst({
                where: {
                    AND: [appIdQuery, { OR: or }],
                },
                include: {
                    profile: true,
                    weixinProfile: true,
                },
            });
            return customer;
            /*if (customer) {
              const profile = await this.prisma.profile.findUnique({
                where: {
                  customerId: customer.id,
                },
              })
              return {
                ...customer,
                // todo: 增加 e2e test
                profile: profile === null ? undefined : profile, // 必须是 undefined，否则 update 会报错
              }
            } else {
              return null
            }*/
        });
    }
    update(user) {
        const { profile, weixinProfile } = user, customer = tslib_1.__rest(user, ["profile", "weixinProfile"]);
        return this.prisma.customer.update({
            where: { id: user.id },
            data: customer,
        });
    }
};
exports.CustomerIdentityProviderService = CustomerIdentityProviderService;
exports.CustomerIdentityProviderService = CustomerIdentityProviderService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object])
], CustomerIdentityProviderService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/identity-provider/tenantIdentityProvider.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantIdentityProviderService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
let TenantIdentityProviderService = class TenantIdentityProviderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.tenant.create({
                data: {
                    name: dto.name,
                    email: dto.email,
                    hashedPassword: dto.hashedPassword,
                    hashedRefreshToken: null,
                },
            });
            return user;
        });
    }
    find(query) {
        const or = [];
        if (query.id) {
            or.push({ id: query.id });
        }
        if (query.name) {
            or.push({ name: query.name });
        }
        else if (query.email) {
            or.push({ email: query.email });
        }
        return this.prisma.tenant.findFirst({
            where: {
                OR: or,
            },
        });
    }
    update(user) {
        return this.prisma.tenant.update({
            where: { id: user.id },
            data: user,
        });
    }
};
exports.TenantIdentityProviderService = TenantIdentityProviderService;
exports.TenantIdentityProviderService = TenantIdentityProviderService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object])
], TenantIdentityProviderService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/flowdaServices.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/wx-pay/wxPay.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/wx-login/wxLogin.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/wx-login/wxFwhLogin.service.ts"), exports);
// authentication
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/tenant/tenantAuth.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/dto/signup.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/dto/generateRecoveryCode.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/dto/resetPassword.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/customer-auth/dto/customerEmailSignup.dto.ts"), exports);
// tenant
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/tenant/dto/tenantEmailSignup.dto.ts"), exports);
// identity provider
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/identity-provider/tenantIdentityProvider.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/identity-provider/customerIdentityProvider.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/identity-provider/appIdentityProvider.service.ts"), exports);
// sdk
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/app/appAuth.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/customer-auth/customerAuth.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/app/dto/appRegisterRes.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/customer-auth/dto/customerPreSignup.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/customer-auth/dto/customerSignup.dto.ts"), exports);
// sdk order
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.tx.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.query.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrder.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateQuickOrder.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrderInJSAPI.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrderInJSAPIRes.dto.ts"), exports);
// sdk customer
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/customer/customer.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/customer/customer.tx.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/customer/dto/customerUpdateAmount.dto.ts"), exports);
// sdk product
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.query.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.tx.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/product/dto/sdkProductCreateManyItem.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/wx-login/wxLogin.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/app/app.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/app/dto/dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.query.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/superAdminAuthentication.tx.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/dto/supperAdminSignup.dto.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/jwt/jwt.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const index_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
let JwtService = class JwtService {
    constructor(config) {
        this.config = config;
    }
    generateAccessToken(userId, options) {
        const payload = {
            uid: userId,
        };
        const token = jwt.sign(payload, options.secret, {
            expiresIn: `${options.exp}s`,
        });
        const decode = jwt.decode(token);
        return {
            at: token,
            iat: decode.iat,
            exp: decode.exp,
        };
    }
    generateRefreshToken(userId, options) {
        const payload = {
            uid: userId,
        };
        const token = jwt.sign(payload, options.secret, {
            expiresIn: `${options.exp}s`,
        });
        const decode = jwt.decode(token);
        return {
            rt: token,
            iat: decode.iat,
            exp: decode.exp,
        };
    }
    verifyRefreshToken(rt, options) {
        return jwt.verify(rt, options.secret);
    }
    generateRecoveryToken(email, options) {
        const recoveryToken = jwt.sign({
            email: email,
            verificationToken: true,
            exp: Math.floor(Date.now() / 1000) + 30 * 60, // 30 分钟过期
        }, options.secret);
        return recoveryToken;
    }
    verifyRecoveryToken(at, options) {
        return jwt.verify(at, options.secret);
    }
};
exports.JwtService = JwtService;
exports.JwtService = JwtService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(index_1.IConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof index_1.IConfigService !== "undefined" && index_1.IConfigService) === "function" ? _a : Object])
], JwtService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrder.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkCreateOrderDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class SdkCreateOrderDto {
}
exports.SdkCreateOrderDto = SdkCreateOrderDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '产品 id',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SdkCreateOrderDto.prototype, "productId", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrderInJSAPI.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkCreateOrderInJSAPIDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const sdkCreateOrder_dto_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrder.dto.ts");
class SdkCreateOrderInJSAPIDto extends sdkCreateOrder_dto_1.SdkCreateOrderDto {
}
exports.SdkCreateOrderInJSAPIDto = SdkCreateOrderInJSAPIDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'jsapi 支付需要的 openid',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SdkCreateOrderInJSAPIDto.prototype, "openid", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrderInJSAPIRes.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkCreateOrderInJSAPIResDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const sdkCreateOrderRes_dto_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrderRes.dto.ts");
class SdkCreateOrderInJSAPIResDto extends sdkCreateOrderRes_dto_1.SdkCreateOrderBaseResDto {
}
exports.SdkCreateOrderInJSAPIResDto = SdkCreateOrderInJSAPIResDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'prepay_id',
    }),
    tslib_1.__metadata("design:type", Object)
], SdkCreateOrderInJSAPIResDto.prototype, "wxRet", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrderRes.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkCreateOrderResDto = exports.SdkCreateOrderBaseResDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class SdkCreateOrderBaseResDto {
}
exports.SdkCreateOrderBaseResDto = SdkCreateOrderBaseResDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '返回订单信息',
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof client_v1_flowda_1.Order !== "undefined" && client_v1_flowda_1.Order) === "function" ? _a : Object)
], SdkCreateOrderBaseResDto.prototype, "order", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '返回消费者信息',
    }),
    tslib_1.__metadata("design:type", Object)
], SdkCreateOrderBaseResDto.prototype, "customer", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '返回产品的快照信息',
    }),
    tslib_1.__metadata("design:type", typeof (_c = typeof client_v1_flowda_1.ProductSnapshot !== "undefined" && client_v1_flowda_1.ProductSnapshot) === "function" ? _c : Object)
], SdkCreateOrderBaseResDto.prototype, "productSnapshot", void 0);
class SdkCreateOrderResDto extends SdkCreateOrderBaseResDto {
}
exports.SdkCreateOrderResDto = SdkCreateOrderResDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '返回支付二维码链接',
    }),
    tslib_1.__metadata("design:type", String)
], SdkCreateOrderResDto.prototype, "codeUrl", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateQuickOrder.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkCreateQuickOrderDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const sdkCreateOrder_dto_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/dto/sdkCreateOrder.dto.ts");
class SdkCreateQuickOrderDto extends sdkCreateOrder_dto_1.SdkCreateOrderDto {
}
exports.SdkCreateQuickOrderDto = SdkCreateQuickOrderDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: '快捷创建需要客户端提供一个匿名 Token',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SdkCreateQuickOrderDto.prototype, "anonymousCustomerToken", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/order.query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var OrderQuery_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderQuery = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const authentication_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/authentication.service.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
let OrderQuery = OrderQuery_1 = class OrderQuery {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(OrderQuery_1.name);
    }
    query(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.prisma.order.findMany({
                where: { id: orderId },
                include: {
                    customer: true,
                    productSnapshots: true,
                },
            });
            return ret.map(item => (Object.assign(Object.assign({}, item), { customer: (0, authentication_service_1.excludedIdentity)(item.customer) })));
        });
    }
    findAll(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('find all order: ', query);
            let limit = 100;
            if (query === null || query === void 0 ? void 0 : query.limit) {
                limit = query.limit;
                delete query.limit;
            }
            const ret = yield this.prisma.order.findMany({
                where: query || {},
                take: limit,
                include: {
                    customer: true,
                    productSnapshots: false,
                },
            });
            return ret;
        });
    }
    count(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (query === null || query === void 0 ? void 0 : query.limit) {
                delete query.limit;
            }
            return this.prisma.order.count({
                where: query,
            });
        });
    }
    queryOrderHistory(customerId, productId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.prisma.order.findMany({
                where: {
                    customerId,
                },
                include: {
                    productSnapshots: true,
                },
            });
            if (!productId) {
                return orders;
            }
            return orders
                .map(orderData => {
                const pid = orderData.productSnapshots[0].productId;
                if (pid === productId) {
                    return orderData;
                }
                return null;
            })
                .filter(item => !!item);
        });
    }
};
exports.OrderQuery = OrderQuery;
exports.OrderQuery = OrderQuery = OrderQuery_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], OrderQuery);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/order.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var OrderService_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = exports.Serial_Max = exports.Serial_Min = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
const wxPay_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/wx-pay/wxPay.service.ts");
const authentication_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/authentication.service.ts");
const product_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.service.ts");
const customer_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/customer/customer.service.ts");
const product_query_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.query.ts");
const order_query_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.query.ts");
exports.Serial_Min = 10001;
exports.Serial_Max = 99999;
let OrderService = OrderService_1 = class OrderService {
    constructor(wxPayService, productService, productQuery, orderQuery, customerService, loggerFactory) {
        this.wxPayService = wxPayService;
        this.productService = productService;
        this.productQuery = productQuery;
        this.orderQuery = orderQuery;
        this.customerService = customerService;
        this.logger = loggerFactory(OrderService_1.name);
    }
    create(user, dto, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`creating order: `, user.id, dto.productId);
            const { product, productSnapshot, order } = yield this.doCreate(user.id, dto.productId, { tx });
            const profile = yield tx.profile.findUnique({ where: { customerId: user.id } });
            this.logger.log(`profile `, profile);
            // 检查限购情况
            if (product.restricted) {
                const purchased = yield this.orderQuery.queryOrderHistory(user.id, product.id);
                if ((purchased === null || purchased === void 0 ? void 0 : purchased.length) > 0) {
                    throw new v1_flowda_types_1.OrderError.PurchaseReactedRestrictedLimit();
                }
            }
            // 免费产品
            if (productSnapshot.snapshotPrice.toNumber() === 0) {
                const { updatedOrder, customer } = yield this.processFreeOrder(order.id, user.id, profile, product, { tx });
                return {
                    order: updatedOrder,
                    customer: (0, authentication_service_1.excludedIdentity)(customer),
                    productSnapshot,
                    codeUrl: '',
                };
            }
            else {
                // // 购买付费产品后，不要重复购买，这块逻辑先丑一点挡一下
                // if (profile && profile.plan === EPlan.VIP) {
                //   throw new OrderError.CannotPayVIPIfPaid()
                // }
                // 发起微信支付
                this.logger.log(`product price ${productSnapshot.snapshotPrice}, call wechat pay`);
                const wxRet = yield this.wxPayService.transactionsNative(order.id, product.name, productSnapshot.snapshotPrice.toNumber());
                const { updatedOrder, customer } = yield this.processPaidOrder(order.id, user, { tx });
                return {
                    order: updatedOrder,
                    customer: (0, authentication_service_1.excludedIdentity)(customer),
                    productSnapshot,
                    codeUrl: wxRet.code_url,
                };
            }
        });
    }
    /**
     * 在 JSAPI 场景，即微信端创建支付订单
     */
    createJSAPI(user, dto, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { product, productSnapshot, order } = yield this.doCreate(user.id, dto.productId, { tx });
            const profile = yield tx.profile.findUnique({ where: { customerId: user.id } });
            // 检查限购情况
            if (product.restricted) {
                const purchased = yield this.orderQuery.queryOrderHistory(user.id, product.id);
                if ((purchased === null || purchased === void 0 ? void 0 : purchased.length) > 0) {
                    throw new v1_flowda_types_1.OrderError.PurchaseReactedRestrictedLimit();
                }
            }
            // 免费产品
            if (productSnapshot.snapshotPrice.toNumber() === 0) {
                const { updatedOrder, customer } = yield this.processFreeOrder(order.id, user.id, profile, product, { tx });
                return {
                    order: updatedOrder,
                    customer: (0, authentication_service_1.excludedIdentity)(customer),
                    productSnapshot,
                };
            }
            else {
                // 购买付费产品后，不要重复购买，这块逻辑先丑一点挡一下
                // if (profile && profile.plan === EPlan.VIP) {
                //   throw new OrderError.CannotPayVIPIfPaid()
                // }
                // 发起微信支付
                this.logger.log(`product price ${productSnapshot.snapshotPrice}, call wechat jsapi pay`);
                const wxRet = yield this.wxPayService.transactionsJSAPI(dto.openid, order.id, product.name, productSnapshot.snapshotPrice.toNumber());
                const { updatedOrder, customer } = yield this.processPaidOrder(order.id, user, { tx });
                return {
                    order: updatedOrder,
                    customer: (0, authentication_service_1.excludedIdentity)(customer),
                    productSnapshot,
                    wxRet,
                };
            }
        });
    }
    /*
       - 这个方法就非常复杂，还涉及到了 private methods，就很难 test
       - 但是如果内聚了，还真容易出现这种情况
       - 那还是通过 jest 的 spyOn，拿到 instance 后 mock 相应的 method 吧
       */
    doCreate(customerId, productId, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`${customerId} creating order of product: ${productId} `);
            const order = yield this.createOrder(customerId, { tx });
            const { product, snapshot } = yield this.productService.createProductSnapshot(productId, order.id, { tx });
            return {
                order,
                product: product,
                productSnapshot: snapshot,
            };
        });
    }
    createOrder(customerId, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const last = yield tx.order.findFirst({
                orderBy: [
                    {
                        createdAt: 'desc',
                    },
                ],
            });
            let serial;
            if (last == null || last.serial >= exports.Serial_Max) {
                serial = exports.Serial_Min;
            }
            else {
                serial = last.serial + 1;
            }
            const customer = yield tx.customer.findUniqueOrThrow({ where: { id: customerId } });
            const order = yield tx.order.create({
                data: {
                    tenantId: customer.tenantId,
                    appId: customer.appId,
                    customerId,
                    status: db.OrderStatus.INITIALIZED,
                    serial: serial,
                },
            });
            this.logger.log(`order created: ${order.id}`);
            return Object.assign(Object.assign({}, order), { serial });
        });
    }
    createQuick(appId, dto, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const anonymous = yield this.customerService.createAnonymous(dto.anonymousCustomerToken, appId, { tx });
            return this.create(anonymous, dto, { tx });
        });
    }
    queryPayQuick(anonymousCustomerToken, orderId, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findRet = yield tx.customer.findFirstOrThrow({
                where: { name: anonymousCustomerToken },
            });
            // todo: 怎么出现了两次 queryPay???
            const ret = yield this.queryPay(findRet.id, orderId, { tx });
            const openid = ret.payQueryRet.payer.openid;
            const updateRet = yield this.customerService.updateAnonymousToPayOpenId(anonymousCustomerToken, openid, { tx });
            return this.queryPay(updateRet.id, orderId, { tx });
        });
    }
    queryPay(userId, orderId, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { order, payQueryRet } = yield this.doQueryPay(orderId, { tx });
            if (order.customerId !== userId) {
                throw new v1_flowda_types_1.OrderError.OrderCustomerIdNotMatch(); // todo: 这块应该属于 authorization
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore todo 删除 order 关联的 customer 信息，主要是调用的是 legacyQuery，等待重构
            delete order.customer;
            // todo: 后续重构成 productSnapshot 和 order 1-1，暂时先取第一个
            const productId = order.productSnapshots[0].productId;
            const product = yield this.productQuery.findById(productId);
            const customer = yield this.customerService.updatePaidProfile(userId, product, { tx });
            return {
                order,
                payQueryRet,
                customer: Object.assign(Object.assign({}, (0, authentication_service_1.excludedIdentity)(customer)), { profile: customer.profile === null ? undefined : customer.profile }),
            };
        });
    }
    // todo: 将 domain 层的几个函数上移到 service 层，这样便于依赖注入
    doQueryPay(orderId, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`querying orderId ${orderId} ...`);
            const order = yield tx.order.findFirstOrThrow({
                where: { id: orderId },
                include: {
                    customer: true,
                    productSnapshots: true,
                },
            });
            this.logger.log(`order found ${order.id} query request to wx`);
            const payQueryRet = yield this.wxPayService.query(orderId);
            this.logger.log(`order query response from wx ${payQueryRet === null || payQueryRet === void 0 ? void 0 : payQueryRet.trade_state}`);
            if (payQueryRet.status !== 200 || payQueryRet.trade_state !== 'SUCCESS') {
                throw new v1_flowda_types_1.OrderError.PayQueryStatusNotOk(payQueryRet);
            }
            this.logger.log(`order query success`);
            // 创建支付关联订单
            yield tx.pay.upsert({
                where: {
                    orderId: orderId,
                },
                create: {
                    tenantId: order.tenantId,
                    status: db.PayStatus.PAIED,
                    orderId: orderId,
                    transactionId: payQueryRet.transaction_id,
                },
                update: {
                    status: db.PayStatus.PAIED,
                    transactionId: payQueryRet.transaction_id,
                },
            });
            return {
                order: Object.assign(Object.assign({}, order), { customer: (0, authentication_service_1.excludedIdentity)(order.customer) }),
                payQueryRet,
            };
        });
    }
    processPaidOrder(orderId, user, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updatedOrder = yield tx.order.update({
                where: { id: orderId },
                data: { status: db.OrderStatus.PAY_ASSOCIATED },
            });
            this.logger.log(`order ${orderId} update to status ${db.OrderStatus.PAY_ASSOCIATED}`);
            const customer = yield tx.customer.findFirstOrThrow({
                where: {
                    id: user.id,
                },
            });
            return { updatedOrder, customer };
        });
    }
    processFreeOrder(orderId, userId, profile, product, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // // 购买免费产品之后，可以购买付费产品，但是购买了付费产品，不能再购买免费产品，
            // // 这块逻辑先丑一点挡一下
            // if (profile && profile.plan === EPlan.VIP) {
            //   throw new OrderError.CannotPayFreeIfPaid()
            // }
            this.logger.log(`product is free, create order status ${db.OrderStatus.FREE_DEAL}`);
            const updatedOrder = yield tx.order.update({
                where: { id: orderId },
                data: { status: db.OrderStatus.FREE_DEAL },
            });
            const customer = yield this.customerService.updateFreeProfile(userId, product, { tx });
            return { updatedOrder, customer };
        });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = OrderService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(wxPay_service_1.WxPayService)),
    tslib_1.__param(1, (0, inversify_1.inject)(product_service_1.ProductService)),
    tslib_1.__param(2, (0, inversify_1.inject)(product_query_1.ProductQuery)),
    tslib_1.__param(3, (0, inversify_1.inject)(order_query_1.OrderQuery)),
    tslib_1.__param(4, (0, inversify_1.inject)(customer_service_1.CustomerService)),
    tslib_1.__param(5, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof wxPay_service_1.WxPayService !== "undefined" && wxPay_service_1.WxPayService) === "function" ? _a : Object, typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _b : Object, typeof (_c = typeof product_query_1.ProductQuery !== "undefined" && product_query_1.ProductQuery) === "function" ? _c : Object, typeof (_d = typeof order_query_1.OrderQuery !== "undefined" && order_query_1.OrderQuery) === "function" ? _d : Object, typeof (_e = typeof customer_service_1.CustomerService !== "undefined" && customer_service_1.CustomerService) === "function" ? _e : Object, Function])
], OrderService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/order/order.tx.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var OrderTx_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderTx = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const order_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/order/order.service.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
let OrderTx = OrderTx_1 = class OrderTx {
    constructor(prisma, service, loggerFactory) {
        this.prisma = prisma;
        this.service = service;
        this.logger = loggerFactory(OrderTx_1.name);
    }
    create(user, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.service.create(user, dto, { tx }); }));
        });
    }
    createJSAPI(user, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.service.createJSAPI(user, dto, { tx }); }));
        });
    }
    createQuick(appId, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.service.createQuick(appId, dto, { tx }); }));
        });
    }
    queryPay(userId, orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.service.queryPay(userId, orderId, { tx }); }));
        });
    }
    queryPayQuick(anonymousCustomerToken, orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.service.queryPayQuick(anonymousCustomerToken, orderId, { tx }); }));
        });
    }
    doQueryPay(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.service.doQueryPay(orderId, { tx }); }));
        });
    }
    createOrder(customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.service.createOrder(customerId, { tx }); }));
        });
    }
};
exports.OrderTx = OrderTx;
exports.OrderTx = OrderTx = OrderTx_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(order_service_1.OrderService)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _b : Object, Function])
], OrderTx);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/product/dto/sdkProductCreateManyItem.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkProductCreateManyItemDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class SdkProductCreateManyItemDto {
}
exports.SdkProductCreateManyItemDto = SdkProductCreateManyItemDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SdkProductCreateManyItemDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], SdkProductCreateManyItemDto.prototype, "price", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SdkProductCreateManyItemDto.prototype, "productType", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/product/product.query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProductQuery_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductQuery = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
let ProductQuery = ProductQuery_1 = class ProductQuery {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(ProductQuery_1.name);
    }
    findAll(appId) {
        return this.prisma.product.findMany({
            where: {
                appId,
            },
        });
    }
    findAllByAppName(appName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const app = yield this.prisma.app.findFirstOrThrow({
                where: {
                    name: appName,
                },
            });
            return this.prisma.product.findMany({
                where: {
                    appId: app.id,
                },
            });
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.product.findUniqueOrThrow({
                where: { id },
            });
        });
    }
};
exports.ProductQuery = ProductQuery;
exports.ProductQuery = ProductQuery = ProductQuery_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_v1_flowda_1.PrismaClient !== "undefined" && client_v1_flowda_1.PrismaClient) === "function" ? _a : Object, Function])
], ProductQuery);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/product/product.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProductService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
let ProductService = ProductService_1 = class ProductService {
    constructor(loggerFactory) {
        this.logger = loggerFactory(ProductService_1.name);
    }
    createManyProducts(appId, list, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // todo: 根据 appId -> tenantId
            const app = yield tx.app.findUniqueOrThrow({ where: { id: appId } });
            const data = list.map(item => (Object.assign(Object.assign({}, item), { tenantId: app.tenantId, appId: appId, productType: item.productType, restricted: item.restricted || 0, 
                // 以下是为了处理 prisma null
                amount: item.amount === undefined ? null : item.amount, plan: item.plan === undefined ? null : item.plan, extendedDescriptionData: item.extendedDescriptionData, fileSize: item.fileSize === undefined ? null : item.fileSize, storeDuration: item.storeDuration === undefined ? null : item.storeDuration, hasAds: item.hasAds === undefined ? null : item.hasAds, tecSupport: item.tecSupport === undefined ? null : item.tecSupport, validityPeriod: null })));
            yield tx.product.createMany({ data });
            return tx.product.findMany({
                where: {
                    appId: appId,
                },
            });
        });
    }
    mapToProduct(appId, product) {
        const data = Object.assign(Object.assign({ appId: appId }, product), { productType: product.productType, 
            // 以下是为了处理 prisma null
            amount: product.amount === undefined ? null : product.amount, plan: product.plan === undefined ? null : product.plan, fileSize: product.fileSize === undefined ? null : product.fileSize, storeDuration: product.storeDuration === undefined ? null : product.storeDuration, hasAds: product.hasAds === undefined ? null : product.hasAds, tecSupport: product.tecSupport === undefined ? null : product.tecSupport });
        return data;
    }
    createProductSnapshot(productId, orderId, { tx }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const p = yield tx.product.findFirstOrThrow({
                where: {
                    id: productId,
                },
            });
            const snapshot = {
                snapshotPrice: p.price,
                orderId: orderId,
                productId: p.id,
                tenantId: p.tenantId,
            };
            const snapshotRet = yield tx.productSnapshot.create({ data: snapshot });
            return {
                product: p,
                snapshot: snapshotRet,
            };
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = ProductService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], ProductService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/product/product.tx.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProductTx_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductTx = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
const product_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/product/product.service.ts");
let ProductTx = ProductTx_1 = class ProductTx {
    constructor(prisma, productService, loggerFactory) {
        this.prisma = prisma;
        this.productService = productService;
        this.logger = loggerFactory(ProductTx_1.name);
    }
    createManyProducts(appId, list) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.productService.createManyProducts(appId, list, { tx }); }));
        });
    }
};
exports.ProductTx = ProductTx;
exports.ProductTx = ProductTx = ProductTx_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(product_service_1.ProductService)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _b : Object, Function])
], ProductTx);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/schema/schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// https://github.com/omar-dulaimi/prisma-trpc-generator
// https://github.com/macstr1k3r/trpc-nestjs-adapter
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderResourceSchema = exports.ProfileResourceSchema = exports.WeixinProfileResourceSchema = exports.CustomerResourceSchema = exports.AppResourceSchema = exports.ProductSnapshotResourceSchema = exports.ProductResourceSchema = void 0;
const zod_1 = __webpack_require__("zod");
const v1_prisma_flowda_1 = __webpack_require__("../../../libs/v1/prisma-flowda/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
// __meta 得增加 extend，去拿 openapi 定义
exports.ProductResourceSchema = v1_prisma_flowda_1.ProductWithRelationsSchema.omit({
    fileSize: true,
    storeDuration: true,
    // todo: buildYup 兼容性有点差
    // price: true, // oneOf 这种挂
    extendedDescriptionData: true,
    app: true,
    isDeleted: true,
}).extend({
    // motor-admin schema
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ProductSchema',
    }),
});
exports.ProductSnapshotResourceSchema = v1_prisma_flowda_1.ProductSnapshotWithRelationsSchema.omit({}).extend({
    // motor-admin schema
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ProductSnapshotSchema',
    }),
});
exports.AppResourceSchema = v1_prisma_flowda_1.AppWithRelationsSchema.pick({
    id: true,
    name: true,
    displayName: true,
    description: true,
    products: true,
    orders: true,
    customers: true,
}).extend({
    appToken: zod_1.z.string().nullable().openapi({ title: '应用 Token', access_type: 'read_only' }),
    __meta: (0, flowda_shared_1.meta)({
        extends: 'AppSchema',
    }),
});
exports.CustomerResourceSchema = v1_prisma_flowda_1.CustomerWithRelationsSchema.omit({
    legacyProfile: true,
    hashedPassword: true,
    hashedRefreshToken: true,
    recoveryCode: true,
    recoveryToken: true,
    app: true,
    isDeleted: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'CustomerSchema',
    }),
});
exports.WeixinProfileResourceSchema = v1_prisma_flowda_1.WeixinProfileWithRelationsSchema.omit({
    customerId: true,
    customer: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'WeixinProfileSchema',
    }),
});
exports.ProfileResourceSchema = v1_prisma_flowda_1.ProfileWithRelationsSchema.omit({
    customerId: true,
    customer: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ProfileSchema',
    }),
});
exports.OrderResourceSchema = v1_prisma_flowda_1.OrderWithRelationsSchema.omit({
    customer: true,
    status: true,
    isDeleted: true,
    productSnapshots: true,
    pay: true,
    App: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'OrderSchema',
    }),
});


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/tenant/dto/tenantEmailSignup.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantEmailSignupDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
class TenantEmailSignupDto {
}
exports.TenantEmailSignupDto = TenantEmailSignupDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], TenantEmailSignupDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], TenantEmailSignupDto.prototype, "verifyCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], TenantEmailSignupDto.prototype, "password", void 0);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/tenant/tenant.query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantQuery = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
let TenantQuery = class TenantQuery {
};
exports.TenantQuery = TenantQuery;
exports.TenantQuery = TenantQuery = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], TenantQuery);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/tenant/tenantAuth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantAuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-v1-flowda"));
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/jwt/jwt.service.ts");
const index_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
const authentication_service_1 = __webpack_require__("../../../libs/v1/flowda-services/src/services/authentication/authentication.service.ts");
let TenantAuthService = class TenantAuthService extends authentication_service_1.AuthenticationService {
    constructor(identityProvider, jwt, config, mailService, prisma) {
        super(identityProvider, jwt, config, mailService);
        this.identityProvider = identityProvider;
        this.jwt = jwt;
        this.config = config;
        this.mailService = mailService;
        this.prisma = prisma;
    }
    postConstruct() {
        this.setOptions({
            access_token_secret: this.config.getEnv('tenant_access_token_secret'),
            refresh_token_secret: this.config.getEnv('tenant_refresh_token_secret'),
            access_token_expire: this.config.getEnv('tenant_access_token_expire'),
            refresh_token_expire: this.config.getEnv('tenant_refresh_token_expire'),
        });
    }
    /**
     * 预注册
     * sdk.register
     */
    preSignup(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // 一个邮箱只能注册一个
            const user = yield this.identityProvider.find(dto);
            if (user) {
                throw new v1_flowda_types_1.AuthenticationError.EmailAlreadyExists();
            }
            const randomCode = this.generateRandomUppercaseLetter();
            yield this.prisma.tenantPreSignup.create({
                data: {
                    email: dto.email,
                    verifyCode: randomCode,
                },
            });
            yield this.mailService.legacySendEmail(dto.email, 'Tenant register verify code - ', randomCode);
            return {
                verifyCode: randomCode,
            };
        });
    }
    signup(dto, extraFields = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.identityProvider.find({
                email: dto.email,
            });
            if (user) {
                throw new v1_flowda_types_1.AuthenticationError.AccountNameAlreadyExists();
            }
            let hashedPassword = null;
            if (dto.password) {
                // todo: 先不做验证这一步，邮箱需要，但是微信/手机号不需要
                hashedPassword = yield bcrypt.hash(dto.password, 10);
            }
            // 租户的 name 不需要强制校验
            if (!dto.name) {
                dto.name = dto.email;
            }
            // const { password, ...rest } = dto // 删除 password
            const a = Object.assign(Object.assign(Object.assign({}, dto), { hashedPassword: hashedPassword, hashedRefreshToken: null, recoveryCode: null, recoveryToken: null }), extraFields);
            const newUser = yield this.identityProvider.create(a);
            return (0, authentication_service_1.excludedIdentity)(newUser);
        });
    }
    verifyAndSignup(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const rt = yield this.prisma.tenantPreSignup.findFirst({
                where: {
                    AND: [{ email: dto.email }, { verifyCode: dto.verifyCode }],
                },
            });
            if (!rt) {
                throw new v1_flowda_types_1.AuthenticationError.WrongVerifyCode();
            }
            const newUser = yield this.signup({
                name: dto.name,
                password: dto.password,
                email: dto.email,
            });
            yield this.prisma.tenantPreSignup.delete({
                where: {
                    id: rt.id,
                },
            });
            return newUser;
        });
    }
};
exports.TenantAuthService = TenantAuthService;
tslib_1.__decorate([
    (0, inversify_1.postConstruct)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TenantAuthService.prototype, "postConstruct", null);
exports.TenantAuthService = TenantAuthService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(v1_flowda_types_1.IdentityProviderServiceSymbol)),
    tslib_1.__param(0, (0, inversify_1.named)('tenant')),
    tslib_1.__param(1, (0, inversify_1.inject)(jwt_service_1.JwtService)),
    tslib_1.__param(2, (0, inversify_1.inject)(index_1.IConfigService)),
    tslib_1.__param(3, (0, inversify_1.inject)(index_1.IMailService)),
    tslib_1.__param(4, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof v1_flowda_types_1.IIdentityProviderService !== "undefined" && v1_flowda_types_1.IIdentityProviderService) === "function" ? _a : Object, typeof (_b = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof index_1.IConfigService !== "undefined" && index_1.IConfigService) === "function" ? _c : Object, typeof (_d = typeof index_1.IMailService !== "undefined" && index_1.IMailService) === "function" ? _d : Object, typeof (_e = typeof db !== "undefined" && db.PrismaClient) === "function" ? _e : Object])
], TenantAuthService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/wx-login/wxFwhLogin.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WxFwhLoginService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const infra_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
const axios_1 = tslib_1.__importDefault(__webpack_require__("axios"));
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
let WxFwhLoginService = class WxFwhLoginService {
    constructor(config) {
        this.config = config;
    }
    getAccessToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const appid = this.config.getEnv('freecharger_fuwuhao_appid');
            const secret = this.config.getEnv('freecharger_fuwuhao_secret');
            // https://github.com/axios/axios/issues/5082
            const ret = yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
            });
            return ret.data;
        });
    }
    getAccessTokenByCode(code) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const appid = this.config.getEnv('freecharger_fuwuhao_appid');
            const secret = this.config.getEnv('freecharger_fuwuhao_secret');
            const res = yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`,
            });
            if (res.data.errcode) {
                console.log('get access token error: ', JSON.stringify(res.data));
                throw new v1_flowda_types_1.WXError.FwhGetAccessTokenError(res.data);
            }
            return res.data;
        });
    }
};
exports.WxFwhLoginService = WxFwhLoginService;
exports.WxFwhLoginService = WxFwhLoginService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(infra_1.IConfigService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof infra_1.IConfigService !== "undefined" && infra_1.IConfigService) === "function" ? _a : Object])
], WxFwhLoginService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/wx-login/wxLogin.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WxLoginService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const infra_1 = __webpack_require__("../../../libs/v1/flowda-services/src/infra/index.ts");
const legacy_libs_1 = __webpack_require__("../../../libs/v1/flowda-services/src/legacy-libs.ts");
let WxLoginService = class WxLoginService {
    constructor(config, wechatOAuthFactory) {
        this.config = config;
        this.wechatOAuthFactory = wechatOAuthFactory;
    }
    getAuthorizeURLForWebsite(redirectUrl) {
        const url = this.wechatOAuthFactory().getAuthorizeURLForWebsite(redirectUrl);
        return url;
    }
    getAccessToken(code) {
        return new Promise((resolve, reject) => {
            this.wechatOAuthFactory().getAccessToken(code, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
    getUser(openid, access_token) {
        return new Promise((resolve, reject) => {
            this.wechatOAuthFactory()._getUser({
                openid,
            }, access_token, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
};
exports.WxLoginService = WxLoginService;
exports.WxLoginService = WxLoginService = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(infra_1.IConfigService)),
    tslib_1.__param(1, (0, inversify_1.inject)(legacy_libs_1.WechatOAuthFactorySymbol)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof infra_1.IConfigService !== "undefined" && infra_1.IConfigService) === "function" ? _a : Object, Function])
], WxLoginService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/services/wx-pay/wxPay.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var WxPayService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WxPayService = void 0;
const tslib_1 = __webpack_require__("tslib");
const legacy_libs_1 = __webpack_require__("../../../libs/v1/flowda-services/src/legacy-libs.ts");
const inversify_1 = __webpack_require__("inversify");
const dayjs_1 = __webpack_require__("../../../libs/v1/flowda-services/src/utils/dayjs.ts");
const v1_flowda_types_1 = __webpack_require__("../../../libs/v1/flowda-types/src/index.ts");
let WxPayService = WxPayService_1 = class WxPayService {
    constructor(wechatPayNodeV3Factory, loggerFactory) {
        this.wechatPayNodeV3Factory = wechatPayNodeV3Factory;
        this.logger = loggerFactory(WxPayService_1.name);
    }
    /*
    {
    "status": 200,
    "appId": "xx",
    "timeStamp": "1682132086",
    "nonceStr": "xx",
    "package": "prepay_id=xx",
    "signType": "RSA",
    "paySign": "xx"
  }
     */
    transactionsJSAPI(openid, orderId, desc, total) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const timeExpire = (0, dayjs_1.getTimeExpire)(5);
            const params = {
                description: desc, ///商品描述
                out_trade_no: orderId, ///户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一
                time_expire: timeExpire /*订单失效时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日 13点29分35秒。 */,
                attach: '附加数据', ///附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。
                notify_url: 'https://www.weixin.qq.com/wxpay/pay.php', // todo /* 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。 公网域名必须为https，如果是走专线接入，使用专线NAT IP或者私有回调域名可使用http */
                support_fapiao: false, ///传入true时，支付成功消息和支付详情页将出现开票入口。需要在微信支付商户平台或微信公众平台开通电子发票功能，传此字段才可生效。
                amount: {
                    total: total * 100, ///订单总金额，单位为“分”
                    currency: 'CNY', /// CNY：人民币，境内商户号仅支持人民币。
                },
                payer: {
                    openid: openid, ///用户在直连商户appid下的唯一标识，不可混用
                },
                settle_info: {
                    profit_sharing: false, ///是否指定分账
                },
            };
            const wxRet = yield this.wechatPayNodeV3Factory().transactions_jsapi(params);
            this.logger.log(`wechat transactions_jsapi resp ${JSON.stringify(wxRet)}`);
            if (wxRet.status !== 200) {
                throw new v1_flowda_types_1.OrderError.TransactionsNativeStatusNotOk();
            }
            return wxRet;
        });
    }
    transactionsNative(orderId, desc, total) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const timeExpire = (0, dayjs_1.getTimeExpire)(5);
            const params = {
                description: desc, ///商品描述
                out_trade_no: orderId, ///户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一
                // '2022-11-11T23:59:59+08:00'
                time_expire: timeExpire,
                /*订单失效时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日 13点29分35秒。 */
                attach: '附加数据', ///附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。
                notify_url: 'https://www.weixin.qq.com/wxpay/pay.php', // todo /* 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。 公网域名必须为https，如果是走专线接入，使用专线NAT IP或者私有回调域名可使用http */
                support_fapiao: false, ///传入true时，支付成功消息和支付详情页将出现开票入口。需要在微信支付商户平台或微信公众平台开通电子发票功能，传此字段才可生效。
                amount: {
                    total: total * 100, ///订单总金额，单位为“分”
                    currency: 'CNY', /// CNY：人民币，境内商户号仅支持人民币。
                },
                settle_info: {
                    profit_sharing: false, ///是否指定分账
                },
            };
            this.logger.log(`wechat start to transactions_native ${JSON.stringify(params)}`);
            const wxRet = yield this.wechatPayNodeV3Factory().transactions_native(params);
            this.logger.log(`wechat transactions_native resp ${JSON.stringify(wxRet)}`);
            if (wxRet.status !== 200) {
                throw new v1_flowda_types_1.OrderError.TransactionsNativeStatusNotOk();
            }
            return wxRet;
        });
    }
    /*
    {
      "status": 200,
      "amount": {
          "currency": "CNY",
          "payer_currency": "CNY",
          "payer_total": 1,
          "total": 1
      },
      "appid": "wx6ecc94d7d5133fde",
      "attach": "附加数据",
      "bank_type": "OTHERS",
      "mchid": "1634638724",
      "out_trade_no": "claz2v5la0000tzp2ivnp5gpm",
      "payer": {
          "openid": "oQBzz5GM-9aCngjG3eNpqJIlzJj4"
      },
      "promotion_detail": [],
      "success_time": "2022-11-27T16:07:27+08:00",
      "trade_state": "SUCCESS",
      "trade_state_desc": "支付成功",
      "trade_type": "NATIVE",
      "transaction_id": "4200001645202211278892941061"
  }
     */
    query(outTradeNo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`wx pay query with tradeNo ${outTradeNo}`);
            const ret = yield this.wechatPayNodeV3Factory().query({ out_trade_no: outTradeNo });
            this.logger.log(`wx pay query resp: ${JSON.stringify(ret)}`);
            return ret;
        });
    }
};
exports.WxPayService = WxPayService;
exports.WxPayService = WxPayService = WxPayService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(legacy_libs_1.WechatpayNodeV3FactorySymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function, Function])
], WxPayService);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/shared-web/appExceptionFilter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppExceptionFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
/**
 * 没有细究这里的原理已经正确的使用方式
 * 但是这个 filter 的目的是将 service 层的 error 做一层前端可读性的转换，特别是 message
 */
let AppExceptionFilter = AppExceptionFilter_1 = class AppExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(AppExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let errorCode;
        let message;
        let errorExtra;
        let status;
        let errorStack;
        // 如果是 CustomError 提取 errorCode + message, 200
        if (exception instanceof flowda_shared_1.CustomError) {
            const rt = JSON.parse(exception.message);
            errorCode = rt.errorCode;
            message = rt.message;
            errorExtra = rt.extra;
            status = common_1.HttpStatus.OK;
            errorStack = exception.stack;
        }
        else if (exception instanceof Error) {
            // 如果是一般 Error，提取 message，errorCode 继续 undef
            message = exception.message;
            status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            errorStack = exception.stack;
        }
        // 如果是 HttpException，则重新赋值下 status
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            errorCode = status;
            const res = exception.getResponse();
            if (typeof res === 'object' && Array.isArray(res.message)) {
                message = res.message.join(',');
            }
            errorStack = exception.stack;
        }
        // 如果是权限相关的（jwt access token 过期）
        if (exception instanceof common_1.UnauthorizedException) {
            status = exception.getStatus();
            errorCode = status;
            message = exception.message;
            errorStack = exception.stack;
        }
        if (exception instanceof nestjs_zod_1.ZodValidationException) {
            status = exception.getStatus();
            errorCode = status;
            message = exception.message;
            errorExtra = exception.getResponse().errors;
        }
        this.logger.error({
            request: {
                method: request.method,
                url: request.url,
                query: request.query,
                body: request.body,
            },
            code: errorCode,
            timestamp: new Date().toISOString(),
            message: message,
            extraInfo: errorExtra,
            errorStack: errorStack,
        });
        response.status(status).json({
            message: message,
            extraInfo: errorExtra,
            code: errorCode,
            timestamp: new Date().toISOString(),
        });
    }
};
exports.AppExceptionFilter = AppExceptionFilter;
exports.AppExceptionFilter = AppExceptionFilter = AppExceptionFilter_1 = tslib_1.__decorate([
    (0, common_1.Catch)()
], AppExceptionFilter);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/utils/dayjs.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTimeByDay = exports.getTimeExpire = void 0;
const legacy_libs_1 = __webpack_require__("../../../libs/v1/flowda-services/src/legacy-libs.ts");
legacy_libs_1.dayjs.extend(legacy_libs_1.utc);
legacy_libs_1.dayjs.extend(legacy_libs_1.timezone);
legacy_libs_1.dayjs.extend(legacy_libs_1.advancedFormat);
function getTimeExpire(min) {
    const fmt = (0, legacy_libs_1.dayjs)().tz('Asia/Shanghai').add(min, 'minute').format('YYYY-MM-DDTHH:mm:ss+z');
    const ret = fmt.match(/.*(GMT\+(\d))/);
    if (ret == null) {
        return '';
    }
    else {
        return ret[0].replace(ret[1], ret[2].padStart(2, '0') + ':00');
    }
}
exports.getTimeExpire = getTimeExpire;
function getTimeByDay(day) {
    return (0, legacy_libs_1.dayjs)().tz('Asia/Shanghai').add(day, 'day').toDate();
}
exports.getTimeByDay = getTimeByDay;


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/utils/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-services/src/utils/isCuid.decorator.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/flowda-services/src/utils/isCuid.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCuid = void 0;
const legacy_libs_1 = __webpack_require__("../../../libs/v1/flowda-services/src/legacy-libs.ts");
const class_validator_1 = __webpack_require__("class-validator");
function isCuid(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCuid',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return legacy_libs_1.cuid.isCuid(value);
                },
            },
        });
    };
}
exports.isCuid = isCuid;


/***/ }),

/***/ "../../../libs/v1/flowda-types/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
// export * from './lib/service.type'
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-types/src/lib/prisma.type.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-types/src/lib/errors.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-types/src/lib/plan.type.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/flowda-types/src/interfaces/identity-provider/identityProvider.service.ts"), exports);


/***/ }),

/***/ "../../../libs/v1/flowda-types/src/interfaces/identity-provider/identityProvider.service.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdentityProviderServiceSymbol = void 0;
exports.IdentityProviderServiceSymbol = Symbol.for('IIdentityProviderService');


/***/ }),

/***/ "../../../libs/v1/flowda-types/src/lib/errors.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WXError = exports.SdkError = exports.AuthenticationError = exports.OrderError = exports.LicenseError = void 0;
/* eslint-disable @typescript-eslint/no-namespace */
const flowda_shared_1 = __webpack_require__("../../../libs/flowda-shared/src/index.ts");
var LicenseError;
(function (LicenseError) {
    class InvalidLicense extends flowda_shared_1.CustomError {
        constructor() {
            super(1001, 'Invalid license');
        }
    }
    LicenseError.InvalidLicense = InvalidLicense;
    class FreeLicenseLimitReached extends flowda_shared_1.CustomError {
        constructor() {
            super(1002, '达到免费证书限额');
        }
    }
    LicenseError.FreeLicenseLimitReached = FreeLicenseLimitReached;
})(LicenseError || (exports.LicenseError = LicenseError = {}));
var OrderError;
(function (OrderError) {
    class NoProducts extends flowda_shared_1.CustomError {
        constructor() {
            super(2001, 'No products');
        }
    }
    OrderError.NoProducts = NoProducts;
    class InvokeTransactionsNativeException extends flowda_shared_1.CustomError {
        constructor() {
            super(2002, '微信支付发起失败');
        }
    }
    OrderError.InvokeTransactionsNativeException = InvokeTransactionsNativeException;
    class TransactionsNativeStatusNotOk extends flowda_shared_1.CustomError {
        constructor() {
            super(2003, '微信支付(native)发起返回值 status!=200');
        }
    }
    OrderError.TransactionsNativeStatusNotOk = TransactionsNativeStatusNotOk;
    class PayQueryStatusNotOk extends flowda_shared_1.CustomError {
        constructor(extra) {
            super(2004, '微信支付查询 status!=200', extra);
        }
    }
    OrderError.PayQueryStatusNotOk = PayQueryStatusNotOk;
    class PayQueryNoOrderFound extends flowda_shared_1.CustomError {
        constructor() {
            super(2005, '微信支付查询未查询到关联订单');
        }
    }
    OrderError.PayQueryNoOrderFound = PayQueryNoOrderFound;
    class CannotPayFreeIfPaid extends flowda_shared_1.CustomError {
        constructor() {
            super(2006, '购买付费产品之后不能再购买免费产品');
        }
    }
    OrderError.CannotPayFreeIfPaid = CannotPayFreeIfPaid;
    class CannotPayVIPIfPaid extends flowda_shared_1.CustomError {
        constructor() {
            super(2007, '购买过付费产品后不能重复购买');
        }
    }
    OrderError.CannotPayVIPIfPaid = CannotPayVIPIfPaid;
    class OrderCustomerIdNotMatch extends flowda_shared_1.CustomError {
        constructor() {
            super(2008, '订单关联的买家ID和登录信息不一致');
        }
    }
    OrderError.OrderCustomerIdNotMatch = OrderCustomerIdNotMatch;
    class DuplicateAnonymousCustomerToken extends flowda_shared_1.CustomError {
        constructor() {
            super(2009, '请确认支付快捷创建是已支付状态');
        }
    }
    OrderError.DuplicateAnonymousCustomerToken = DuplicateAnonymousCustomerToken;
    class TransactionsJSAPIStatusNotOk extends flowda_shared_1.CustomError {
        constructor() {
            super(2010, '微信支付(JSAPI)发起返回值 status!=200');
        }
    }
    OrderError.TransactionsJSAPIStatusNotOk = TransactionsJSAPIStatusNotOk;
    class PurchaseReactedRestrictedLimit extends flowda_shared_1.CustomError {
        constructor() {
            super(2011, '限购产品超出购买次数');
        }
    }
    OrderError.PurchaseReactedRestrictedLimit = PurchaseReactedRestrictedLimit;
})(OrderError || (exports.OrderError = OrderError = {}));
var AuthenticationError;
(function (AuthenticationError) {
    class AccountNameAlreadyExists extends flowda_shared_1.CustomError {
        constructor() {
            super(3001, 'Account name already exists');
        }
    }
    AuthenticationError.AccountNameAlreadyExists = AccountNameAlreadyExists;
    class UserNamePasswordMismatch extends flowda_shared_1.CustomError {
        constructor() {
            super(3002, 'Username and password mismatch');
        }
    }
    AuthenticationError.UserNamePasswordMismatch = UserNamePasswordMismatch;
    class AccountNotFound extends flowda_shared_1.CustomError {
        constructor() {
            super(3003, 'Account not found');
        }
    }
    AuthenticationError.AccountNotFound = AccountNotFound;
    /**
     * 之前没有给 customer 做登录密码功能，所以 hashedPassword 为 null
     * 可以先这样兼容，后续从产品流程上增加请注册流程
     * 或者数据订正
     */
    class NotInitPassword extends flowda_shared_1.CustomError {
        constructor() {
            super(3004, 'Password not init');
        }
    }
    AuthenticationError.NotInitPassword = NotInitPassword;
    class InvalidToken extends flowda_shared_1.CustomError {
        constructor() {
            super(3005, 'Invalid token');
        }
    }
    AuthenticationError.InvalidToken = InvalidToken;
    /**
     * 代表没有登录，就需要重新生成 refresh token
     */
    class NullRefreshToken extends flowda_shared_1.CustomError {
        constructor() {
            super(3006, 'null refresh token');
        }
    }
    AuthenticationError.NullRefreshToken = NullRefreshToken;
    class NoEmail extends flowda_shared_1.CustomError {
        constructor() {
            super(3007, 'No email');
        }
    }
    AuthenticationError.NoEmail = NoEmail;
    class InvalidRecoveryCode extends flowda_shared_1.CustomError {
        constructor() {
            super(3008, 'Wrong recovery code');
        }
    }
    AuthenticationError.InvalidRecoveryCode = InvalidRecoveryCode;
    class EmailAlreadyExists extends flowda_shared_1.CustomError {
        constructor() {
            super(3009, 'Email already exists');
        }
    }
    AuthenticationError.EmailAlreadyExists = EmailAlreadyExists;
    class InvalidAppId extends flowda_shared_1.CustomError {
        constructor() {
            super(3100, 'Customer info must contain a valid AppId');
        }
    }
    AuthenticationError.InvalidAppId = InvalidAppId;
    class InvalidTenant extends flowda_shared_1.CustomError {
        constructor() {
            super(3101, 'Tenant info is not invalid');
        }
    }
    AuthenticationError.InvalidTenant = InvalidTenant;
    class WrongVerifyCode extends flowda_shared_1.CustomError {
        constructor() {
            super(4004, 'wrong verify code');
        }
    }
    AuthenticationError.WrongVerifyCode = WrongVerifyCode;
})(AuthenticationError || (exports.AuthenticationError = AuthenticationError = {}));
var SdkError;
(function (SdkError) {
    class InitFailed extends flowda_shared_1.CustomError {
        constructor() {
            super(4001, 'init failed');
        }
    }
    SdkError.InitFailed = InitFailed;
    class NoPassword extends flowda_shared_1.CustomError {
        constructor() {
            super(4002, 'No password');
        }
    }
    SdkError.NoPassword = NoPassword;
    class NoEmail extends flowda_shared_1.CustomError {
        constructor() {
            super(4003, 'No email');
        }
    }
    SdkError.NoEmail = NoEmail;
    class WrongVerifyCode extends flowda_shared_1.CustomError {
        constructor() {
            super(4004, 'wrong verify code');
        }
    }
    SdkError.WrongVerifyCode = WrongVerifyCode;
})(SdkError || (exports.SdkError = SdkError = {}));
var WXError;
(function (WXError) {
    class FwhGetAccessTokenError extends flowda_shared_1.CustomError {
        constructor(extra) {
            super(5001, '服务号获取 access token 失败', extra);
        }
    }
    WXError.FwhGetAccessTokenError = FwhGetAccessTokenError;
    class RecoveryNoOrderFound extends flowda_shared_1.CustomError {
        constructor() {
            super(5002, '未查询到或者已经恢复了快捷创建的订单');
        }
    }
    WXError.RecoveryNoOrderFound = RecoveryNoOrderFound;
})(WXError || (exports.WXError = WXError = {}));


/***/ }),

/***/ "../../../libs/v1/flowda-types/src/lib/plan.type.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EPlan = void 0;
var EPlan;
(function (EPlan) {
    EPlan[EPlan["Free"] = 1] = "Free";
    EPlan[EPlan["VIP"] = 2] = "VIP";
})(EPlan || (exports.EPlan = EPlan = {}));


/***/ }),

/***/ "../../../libs/v1/flowda-types/src/lib/prisma.type.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../../libs/v1/prisma-flowda/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zt = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../../libs/v1/prisma-flowda/src/zod/index.ts"), exports);
exports.zt = tslib_1.__importStar(__webpack_require__("../../../libs/v1/prisma-flowda/src/zod/index.ts"));


/***/ }),

/***/ "../../../libs/v1/prisma-flowda/src/zod/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeixinProfileSchema = exports.CustomerWithRelationsSchema = exports.CustomerSchema = exports.PayWithRelationsSchema = exports.PaySchema = exports.ProductWithRelationsSchema = exports.ProductSchema = exports.ArticleWithRelationsSchema = exports.ArticleSchema = exports.JYFreeCountWithRelationsSchema = exports.JYFreeCountSchema = exports.JYProfileWithRelationsSchema = exports.JYProfileSchema = exports.QuestionSchema = exports.TenantPreSignupSchema = exports.TenantSchema = exports.AppWithRelationsSchema = exports.AppSchema = exports.ProductTypeSchema = exports.PayStatusSchema = exports.OrderStatusSchema = exports.JsonNullValueFilterSchema = exports.NullsOrderSchema = exports.NullableJsonNullValueInputSchema = exports.SortOrderSchema = exports.OrderScalarFieldEnumSchema = exports.ProductSnapshotScalarFieldEnumSchema = exports.LegacyProfileScalarFieldEnumSchema = exports.CustomerPreSignupScalarFieldEnumSchema = exports.ProfileScalarFieldEnumSchema = exports.WeixinProfileScalarFieldEnumSchema = exports.CustomerScalarFieldEnumSchema = exports.PayScalarFieldEnumSchema = exports.ProductScalarFieldEnumSchema = exports.ArticleScalarFieldEnumSchema = exports.JYFreeCountScalarFieldEnumSchema = exports.JYProfileScalarFieldEnumSchema = exports.QuestionScalarFieldEnumSchema = exports.TenantPreSignupScalarFieldEnumSchema = exports.TenantScalarFieldEnumSchema = exports.AppScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.isValidDecimalInput = exports.DECIMAL_STRING_REGEX = exports.DecimalJSLikeListSchema = exports.DecimalJSLikeSchema = exports.InputJsonValue = exports.NullableJsonValue = exports.JsonValue = exports.transformJsonNull = void 0;
exports.OrderWithRelationsSchema = exports.OrderSchema = exports.ProductSnapshotWithRelationsSchema = exports.ProductSnapshotSchema = exports.LegacyProfileWithRelationsSchema = exports.LegacyProfileSchema = exports.customerPreSignupSchema = exports.ProfileWithRelationsSchema = exports.ProfileSchema = exports.WeixinProfileWithRelationsSchema = void 0;
const zod_1 = __webpack_require__("zod");
const client_v1_flowda_1 = __webpack_require__("@prisma/client-v1-flowda");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
const transformJsonNull = (v) => {
    if (!v || v === 'DbNull')
        return client_v1_flowda_1.Prisma.DbNull;
    if (v === 'JsonNull')
        return client_v1_flowda_1.Prisma.JsonNull;
    return v;
};
exports.transformJsonNull = transformJsonNull;
exports.JsonValue = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.lazy(() => zod_1.z.array(exports.JsonValue)),
    zod_1.z.lazy(() => zod_1.z.record(exports.JsonValue)),
]);
exports.NullableJsonValue = zod_1.z
    .union([exports.JsonValue, zod_1.z.literal('DbNull'), zod_1.z.literal('JsonNull')])
    .nullable()
    .transform((v) => (0, exports.transformJsonNull)(v));
exports.InputJsonValue = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.lazy(() => zod_1.z.array(exports.InputJsonValue.nullable())),
    zod_1.z.lazy(() => zod_1.z.record(exports.InputJsonValue.nullable())),
]);
// DECIMAL
//------------------------------------------------------
exports.DecimalJSLikeSchema = zod_1.z.object({ d: zod_1.z.array(zod_1.z.number()), e: zod_1.z.number(), s: zod_1.z.number(), toFixed: zod_1.z.function().args().returns(zod_1.z.string()), });
exports.DecimalJSLikeListSchema = zod_1.z.object({ d: zod_1.z.array(zod_1.z.number()), e: zod_1.z.number(), s: zod_1.z.number(), toFixed: zod_1.z.function().args().returns(zod_1.z.string()), }).array();
exports.DECIMAL_STRING_REGEX = /^[0-9.,e+-bxffo_cp]+$|Infinity|NaN/;
const isValidDecimalInput = (v) => {
    if (v === undefined || v === null)
        return false;
    return ((typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && 'toFixed' in v) ||
        (typeof v === 'string' && exports.DECIMAL_STRING_REGEX.test(v)) ||
        typeof v === 'number');
};
exports.isValidDecimalInput = isValidDecimalInput;
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.AppScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'name', 'hashedAppToken', 'hashedPassword', 'hashedRefreshToken', 'recoveryCode', 'recoveryToken', 'displayName', 'description', 'isDeleted', 'tenantId']);
exports.TenantScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'name', 'email', 'hashedPassword', 'hashedRefreshToken', 'recoveryCode', 'recoveryToken', 'role']);
exports.TenantPreSignupScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'email', 'verifyCode']);
exports.QuestionScalarFieldEnumSchema = zod_1.z.enum(['id', 'uid', 'question', 'answer', 'success', 'createdAt', 'updatedAt']);
exports.JYProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'userId']);
exports.JYFreeCountScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'cycle', 'count', 'profileId']);
exports.ArticleScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'link', 'source', 'title', 'image', 'excerpt', 'profileId']);
exports.ProductScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'name', 'price', 'productType', 'plan', 'amount', 'extendedDescriptionData', 'fileSize', 'storeDuration', 'hasAds', 'tecSupport', 'validityPeriod', 'appId', 'isDeleted', 'tenantId', 'restricted']);
exports.PayScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'status', 'orderId', 'transactionId', 'tenantId']);
exports.CustomerScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'name', 'appId', 'email', 'hashedPassword', 'hashedRefreshToken', 'recoveryCode', 'recoveryToken', 'isDeleted', 'tenantId']);
exports.WeixinProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'unionid', 'loginOpenid', 'headimgurl', 'nickname', 'sex', 'customerId', 'tenantId']);
exports.ProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'customerId', 'productType', 'plan', 'amount', 'expireAt', 'tenantId']);
exports.CustomerPreSignupScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'email', 'verifyCode', 'appId', 'tenantId']);
exports.LegacyProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'customerId', 'license', 'refreshToken']);
exports.ProductSnapshotScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'snapshotPrice', 'orderId', 'productId', 'tenantId']);
exports.OrderScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'serial', 'status', 'customerId', 'appId', 'isDeleted', 'tenantId']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.NullableJsonNullValueInputSchema = zod_1.z.enum(['DbNull', 'JsonNull',]).transform((v) => (0, exports.transformJsonNull)(v));
exports.NullsOrderSchema = zod_1.z.enum(['first', 'last']);
exports.JsonNullValueFilterSchema = zod_1.z.enum(['DbNull', 'JsonNull', 'AnyNull',]);
exports.OrderStatusSchema = zod_1.z.enum(['INITIALIZED', 'PAY_ASSOCIATED', 'FREE_DEAL', 'CANCELED']);
exports.PayStatusSchema = zod_1.z.enum(['UNPAIED', 'PAIED', 'REFUND']);
exports.ProductTypeSchema = zod_1.z.enum(['AMOUNT', 'PLAN']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// APP SCHEMA
/////////////////////////////////////////
exports.AppSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    name: zod_1.z.string().openapi({ "title": "应用id", "access_type": "read_only" }),
    hashedAppToken: zod_1.z.string().nullable(),
    hashedPassword: zod_1.z.string(),
    hashedRefreshToken: zod_1.z.string().nullable(),
    recoveryCode: zod_1.z.string().nullable(),
    recoveryToken: zod_1.z.string().nullable(),
    displayName: zod_1.z.string().openapi({ "title": "应用名" }),
    description: zod_1.z.string().nullable().openapi({ "title": "应用描述" }),
    isDeleted: zod_1.z.boolean().nullable(),
    tenantId: zod_1.z.string(),
}).openapi({ "primary_key": "id", "searchable_columns": "name,displayName,description", "display_column": "displayName", "display_name": "应用", "display_primary_key": "true" });
exports.AppWithRelationsSchema = exports.AppSchema.merge(zod_1.z.object({
    products: zod_1.z.lazy(() => exports.ProductWithRelationsSchema).array().openapi({ "model_name": "Product", "foreign_key": "appId", "primary_key": "id", "title": "Products" }),
    customers: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema).array().openapi({ "model_name": "Customer", "foreign_key": "appId", "primary_key": "id", "title": "Customers" }),
    orders: zod_1.z.lazy(() => exports.OrderWithRelationsSchema).array().openapi({ "model_name": "Order", "foreign_key": "appId", "primary_key": "id", "title": "Orders" }),
}));
/////////////////////////////////////////
// TENANT SCHEMA
/////////////////////////////////////////
exports.TenantSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    hashedPassword: zod_1.z.string(),
    hashedRefreshToken: zod_1.z.string().nullable(),
    recoveryCode: zod_1.z.string().nullable(),
    recoveryToken: zod_1.z.string().nullable(),
    role: zod_1.z.string().nullable(),
});
/////////////////////////////////////////
// TENANT PRE SIGNUP SCHEMA
/////////////////////////////////////////
exports.TenantPreSignupSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    email: zod_1.z.string(),
    verifyCode: zod_1.z.string(),
});
/////////////////////////////////////////
// QUESTION SCHEMA
/////////////////////////////////////////
exports.QuestionSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    uid: zod_1.z.string(),
    question: zod_1.z.string().nullable(),
    answer: zod_1.z.string().nullable(),
    success: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
/////////////////////////////////////////
// JY PROFILE SCHEMA
/////////////////////////////////////////
exports.JYProfileSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    userId: zod_1.z.string(),
});
exports.JYProfileWithRelationsSchema = exports.JYProfileSchema.merge(zod_1.z.object({
    articles: zod_1.z.lazy(() => exports.ArticleWithRelationsSchema).array(),
    freeCounts: zod_1.z.lazy(() => exports.JYFreeCountWithRelationsSchema).array(),
}));
/////////////////////////////////////////
// JY FREE COUNT SCHEMA
/////////////////////////////////////////
exports.JYFreeCountSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    cycle: zod_1.z.number().int(),
    count: zod_1.z.number().int(),
    profileId: zod_1.z.string(),
});
exports.JYFreeCountWithRelationsSchema = exports.JYFreeCountSchema.merge(zod_1.z.object({
    profile: zod_1.z.lazy(() => exports.JYProfileWithRelationsSchema),
}));
/////////////////////////////////////////
// ARTICLE SCHEMA
/////////////////////////////////////////
exports.ArticleSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    link: zod_1.z.string(),
    source: zod_1.z.string().nullable(),
    title: zod_1.z.string().nullable(),
    image: zod_1.z.string().nullable(),
    excerpt: zod_1.z.string().nullable(),
    profileId: zod_1.z.string(),
});
exports.ArticleWithRelationsSchema = exports.ArticleSchema.merge(zod_1.z.object({
    profile: zod_1.z.lazy(() => exports.JYProfileWithRelationsSchema),
}));
/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////
exports.ProductSchema = zod_1.z.object({
    productType: exports.ProductTypeSchema,
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    name: zod_1.z.string().openapi({ "title": "产品名" }),
    /**
     * @schema.override_type integer
     */
    price: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: "Field 'price' must be a Decimal. Location: ['Models', 'Product']", }).openapi({ "title": "价格", "override_type": "integer" }),
    plan: zod_1.z.number().int().nullable(),
    amount: zod_1.z.number().int().nullable().openapi({ "title": "额度" }),
    extendedDescriptionData: exports.NullableJsonValue.optional(),
    fileSize: zod_1.z.string().nullable(),
    storeDuration: zod_1.z.number().int().nullable(),
    hasAds: zod_1.z.string().nullable().openapi({ "title": "广告" }),
    tecSupport: zod_1.z.string().nullable().openapi({ "title": "技术支持" }),
    validityPeriod: zod_1.z.number().int().nullable().openapi({ "title": "有效期/天" }),
    appId: zod_1.z.string().openapi({ "access_type": "read_only" }),
    isDeleted: zod_1.z.boolean().nullable(),
    tenantId: zod_1.z.string(),
    restricted: zod_1.z.number().int(),
}).openapi({ "primary_key": "id", "searchable_columns": "id,name", "display_name": "产品", "display_column": "name" });
exports.ProductWithRelationsSchema = exports.ProductSchema.merge(zod_1.z.object({
    productSnapshots: zod_1.z.lazy(() => exports.ProductSnapshotWithRelationsSchema).array().openapi({ "model_name": "ProductSnapshot", "foreign_key": "productId", "primary_key": "id" }),
    app: zod_1.z.lazy(() => exports.AppWithRelationsSchema).openapi({ "model_name": "App", "foreign_key": "appId", "primary_key": "id" }),
}));
/////////////////////////////////////////
// PAY SCHEMA
/////////////////////////////////////////
exports.PaySchema = zod_1.z.object({
    status: exports.PayStatusSchema,
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    orderId: zod_1.z.string(),
    transactionId: zod_1.z.string(),
    tenantId: zod_1.z.string(),
});
exports.PayWithRelationsSchema = exports.PaySchema.merge(zod_1.z.object({
    Order: zod_1.z.lazy(() => exports.OrderWithRelationsSchema),
}));
/////////////////////////////////////////
// CUSTOMER SCHEMA
/////////////////////////////////////////
exports.CustomerSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    name: zod_1.z.string().openapi({ "title": "用户名" }),
    appId: zod_1.z.string().openapi({ "access_type": "read_only" }),
    email: zod_1.z.string().nullable().openapi({ "title": "邮箱" }),
    hashedPassword: zod_1.z.string().nullable(),
    hashedRefreshToken: zod_1.z.string().nullable(),
    recoveryCode: zod_1.z.string().nullable(),
    recoveryToken: zod_1.z.string().nullable(),
    isDeleted: zod_1.z.boolean().nullable(),
    tenantId: zod_1.z.string(),
}).openapi({ "primary_key": "id", "display_name": "用户", "display_column": "name" });
exports.CustomerWithRelationsSchema = exports.CustomerSchema.merge(zod_1.z.object({
    app: zod_1.z.lazy(() => exports.AppWithRelationsSchema),
    orders: zod_1.z.lazy(() => exports.OrderWithRelationsSchema).array().openapi({ "model_name": "Order", "foreign_key": "customerId", "primary_key": "id", "title": "Orders" }),
    legacyProfile: zod_1.z.lazy(() => exports.LegacyProfileWithRelationsSchema).nullable(),
    profile: zod_1.z.lazy(() => exports.ProfileWithRelationsSchema).nullable().openapi({ "reference": "Profile" }),
    weixinProfile: zod_1.z.lazy(() => exports.WeixinProfileWithRelationsSchema).nullable().openapi({ "reference": "WeixinProfile" }),
}));
/////////////////////////////////////////
// WEIXIN PROFILE SCHEMA
/////////////////////////////////////////
exports.WeixinProfileSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    unionid: zod_1.z.string().nullable(),
    loginOpenid: zod_1.z.string(),
    headimgurl: zod_1.z.string(),
    nickname: zod_1.z.string(),
    sex: zod_1.z.number().int(),
    customerId: zod_1.z.string().nullable(),
    tenantId: zod_1.z.string(),
}).openapi({ "primary_key": "id", "display_name": "微信用户信息", "display_column": "nickname" });
exports.WeixinProfileWithRelationsSchema = exports.WeixinProfileSchema.merge(zod_1.z.object({
    customer: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema).nullable(),
}));
/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////
exports.ProfileSchema = zod_1.z.object({
    productType: exports.ProductTypeSchema,
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    customerId: zod_1.z.string(),
    plan: zod_1.z.number().int().nullable(),
    amount: zod_1.z.number().int().nullable(),
    expireAt: zod_1.z.date().nullable(),
    tenantId: zod_1.z.string(),
}).openapi({ "primary_key": "id", "display_name": "用户信息", "display_column": "productType" });
exports.ProfileWithRelationsSchema = exports.ProfileSchema.merge(zod_1.z.object({
    customer: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema),
}));
/////////////////////////////////////////
// CUSTOMER PRE SIGNUP SCHEMA
/////////////////////////////////////////
exports.customerPreSignupSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    email: zod_1.z.string(),
    verifyCode: zod_1.z.string(),
    appId: zod_1.z.string(),
    tenantId: zod_1.z.string(),
});
/////////////////////////////////////////
// LEGACY PROFILE SCHEMA
/////////////////////////////////////////
exports.LegacyProfileSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    customerId: zod_1.z.string(),
    license: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
});
exports.LegacyProfileWithRelationsSchema = exports.LegacyProfileSchema.merge(zod_1.z.object({
    customer: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema),
}));
/////////////////////////////////////////
// PRODUCT SNAPSHOT SCHEMA
/////////////////////////////////////////
exports.ProductSnapshotSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    snapshotPrice: zod_1.z.union([zod_1.z.number(), zod_1.z.string(), exports.DecimalJSLikeSchema,]).refine((v) => (0, exports.isValidDecimalInput)(v), { message: "Field 'snapshotPrice' must be a Decimal. Location: ['Models', 'ProductSnapshot']", }),
    orderId: zod_1.z.string(),
    productId: zod_1.z.string(),
    tenantId: zod_1.z.string(),
});
exports.ProductSnapshotWithRelationsSchema = exports.ProductSnapshotSchema.merge(zod_1.z.object({
    order: zod_1.z.lazy(() => exports.OrderWithRelationsSchema),
    product: zod_1.z.lazy(() => exports.ProductWithRelationsSchema),
}));
/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////
exports.OrderSchema = zod_1.z.object({
    status: exports.OrderStatusSchema,
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    serial: zod_1.z.number().int(),
    customerId: zod_1.z.string().openapi({ "reference": "Customer" }),
    appId: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().nullable(),
    tenantId: zod_1.z.string(),
}).openapi({ "primary_key": "id", "display_name": "订单", "display_primary_key": "true" });
exports.OrderWithRelationsSchema = exports.OrderSchema.merge(zod_1.z.object({
    customer: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema),
    pay: zod_1.z.lazy(() => exports.PayWithRelationsSchema).nullable(),
    productSnapshots: zod_1.z.lazy(() => exports.ProductSnapshotWithRelationsSchema).array(),
    App: zod_1.z.lazy(() => exports.AppWithRelationsSchema),
}));


/***/ }),

/***/ "@anatine/zod-openapi":
/***/ ((module) => {

module.exports = require("@anatine/zod-openapi");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@prisma/client-v1-flowda":
/***/ ((module) => {

module.exports = require("@prisma/client-v1-flowda");

/***/ }),

/***/ "axios":
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "class-validator-jsonschema":
/***/ ((module) => {

module.exports = require("class-validator-jsonschema");

/***/ }),

/***/ "cos-nodejs-sdk-v5":
/***/ ((module) => {

module.exports = require("cos-nodejs-sdk-v5");

/***/ }),

/***/ "crypto-js":
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "cuid":
/***/ ((module) => {

module.exports = require("cuid");

/***/ }),

/***/ "dayjs":
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/advancedFormat":
/***/ ((module) => {

module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ "dayjs/plugin/timezone":
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ "dayjs/plugin/utc":
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "envalid":
/***/ ((module) => {

module.exports = require("envalid");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "inversify":
/***/ ((module) => {

module.exports = require("inversify");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "keymachine":
/***/ ((module) => {

module.exports = require("keymachine");

/***/ }),

/***/ "lodash":
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "nestjs-zod":
/***/ ((module) => {

module.exports = require("nestjs-zod");

/***/ }),

/***/ "nodemailer":
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "pluralize":
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ "radash":
/***/ ((module) => {

module.exports = require("radash");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "wechat-oauth":
/***/ ((module) => {

module.exports = require("wechat-oauth");

/***/ }),

/***/ "wechatpay-node-v3":
/***/ ((module) => {

module.exports = require("wechatpay-node-v3");

/***/ }),

/***/ "zod":
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/***/ ((module) => {

module.exports = require("stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const express_1 = __webpack_require__("express");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('WEB INFRA')
            .setDescription('Web Infra API description')
            .setVersion('1.0')
            .addTag('infra')
            .build();
        app.use((0, express_1.json)({ limit: '50mb' }));
        app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
        const globalPrefix = 'v1-flowda-api';
        app.setGlobalPrefix(globalPrefix);
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api-doc', app, document);
        const port = process.env.PORT || 3342;
        app.enableCors();
        yield app.listen(port, '0.0.0.0');
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map