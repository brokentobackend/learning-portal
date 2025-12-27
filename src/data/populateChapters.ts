import { supabase } from '../lib/supabase';

const chapters = [
  {
    chapter_number: 1,
    title: 'UNIT - I',
    content: `
    <h3>OSI Layered Architecture & Physical vs Data Link Layer</h3>
      <h2>Five distinguishing features of OSI layered architecture</h2>
      <ul>
        <li>Divides network communication into seven distinct layers</li>
        <li>Each layer has well-defined responsibilities</li>
        <li>Promotes interoperability between different vendors</li>
        <li>Simplifies troubleshooting and maintenance</li>
        <li>Allows independent development of protocols at each layer</li>
      </ul>

      <h2>Comparison: Physical Layer vs Data Link Layer</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Physical Layer</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Data Link Layer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Transmits raw bits</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Transmits frames</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Defines voltage, cables, connectors</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Handles framing and MAC addressing</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">No error control</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Provides error detection & correction</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">No flow control</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Implements flow control</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    chapter_number: 2,
    title: 'UNIT - II',
    content: `
    <h2>v</h2>
      <h2>Three Network Topologies</h2>

      <h3>1. Bus Topology</h3>
      <p>All devices are connected to a single central cable (backbone). Data is transmitted along the cable and received by all devices.</p>
      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Low cost</li>
        <li>Easy installation</li>
      </ul>
      <p><strong>Disadvantages:</strong></p>
      <ul>
        <li>Cable failure affects entire network</li>
        <li>Poor scalability</li>
      </ul>

      <h3>2. Star Topology</h3>
      <p>All devices are connected to a central device such as a hub or switch. Data passes through the central device.</p>
      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Easy fault detection</li>
        <li>High performance</li>
      </ul>
      <p><strong>Disadvantages:</strong></p>
      <ul>
        <li>Hub/switch failure stops network</li>
        <li>More cabling required</li>
      </ul>

      <h3>3. Ring Topology</h3>
      <p>Each device is connected to two other devices, forming a circular loop. Data travels in one direction around the ring.</p>
      <p><strong>Advantages:</strong></p>
      <ul>
        <li>No data collision</li>
        <li>Equal access to nodes</li>
      </ul>
      <p><strong>Disadvantages:</strong></p>
      <ul>
        <li>Node failure affects whole ring</li>
        <li>Difficult to reconfigure</li>
      </ul>

      <h2>Two Methods of Error Correction</h2>

      <h3>Forward Error Correction (FEC)</h3>
      <p>Receiver corrects errors without retransmission</p>
      <p><strong>Example:</strong> Hamming Code</p>

      <h3>Automatic Repeat Request (ARQ)</h3>
      <p>Sender retransmits on error detection</p>
      <p><strong>Example:</strong> Stop-and-Wait ARQ</p>
    `
  },
  {
    chapter_number: 3,
    title: 'OSI vs TCP/IP & Fiber-Optic Advantages',
    content: `
      <h2>Difference between OSI and TCP/IP</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">OSI Model</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">TCP/IP Model</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">7 layers</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">4 layers</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Conceptual model</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Practical model</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Developed by ISO</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Developed by DARPA</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Strict layer separation</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Flexible layer functions</td>
          </tr>
        </tbody>
      </table>

      <h2>Advantages of Fiber-Optic over Coaxial Cables</h2>
      <ul>
        <li>Higher bandwidth</li>
        <li>Immune to electromagnetic interference</li>
        <li>Longer transmission distance</li>
        <li>More secure and lightweight</li>
      </ul>
    `
  },
  {
    chapter_number: 4,
    title: 'UTP vs STP & Framing Methods',
    content: `
      <h2>UTP vs STP</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">UTP</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">STP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Less noise immunity</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Better noise immunity</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Cheaper</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Costly</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Used in LANs</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Used in industrial areas</td>
          </tr>
        </tbody>
      </table>

      <h2>Framing Methods (Data Link Layer)</h2>
      <ul>
        <li><strong>Character Count</strong> – Simple implementation</li>
        <li><strong>Byte Stuffing</strong> – Supports variable-length frames</li>
        <li><strong>Bit Stuffing</strong> – Ensures frame synchronization</li>
      </ul>
    `
  },
  {
    chapter_number: 5,
    title: 'Bit Stuffing & IPv4 Notations',
    content: `
      <h2>Role of Bit Stuffing</h2>
      <p>Bit stuffing prevents accidental flag sequence inside data by inserting a 0 after five consecutive 1s.</p>

      <h3>Example:</h3>
      <p><strong>Data:</strong> 111110</p>
      <p><strong>Stuffed:</strong> 1111100</p>

      <h2>Three IPv4 Address Notations</h2>
      <ul>
        <li><strong>Dotted Decimal</strong> – 192.168.1.1</li>
        <li><strong>Binary</strong> – 11000000.10101000.00000001.00000001</li>
        <li><strong>Hexadecimal</strong> – C0.A8.01.01</li>
      </ul>
    `
  },
  {
    chapter_number: 6,
    title: 'Parity Bit & Internet Checksum',
    content: `
      <h2>Parity Bit</h2>
      <p>Adds one bit to make total number of 1s even/odd</p>
      <p><strong>Limitation:</strong> Detects single-bit errors only</p>

      <h2>Internet Checksum</h2>
      <ul>
        <li>Used in IP, TCP, UDP</li>
        <li>Adds all data words and complements result</li>
        <li>Detects corrupted packets during transmission</li>
      </ul>
    `
  },
  {
    chapter_number: 7,
    title: 'Network Definition & ARQ Comparison',
    content: `
      <h2>Network Definition</h2>
      <p>A network is a collection of interconnected devices that share data and resources.</p>

      <h3>Advantages</h3>
      <ul>
        <li>Resource sharing</li>
        <li>Communication efficiency</li>
      </ul>

      <h3>Disadvantages</h3>
      <ul>
        <li>Security risks</li>
        <li>Initial setup cost</li>
      </ul>

      <h2>Stop-and-Wait vs Sliding Window ARQ</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Stop-and-Wait</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Sliding Window</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Low throughput</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">High throughput</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">High latency</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Reduced latency</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Simple</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Complex</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    chapter_number: 8,
    title: 'Hamming Code & Transmission Media',
    content: `
      <h2>Hamming Code</h2>
      <p>Error detection and correction technique that uses parity bits at positions 2ⁿ</p>

      <h3>Example:</h3>
      <p><strong>Data:</strong> 1011</p>
      <p><strong>Process:</strong> Parity bits added → Error corrected at receiver</p>

      <h2>Guided vs Unguided Media</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Guided Media</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Unguided Media</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Uses cables</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Wireless transmission</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Secure</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Less secure</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Example: Fiber</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Example: Radio waves</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    chapter_number: 9,
    title: 'CSMA/CD vs CSMA/CA & VLAN Example',
    content: `
      <h2>CSMA/CD vs CSMA/CA</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">CSMA/CD</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">CSMA/CA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Detects collision</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Avoids collision</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Used in Ethernet</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Used in Wi-Fi</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Retransmits after collision</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Uses RTS/CTS</td>
          </tr>
        </tbody>
      </table>

      <h2>VLAN Example</h2>
      <ul>
        <li><strong>VLAN 10</strong> → Finance Department</li>
        <li><strong>VLAN 20</strong> → Engineering Department</li>
      </ul>
      <p>Improves security and reduces broadcast traffic</p>
    `
  },
  {
    chapter_number: 10,
    title: 'Ring vs Bus & Ethernet vs VLAN',
    content: `
      <h2>Ring vs Bus Topology</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Ring</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Bus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Circular structure</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Linear cable</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Token passing</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Broadcast</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Collision-free</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Collision-prone</td>
          </tr>
        </tbody>
      </table>

      <h2>Ethernet vs VLAN</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Ethernet</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">VLAN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Physical network</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Logical network</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Single broadcast domain</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Multiple broadcast domains</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    chapter_number: 11,
    title: 'Hybrid Topology & Signaling',
    content: `
      <h2>Hybrid Topology</h2>
      <p>Combination of two or more topologies (e.g., Star-Bus).</p>

      <h3>Why it's better:</h3>
      <ul>
        <li>Scalable</li>
        <li>Fault tolerant</li>
        <li>Flexible</li>
      </ul>

      <h2>Baseband vs Broadband Signaling</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Baseband</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Broadband</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Single signal</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Multiple signals</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Digital</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Analog</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Ethernet</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Cable TV</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    chapter_number: 12,
    title: 'Cabling Features & Topology Classification',
    content: `
      <h2>Twisted-Pair Cable Features</h2>
      <ul>
        <li>Low cost</li>
        <li>Short distance</li>
        <li>Susceptible to noise</li>
      </ul>

      <h2>Fiber-Optic Cable Features</h2>
      <ul>
        <li>High speed</li>
        <li>Long distance</li>
        <li>Immune to EMI</li>
      </ul>

      <h2>Topology Classification</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Topology</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Fault Tolerance</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Wiring</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Star</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">High</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">High</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Bus</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Low</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Low</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Ring</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Medium</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Medium</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    chapter_number: 13,
    title: 'Star vs Ring & Parity Limitations',
    content: `
      <h2>Similarities</h2>
      <ul>
        <li>Both connect multiple nodes</li>
        <li>Used in LANs</li>
      </ul>

      <h2>Differences</h2>
      <ul>
        <li>Star uses central hub</li>
        <li>Ring uses token passing</li>
      </ul>

      <h2>Parity Checking Limitations</h2>
      <p>Cannot detect multiple-bit errors</p>

      <h3>Improvements:</h3>
      <ul>
        <li>CRC (Cyclic Redundancy Check)</li>
        <li>Hamming Code</li>
      </ul>
    `
  },
  {
    chapter_number: 14,
    title: 'Error Detection & Signal Types',
    content: `
      <h2>Three Error Detection Techniques</h2>
      <ol>
        <li>Parity Check</li>
        <li>Checksum</li>
        <li>Cyclic Redundancy Check (CRC)</li>
      </ol>

      <h2>Analog vs Digital Signals</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Analog</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px; text-align: left;">Digital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Continuous</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Discrete</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Noise-prone</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Noise-resistant</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Example: Voice</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Example: Binary data</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    chapter_number: 15,
    title: 'Infrared Communication & Data Link Layer Services',
    content: `
      <h2>Infrared Communication</h2>
      <p>Short-range, line-of-sight communication</p>

      <h3>Uses:</h3>
      <ul>
        <li>TV remotes</li>
        <li>Sensors</li>
        <li>Short-distance data transfer</li>
      </ul>

      <h2>Services of Data Link Layer</h2>
      <ul>
        <li><strong>Framing</strong> – Divides data into frames</li>
        <li><strong>Error detection & correction</strong> – Ensures data integrity</li>
        <li><strong>Flow control</strong> – Manages data transmission rate</li>
        <li><strong>Access control</strong> – Determines which device can transmit</li>
        <li><strong>Physical addressing</strong> – Uses MAC addresses</li>
      </ul>
    `
  }
];

export async function populateChapters() {
  try {
    for (const chapter of chapters) {
      const { error } = await supabase
        .from('chapters')
        .upsert(chapter, { onConflict: 'chapter_number' });

      if (error) {
        console.error(`Error inserting chapter ${chapter.chapter_number}:`, error);
      } else {
        console.log(`Chapter ${chapter.chapter_number} inserted successfully`);
      }
    }
    console.log('All chapters populated successfully!');
  } catch (error) {
    console.error('Error populating chapters:', error);
  }
}
