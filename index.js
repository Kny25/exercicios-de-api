var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Função para obter todos os carros
function get() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://apigenerator.dronahq.com/api/ehbaAlm8/carros')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erro de conexão / was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erro de fetching data:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Função para obter um carro por ID
function GetById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/ehbaAlm8/carros/".concat(id))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erro de conexão / was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 3:
                    error_2 = _a.sent();
                    console.error('Erro de fetching data:', error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Função para postar dados de um carro
function postData(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erro de conexão / was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, result];
                case 3:
                    error_3 = _a.sent();
                    console.error('Erro de posting data:', error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Função para atualizar um carro
function updateRecord(id, updatedData) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/ehbaAlm8/carros/".concat(id), {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(updatedData)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erro de conexão / was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error('Erro de updating data:', error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Função para deletar um carro
function deleteRecord(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/ehbaAlm8/carros/".concat(id), {
                            method: 'DELETE'
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erro de conexão / was not ok');
                    }
                    console.log('Registro/record deleted');
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error('Erro de deleting data:', error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Métodos de teste
function testAPI() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Testar GET
                return [4 /*yield*/, get()];
                case 1:
                    // Testar GET
                    _a.sent();
                    // Testar GET por ID
                    return [4 /*yield*/, GetById(1)];
                case 2:
                    // Testar GET por ID
                    _a.sent();
                    // Testar POST
                    return [4 /*yield*/, postData('https://apigenerator.dronahq.com/api/ehbaAlm8/carros', {
                            "Marca": "Toyota",
                            "Modelo": "Corolla",
                            "Categoria": "Sedan",
                            "Ano": 2020,
                            "Quilometragem": 10000,
                            "Valor": 176777
                        })];
                case 3:
                    // Testar POST
                    _a.sent();
                    // Testar PUT
                    return [4 /*yield*/, updateRecord(1, {
                            "Marca": "Toyota",
                            "Modelo": "Corolla",
                            "Categoria": "Sedan",
                            "Ano": 2021,
                            "Quilometragem": 15000,
                            "Valor": 185000
                        })];
                case 4:
                    // Testar PUT
                    _a.sent();
                    // Testar DELETE
                    return [4 /*yield*/, deleteRecord(1)];
                case 5:
                    // Testar DELETE
                    _a.sent(); // Substitua `1` pelo ID que deseja excluir
                    return [2 /*return*/];
            }
        });
    });
}
testAPI();
