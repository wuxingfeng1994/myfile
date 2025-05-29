/**
 * 电路图绘制应用主文件
 */
    // 创建Vue应用
const app = Vue.createApp({
    data() {
        // 电路元件定义
        const circuitComponentsData = {
            'R': { // Resistor
                name: '电阻',
                width: 60, // 逻辑宽度，用于布局和锚点计算
                height: 20, // 逻辑高度
                path: "M 0 10 L 10 10 L 15 3.33 L 25 16.67 L 35 3.33 L 45 16.67 L 50 10 L 60 10", 
                anchorPoints: [
                    { x: 0, y: 0.5, id: '1' },
                    { x: 1, y: 0.5, id: '2' }
                ],
                textPosition: { x: 0.5, y: -0.3 }
            },
            'C': { // Capacitor
                name: '电容',
                width: 50,
                height: 30,
                path: 'M0,15 L20,15 M20,3 L20,27 M30,3 L30,27 M30,15 L50,15',
                anchorPoints: [
                    { x: 0, y: 0.5, id: '1' },
                    { x: 1, y: 0.5, id: '2' }
                ],
                textPosition: { x: 0.5, y: -0.3 }
            },
            'L': { // Inductor
                name: '电感',
                width: 60,
                height: 20,
                path: 'M0,10 L10,10 M15,10 A6.67,6.67,0,0,0,25,10 M25,10 A6.67,6.67,0,0,0,35,10 M35,10 A6.67,6.67,0,0,0,45,10 M45,10 L60,10',
                anchorPoints: [
                    { x: 0, y: 0.5, id: '1' },
                    { x: 1, y: 0.5, id: '2' }
                ],
                textPosition: { x: 0.5, y: -0.3 }
            },
            'Q': { // Transistor
                name: '三极管',
                width: 60,
                height: 60,
                path: 'M30,12 L30,48 M30,21 L48,9 M30,39 L48,51 M6,30 L30,30 M15,21 L15,39 L21,30 Z',
                anchorPoints: [
                    { x: 0.1, y: 0.5, id: '1' },
                    { x: 0.8, y: 0.15, id: '2' },
                    { x: 0.8, y: 0.85, id: '3' }
                ],
                textPosition: { x: 0.5, y: -0.1 }
            },
            'D': { // Diode
                name: '二极管',
                width: 50,
                height: 30,
                path: 'M0,15 L20,15 M20,6 L20,24 L30,15 L20,6 M30,6 L30,24 M30,15 L50,15',
                anchorPoints: [
                    { x: 0, y: 0.5, id: '1' },
                    { x: 1, y: 0.5, id: '2' }
                ],
                textPosition: { x: 0.5, y: -0.3 }
            },
            'V': { // MOSFET
                name: '场效应管',
                width: 60,
                height: 60,
                path: 'M18,18 L18,42 M6,30 L18,30 M18,18 L42,18 L42,9 M18,42 L42,42 L42,51 M24,12 L24,48 M42,30 L54,30 M24,30 L42,30',
                anchorPoints: [
                    { x: 0.1, y: 0.5, id: '1' },
                    { x: 0.7, y: 0.15, id: '2' },
                    { x: 0.7, y: 0.85, id: '3' }
                ],
                textPosition: { x: 0.5, y: -0.1 }
            },
            'G': { // Ground
                name: '接地',
                width: 30,
                height: 30,
                path: 'M15,0 L15,12 M6,12 L24,12 M9,18 L21,18 M12,24 L18,24',
                anchorPoints: [
                    { x: 0.5, y: 0, id: '1' }
                ],
                textPosition: { x: 0.5, y: -0.3 }
            },
            'U': { // IC
                name: '集成电路',
                width: 80,
                height: 60,
                path: 'M0,0 L80,0 L80,60 L0,60 Z',
                anchorPoints: [
                    { x: 0.5, y: 0, id: '1' },
                    { x: 1, y: 0.5, id: '2' },
                    { x: 0.5, y: 1, id: '3' },
                    { x: 0, y: 0.5, id: '4' }
                ],
                textPosition: { x: 0.5, y: 0.5 }
            }
        };

        return {
            // 元件定义 (在 data 中定义并冻结)
            CircuitComponents: Object.freeze(circuitComponentsData),
            
            // 画布状态
            canvas: {
                width: '100%',
                height: '100%',
                zoom: 1,
                offset: { x: 0, y: 0 },
                isDragging: false,
                dragStart: { x: 0, y: 0 }
            },
            // 画布上的元件
            components: [],
            // 画布上的线路
            wires: [],
        };
    },
    mounted() {
        // 创建SVG画布
        this.drawingArea = SVG().addTo('#drawing-area').size('100%', '100%');
        // 创建一个主要组用于缩放和平移
        this.mainGroup = this.drawingArea.group().addClass('main-group');
        
    },
    methods: {
        handleDragStart(event, type) {
            console.log(event, type);
        }
    }

});

// 挂载Vue应用
app.mount('#app');
