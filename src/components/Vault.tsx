import Button from "./Button";

const dataList = [
  {
    title: "Shaping Zentry Collectively",
    desc: "Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations",
  },
  {
    title: "Unlocking Economic Opportunity",
    desc: "ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem.",
  },
  {
    title: "Sharing Value Accrued",
    desc: "ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities.",
  },
];

const Vault = () => {
  return (
    <section
      id="vault"
      className="relative min-h-screen w-screen bg-yellow-300 flex flex-col  justify-between p-12 "
    >
      <div>
        <h2 className="special-font font-zentry font-black text-7xl uppercase leading-[.8]  md:text-[8rem]">
          the univ<b>e</b>rse <br /> powered by ZE<b>n</b>T
        </h2>
        <Button
          title="Join the Vault"
          id="vault-btn"
          containerClass="my-10 !bg-black text-white font-bold"
        />
      </div>

      <div>
        <ul>
          {dataList.map((item, i) => (
            <li key={i}>
              <h3 className="text-xl font-general font-semibold">
                0{i + 1} {item.title}
              </h3>
              <p className="max-w-sm text-sm font-general pl-10 my-4 border-l-2 border-black">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block absolute right-12 top-1/2 lg:top-2/4 lg:right-32">
        <img
          src="/img/vault.png"
          className="max-w-lg lg:scale-110"
          alt="vault image"
        />
      </div>
    </section>
  );
};

export default Vault;
