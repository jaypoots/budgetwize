(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_credit-card-payoff-calculator_tsx_1d4fe021._.js", {

"[project]/components/credit-card-payoff-calculator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const CreditCardPayoffCalculator = ()=>{
    _s();
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [monthlyPayment, setMonthlyPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [apr, setApr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [totalPaid, setTotalPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalBalance, setTotalBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [payoffSchedule, setPayoffSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newSubscriptionName, setNewSubscriptionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newSubscriptionAmount, setNewSubscriptionAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newSubscriptionIsRecurring, setNewSubscriptionIsRecurring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [subscriptions, setSubscriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'Netflix',
            amount: 15,
            checked: false,
            isRecurring: true
        },
        {
            id: '2',
            name: 'Spotify',
            amount: 10,
            checked: false,
            isRecurring: true
        },
        {
            id: '3',
            name: 'Amazon Prime',
            amount: 20,
            checked: false,
            isRecurring: true
        }
    ]);
    const calculatePayoffTime = (balance, monthlyPayment, apr, recurringExpenses = 0)=>{
        const monthlyInterestRate = apr / 12 / 100;
        let months = 0;
        let currentBalance = balance;
        let schedule = [];
        while(currentBalance > 0){
            // Add recurring expenses to the balance each month
            currentBalance += recurringExpenses;
            const interestPayment = currentBalance * monthlyInterestRate;
            const principalPayment = monthlyPayment - interestPayment;
            currentBalance = currentBalance - principalPayment;
            months++;
            schedule.push({
                month: months,
                payment: monthlyPayment,
                principal: principalPayment,
                interest: interestPayment,
                recurringExpenses,
                remaining: Math.max(0, currentBalance)
            });
            if (months > 600) break;
        }
        return {
            months,
            schedule
        };
    };
    const handleCalculate = ()=>{
        const balanceNum = parseFloat(balance);
        const monthlyPaymentNum = parseFloat(monthlyPayment);
        const aprNum = parseFloat(apr);
        if (!balanceNum || !monthlyPaymentNum || aprNum === undefined || aprNum < 0) {
            alert('Please fill in all fields with valid values');
            return;
        }
        // Calculate recurring expenses from checked subscriptions
        const recurringExpenses = subscriptions.filter((sub)=>sub.checked && sub.isRecurring).reduce((sum, sub)=>sum + sub.amount, 0);
        const monthlyRate = aprNum / 12 / 100;
        if (monthlyPaymentNum <= (balanceNum + recurringExpenses) * monthlyRate && aprNum > 0) {
            alert('Monthly payment is too low to pay off the debt');
            return;
        }
        const { months, schedule } = calculatePayoffTime(balanceNum, monthlyPaymentNum, aprNum, recurringExpenses);
        setPayoffSchedule(schedule);
        setTotalBalance(balanceNum);
    };
    const handleLogPayment = ()=>{
        const monthlyPaymentNum = parseFloat(monthlyPayment);
        if (!monthlyPaymentNum) {
            alert('Please enter a monthly payment amount');
            return;
        }
        setTotalPaid((prev)=>prev + monthlyPaymentNum);
    };
    const handleSubscriptionChange = (id)=>{
        const newSubscriptions = subscriptions.map((sub)=>sub.id === id ? {
                ...sub,
                checked: !sub.checked
            } : sub);
        setSubscriptions(newSubscriptions);
        updateMonthlyPayment(newSubscriptions);
    };
    const handleSubscriptionEdit = (id)=>{
        const newSubscriptions = subscriptions.map((sub)=>sub.id === id ? {
                ...sub,
                isEditing: true
            } : sub);
        setSubscriptions(newSubscriptions);
    };
    const handleSubscriptionSave = (id, newName, newAmount, isRecurring)=>{
        const amount = parseFloat(newAmount);
        if (isNaN(amount)) {
            alert('Please enter a valid amount');
            return;
        }
        const newSubscriptions = subscriptions.map((sub)=>sub.id === id ? {
                ...sub,
                name: newName,
                amount,
                isRecurring,
                isEditing: false
            } : sub);
        setSubscriptions(newSubscriptions);
        updateMonthlyPayment(newSubscriptions);
    };
    const handleAddSubscription = ()=>{
        if (!newSubscriptionName || !newSubscriptionAmount) {
            alert('Please enter both name and amount');
            return;
        }
        const amount = parseFloat(newSubscriptionAmount);
        if (isNaN(amount)) {
            alert('Please enter a valid amount');
            return;
        }
        const newSubscription = {
            id: Date.now().toString(),
            name: newSubscriptionName,
            amount,
            checked: false,
            isRecurring: newSubscriptionIsRecurring
        };
        setSubscriptions([
            ...subscriptions,
            newSubscription
        ]);
        setNewSubscriptionName('');
        setNewSubscriptionAmount('');
    };
    const handleDeleteSubscription = (id)=>{
        const newSubscriptions = subscriptions.filter((sub)=>sub.id !== id);
        setSubscriptions(newSubscriptions);
        updateMonthlyPayment(newSubscriptions);
    };
    const updateMonthlyPayment = (currentSubscriptions)=>{
        // Only add one-time savings to the monthly payment
        const oneTimeSavings = currentSubscriptions.filter((sub)=>sub.checked && !sub.isRecurring).reduce((sum, sub)=>sum + sub.amount, 0);
        const basePayment = parseFloat(monthlyPayment) || 0;
        const currentOneTimeSavings = subscriptions.filter((sub)=>sub.checked && !sub.isRecurring).reduce((sum, sub)=>sum + sub.amount, 0);
        const newPayment = basePayment - currentOneTimeSavings + oneTimeSavings;
        setMonthlyPayment(newPayment.toString());
    };
    const progressPercentage = totalBalance > 0 ? totalPaid / totalBalance * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-white rounded-lg shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Credit Card Payoff Calculator"
            }, void 0, false, {
                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Current Balance"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: balance,
                                onChange: (e)=>setBalance(e.target.value),
                                className: "w-full p-2 border rounded",
                                placeholder: "0",
                                min: "0",
                                step: "0.01"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Monthly Payment"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: monthlyPayment,
                                onChange: (e)=>setMonthlyPayment(e.target.value),
                                className: "w-full p-2 border rounded",
                                placeholder: "0",
                                min: "0",
                                step: "0.01"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "APR (%)"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: apr,
                                onChange: (e)=>setApr(e.target.value),
                                className: "w-full p-2 border rounded",
                                placeholder: "0",
                                min: "0",
                                max: "100",
                                step: "0.01"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3",
                        children: "Subscriptions & Expenses"
                    }, void 0, false, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-3 mb-3 p-3 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: newSubscriptionName,
                                onChange: (e)=>setNewSubscriptionName(e.target.value),
                                placeholder: "Name",
                                className: "p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: newSubscriptionAmount,
                                onChange: (e)=>setNewSubscriptionAmount(e.target.value),
                                placeholder: "Amount",
                                min: "0",
                                step: "0.01",
                                className: "p-2 border rounded"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "recurring",
                                        checked: newSubscriptionIsRecurring,
                                        onChange: (e)=>setNewSubscriptionIsRecurring(e.target.checked),
                                        className: "rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "recurring",
                                        className: "text-sm",
                                        children: "Recurring monthly expense"
                                    }, void 0, false, {
                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddSubscription,
                                className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: subscriptions.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: sub.checked,
                                                onChange: ()=>handleSubscriptionChange(sub.id),
                                                className: "rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this),
                                            sub.isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        defaultValue: sub.name,
                                                        className: "p-1 border rounded",
                                                        onBlur: (e)=>handleSubscriptionSave(sub.id, e.target.value, sub.amount.toString(), sub.isRecurring)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        defaultValue: sub.amount,
                                                        min: "0",
                                                        step: "0.01",
                                                        className: "p-1 border rounded w-24",
                                                        onBlur: (e)=>handleSubscriptionSave(sub.id, sub.name, e.target.value, sub.isRecurring)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                id: `recurring-${sub.id}`,
                                                                defaultChecked: sub.isRecurring,
                                                                className: "rounded",
                                                                onChange: (e)=>handleSubscriptionSave(sub.id, sub.name, sub.amount.toString(), e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: `recurring-${sub.id}`,
                                                                className: "text-sm",
                                                                children: "Recurring"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            sub.name,
                                                            " - $",
                                                            sub.amount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this),
                                                    sub.isRecurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",
                                                        children: "Monthly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSubscriptionEdit(sub.id),
                                                className: "px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteSubscription(sub.id),
                                                className: "px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, sub.id, true, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCalculate,
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                        children: "Calculate Payoff Time"
                    }, void 0, false, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogPayment,
                        className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",
                        children: "Log This Month's Payment"
                    }, void 0, false, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3",
                        children: "Your Debt Payoff Progress"
                    }, void 0, false, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-600 h-4 rounded-full transition-all duration-300",
                            style: {
                                width: `${progressPercentage}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm",
                        children: [
                            "You have paid off $",
                            totalPaid.toFixed(2),
                            " of $",
                            totalBalance.toFixed(2),
                            " (",
                            progressPercentage.toFixed(1),
                            "%)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this),
            payoffSchedule.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3",
                        children: "Monthly Payment Schedule"
                    }, void 0, false, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-gray-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Month"
                                        }, void 0, false, {
                                            fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Principal"
                                        }, void 0, false, {
                                            fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Interest"
                                        }, void 0, false, {
                                            fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Recurring Expenses"
                                        }, void 0, false, {
                                            fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                            children: "Remaining"
                                        }, void 0, false, {
                                            fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: payoffSchedule.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 whitespace-nowrap",
                                                children: row.month
                                            }, void 0, false, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 whitespace-nowrap",
                                                children: [
                                                    "$",
                                                    row.payment.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 whitespace-nowrap",
                                                children: [
                                                    "$",
                                                    row.principal.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 whitespace-nowrap",
                                                children: [
                                                    "$",
                                                    row.interest.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 whitespace-nowrap",
                                                children: [
                                                    "$",
                                                    row.recurringExpenses.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 whitespace-nowrap",
                                                children: [
                                                    "$",
                                                    row.remaining.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/credit-card-payoff-calculator.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/credit-card-payoff-calculator.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
};
_s(CreditCardPayoffCalculator, "t8f02C6lahRZeQA5ooGd3uhVuTs=");
_c = CreditCardPayoffCalculator;
const __TURBOPACK__default__export__ = CreditCardPayoffCalculator;
var _c;
__turbopack_context__.k.register(_c, "CreditCardPayoffCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_credit-card-payoff-calculator_tsx_1d4fe021._.js.map