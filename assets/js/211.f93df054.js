(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{522:function(t,a,s){"use strict";s.r(a);var v=s(7),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"计算机网络概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络概述"}},[t._v("#")]),t._v(" 计算机网络概述")]),t._v(" "),a("h2",{attrs:{id:"基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),a("h3",{attrs:{id:"基本组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本组成"}},[t._v("#")]),t._v(" 基本组成")]),t._v(" "),a("p",[t._v("计算机的基本硬件系统由 运算器、控制器、存储器、输入设备和输出设备5大部件组成")]),t._v(" "),a("p",[t._v("运算器、控制器等部件被集成 在一起统称为中央处理单元(Central Processing Unit, CPU)。CPU是硬件系统的核心，用于 数据的加工处理，能完成各种算术、逻辑运算及控制功能。")]),t._v(" "),a("p",[t._v("存储器是计算机系统中的记忆设备， 分为内部存储器和外部存储器。前者速度高、容量小，一般用于临时存放程序、数据及中间结 果。而后者容量大、速度慢，可以长期保存程序和数据。")]),t._v(" "),a("p",[t._v("输入设备和输出设备合称为外部设备 (简称外设），输入设备用于输入原始数据及各种命令，而输出设备则用于输出计算机运行的 结果。")]),t._v(" "),a("h3",{attrs:{id:"中央处理单元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中央处理单元"}},[t._v("#")]),t._v(" 中央处理单元")]),t._v(" "),a("p",[a("strong",[t._v("CPU的功能")])]),t._v(" "),a("ul",[a("li",[t._v("程序控制 ：CPU通过执行指令来控制程序的执行顺序，这是CPU的重要功能")]),t._v(" "),a("li",[t._v("操作控制：一条指令功能的实现需要若干操作信号配合来完成，CPU产生每条指令的 操作信号并将操作信号送往对应的部件，控制相应的部件按指令的功能要求进行操作")]),t._v(" "),a("li",[t._v("时间控制：CPU对各种操作进行时间上的控制，即指令执行过程中操作信号的出现时 间、持续时间及出现的时间顺序都需要进行严格控制")]),t._v(" "),a("li",[t._v("数据处理：CPU通过对数据进行算术运算及逻辑运算等方式进行加工处理，数据加工 处理的结果被人们所利用。所以，对数据的加工处理也是CPU最根本的任务")])]),t._v(" "),a("p",[a("strong",[t._v("CPU的组成")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.yuadh.com/imgs/2022/10/10/1665390011743.png",alt:"1665390011743.png"}})]),t._v(" "),a("ul",[a("li",[t._v("运算器")])]),t._v(" "),a("p",[t._v("运算器 运算器由算术逻辑单元（Arithmetic and Logic Unit, ALU)、累加寄存器、数据缓冲寄存 器和状态条件寄存器等组成，它是数据加工处理部件，用于完成计算机的各种算术和逻辑运算。 相对控制器而言，运算器接受控制器的命令而进行动作，即运算器所进行的全部操作都是由控 制器发出的控制信号来指挥的，所以它是执行部件。运算器有如下两个主要功能。 (1)执行所有的算术运算，例如加、减、乘、除等基本运算及附加运算。 (2)执行所有的逻辑运算并进行逻辑测试，例如与、或、非、零值测试或两个值的比较等。 下面简要介绍运算器中各组成部件的功能。 (1) 算术逻辑单元（ALU)。ALU是运算器的重要组成部件，负责处理数据，实现对数 据的算术运算和逻辑运算。 (2) 累加寄存器（AC)。AC通常简称为累加器，它是一个通用寄存器，其功能是当运算 器的算术逻辑单元执行算术或逻辑运算时，为ALU提供一个工作区。例如，在执行一个减法 运算前，先将被减数取出暂存在AC中，再从内存储器中取出减数，然后同AC的内容相减， 将所得的结果送回AC中。运算的结果是放在累加器中的，运算器中至少要有一个累加寄存器。 时状反 钟态馈 制 生 I 作 序控 产 I 操 时 I 0 第1章计算机网络概论 (3)数据缓冲寄存器（DR)。在对内存储器进行读/写操作时，用DR暂时存放由内存储 器读/写的一条指令或一个数据字，将不同时间段内读/写的数据隔离开来。DR的主要作用为： 作为CPU和内存、外部设备之间数据传送的中转站；作为CPU和内存、外围设备之间在操作 速度上的缓冲；在单累加器结构的运算器中，数据缓冲寄存器还可兼作为操作数寄存器。 (4)状态条件寄存器（PSW)。PSW保存由算术指令和逻辑指令运行或测试的结果建立 的各种条件码内容，主要分为状态标志和控制标志，例如运算结果进位标志（C)、运算结果 溢出标志（V)、运算结果为0标志（Z)、运算结果为负标志（N)、中断标志（I)、方向标 志（D)和单步标志等。这些标志通常分别由1位触发器保存，保存了当前指令执行完成之后 的状态。通常，一个算术操作产生一个运算结果，而一个逻辑操作产生一个判决。")]),t._v(" "),a("ul",[a("li",[t._v("控制器")])]),t._v(" "),a("p",[t._v("控制器 运算器只能完成运算，而控制器用于控制整个CPU的工作，它决定了计算机运行过程的 自动化。它不仅要保证程序的正确执行，而且要能够处理异常事件。控制器一般包括指令控制 逻辑、时序控制逻辑、总线控制逻辑和中断控制逻辑等几个部分。 指令控制逻辑要完成取指令、分析指令和执行指令的操作，其过程分为取指令、指令译码、 按指令操作码执行、形成下一条指令地址等步骤。 (1)指令寄存器（IR)。当CPU执行一条指令时，先把它从内存储器取到缓冲寄存器中， 再送入IR暂存，指令译码器根据IR的内容产生各种微操作指令，控制其他的组成部件工作， 完成所需的功能。 (2)程序计数器（PC)。PC具有寄存信息和计数两种功能，又称为指令计数器。程序的 执行分两种情况，一是顺序执行，二是转移执行。在程序开始执行前，将程序的起始地址送入 PC,该地址在程序加载到内存时确定，因此PC的内容即是程序第一条指令的地址。执行指令 时，CPU自动修改PC的内容，以便使其保持的总是将要执行的下一条指令的地址。由于大多 数指令都是按顺序来执行的，所以修改的过程通常只是简单地对PC加1。当遇到转移指令时， 后继指令的地址根据当前指令的地址加上一个向前或向后转移的位移量得到，或者根据转移指 令给出的直接转移的地址得到。 (3)地址寄存器（AR)。AR保存当前CPU所访问的内存单元的地址。由于内存和CPU 存在着操作速度上的差异，所以需要使用AR保持地址信息，直到内存的读/写操作完成为止。 (4)指令译码器（ID)。指令包含操作码和地址码两部分，为了能执行任何给定的指令， 必须对操作码进行分析，以便识别所完成的操作。指令译码器就是对指令中的操作码字段进行 分析解释，识别该指令规定的操作，向操作控制器发出具体的控制信号，控制各部件工作，完 成所需的功能。 时序控制逻辑要为每条指令按时间顺序提供应有的控制信号。总线逻辑是为多个功能部件服务的信息通路的控制电路。中断控制逻辑用于控制各种中断请求，并根据优先级的高低对中 断请求进行排队，逐个交给CPU处理。 3)寄存器组 寄存器组可分为专用寄存器和通用寄存器。运算器和控制器中的寄存器是专用寄存器，其 作用是固定的。通用寄存器用途广泛并可由程序员规定其用途，其数目因处理器不同有所差异。")]),t._v(" "),a("p",[a("strong",[t._v("多核CPU")])]),t._v(" "),a("p",[t._v("核心又称为内核，是CPU最重要的组成部分。CPU中心那块隆起的芯片就是核心，是由 单晶硅以一定的生产工艺制造出来的，CPU所有的计算、接收/存储命令、处理数据都由核心 执行。各种CPU核心都具有固定的逻辑结构，一级缓存、二级缓存、执行单元、指令级单元和 总线接口等逻辑单元都会有合理的布局。 多核即在一个单芯片上面集成两个甚至更多个处理器内核，其中，每个内核都有自己的逻 辑单元、控制单元、中断处理器、运算单元，一级Cache、二级Cache共享或独有，其部件的 完整性和单核处理器内核相比完全一致。 CPU的主要厂商AMD和Intel的双核技术在物理结构上有所不同。AMD将两个内核做在 一个Die (晶元）上，通过直连架构连接起来，集成度覃高。Intel则是将放在不同核心上的两 个内核封装在一起，因此将Intel的方案称为“双芯”，将AMD的方案称为“双核”。从用户 端的角度来看，AMD的方案能够使双核CPU的管脚、功耗等指标跟单核CPU保持一致，从 单核升级到双核，不需要更换电源、芯片组、散热系统和主板，只需要刷新BIOS软件即可。 多核CPU系统最大的优点（也是开发的最主要目的）是可满足用户伺时进行多任务处理 的要求。 单核多线程CPU是交替地转换执行多个任务，只不过交替转换的时间很短，用户一般感 觉不出来。如果同时执行的任务太多，就会感觉到“慢”或者“卡”。而多核在理论上则是在 任何时间内每个核执行各自的任务，不存在交替问题。因此，单核多线程和多核（一般每核也 是多线程的）虽然都可以执行多任务，但多核的速度更快。 虽然釆用了 Intel超线程技术的单核可以视为是双核，4核可以视为是8核。然而，视为是 8核一般比不上实际是8核的CPU性能。 要发挥CPU的多核性能，就需要操作系统能够及时、合理地给各个核分配任务和资源（如 缓存、总线、内存等），也需要应用软件在运行时可以把并行的线程同时交付给多个核心分别 处理。")]),t._v(" "),a("h3",{attrs:{id:"数据的表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据的表示"}},[t._v("#")]),t._v(" 数据的表示")]),t._v(" "),a("h2",{attrs:{id:"体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[t._v("#")]),t._v(" 体系结构")]),t._v(" "),a("h2",{attrs:{id:"安全性、可靠性与系统性能评测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全性、可靠性与系统性能评测"}},[t._v("#")]),t._v(" 安全性、可靠性与系统性能评测")])])}),[],!1,null,null,null);a.default=_.exports}}]);